// React + Web3 Essentials
import useModalBlur from "hooks/useModalBlur";
import React, { createContext, useContext, useEffect, useState } from "react";
import { ProgressHookType, PushAPI } from '@pushprotocol/restapi';


// Internal Components
import { AppContextType, BlockedLoadingI, ConnectedPeerIDType, LocalPeerType, Web3NameListType, onboardingProgressI } from "types/context"
import { useAccount } from "hooks";
import { appConfig } from "config";
import { useDispatch, useSelector } from "react-redux";
import { MdError } from "react-icons/md";
import { setUserPushSDKInstance } from "redux/slices/userSlice";
import { GlobalContext } from "./GlobalContext";
import useToast from "hooks/useToast";
import { LOADER_SPINNER_TYPE } from "components/reusables/loaders/LoaderSpinner";
import { ConnectedUser } from "types/chat";
import * as w2wHelper from 'helpers/w2w';


export const AppContext = createContext<AppContextType | null>(null);

const AppContextProvider = ({ children }) => {
    const { connect, provider, account, wallet, connecting } = useAccount();
    const { readOnlyWallet } = useContext(GlobalContext);
    const web3onboardToast = useToast();

    const [web3NameList, setWeb3NameList] = useState<Web3NameListType>({});
    const [snapInstalled, setSnapInstalled] = useState(false);

    const [pgpPvtKey, setPgpPvtKey] = useState(null);
    const [connectedUser, setConnectedUser] = useState<ConnectedUser>();
    const [localPeer, setLocalPeer] = useState<LocalPeerType>({
        peer: '',
        peerID: ''
    })
    const [connectedPeerID, setConnectedPeerID] = useState<ConnectedPeerIDType>({
        peerID: ''
    });
    const [blockedLoading, setBlockedLoading] = useState<BlockedLoadingI>({
        enabled: false,
        title: null,
    });
    const [displayQR, setDisplayQR] = useState<boolean>(false);

    const { userPushSDKInstance } = useSelector((state: any) => {
        return state.user;
    });

    const [SnapState, setSnapState] = useState<number>(1);
    const {
        isModalOpen: isMetamaskPushSnapOpen,
        showModal: showMetamaskPushSnap,
        ModalComponent: MetamaskPushSnapModalComponent,
    } = useModalBlur();

    const dispatch = useDispatch();

    const handleConnectWallet = (showToast = false, toastMessage?: string) => {
        if (showToast) {
            web3onboardToast.showMessageToast({
                toastMessage: toastMessage || "Please connect your wallet to continue",
                toastTitle: "Connect Wallet",
                toastType: "ERROR",
                getToastIcon: (size) => <MdError size={size} color="red" />,
            });
        }

        const onboardModal = document.getElementById("onboard-container");
        onboardModal.style.display = 'block';
        // Open the onboard modal
        connect();

        // Create a resize observer to detect when the onboard modal is rendered
        const observer = new ResizeObserver(() => {
            const sectionElement = document.querySelector('onboard-v2')?.shadowRoot?.querySelector('.svelte-baitaa');
            const divElement = sectionElement?.querySelector('div');
            if (divElement) {
                // Disconnect the observer once the divElement is found
                observer.unobserve(onboardModal);
                observer.disconnect();

                // Apply custom styles
                divElement.style.position = 'fixed';
                divElement.style.top = '0px';
                divElement.style.right = '0px';
                divElement.style.height = '100vh';
                divElement.style.left = '0px';
                divElement.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
                divElement.style.backdropFilter = 'blur(5px)';
            }
        });

        // Start observing the DOM for changes
        observer.observe(onboardModal);
    }



    const initialisePushSdkGuestMode = async () => {
        let userInstance;
        userInstance = await PushAPI.initialize({
            account: readOnlyWallet,
            env: appConfig.appEnv,
        });
        dispatch(setUserPushSDKInstance(userInstance));
    }



    // To reformat errors
    const onboardingProgressReformatter = (progressHook: ProgressHookType) => {
        let onboardingProgress: onboardingProgressI = {
            enabled: true,
            hookInfo: progressHook,
            spinnerType: LOADER_SPINNER_TYPE.PROCESSING,
            progress: 0
        };

        if (progressHook) {
            switch (progressHook.progressId) {
                case "PUSH-CREATE-01":
                    onboardingProgress.hookInfo.progressTitle = "Creating Push Profile";
                    onboardingProgress.progress = 10;
                    break;
                case "PUSH-CREATE-02":
                    onboardingProgress.hookInfo.progressTitle = "1/3 - Profile Generation";
                    onboardingProgress.progress = 25;
                    break;
                case "PUSH-CREATE-03":
                    onboardingProgress.hookInfo.progressTitle = "2/3 - Profile Encryption";
                    onboardingProgress.progress = 50;
                    break;
                case "PUSH-CREATE-04":
                    onboardingProgress.hookInfo.progressTitle = "3/3 - Profile Sync";
                    onboardingProgress.progress = 75;
                    break;
                case "PUSH-CREATE-05":
                    onboardingProgress.hookInfo.progressTitle = "Push Profile Created";
                    onboardingProgress.progress = 99;
                    break;
                case "PUSH-DECRYPT-01":
                    onboardingProgress.hookInfo.progressTitle = "Decrypting Push Profile";
                    break;
                case "PUSH-DECRYPT-02":
                    onboardingProgress.enabled = false;
                    onboardingProgress.hookInfo.progressTitle = "Push Profile Unlocked";
                    break;
                case "PUSH-UPGRADE-01":
                    onboardingProgress.hookInfo.progressTitle = "1/4 - Profile Generation";
                    onboardingProgress.progress = 35;
                    break;
                case "PUSH-UPGRADE-02":
                    onboardingProgress.hookInfo.progressTitle = "2/4 - Decrypting Old Profile";
                    onboardingProgress.progress = 50;
                    break;
                case "PUSH-UPGRADE-03":
                    onboardingProgress.hookInfo.progressTitle = "3/4 - New Profile Encryption";
                    onboardingProgress.progress = 75;
                    break;
                case "PUSH-UPGRADE-04":
                    onboardingProgress.hookInfo.progressTitle = "4/4 - Profile Sync";
                    onboardingProgress.progress = 90;
                    break;
                case "PUSH-UPGRADE-05":
                    onboardingProgress.hookInfo.progressTitle = "Push Profile Upgraded";
                    onboardingProgress.progress = 99;
                    break;
                case "PUSH-ERROR-00":
                    onboardingProgress.hookInfo.progressTitle = "User Rejected Signature";
                    onboardingProgress.spinnerType = LOADER_SPINNER_TYPE.ERROR;
                    break;
                case "PUSH-ERROR-01":
                    onboardingProgress.hookInfo.progressTitle = "Upgrade Failed";
                    onboardingProgress.spinnerType = LOADER_SPINNER_TYPE.ERROR;
                    break;
                case "PUSH-ERROR-02":
                    onboardingProgress.hookInfo.progressTitle = "Decrypting Keys Failed";
                    onboardingProgress.spinnerType = LOADER_SPINNER_TYPE.ERROR;
                    break;
            }
        } else {

        }

        // This is a new user
        setBlockedLoading({
            enabled: onboardingProgress.enabled,
            title: onboardingProgress.hookInfo.progressTitle,
            spinnerType: onboardingProgress.spinnerType,
            progressEnabled: onboardingProgress.progress ? true : false,
            progress: onboardingProgress.progress,
            progressNotice: onboardingProgress.hookInfo.progressInfo,
        });

    };

    const initializePushSDK = async () => {
        console.log("Initialising Push Sdk")
        let userInstance;
        try {
            const librarySigner = provider?.getSigner(account);
            userInstance = await PushAPI.initialize(librarySigner, {
                env: appConfig.appEnv,  // defaults to staging
                account: account,
                progressHook: onboardingProgressReformatter,
            });

            if (userInstance) {
                setBlockedLoading({
                    enabled: false,
                    title: "Push Profile Setup Complete",
                    spinnerType: LOADER_SPINNER_TYPE.COMPLETED,
                    progressEnabled: false,
                    progress: 100,
                });
            }

            dispatch(setUserPushSDKInstance(userInstance));
        } catch (error) {
            // Handle initialization error
            console.log("Errror !!!!!", error);
        }
    };

    const getUser = async () => {
        console.debug("getUser");
        const caip10: string = w2wHelper.walletToCAIP10({ account });
        const user = await userPushSDKInstance.info();
        let connectedUser: ConnectedUser;

        // TODO: Change this to do verification on ceramic to validate if did is valid
        if (user?.did.includes('did:3:')) {
            throw Error('Invalid DID');
        }

        // new user might not have a private key
        if (user && user.encryptedPrivateKey) {
            if (user.wallets.includes(',') || !user.wallets?.toLowerCase().includes(caip10?.toLowerCase())) {
                throw Error('Invalid user');
            }
            const privateKeyArmored = userPushSDKInstance.decryptedPgpPvtKey;
            setPgpPvtKey(privateKeyArmored);
            connectedUser = { ...user, privateKey: privateKeyArmored };
        } else {
            connectedUser = {
                // We only need to provide this information when it's a new user
                name: 'john-snow',
                profilePicture:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAvklEQVR4AcXBsW2FMBiF0Y8r3GQb6jeBxRauYRpo4yGQkMd4A7kg7Z/GUfSKe8703fKDkTATZsJsrr0RlZSJ9r4RLayMvLmJjnQS1d6IhJkwE2bT13U/DBzp5BN73xgRZsJMmM1HOolqb/yWiWpvjJSUiRZWopIykTATZsJs5g+1N6KSMiO1N/5DmAkzYTa9Lh6MhJkwE2ZzSZlo7xvRwson3txERzqJhJkwE2bT6+JhoKTMJ2pvjAgzYSbMfgDlXixqjH6gRgAAAABJRU5ErkJggg==',
                wallets: caip10,
                about: '',
                allowedNumMsg: 0,
                did: caip10,
                encryptedPrivateKey: '',
                encryptionType: '',
                numMsg: 0,
                publicKey: '',
                sigType: '',
                signature: '',
                linkedListHash: '',
                privateKey: '',
            };
        }

        setConnectedUser(connectedUser);
    };

    useEffect(() => {
        const librarySigner = provider?.getSigner(account);
        if (!account || !appConfig?.appEnv) return;
        if (wallet?.accounts?.length > 0) {
            initializePushSDK();
        } else {
            initialisePushSdkGuestMode();
        }
    }, [account, provider, wallet]);

    const createUserIfNecessary = async (): Promise<ConnectedUser> => {
        try {
            const signer = await provider.getSigner();
            await PushAPI.user.create({
                account: account,
                env: appConfig.appEnv,
                signer: signer,
                progressHook: onboardingProgressReformatter
            });
            const createdUser = await PushAPI.user.get({
                account: account,
                env: appConfig.appEnv
            });
            const pvtkey = await PushAPI.chat.decryptPGPKey({
                encryptedPGPPrivateKey: createdUser.encryptedPrivateKey,
                signer: signer,
                env: appConfig.appEnv,
                toUpgrade: true,
                progressHook: onboardingProgressReformatter
            });

            const createdConnectedUser = { ...createdUser, privateKey: pvtkey };
            setConnectedUser(createdConnectedUser);
            setPgpPvtKey(pvtkey);

            return createdConnectedUser;
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <AppContext.Provider value={{
            web3NameList,
            setWeb3NameList,
            MetamaskPushSnapModalComponent,
            showMetamaskPushSnap,
            setSnapState,
            initializePushSDK,
            SnapState,
            handleConnectWallet,
            setSnapInstalled,
            snapInstalled,
            setBlockedLoading,
            blockedLoading,
            getUser,
            connectedUser,
            setConnectedUser,
            pgpPvtKey,
            setPgpPvtKey,
            localPeer,
            setLocalPeer,
            connectedPeerID,
            setConnectedPeerID,
            displayQR,
            setDisplayQR,
            createUserIfNecessary
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider