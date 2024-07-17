// React + Web3 Essentials
import { useCallback, useContext, useEffect, useState } from 'react';

// External Packages
import styled, { css, useTheme } from 'styled-components';

// Internal Compoonents
import {
  ButtonV2,
  ImageV2,
  ItemHV2,
  ItemVV2,
  Skeleton,
  SkeletonLine,
  SpanV2,
} from 'components/reusables/SharedStylingV2';
import { AppContext } from 'contexts/AppContext';
import { useAccount, useDeviceWidthCheck } from 'hooks';
import { retrieveUserPGPKeyFromStorage } from 'helpers/connectWalletHelper';

// Internal Configs
import { device, size } from 'config/Globals';

// Assets
import Tooltip from 'components/reusables/tooltip/Tooltip';
import UnlockLogo from '../../../assets/chat/unlock.svg';
import Wallet from '../../../assets/chat/wallet.svg';
import { Box, CrossFilled, HoverableSVG } from 'blocks';
import { checkUnlockProfileErrors } from './UnlockProfile.utils';

// Constants
export enum UNLOCK_PROFILE_TYPE {
  BOTTOM_BAR = 'bottombar',
  MODAL = 'modal',
}

export enum PROFILESTATE {
  CONNECT_WALLET = 'connectwallet',
  UNLOCK_PROFILE = 'unlockprofile',
}

// Interface

type UnlockProfileModalProps = {
  InnerComponentProps: {
    type: UNLOCK_PROFILE_TYPE | undefined;
    description?: string;
  };
  onClose?: () => void;
};

