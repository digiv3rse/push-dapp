// React + Web3 Essentials
import React, { useEffect, useState } from 'react';

// External Packages
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiOutlineMore } from 'react-icons/ai';

// Internal Components
import { useAccount } from 'hooks';
import { Button } from 'primaries/SharedStyling';
import { ImageV2 } from 'components/reusables/SharedStylingV2';
import { getChannel, getUserSubscriptions } from 'services';
import LoaderSpinner from 'primaries/LoaderSpinner';
import EmptyNotificationSettings from './EmptyNotificationSettings';
import { updateBulkSubscriptions } from 'redux/slices/channelSlice';
import { convertAddressToAddrCaip } from 'helpers/CaipHelper';
import ManageNotifSettingDropdown from 'components/dropdowns/ManageNotifSettingDropdown';

// Internal Configs
import { device } from 'config/Globals';

interface ChannelListItem {
  channel: string;
  icon: string;
  name: string;
  id: number;
}

function UserSettings() {
  const { account, chainId } = useAccount();
  const [selectedOption, setSelectedOption] = useState(1);
  const [channelList, setChannelList] = useState<ChannelListItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const { subscriptionStatus } = useSelector((state: any) => state.channels);
  const dispatch = useDispatch();

  const fetchChannelDetails = async (channel: string) => {
    const details = await getChannel({ channel });
    if (details) {
      const updatedChannelItem: ChannelListItem = {
        channel,
        id: details.id,
        icon: details.icon,
        name: details.name,
      };
      return updatedChannelItem;
    } else return undefined;
  };

  const fillData = async (details: any) => {
    const data = await Promise.all(
      Object.keys(details).map(async (channel) => {
        const channelData = await fetchChannelDetails(channel);
        if (channelData) return channelData;
      })
    );
    setChannelList(data);
  };

  useEffect(() => {
    if (!account) return;
    (async function () {
      setIsLoading(true);
      if (Object.keys(subscriptionStatus).length === 0) {
        const userCaipAddress = convertAddressToAddrCaip(account, chainId);
        const subscriptionsArr = await getUserSubscriptions({ userCaipAddress });
        const subscriptionsMapping = {};
        subscriptionsArr.map(({ channel }) => (subscriptionsMapping[channel] = true));
        dispatch(updateBulkSubscriptions(subscriptionsMapping));
        await fillData(subscriptionsMapping);
      } else {
        await fillData(subscriptionStatus);
      }
      setIsLoading(false);
    })();
  }, [account]);

  const navigateToChannels = () => {
    navigate('/channels');
  };

  const selectOptions = [
    {
      value: 1,
      label: 'Notification Settings',
    },
  ];

  return (
    <Container>
      <PageTitle>Settings</PageTitle>
      <PageDescription>Customize your Push profile or manage your notification preferences</PageDescription>
      <Wrapper>
        <SelectSection>
          {selectOptions.map((selectOptions) => (
            <SelectListOption
              onClick={() => setSelectedOption(selectOptions.value)}
              key={selectOptions.value}
              isSelected={selectOptions.value === selectedOption}
            >
              {selectOptions.label}
            </SelectListOption>
          ))}
        </SelectSection>
        <ChannelWrapper>
          <ChannelContainer>
            <SectionTitle>Notification Settings</SectionTitle>
            <>
              {isLoading ? (
                <CenterContainer>
                  <LoaderSpinner />
                </CenterContainer>
              ) : (
                <>
                  {channelList.length > 0 ? (
                    channelList.map((channel, index) => (
                      <>
                        {channel && (
                          <>
                            <SettingsListItem key={channel.id}>
                              <SettingsListRow>
                                <Icon src={channel.icon} />
                                <ChannelName>{channel.name}</ChannelName>
                              </SettingsListRow>
                              <ManageNotifSettingDropdown centerOnMobile={false}>
                                <MoreButtonUI />
                              </ManageNotifSettingDropdown>
                            </SettingsListItem>
                            {index !== channelList.length - 1 && <HR />}
                          </>
                        )}
                      </>
                    ))
                  ) : (
                    <CenterContainer>
                      <EmptyNotificationSettings
                        title="No Channel Opt-ins"
                        description="Opt-in channels to manage your notification preferences"
                        buttonTitle="Go to Channels"
                        onClick={navigateToChannels}
                        showTopBorder={false}
                      />
                    </CenterContainer>
                  )}
                </>
              )}
            </>
          </ChannelContainer>
        </ChannelWrapper>
      </Wrapper>
    </Container>
  );
}

