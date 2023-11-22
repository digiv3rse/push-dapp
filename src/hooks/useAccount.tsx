import { useConnectWallet, useSetChain } from '@web3-onboard/react';
import { ethers } from 'ethers';
import { useMemo } from 'react';

export const useAccount = () => {
  const [{ wallet, connecting }, connect, disconnect, updateBalances, setWalletModules, setPrimaryWallet] =
    useConnectWallet();

  const [{ chains, connectedChain, settingChain }, setChain] = useSetChain();

  const switchChain = async (desiredChain: number) => {
    return setChain({ chainId: ethers.utils.hexValue(desiredChain) });
  };

  const provider = useMemo(() => {
    return wallet ? new ethers.providers.Web3Provider(wallet.provider, 'any') : undefined;
  }, [wallet]);

  const isActive = useMemo(() => {
    return wallet && wallet.accounts.length > 0 ? true : false
  }, [wallet]);

  const account = useMemo(() => {
    return wallet && wallet.accounts.length > 0 ? ethers.utils.getAddress(wallet.accounts[0].address) : undefined;
  }, [wallet]);

  return {
    wallet,
    connecting,
    connect,
    disconnect,
    updateBalances,
    setWalletModules,
    setPrimaryWallet,
    provider,
    account: account,
    chainId: connectedChain ? Number(connectedChain.id) : undefined,
    isActive,
    setChain,
    switchChain,
    settingChain,
    chains,
  };
};
