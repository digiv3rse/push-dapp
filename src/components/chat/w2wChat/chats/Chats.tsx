// React + Web3 Essentials
import React, { useState } from 'react';

// External Packages
import styled from 'styled-components';
import { TwitterTweetEmbed } from 'react-twitter-embed';

// Internal Components
import { ImageV2, ItemHV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import tickIcon from '../../../../assets/chat/tick.svg';
import { MessageIPFS,TwitterFeedReturnType } from 'types/chat';
import Files, { FileMessageContent } from '../TypeBar/Files/Files';
import Modal from '../Modal/Modal';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { checkTwitterUrl } from 'helpers/w2w/twitter';

// Internal Configs
import { appConfig } from 'config';
import GLOBALS, { device } from 'config/Globals';

interface ChatProps {
  msg: MessageIPFS;
  caip10: string;
  messageBeingSent: boolean;
  ApproveIntent?: Function;
}

// Constants
const infura_URL = appConfig.infuraApiUrl;

export default function Chats({ msg, caip10, messageBeingSent, ApproveIntent }: ChatProps) {
  const [showImageModal, setShowImageModal] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>('');
  const time: Date = new Date(msg?.timestamp);
  const time1:string = time.toLocaleTimeString('en-US');
  const date :string= time1.slice(0, -6) + time1.slice(-2);
  const {tweetId,messageType}:TwitterFeedReturnType=checkTwitterUrl({message:msg.messageContent});

  return (
    <>
      {
      messageType === 'TwitterFeedLink' ? (
        <>
          {msg.fromCAIP10 === caip10 ? (
            <MessageWrapper align="row-reverse">
              <SenderMessage 
                color="transparent"
                padding="0px"
              >
                <TwitterTweetEmbed 
                placeholder={<LoaderSpinner
                  type={LOADER_TYPE.SEAMLESS}
                  spinnerSize={20}
                />} 
                tweetId={tweetId}
                 />
              </SenderMessage>
            </MessageWrapper>
          ) : (
            <MessageWrapper align="row">
              <ReceivedMessage
                color="transparent"
                padding="0px"
              >
              <TwitterTweetEmbed 
                 placeholder={<LoaderSpinner
                  type={LOADER_TYPE.SEAMLESS}
                  spinnerSize={20}
                />} 
                tweetId={tweetId} />
              </ReceivedMessage>
            </MessageWrapper>
          )}
        </>
      ) : msg.messageType === 'Text' ? (
        <>
          {msg.fromCAIP10 === caip10 ? (
            <MessageWrapper align="row-reverse">
              <SenderMessage>
                {msg.messageContent.split('\n').map((str,index) => <TextMessage key={index}>{str}</TextMessage>)}
                <TimeStamp>{date}</TimeStamp>
                {/* {messageBeingSent ? (
                  <p>✔️</p>
                ) : (
                  <p>✔️ ✔️</p>
                )} */}
              </SenderMessage>
            </MessageWrapper>
          ) : (
            <MessageWrapper align="row">
              <ReceivedMessage>
                {msg.messageContent.split('\n').map((str,index) => <TextMessage key={index}>{str}</TextMessage>)}
                <TimeStamp>{date}</TimeStamp>
              </ReceivedMessage>
            </MessageWrapper>
          )}
        </>
      ) : msg.messageType === 'Intent' ? (
        <>
          <MessageWrapper align="row">
            <ReceivedMessage>
              <MessageText

              >
                {msg.messageContent.split('\n').map((str,index) => <p key={index}>{str}</p>)}
              </MessageText>
              {messageBeingSent ? (
                <SpanV2 margin="-5px 0 0 0">
                  <LoaderSpinner
                    type={LOADER_TYPE.SEAMLESS}
                    spinnerSize={40}
                  />
                </SpanV2>
              ) : (
                <ImageV2
                  src={tickIcon}
                  alt="tick"
                  width="39px"
                  height="39px"
                  cursor="pointer"
                  onClick={() => ApproveIntent()}
                  margin="-5px 0 0 0"
                />
              )}
            </ReceivedMessage>
          </MessageWrapper>
        </>
      ) : msg.messageType === 'Image' ? (
        <>
          {msg.fromCAIP10 === caip10 ? (
            <MessageWrapper
              height="138px"
              align="row-reverse"
            >
              <SenderMessage
                color="transparent"
                padding="0px"
              >
                <ImageMessage
                  src={(JSON.parse(msg.messageContent) as FileMessageContent).content}
                  onClick={() => {
                    setShowImageModal(true);
                    setImageUrl((JSON.parse(msg.messageContent) as FileMessageContent).content);
                  }}
                />
              </SenderMessage>
            </MessageWrapper>
          ) : (
            <MessageWrapper
              height="138px"
              align="row"
            >
              <ReceivedMessage
                color="transparent"
                padding="0px"
              >
                <ImageMessage
                  src={(JSON.parse(msg.messageContent) as FileMessageContent).content}
                  onClick={() => {
                    setShowImageModal(true);
                    setImageUrl((JSON.parse(msg.messageContent) as FileMessageContent).content);
                  }}
                />
              </ReceivedMessage>
            </MessageWrapper>
          )}

          {showImageModal && (
            <Modal
              showImageModal={showImageModal}
              onClose={() => setShowImageModal(false)}
              src={imageUrl}
              time={msg.timestamp}
            />
          )}
        </>
      ) : msg.messageType === 'GIF' ? (
        <>
          {msg.fromCAIP10 === caip10 ? (
            <MessageWrapper
              height="170px"
              align="row-reverse"
            >
              <SenderMessage
                color="transparent"
                padding="0px"
              >
                <ImageMessage
                  src={msg.messageContent}
                  borderRadius={`${GLOBALS.ADJUSTMENTS.RADIUS.SMALL} 0 ${GLOBALS.ADJUSTMENTS.RADIUS.SMALL} ${GLOBALS.ADJUSTMENTS.RADIUS.SMALL}`}
                  onClick={() => {
                    setShowImageModal(true);
                    setImageUrl(msg.messageContent);
                  }}
                />
              </SenderMessage>
            </MessageWrapper>
          ) : (
            <MessageWrapper
              height="170px"
              align="row"
            >
              <ReceivedMessage
                color="transparent"
                padding="0px"
              >
                <ImageMessage
                  src={msg.messageContent}
                  borderRadius={`0 ${GLOBALS.ADJUSTMENTS.RADIUS.SMALL} ${GLOBALS.ADJUSTMENTS.RADIUS.SMALL} ${GLOBALS.ADJUSTMENTS.RADIUS.SMALL}`}
                  onClick={() => {
                    setShowImageModal(true);
                    setImageUrl(msg.messageContent);
                  }}
                />
              </ReceivedMessage>
            </MessageWrapper>
          )}
          {showImageModal && (
            <Modal
              showImageModal={showImageModal}
              onClose={() => setShowImageModal(false)}
              src={imageUrl}
              time={msg.timestamp}
            />
          )}
        </>
      ) : msg.messageType === 'File' ? (
        <>
          {msg.fromCAIP10 === caip10 ? (
            <MessageWrapper align="row-reverse">
              <SenderMessage
                color="transparent"
                padding="0px"
              >
                <FileMessage>
                  <Files msg={msg} />
                </FileMessage>
              </SenderMessage>
            </MessageWrapper>
          ) : (
            <MessageWrapper align="row">
              <ReceivedMessage
                color="transparent"
                padding="0px"
              >
                <FileMessage>
                  <Files msg={msg} />
                </FileMessage>
              </ReceivedMessage>
            </MessageWrapper>
          )}
        </>
      ) : null}
    </>
  );
}

const FileMessage = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const ImageMessage = styled.img`
  max-height: 170px;
  max-width: 300px;
  object-fit: contain;
  border-radius: ${(props) => props.borderRadius || '0px'};
  &:hover {
    cursor: pointer;
  }
`;

const TextMessage = styled.p`
  max-width: 300px;
  padding: 7px 44px 10px 0px;
  font-size: 14px;
  word-wrap: break-word;
  text-align: left;
  font-weight: 400;
  margin: 0px;
`;

const TimeStamp = styled(ItemHV2)`
  min-width: 44px;
  font-size: 11px;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 5px 0px 0px 5px;
  position: absolute;
  right: 10px;
  bottom: 5px;
`;

const MessageText = styled(SpanV2)`
  font-size:14px;
  max-width : 13rem;
  font-weight:400;
  padding: 0px 44px 0px 0px;
  text-align:left;
  color:#000;

  @media ${device.mobileM}{
    padding: 0px 10px 0px 0px;
    max-width: 8rem;
  }
`

const MessageWrapper = styled.div`
  width: 100%;
  min-height: ${(props: any): string => props.height || '48px'};
  padding: 0;
  margin-bottom: 5px;
  display: flex;
  flex-direction: ${(props: any): string => props.align || 'row'};
`;


const ReceivedMessage = styled.div`
  box-sizing: border-box;
  position: relative;
  left: 34px;
  max-width: 419px;
  padding: ${(props: any): string => props.padding || '5px 11px 10px 15px'};
  background: ${(props: any): string => props.color || '#ffffff'};
  text-align: left;
  border-radius: 2px 16px 16px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000000;
  flex-direction: column;
  align-items: baseline;
  display: flex;
  flex-direction: row;
  align-items: center;

 


`;

const SenderMessage = styled.div`
  box-sizing: border-box;
  position: relative;
  right: 34px;
  max-width: 419px;
  text-align: left;
  padding: ${(props: any): string => props.padding || '11px 11px 5px 15px'};
  background: ${(props: any): string => props.color || '#ca599b'};
  border-radius: 16px 2px 16px 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #ffffff;
  flex-direction: column;
  align-items: baseline;
`;
