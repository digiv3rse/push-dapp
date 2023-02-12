// React + Web3 Essentials
// @ts-ignore
import React, { useContext, useState } from 'react';

// External Packages
import styled from 'styled-components';

// Internal Components
import ChatSnap from "components/chat/chatsnap/ChatSnap";
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { ItemVV2 } from 'components/reusables/SharedStylingV2';
import { Context } from 'modules/chat/ChatModule';
import { AppContext, Feeds } from 'types/chat';
import { checkIfGroup, getChatsnapMessage, getName, getProfilePicture } from 'helpers/w2w/groupChat';
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '20px',
  boxShadow: 24,
  p: 4,
};

const IntentFeed = ({isLoading}): JSX.Element => {
  const {
    setChat,
    receivedIntents,
  }: AppContext = useContext<AppContext>(Context);
  const [selectedIntentSnap, setSelectedIntentSnap] = useState<string>();

  const { chainId, account } = useWeb3React<ethers.providers.Web3Provider>();

  console.log("received intents",receivedIntents);

  const isIntent = true;

  return (
    <ItemVV2
      alignSelf="stretch"
      justifyContent="flex-start"
      alignItems="stretch"
    >
      {/* Load the Intents */}
      <ItemVV2 justifyContent="flex-start">
        {isLoading && (
          <LoaderSpinner
            type={LOADER_TYPE.SEAMLESS}
            spinnerSize={40}
          />
        )}

        {!isLoading && receivedIntents?.length == 0 && (
          <NoIntentMessage>You don't have any request yet Start a conversation by using the + button</NoIntentMessage>
        )}

        {!isLoading && receivedIntents?.length > 0 && (
          <UserIntents>
            {receivedIntents.map((intent: Feeds, i) => (
              <ItemVV2
                alignSelf="stretch"
                flex="initial"
                key={intent.threadhash || i}
              >
                <ChatSnap
                    pfp ={getProfilePicture(intent)}
                    username={getName(intent)}
                    isGroup={checkIfGroup(intent)}
                    chatSnapMsg={getChatsnapMessage(intent,account,true)}
                    timestamp={intent.msg.timestamp}
                    selected={intent.threadhash == selectedIntentSnap ? true : false}
                    onClick={(): void => {
                      setChat(intent);
                      setSelectedIntentSnap(intent.threadhash);
                    }}
                  />
              </ItemVV2>
            ))}
          </UserIntents>
        )}
      </ItemVV2>
    </ItemVV2>
  );
};

const NoIntentMessage = styled.div`
  position: relative;
  width: 80%;
  text-align: justify;
  text-align-last: center;
  color: #657795;
  font-size: 15px;
  margin-top:25px;
`;

const UserIntents = styled(ItemVV2)`
  margin-top: 14px;
  justify-content: flex-start;
  flex: 1 1 auto;
  overflow-x: hidden;
  overflow-y: auto;
  height: 0px;
  flex-flow: column;

  &&::-webkit-scrollbar {
    width: 4px;
  }
  &&::-webkit-scrollbar-thumb {
    background: #cf1c84;
  }
`;

export default IntentFeed;
