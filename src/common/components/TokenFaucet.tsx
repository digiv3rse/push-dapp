import { FC } from 'react';

import { Box, Button, Link, Skeleton, Swap, Text } from 'blocks';

import { appConfig } from 'config';

import useModalBlur, { MODAL_POSITION } from 'hooks/useModalBlur';

import { UniswapWidgetModal } from 'components/UniswapWidget';
import { SepoliaFaucetLink } from 'common/Common.constants';

type TokenFaucetProps = {
  noOfPushTokensToCheck: number;
  mintPushToken: (noOfTokens: number) => void;
  mintingPush: boolean;
};

const TokenFaucet: FC<TokenFaucetProps> = ({ noOfPushTokensToCheck, mintPushToken, mintingPush }) => {
  const isProd = appConfig.appEnv === 'prod';

  const {
    isModalOpen: isUniswapWidgetModalOpen,
    showModal: showUniswapWidgetModal,
    ModalComponent: UniswapWidgetModalComponent
  } = useModalBlur();

  return (
    <Box
      display="flex"
      padding="spacing-sm spacing-md"
      backgroundColor="surface-brand-subtle"
      borderRadius="radius-none radius-none radius-sm radius-sm"
      justifyContent="space-between"
      alignItems="center"
      flexDirection={{ ml: 'column', initial: 'row' }}
      gap="spacing-xs"
    >
      <Skeleton isLoading={mintingPush}>
        <Text variant="c-regular" color="text-primary">
          {isProd ? 'Your balance is low. Swap to get PUSH Tokens.' : 'Follow these steps to get Testnet PUSH.'}
        </Text>
      </Skeleton>

      {isProd ? (
        <Button size="extraSmall" leadingIcon={<Swap />} onClick={showUniswapWidgetModal}>
          Swap PUSH Token
        </Button>
      ) : (
        <Box display="flex" gap="s3">
          <Skeleton isLoading={mintingPush}>
            <Link to={SepoliaFaucetLink} target="_blank">
              <Box display="flex" gap="spacing-xxs" alignItems="baseline" color="text-brand-medium" cursor="pointer">
                <Box
                  border="border-sm solid stroke-brand-medium"
                  width="16px"
                  height="15px"
                  borderRadius="radius-xl"
                  display="flex"
                  justifyContent="center"
                  color="text-brand-medium"
                >
                  <Text variant="c-regular" color="text-brand-medium">
                    1
                  </Text>
                </Box>
                <Text color="text-brand-medium">Sepolia ETH Faucet</Text>
              </Box>
            </Link>
          </Skeleton>

          <Skeleton isLoading={mintingPush}>
            <Box
              display="flex"
              gap="spacing-xxs"
              alignItems="baseline"
              color="text-brand-medium"
              cursor="pointer"
              onClick={() => mintPushToken(1000)}
            >
              <Box
                border="border-sm solid stroke-brand-medium"
                width="16px"
                height="15px"
                borderRadius="radius-xl"
                display="flex"
                justifyContent="center"
              >
                <Text variant="c-regular" color="text-brand-medium">
                  2
                </Text>
              </Box>
              <Text color="text-brand-medium">Get Testnet Push</Text>
            </Box>
          </Skeleton>
        </Box>
      )}

      {isUniswapWidgetModalOpen && (
        <UniswapWidgetModalComponent
          InnerComponent={UniswapWidgetModal}
          InnerComponentProps={{ defaultPushTokenAmount: noOfPushTokensToCheck }}
          modalPadding="0px"
          modalPosition={MODAL_POSITION.ON_ROOT}
        />
      )}
    </Box>
  );
};

export default TokenFaucet;