const UnlockProfile = ({ InnerComponentProps, onClose }: UnlockProfileModalProps) => {
  const { type, description } = InnerComponentProps;

  const theme = useTheme();
  const { handleConnectWalletAndEnableProfile, initializePushSDK } = useContext(AppContext);

  const { account, wallet, connect } = useAccount();

  // Ensures if profile is stored then true is returned else false
  const [rememberMe, setRememberMe] = useState(false);

  const [activeStatus, setActiveStatus] = useState({
    status: PROFILESTATE.CONNECT_WALLET,
    title: 'Connect Wallet',
    body: 'Sign with wallet to continue.',
  });

  // const handleRememberMeChange = (event: any) => {
  const handleRememberMeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(event.target.checked);
  };

  const connectWallet = () => {
    connect();
  };

  const handleChatprofileUnlock = useCallback(async () => {
    const user = await handleConnectWalletAndEnableProfile({ remember: rememberMe, wallet });

    const errorExists = checkUnlockProfileErrors(user);

    if (errorExists && onClose) {
      onClose();
    }
  }, [wallet, rememberMe]);

  useEffect(() => {
    if (wallet?.accounts?.length > 0) {
      setActiveStatus({
        status: PROFILESTATE.UNLOCK_PROFILE,
        title: 'Unlock Profile',
        body: description ? description : 'Unlock your profile to read and send messages.',
      });
    }
  }, [wallet]);

  const isMobile = useDeviceWidthCheck(parseInt(size.tablet));

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (wallet?.accounts?.length) {
      const decryptedPGPKeys = retrieveUserPGPKeyFromStorage(account);
      if (decryptedPGPKeys) {
        setIsLoading(true);
        // If wallet is connected and PGP keys are already present.
        initializePushSDK(wallet);
      }
    }
  }, [account]);

  return (
    <Container type={type}>
      {onClose && (
        <Box
          width="auto"
          display="flex"
          flexDirection="row"
          alignItems="flex-end"
          justifyContent="flex-end"
          position="absolute"
          css={css`
            top: 12px;
            right: 12px;
          `}
        >
          <HoverableSVG
            icon={
              <Cross
                size={16}
                color="gray-400"
                onClick={onClose}
              />
            }
          />
        </Box>
      )}

      <SubContainer type={type}>
        {/* Logo and Left Text */}
        <ItemHV2
          flex="none"
          gap="12px"
          flexDirection={type === UNLOCK_PROFILE_TYPE.MODAL || isMobile ? 'column' : 'row'}
        >
          <ImageV2
            width={'38px'}
            height={'35px'}
            src={activeStatus.status === PROFILESTATE.CONNECT_WALLET ? Wallet : UnlockLogo}
            alt="Unlock Logo"
            zIndex={1}
          />

          <ItemVV2 alignItems={type === UNLOCK_PROFILE_TYPE.MODAL || isMobile ? 'center' : 'baseline'}>
            {!isLoading ? (
              <>
                <SpanV2
                  fontSize={type === UNLOCK_PROFILE_TYPE.MODAL || isMobile ? '20px' : '24px'}
                  fontWeight="500"
                  lineHeight="28.8px"
                  color={theme.default.color}
                >
                  {activeStatus.title}
                </SpanV2>
                <SpanV2
                  fontSize={type === UNLOCK_PROFILE_TYPE.MODAL || isMobile ? '14px' : '18px'}
                  fontWeight="400"
                  lineHeight="22.4px"
                  color={theme.default.secondaryColor}
                >
                  {activeStatus.body}
                </SpanV2>
              </>
            ) : (
              <SkeletonWrapper>
                <SkeletonLine
                  height="24px"
                  width="100%"
                  margin="0 0 8px 0"
                  borderRadius="4px"
                ></SkeletonLine>

                <SkeletonLine
                  height="16px"
                  width="100%"
                  margin="0 0 8px 0"
                  borderRadius="4px"
                ></SkeletonLine>
              </SkeletonWrapper>
            )}
          </ItemVV2>
        </ItemHV2>

        {/* Buttons and Connecting Steps */}
        <ItemVV2
          flex="none"
          gap={type === UNLOCK_PROFILE_TYPE.MODAL || isMobile ? '16px' : '8px'}
          flexDirection={type === UNLOCK_PROFILE_TYPE.MODAL || isMobile ? 'row' : 'column'}
        >
          <ItemHV2
            flex="none"
            flexDirection={type === UNLOCK_PROFILE_TYPE.MODAL || isMobile ? 'column' : 'row'}
          >
            <StepsLeftDesign
              background={theme.btn.primaryBg}
              color={theme.btn.primaryColor}
            >
              1
            </StepsLeftDesign>
            <HorizontalBar
              activeState={activeStatus.status}
              theme={theme}
              type={type}
            ></HorizontalBar>
            <StepsLeftDesign
              background={
                activeStatus.status !== PROFILESTATE.CONNECT_WALLET ? theme.btn.primaryBg : theme.btn.disabledBg
              }
              color={
                activeStatus.status !== PROFILESTATE.CONNECT_WALLET ? theme.btn.primaryColor : theme.btn.disabledColor
              }
            >
              2
            </StepsLeftDesign>
          </ItemHV2>

          <ItemHV2
            gap="16px"
            flex="none"
            alignItems="baseline"
            flexDirection={type === UNLOCK_PROFILE_TYPE.MODAL || isMobile ? 'column' : 'row'}
          >
            {!isLoading ? (
              <>
                <DefaultButton
                  activeStatus={activeStatus.status}
                  status={PROFILESTATE.CONNECT_WALLET}
                  disabled={activeStatus.status !== PROFILESTATE.CONNECT_WALLET && true}
                  onClick={() => connectWallet()}
                >
                  Connect Wallet
                </DefaultButton>

                <DefaultButton
                  activeStatus={activeStatus.status}
                  status={PROFILESTATE.UNLOCK_PROFILE}
                  disabled={activeStatus.status === PROFILESTATE.CONNECT_WALLET && true}
                  onClick={handleChatprofileUnlock}
                >
                  Unlock Profile
                </DefaultButton>
              </>
            ) : (
              <SkeletonContainer
                width="100%"
                flexDirection={type === UNLOCK_PROFILE_TYPE.MODAL || isMobile ? 'column' : 'row'}
              >
                <SkeletonLine
                  height="40px"
                  width="150px"
                ></SkeletonLine>
                <SkeletonLine
                  height="40px"
                  width="150px"
                ></SkeletonLine>
              </SkeletonContainer>
            )}
          </ItemHV2>
        </ItemVV2>
      </SubContainer>

      {/* Remember Me Tag */}
      {activeStatus.status === PROFILESTATE.UNLOCK_PROFILE && (
        <>
          {!isLoading ? (
            <RenderToolTip type={type}>
              <ItemHV2
                gap="8px"
                justifyContent={type === UNLOCK_PROFILE_TYPE.MODAL ? 'center' : 'end'}
                margin={type === UNLOCK_PROFILE_TYPE.MODAL ? '24px 16px 0 40px' : '12px 16px 0 0px'}
              >
                <CustomCheckbox
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                <SpanV2
                  fontSize="14px"
                  fontWeight="500"
                  lineHeight="130%"
                  color={theme.default.color}
                >
                  Remember Me
                </SpanV2>
              </ItemHV2>
            </RenderToolTip>
          ) : (
            <ItemVV2
              width="100%"
              flexDirection={type === UNLOCK_PROFILE_TYPE.MODAL || isMobile ? 'column' : 'row'}
              justifyContent={type === UNLOCK_PROFILE_TYPE.MODAL ? 'center' : 'end'}
              margin={type === UNLOCK_PROFILE_TYPE.MODAL ? '12px 0 0 40px' : '12px 0 0 0px'}
            >
              <SkeletonLine
                height="20px"
                width="150px"
              ></SkeletonLine>
            </ItemVV2>
          )}
        </>
      )}
    </Container>
  );
};

const RenderToolTip = ({ children, type }) => {
  return (
    <Tooltip
      wrapperProps={{
        width: 'fit-content',
        maxWidth: 'fit-content',
        minWidth: 'fit-content',
      }}
      placementProps={
        type === UNLOCK_PROFILE_TYPE.MODAL
          ? {
              background: 'black',
              width: '220px',
              padding: '8px 12px',
              top: '10px',
              left: '60px',
              borderRadius: '4px 12px 12px 12px',
            }
          : {
              background: 'black',
              width: '120px',
              padding: '8px 12px',
              bottom: '0px',
              right: '-30px',
              borderRadius: '12px 12px 12px 4px',
            }
      }
      tooltipContent={
        <SpanV2
          fontSize="10px"
          fontWeight="400"
        >
          Selecting 'Remember me' will save your Push Profile keys locally on this device. Proceed at your own risk.
        </SpanV2>
      }
    >
      {children}
    </Tooltip>
  );
};
const Container = styled(ItemHV2)`
  flex-direction: column;
  align-items: ${(props) => (props.type === UNLOCK_PROFILE_TYPE.MODAL ? 'center' : 'end')};
  width: ${(props) => (props.type === UNLOCK_PROFILE_TYPE.MODAL ? '322px' : 'inherit')};
  padding: ${(props) => (props.type === UNLOCK_PROFILE_TYPE.MODAL ? '24px' : '0px')};

  @media (${device.tablet}) {
    width: ${(props) => (props.type === UNLOCK_PROFILE_TYPE.MODAL ? '320px' : 'inherit')};
    padding: ${(props) => (props.type === UNLOCK_PROFILE_TYPE.MODAL ? '12px' : '0px')};
    align-items: center;
  }
`;

const SubContainer = styled(ItemVV2)`
  gap: ${(props) => (props.type === UNLOCK_PROFILE_TYPE.MODAL ? '16px' : '0px')};
  align-items: end;
  flex-direction: ${(props) => (props.type === UNLOCK_PROFILE_TYPE.MODAL ? 'column' : 'row')};
  justify-content: space-between;

  @media ${device.tablet} {
    align-items: center;
    flex-direction: column;
    gap: 24px;
  }
`;

const CustomCheckbox = styled.input.attrs({ type: 'checkbox' })`
  accent-color: #d53a94; /* Changes the checkbox color */
  &:checked {
    background-color: #d53a94;
  }
  cursor: pointer;
  width: 18px;
  height: 18px;
  border: 1px solid #c5c8cd;
`;

const StepsLeftDesign = styled(SpanV2)`
  font-size: 12px;
  font-weight: 700;
  line-height: 130%;
  border-radius: 22px;
  width: 6px;
  height: 6px;
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
`;

const HorizontalBar = styled.div`
  width: ${(props) => (props.type === UNLOCK_PROFILE_TYPE.MODAL ? '2px' : '150px')};
  height: ${(props) => (props.type === UNLOCK_PROFILE_TYPE.MODAL ? '40px' : '3px')};
  background: ${(props) =>
    props.activeState === PROFILESTATE.CONNECT_WALLET
      ? `linear-gradient(to right, ${props.theme.btn.primaryBg}, ${props.theme.btn.disabledBg})`
      : props.theme.btn.primaryBg};

  @media ${device.tablet} {
    width: 2px;
    height: 40px;
  }
`;

const DefaultButton = styled(ButtonV2)`
  flex: none;
  padding: 12px 16px;
  border-radius: 12px;
  min-width: 150px;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  background: ${(props) =>
    props.activeStatus === props.status ? props.theme.btn.primaryBg : props.theme.btn.disabledBg};
  color: ${(props) =>
    props.activeStatus === props.status ? props.theme.btn.primaryColor : props.theme.btn.disabledColor};
  cursor: ${(props) => (props.activeStatus !== props.status ? 'not-allowed' : 'pointer')};
`;

const SkeletonWrapper = styled.div`
  overflow: hidden;
  min-width: 220px;
`;

const SkeletonContainer = styled(Skeleton)`
  max-width: -webkit-fill-available;
  border-radius: 5px;
  gap: 16px;
  display: flex;
`;

export default UnlockProfile;
