// // React + Web3 Essentials
import { useContext, useEffect, useState } from 'react'

// // Internal Components
import { useAccount } from './useAccount';
import { appConfig } from 'config';
import { UnsupportedChainIdError } from 'connectors/error';
import { ErrorContext } from 'contexts/ErrorContext';

export function useInactiveListener() {
  const [allowedChain, setAllowedChain] = useState(false);
  const { wallet, chainId, switchChain } = useAccount();
  const { authError, setAuthError } = useContext(ErrorContext);

  const getErrorMessage = () => {
    if (appConfig.coreContractChain === 42)
      return 'Unsupported Network, please connect to the Ethereum Kovan network or Polygon Mumbai network';
    else if (appConfig.coreContractChain === 5)
      return 'Unsupported Network, please connect to the Ethereum Goerli, Polygon Mumbai, BNB testnet, Optimism Goerli or Polygon zkEVM testnet';
    else return 'Unsupported Network, please connect to the Ethereum, Polygon, BNB, or Polygon zkEVM Mainnet';
  }

  useEffect(() => {
    if(wallet && chainId) {
      if(!appConfig.allowedNetworks.includes(chainId)) {
        setAllowedChain(false);
        setAuthError(new UnsupportedChainIdError(getErrorMessage()));
        switchChain(appConfig.coreContractChain);
      } else {
        if(authError) setAuthError(undefined);
        setAllowedChain(true);
      }
    }
  }, [wallet, chainId]);

  return { allowedChain };
}
