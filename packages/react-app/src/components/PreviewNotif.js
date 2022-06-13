import React, { useRef } from "react";
import { useClickAway } from "react-use";
import styled, { ThemeProvider, useTheme } from "styled-components";
import { Item, Span, H2, P } from "./SharedStyling";
import { useWeb3React } from "@web3-react/core";
import { NotificationItem } from "@epnsproject/frontend-sdk-staging";
import { useSelector } from "react-redux";
import { set } from "react-ga";
import { useState } from "react";
import { useEffect } from "react";

const blockchainName = {
  1: "ETH_MAINNET",
  137: "POLYGON_MAINNET",
  42: "ETH_TEST_KOVAN",
  80001: "POLYGON_TEST_MUMBAI",
};

export default function PreviewNotif({ details }) {
  const { channelDetails } = useSelector((state) => state.admin);
  const { chainId } = useWeb3React();
  const [check, setCheck] = useState();

  const themes = useTheme();
  const NotifItem = ({ test }) => {
    return (
      channelDetails && (
        <NotificationItem
          notificationTitle={test?.asub}
          notificationBody={test?.amsg}
          cta={test?.acta}
          app={channelDetails.name}
          icon={channelDetails.icon}
          image={test?.aimg}
          chainName={blockchainName[chainId]}
          theme={themes.scheme}
        />
      )
    );
  };

  return (
    <ThemeProvider theme={themes}>
      <PreviewSpace>
        <Item align="flex-start" padding="0px 0px 0px">
          <H2 textTransform="uppercase" spacing="0.1em">
            <Span weight="100" style={{ color: themes.color }}>
              Preview{" "}
            </Span>
            <Span bg="#674c9f" color="#fff" weight="100" padding="4px 4px">
              Notification
            </Span>
          </H2>
        </Item>
        <NotifItem test={details} />
      </PreviewSpace>
    </ThemeProvider>
  );
}

const Overlay = styled.div`
  top: 0;
  left: 0;
  right: 0;
  background: ${(props) => props.theme.scrollBg};
  height: 100%;
  width: 100%;
  z-index: 1000;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
`;

const PreviewSpace = styled.div`
  //   padding: 20px 30px;
  width: 95%;
  background: ${(props) => props.theme.backgroundBG};
`;
