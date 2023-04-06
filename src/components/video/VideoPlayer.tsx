// React + Web3 Essentials
import React, { useContext, useEffect, useRef, useState } from 'react';

// External Packages
import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';

// Internal Components
import { VideoCallContext } from 'contexts/VideoCallContext';
import { ItemVV2 } from 'components/reusables/SharedStylingV2';
import { device } from 'config/Globals';

type VideoPlayerType = {
  localVideoStyles?: {};
};

const VideoPlayer = ({ localVideoStyles }: VideoPlayerType) => {
  const localVideoRef = useRef(null);
  const { name, callAccepted, myVideo, userVideo, callEnded, me, localStream, call } = useContext(VideoCallContext);

  useEffect(() => {
    if (localVideoRef.current) {
      let video = localVideoRef.current;
      video.srcObject = localStream;
      video.play();
    }
  }, [localVideoRef, localStream]);

  return (
    <Container>
      {localStream && (
        <LocalVideoContainer
          className={callAccepted && !callEnded ? 'connectionAccepted' : null}
          style={localVideoStyles}
        >
          <LocalVideo
          className={callAccepted && !callEnded ? 'connectionAccepted' : null}
            ref={localVideoRef}
          />
        </LocalVideoContainer>
      )}
      {callAccepted && !callEnded && (
        <IncomingVideoContainer >
          <IncomingVideo
            playsInline
            ref={userVideo}
            autoPlay
          />
          <IncomingEnsContainer>
            <p>ens.eth</p>
          </IncomingEnsContainer>
        </IncomingVideoContainer>
      )}
    </Container>
  );
};
export default VideoPlayer;

const Container = styled(ItemVV2)`
  height: fit-content;
  max-height: fit-content;
  min-height: fit-content;
`;

const LocalVideoContainer = styled(ItemVV2)`
  overflow: hidden;
  height: 47vh;
  max-height: 47vh;
  transition: all 0.25s linear;
  border-radius: 34px;
  margin: 0 auto;
  z-index: 2;

  &.connectionAccepted {
    height: 18vh;
  max-height: 18vh;
    position: absolute;
    width: inherit;
    right: 4%;
    bottom: 20px;
    @media (max-width: 768px) {
      top:20vh;
    }
    @media (max-width: 425px) {
      top:19vh;
    }
    @media (max-width: 375px) {
      top:19vh;
    }
    @media (max-width: 320px) {
      top:19vh;
    }
  }
`;

const LocalVideo = styled.video`
  height: 100%;
  width: 100%;
  border-radius: inherit;
  object-fit: cover;

  

  &.connectionAccepted {
    border: 1px solid #ffffff8c;
    z-index: 2;
    @media (max-width: 768px) {
      height: 12vh;
      width: 18vh;
    }
  }
`;

const IncomingVideo = styled.video`
  border-radius: 34px;
  width: 100%;
  height: auto;

  @media (max-width: 768px) {
    width: auto;
    height: 100%;
  }
`;

const IncomingVideoContainer = styled(ItemVV2)`
  overflow: hidden;
  height: 20vh;
  max-height: 62vh;
  width: 95%;
  background-color: #000000;
  left: 2.5%;
  border-radius: 34px;
  z-index: 1;

  @media (max-height: 800px) {
    max-height: 50vh;
  }
`;

const IncomingEnsContainer = styled(ItemVV2)`
  position: absolute;
  height: 10px;
  width: fit-content;
  padding: 10px;
  border-radius: 24px;
  background-color: #FFFFFF;
  opacity: 0.8;
  z-index: 3;
  left: 1.5%;
  bottom: 3.5%;
`;