// Export Default
export default UserSettings;

const Container = styled.div`
  padding: 32px 24px;
  flex: 1;
`;

const PageTitle = styled.div`
  font-size: 32px;
  font-weight: 500;
  line-height: 45px;
  letter-spacing: 0em;
  text-align: left;
  color: ${(props) => props.theme.default.color};

  @media ${device.tablet} {
    text-align: center;
    margin-top: 24px;
  }
`;

const PageDescription = styled.div`
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: ${(props) => props.theme.default.secondaryColor};
  margin-bottom: 40px;

  @media ${device.tablet} {
    text-align: center;
    margin-bottom: 8px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const SelectSection = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
    overflow-x: scroll;
    justify-content: center;
  }
`;

const SelectListOption = styled(Button)<{ isSelected: boolean }>`
  background-color: ${(props) => (props.isSelected ? props.theme.default.secondaryBg : 'transparent')};
  color: ${(props) => props.theme.default.secondaryColor};
  border-radius: 12px;
  width: 100%;
  padding: 14px;
  margin: 10px 0px;
  justify-content: flex-start;

  &:hover:after {
    background-color: ${(props) => props.theme.default.secondaryBg};
  }

  @media ${device.tablet} {
    padding: 12px;
    max-width: fit-content;
  }
`;

const ChannelWrapper = styled.div`
  min-width: 65%;
  border: 1px solid ${(props) => props.theme.default.borderColor};
  padding: 12px;
  border-radius: 16px;

  @media ${device.tablet} {
    margin: 8px 0px;
    padding: 12px 6px;
  }
`;

const ChannelContainer = styled.div`
  overflow: hidden;
  overflow-y: scroll;
  height: 55vh;
  padding: 12px;

  &::-webkit-scrollbar-track {
    background-color: transparent;
    position: absolute;
    right: 10px;
  }

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 4px;
    position: absolute;
    right: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d53a94;
    border-radius: 99px;
    width: 4px;
    position: absolute;
    right: 10px;
  }

  @media ${device.tablet} {
    margin: 8px 0px;
    padding: 12px 6px;
  }
`;

const SectionTitle = styled.div`
  font-size: 22px;
  font-weight: 500;
  line-height: 33px;
  letter-spacing: -0.019em;
  text-align: left;
  margin-bottom: 20px;
  color: ${(props) => props.theme.default.color};

  @media ${device.tablet} {
    text-align: center;
  }
`;

const SettingsListItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0px;
`;

const Icon = styled(ImageV2)`
  border: 1px solid ${(props) => props.theme.default.borderColor};
  border-radius: 8px;
  overflow: hidden;
  margin-right: 16px;
  width: 28px;
  height: 28px;
`;

const ChannelName = styled.span`
  font-size: 15px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  color: ${(props) => props.theme.default.color};
`;

const SettingsListRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HR = styled.span`
  background-color: ${(props) => props.theme.default.borderColor};
  width: 100%;
  display: flex;
  height: 1px;
`;

const MoreButtonUI = styled(AiOutlineMore)`
  background: transparent;
  display: flex;
  cursor: pointer;
  width: 24px;
  height: 24px;
  padding: 0px;
  position: relative;
  width: 24px;
  height: 24px;
  color: ${(props) => props.theme.default.color};
`;

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
`;
