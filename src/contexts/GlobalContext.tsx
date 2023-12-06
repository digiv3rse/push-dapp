import { createContext, useState } from 'react';

export enum ReadOnlyWalletMode {
  READ_ONLY_MODE = '(Read Only)',
  GUEST_MODE = '(Guest Mode)',
}

export type GlobalContextType = {
  readOnlyWallet: string;
  setReadOnlyWallet: React.Dispatch<React.SetStateAction<string>>;
  readOnlyWalletMode: ReadOnlyWalletMode;
  setReadOnlyWalletMode: React.Dispatch<React.SetStateAction<ReadOnlyWalletMode>>;
};

export const GlobalContext = createContext<GlobalContextType | null>(null);

const GlobalContextProvider = ({ children }) => {
  const [readOnlyWallet, setReadOnlyWallet] = useState<string>();
  const [readOnlyWalletMode, setReadOnlyWalletMode] = useState<ReadOnlyWalletMode>();

  return (
    <GlobalContext.Provider
      value={{
        setReadOnlyWallet,
        readOnlyWallet,
        readOnlyWalletMode,
        setReadOnlyWalletMode,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
