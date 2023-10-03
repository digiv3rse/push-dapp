// React + Web3 Essentials
import React, { useEffect, useMemo } from 'react';
import { ethers } from 'ethers';

// External Packages
import 'react-dropdown/style.css';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.min.css';
import { useNavigate } from 'react-router-dom';
import { PiPencilSimpleBold } from 'react-icons/pi';
import { IoMdRemoveCircleOutline } from 'react-icons/io';
import { MdCheckCircle, MdError } from 'react-icons/md';

// Internal Compoonents
import useToast from '../../hooks/useToast';
import AddSettingModalContent from './AddSettingModalContent';
import ChannelInfoHeader from './ChannelInfoHeader';
import { AddSettingButton } from './ChannelButtons';
import ChannelInfoList from './ChannelInfoList';
import DepositFeeFooter from './DepositFeeFooter';
import { useAccount } from 'hooks';

// Internal Configs
import { appConfig } from 'config';
import useModalBlur, { MODAL_POSITION } from 'hooks/useModalBlur';
import { ChannelSetting } from 'helpers/channel/types';

// Constants
const CORE_CHAIN_ID = appConfig.coreContractChain;

function NotificationSettings() {
  const { account, chainId } = useAccount();
  const {
    coreChannelAdmin,
    channelDetails,
    delegatees,
    aliasDetails: { aliasEthAddr },
  } = useSelector((state: any) => state.admin);
  const { epnsWriteProvider } = useSelector((state: any) => state.contracts);

  const onCoreNetwork = CORE_CHAIN_ID === chainId;

  const [channelAddress, setChannelAddress] = React.useState('');
  const [settings, setSettings] = React.useState<ChannelSetting[]>([]);
  const [settingToEdit, setSettingToEdit] = React.useState<ChannelSetting>(undefined);
  const [isLoading, setIsLoading] = React.useState(false);
  const [currentSettings, setCurrentSettings] = React.useState<ChannelSetting[]>([]);
  const [isLoadingSettings, setIsLoadingSettings] = React.useState(true);

  const {
    isModalOpen: isAddSettingModalOpen,
    showModal: showAddSettingModal,
    ModalComponent: AddSettingModal,
  } = useModalBlur();

  useEffect(() => {
    // Is not the channel admin so cannot edit settings
    setIsLoading(true);
    if (coreChannelAdmin && account && coreChannelAdmin !== account) {
      const url = window.location.origin;
      window.location.replace(`${url}/channels`);
    }
    setIsLoading(false);
  }, [account, coreChannelAdmin]);

  useEffect(() => {
    if (isAddSettingModalOpen === false) setSettingToEdit(undefined);
  }, [isAddSettingModalOpen]);

  React.useEffect(() => {
    if (!account) return;
    if (!delegatees || !delegatees.length) {
      setChannelAddress(account);
    } else {
      // default the channel address to the first one on the list which should be that of the user if they have a channel
      if (onCoreNetwork) setChannelAddress(delegatees[0].channel);
      else setChannelAddress(delegatees[0].alias_address);
    }
  }, [delegatees, account]);

  useEffect(() => {
    if (delegatees) {
      const delegatee = delegatees.find(({ channel }) => channel === channelAddress);
      if (delegatee) {
        const { channel_settings } = delegatee;
        if (channel_settings !== null) {
          const settings = JSON.parse(channel_settings);
          setSettings(settings);
          setCurrentSettings(settings);
          setIsLoadingSettings(false);
        }
      }
    }
    return null;
  }, [delegatees, channelAddress]);

  // Notification Toast
  const notificationToast = useToast(5000);

  const navigate = useNavigate();

  const goBack = () => {
    navigate('/dashboard', { replace: true });
  };

  const addSetting = (newSetting: ChannelSetting) => {
    const index = settings.findIndex((setting) => setting.index === newSetting.index);
    if (index === -1) setSettings([...settings, newSetting]);
    else {
      const updatedSetting = [...settings];
      updatedSetting[index] = newSetting;
      setSettings(updatedSetting);
    }
  };

  const editSetting = (settingToEdit: ChannelSetting) => {
    setSettingToEdit(settingToEdit);
    showAddSettingModal();
  };

  const deleteSetting = (settingToDelete: ChannelSetting) => {
    setSettings((settings) => settings.filter((setting) => setting.index !== settingToDelete.index));
  };

  const saveSettings = async () => {
    try {
      setIsLoading(true);

      const feesRequiredForEdit = 50;
      const parsedFees = ethers.utils.parseUnits(feesRequiredForEdit.toString(), 18);

      notificationToast.showLoaderToast({ loaderMessage: 'Waiting for Confirmation...' });
      const notifOptions = ethers.utils.parseUnits('2', 18);
      let _notifSettings = '';
      let _notifDescription = '';
      settings.forEach((setting) => {
        if (_notifSettings !== '') _notifSettings += '+';
        if (_notifDescription !== '') _notifDescription += '+';
        if (setting.type === 1) {
          _notifSettings += `${setting.type}-${setting.default ? '1' : '0'}`;
        } else if (setting.type === 2) {
          _notifSettings += `${setting.type}-${setting.default}-${setting.lowerLimit}-${setting.upperLimit}`;
        }
        _notifDescription += setting.description;
      });

      const tx = await epnsWriteProvider.createChannelSettings(
        notifOptions,
        _notifSettings,
        _notifDescription,
        parsedFees,
        { gasLimit: 1000000 }
      );

      console.log(tx);
      await tx.wait();
      setCurrentSettings(settings);
      setIsLoading(false);

      notificationToast.showMessageToast({
        toastTitle: 'Success',
        toastMessage: `Channel Settings Updated Successfully`,
        toastType: 'SUCCESS',
        getToastIcon: (size) => (
          <MdCheckCircle
            size={size}
            color="green"
          />
        ),
      });
    } catch (err) {
      setIsLoading(false);
      console.log(err.message);
      if (err.code == 'ACTION_REJECTED') {
        // EIP-1193 userRejectedRequest error
        notificationToast.showMessageToast({
          toastTitle: 'Error',
          toastMessage: `User denied message signature.`,
          toastType: 'ERROR',
          getToastIcon: (size) => (
            <MdError
              size={size}
              color="red"
            />
          ),
        });
      } else {
        notificationToast.showMessageToast({
          toastTitle: 'Error',
          toastMessage: `There was an error in updating channel settings`,
          toastType: 'ERROR',
          getToastIcon: (size) => (
            <MdError
              size={size}
              color="red"
            />
          ),
        });
        console.log('Error --> %o', err);
        console.log({ err });
      }
    }
  };

  const settingsChanged = useMemo(() => {
    if (!settings || !currentSettings) return false;
    console.log('Settings changed bro', settings, currentSettings);
    if (settings.length !== currentSettings.length) return true;
    let isUnchanged = true;
    for (let i = 0; i < settings.length; i++) {
      const setting1 = settings[i];
      const setting2 = currentSettings[i];
      if (setting1.type === 1) {
        isUnchanged =
          isUnchanged &&
          setting1.type === setting2.type &&
          setting1.description === setting2.description &&
          setting1.default === setting2.default;
      } else if (setting1.type === 2) {
        isUnchanged =
          isUnchanged &&
          setting1.type === setting2.type &&
          setting1.description === setting2.description &&
          setting1.default === setting2.default &&
          setting1.lowerLimit === setting2.lowerLimit &&
          setting1.upperLimit === setting2.upperLimit;
      }
    }
    return isUnchanged === false;
  }, [settings, currentSettings]);

  return (
    <>
      <ChannelInfoHeader
        style={{ padding: 0 }}
        title="Notification Settings"
        description="Add, Edit or Remove Notification Settings"
        Button={<AddSettingButton onClick={showAddSettingModal} />}
      />
      <ChannelInfoList
        style={{ width: '100%', marginTop: '24px', marginBottom: '8px' }}
        account={account}
        isAddress={false}
        isLoading={isLoadingSettings}
        items={settings}
        settingsDropdownOptions={[
          {
            icon: <PiPencilSimpleBold />,
            onClick: editSetting,
            text: 'Edit',
          },
          {
            icon: <IoMdRemoveCircleOutline />,
            onClick: deleteSetting,
            text: 'Delete',
          },
        ]}
      />
      <DepositFeeFooter
        title="Modify Settings fee"
        description="Make sure all settings are ready before proceeding to the next step"
        onCancel={goBack}
        disabled={!settingsChanged || isLoading}
        onClick={saveSettings}
      />
      <AddSettingModal
        modalPosition={MODAL_POSITION.ON_PARENT}
        InnerComponent={AddSettingModalContent}
        onConfirm={addSetting}
        InnerComponentProps={{ settingToEdit }}
      />
    </>
  );
}

// Export Default
export default NotificationSettings;
