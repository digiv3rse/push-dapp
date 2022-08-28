import React, { useEffect, useState } from "react";

import styled, { useTheme } from 'styled-components';
import { Section } from 'components/SharedStyling';
import ChatSegment from "segments/chat/ChatSegment";

import GLOBALS from "config/Globals";
//

function ChatPage(props) {
  return (
    <Container>
      <ChatSegment />
    </Container>
  );
}

const Container = styled(Section)`
    display: block;
    flex-direction: column;
    position:'fixed';
    height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - 52px - ${props => props.theme.interfaceTopPadding});
    align-items: stretch;
    align-self: stretch;
`;


// Export Default
export default ChatPage;