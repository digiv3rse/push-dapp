import React, { useContext, useEffect, useState } from "react";
import usePeer from "hooks/usePeer";
import { useSelector } from "react-redux";
import { QRCodeCanvas } from "qrcode.react";
import CryptoHelper from 'helpers/CryptoHelper';
import LoaderSpinner, { LOADER_OVERLAY, LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { useWeb3React } from "@web3-react/core";
import styled, { useTheme } from "styled-components";
import { AiOutlineClose, AiOutlineQrcode } from "react-icons/ai";
import { H2V2, ItemHV2, ItemVV2 } from "components/reusables/SharedStylingV2";
import GLOBALS from "config/Globals";
import BlurBG from "components/reusables/blurs/BlurBG";
import { Context } from "modules/chat/ChatModule";

const ChatQR = ({
    type = LOADER_TYPE.STANDALONE,
    overlay = LOADER_OVERLAY.NORMAL,
    blur = 0,
    width = 'auto'
}) => {
    const theme = useTheme();
    const { account } = useWeb3React();
    const { createUserIfNecessary, displayQR, setDisplayQR, pgpPvtKey,connectedPeerID } = useContext(Context);
    const [myPeer, myPeerID] = usePeer();
    const [qrCodeText, setQrCodeText] = useState('');
    const [loading, setLoading] = useState(true);
    const [encryptedKey, setEncryptedKey] = useState('');
    // const { connectedPeerID } = useSelector((state: any) => state.peer);

    console.log(myPeerID, myPeer, connectedPeerID.peerID);
    const generateQRCodeText = () => {
        const secret = CryptoHelper.makeid(10);
        const encryptedPvtKey = CryptoHelper.encryptWithAES(pgpPvtKey, secret);
        const qrCodeData = {
            aesSecret: secret,
            peerId: myPeerID,
            account: account
        }
        setQrCodeText(JSON.stringify(qrCodeData));
        setEncryptedKey(encryptedPvtKey);
        setLoading(false);
        console.log(secret);
    }

    const qrcode = (
        <QRCodeCanvas
            id="qrCode"
            value={qrCodeText}
            size={250}
            bgColor={"#fff"}
            level={"H"}
            imageSettings={{
                src: "./icon.jpg",
                height: 62,
                width: 62,
                excavate: false
            }}
        />
    );

    console.count();

    useEffect(() => {
        if (!myPeerID) return;
        if (!pgpPvtKey) {
            createUserIfNecessary();
        }
        generateQRCodeText();
    }, [myPeerID]);

    useEffect(() => {
        if (!connectedPeerID.peerID) return;
        try {
            const conn = myPeer.connect(connectedPeerID.peerID);
            conn.on("open", () => {
                conn.send({ encryptedPgpKey: encryptedKey });
            });
        } catch (error) {
            console.log("got error", error);
        }
    }, [connectedPeerID.peerID]);

    return (
        <ItemVV2
            position={overlay == LOADER_OVERLAY.ONTOP ? 'absolute' : 'relative'}
            alignSelf={overlay == LOADER_OVERLAY.ONTOP ? 'stretch' : 'center'}
            flex="initial"
            top="0"
            right="0"
            bottom="0"
            left="0"
            zIndex="1000"
            padding="15px"
        >
            {overlay === LOADER_OVERLAY.ONTOP && <BlurBG blur={blur} />}

            {loading ? (
                <LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={60} />
            ) : (
                <>
                    {pgpPvtKey ? (
                        <ItemVV2
                            flex="initial"
                            alignSelf={type == LOADER_TYPE.SEAMLESS ? 'auto' : 'center'}
                            width={type == LOADER_TYPE.STANDALONE_MINIMAL ? 'auto' : width}
                            padding={type == LOADER_TYPE.SEAMLESS ? '0px' : GLOBALS.ADJUSTMENTS.PADDING.DEFAULT}
                            borderRadius={type == LOADER_TYPE.SEAMLESS ? '0px' : GLOBALS.ADJUSTMENTS.RADIUS.SMALL}
                            border={type == LOADER_TYPE.SEAMLESS ? 'transparent' : `1px solid ${theme.default.border}`}
                            background={type == LOADER_TYPE.SEAMLESS ? 'initial' : theme.default.bg}
                        >

                            <CloseButtonContainer>
                                <CloseButton onClick={() => { setDisplayQR(!displayQR) }} />
                            </CloseButtonContainer>

                            <QRContainer>
                                <ItemHV2
                                    display="flex"
                                    justifyContent="center"
                                    flexDirection="column"
                                    alignItems="baseline"
                                >
                                    <H2V2
                                        fontSize="28px"
                                        textAlign="left"
                                    >Set up Push Chat on your phone</H2V2>
                                    <TextInfo>
                                        <p>1. Open an app using Push protocol</p>
                                        <p>2. Tap Push Chat       or Sign in with Push Chat</p>
                                        <p>3. Tap Link Push Chat and point your phone to this code </p>
                                    </TextInfo>
                                </ItemHV2>
                                <ItemHV2>
                                    {qrcode}
                                </ItemHV2>
                            </QRContainer>
                        </ItemVV2>
                    ) : (
                        <>
                            <ItemVV2
                                flex="initial"
                                // flexDirection={progressPositioning == PROGRESS_POSITIONING.TOP ? "column" : "column-reverse"}
                                // flexDirection="row"
                                alignSelf={type == LOADER_TYPE.SEAMLESS ? 'auto' : 'center'}
                                width={type == LOADER_TYPE.STANDALONE_MINIMAL ? 'auto' : width}
                                padding={type == LOADER_TYPE.SEAMLESS ? '0px' : GLOBALS.ADJUSTMENTS.PADDING.DEFAULT}
                                borderRadius={type == LOADER_TYPE.SEAMLESS ? '0px' : GLOBALS.ADJUSTMENTS.RADIUS.SMALL}
                                border={type == LOADER_TYPE.SEAMLESS ? 'transparent' : `1px solid ${theme.default.border}`}
                                background={type == LOADER_TYPE.SEAMLESS ? 'initial' : theme.default.bg}
                            >

                                <CloseButtonContainer>
                                    <CloseButton onClick={() => { setDisplayQR(!displayQR) }} />
                                </CloseButtonContainer>

                                PGP Not found
                            </ItemVV2>
                        </>
                    )}
                </>
            )}




        </ItemVV2>
    );
};

export default ChatQR;


const TextInfo = styled.div`
    font-family: 'Strawford';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #657795;
    margin:10px 0px 0px 0px;
    padding-left: 10px;
`;

const CloseButtonContainer = styled.div`
    width:100%;
    text-align:end;
    text-align: end;
    padding: 0px 0px 5px 0px;
    font-size: 25px;
`;

const CloseButton = styled(AiOutlineClose)`
    cursor:pointer;
`;

const QRContainer = styled(ItemVV2)`
    flex-direction:row;
    padding:0px 17px 17px 17px;
    // height:400px !important;
`;