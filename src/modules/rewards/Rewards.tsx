// React and other libraries
import { FC, useEffect, useMemo, useState } from 'react';

// third party libraries
import { useSelector } from 'react-redux';
import { css } from 'styled-components';
import { useSearchParams } from 'react-router-dom';

//Hooks
import { useRewardsTabs } from './hooks/useRewardsTabs';
import { useDiscordSession } from './hooks/useDiscordSession';
import { useRewardsAuth } from './hooks/useRewardsAuth';
import { useCreateRewardsUser } from './hooks/useCreateRewardsUser';

//Types
import { UserStoreType } from 'types';

//Components
import { Box, Text } from 'blocks';
import { ReferralSection } from './components/ReferralSection';
import { RewardsTabsContainer } from './components/RewardsTabsContainer';
import UnlockProfileWrapper, { UNLOCK_PROFILE_TYPE } from 'components/chat/unlockProfile/UnlockProfileWrapper';

export type RewardsProps = {};

const Rewards: FC<RewardsProps> = () => {
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => state.user);

  const [hasError, setHasError] = useState<{} | null>(null);

  //fetch ref from url
  const [searchParams] = useSearchParams();

  const ref = searchParams.get('ref');
  if (ref) sessionStorage.setItem('ref', ref);

  // Used to set the discord session after discord redirects back to the Dapp.
  useDiscordSession();

  const userMessage = 'Error decrypting PGP private key ...swiching to Guest mode';

  // reject unlock profile listener
  const errorExists = useMemo(
    () => userPushSDKInstance?.errors.some((error) => error.type === 'ERROR' && error.message === userMessage),
    [userPushSDKInstance?.errors]
  );

  const isErrorPresent = userPushSDKInstance?.errors;

  const { activeTab, handleSetActiveTab } = useRewardsTabs();

  const { showConnectModal, setShowConnectModal, status, connectUserWallet } = useRewardsAuth();

  useCreateRewardsUser();

  const heading = activeTab === 'leaderboard' ? 'Push Reward Points' : 'Introducing Push Reward Points Program';

  useEffect(() => {
    if (isErrorPresent && showConnectModal && status === 'error' && errorExists && activeTab === 'dashboard') {
      setHasError(isErrorPresent);
      setShowConnectModal(false);
    }
  }, [isErrorPresent, showConnectModal, errorExists]);

  // retry unlock profile
  const handleUnlockProfile = () => {
    setHasError(null);
    connectUserWallet();
  };

  return (
    <Box
      height="100%"
      width="-webkit-fill-available"
    >
      <Box
        flexDirection="column"
        display="flex"
        gap="s6"
        height="100%"
      >
        <Text
          variant="h3-bold"
          display={{ ml: 'none', dp: 'block' }}
          color={{ light: 'gray-1000', dark: 'gray-100' }}
        >
          {heading}
        </Text>
        <Text
          variant="h4-semibold"
          display={{ ml: 'block', dp: 'none' }}
          color={{ light: 'gray-1000', dark: 'gray-100' }}
        >
          {heading}
        </Text>

        <RewardsTabsContainer
          activeTab={activeTab}
          handleSetActiveTab={handleSetActiveTab}
        />

        {activeTab === 'dashboard' && <ReferralSection handleUnlockProfile={handleUnlockProfile} />}
      </Box>

      {userPushSDKInstance && userPushSDKInstance?.readmode() && showConnectModal && (
        <Box
          display="flex"
          justifyContent="center"
          width="-webkit-fill-available"
          alignItems="center"
          css={css`
            z-index: 99999;
          `}
        >
          <UnlockProfileWrapper
            type={UNLOCK_PROFILE_TYPE.MODAL}
            showConnectModal={showConnectModal}
            description="Unlock your profile to proceed."
          />
        </Box>
      )}
    </Box>
  );
};

export { Rewards };
