// React + Web3 Essentials
import { useWeb3React } from '@web3-react/core'
// @ts-ignore
import { Web3Provider } from 'ethers/providers'
import React, { useEffect, useState } from 'react'


// External Packages
import { ThreeIdConnect } from '@3id/connect'
import { getResolver as threeIDDIDGetResolver } from '@ceramicnetwork/3id-did-resolver'
import { CeramicClient } from '@ceramicnetwork/http-client'
import { DID } from 'dids'
import { getResolver as keyDIDGetResolver } from 'key-did-resolver'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ToastOptions } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Internal Compoonents
import * as PushNodeClient from 'api'
import { Feeds, User } from 'api'
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner'
import * as w2wHelper from 'helpers/w2w'
import { createCeramic } from 'helpers/w2w/ceramic'
import * as DIDHelper from 'helpers/w2w/did'
import ChatBox from './chatBox/chatBox'
import Sidebar from './sidebar/sidebar'
import './w2wIndex.css'
import useToast from 'hooks/useToast';
import { MdCheckCircle, MdError } from 'react-icons/md'

export interface InboxChat {
  name: string
  profilePicture: string
  timestamp: number
  fromDID: string
  toDID: string
  lastMessage: string
  messageType: string
  encType: string
  signature: string
  signatureType: string
  encryptedSecret: string
}

export interface AppContext {
  currentChat: Feeds
  viewChatBox: boolean
  did: DID
  setDID: (did: DID) => void
  connectAndSetDID: () => Promise<DID>
  setSearchedUser: (searched: string) => void
  searchedUser: string
  setChat: (feed: Feeds) => void
  connectedUser: User
  setConnectedUser: (user: User) => void
  intents: Feeds[]
  setIntents: (intents: Feeds[]) => void
  inbox: Feeds[]
  setInbox: (inbox: Feeds[]) => void
  pendingRequests: number
  setPendingRequests: (pending: number) => void
  hasUserBeenSearched: boolean
  setHasUserBeenSearched: (searched: boolean) => void
  loadingMessage: string
  setLoadingMessage: (loadingMessage: string) => void
}

export const ToastPosition: ToastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: 0
}

export const Context = React.createContext<AppContext | null>(null)

function App() {
  const [viewChatBox, setViewChatBox] = useState<boolean>(false)
  const [currentChat, setCurrentChat] = useState<Feeds>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { connector, account, chainId } = useWeb3React<Web3Provider>()
  const [did, setDID] = useState<DID>()
  const [searchedUser, setSearchedUser] = useState<string>('')
  const [connectedUser, setConnectedUser] = useState<User>()
  const [intents, setIntents] = useState<Feeds[]>([])
  const [inbox, setInbox] = useState<Feeds[]>([])
  const [pendingRequests, setPendingRequests] = useState<number>(0)
  const [hasUserBeenSearched, setHasUserBeenSearched] = useState<boolean>(false)
  const [loadingMessage, setLoadingMessage] = useState<string>('') // Used to display a message on the UI when user creating DID for the first time

  const chatBoxToast = useToast();
  const queryClient = new QueryClient({})

  useEffect(() => {
    if (isLoading) {
      connectToCeramic()
    }
  }, [])

  const connectAndSetDID = async (): Promise<DID> => {
    const provider: Promise<any> = await connector.getProvider()
    const threeID: ThreeIdConnect = new ThreeIdConnect()
    const ceramic: CeramicClient = createCeramic()
    const didProvider = await DIDHelper.Get3IDDIDProvider(threeID, provider, account)
    setLoadingMessage('Connecting to DID. If it\'s your first time logging in you\'ll need to sign 2 transactions')
    try {
      const did: DID = await DIDHelper.CreateDID(keyDIDGetResolver, threeIDDIDGetResolver, ceramic, didProvider)
      if (did.id) {
        setDID(did)
        setLoadingMessage('DID created')
        return did
      }
    } catch (error) {
      chatBoxToast.showMessageToast({
        toastTitle: 'Error',
        toastMessage: `Error in DID Provider, please reload the page`,
        toastType: 'ERROR',
        getToastIcon: (size) => <MdError size={size} color="red" />,
      });
    }
  }

  const connectToCeramic = async (): Promise<void> => {
    const caip10: string = w2wHelper.walletToCAIP10({ account, chainId })
    let user: User = await PushNodeClient.getUser({ caip10 })
    // TODO: Change this to do verification on ceramic to validate if did is valid
    if (user?.did.includes('did:3:')) {
      await connectAndSetDID()
    }
    if (user) {
      if (!user.wallets.includes(caip10)) {
        user = await PushNodeClient.updateUser({ did: did.id, caip10 })
      }
    } else {
      user = {
        // We only need to provide this information when it's a new user
        name: 'john-snow',
        profilePicture: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAvklEQVR4AcXBsW2FMBiF0Y8r3GQb6jeBxRauYRpo4yGQkMd4A7kg7Z/GUfSKe8703fKDkTATZsJsrr0RlZSJ9r4RLayMvLmJjnQS1d6IhJkwE2bT13U/DBzp5BN73xgRZsJMmM1HOolqb/yWiWpvjJSUiRZWopIykTATZsJs5g+1N6KSMiO1N/5DmAkzYTa9Lh6MhJkwE2ZzSZlo7xvRwson3txERzqJhJkwE2bT6+JhoKTMJ2pvjAgzYSbMfgDlXixqjH6gRgAAAABJRU5ErkJggg==',
        wallets: caip10,
        ///
        about: '',
        allowedNumMsg: 0,
        did: '',
        encryptedPrivateKey: '',
        encryptionType: '',
        numMsg: 0,
        publicKey: '',
        sigType: '',
        signature: '',
        linkedListHash: ''
      }
    }
    setConnectedUser(user)
    setIsLoading(false)
  }

  const setChat = (feed: Feeds): void => {
    setViewChatBox(true)
    setCurrentChat(feed)
  }

  return (
    <>
      <div className="w2wIndex">
        {!isLoading ? (
          <QueryClientProvider client={queryClient}>
            <Context.Provider
              value={{
                currentChat,
                viewChatBox,
                did,
                setDID,
                connectAndSetDID,
                setChat,
                setSearchedUser,
                searchedUser,
                connectedUser,
                setConnectedUser,
                intents,
                setIntents,
                inbox,
                setInbox,
                pendingRequests,
                setPendingRequests,
                hasUserBeenSearched,
                setHasUserBeenSearched,
                loadingMessage,
                setLoadingMessage
              }}
            >
              <Sidebar />
              <ChatBox />
            </Context.Provider>
            {/* The rest of your application */}
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        ) : (
          <div className="w2wIndexLoaderContainer">
            <LoaderSpinner type={LOADER_TYPE.SEAMLESS} />
          </div>
        )}
      </div>
    </>
  )
}
export default App
