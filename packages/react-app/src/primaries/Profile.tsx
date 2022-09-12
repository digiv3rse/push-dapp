import { useWeb3React } from '@web3-react/core';
import React,{useRef} from "react";
import { Web3Provider } from 'ethers/providers'
import styled,{useTheme} from 'styled-components';
import Dropdown from '../components/Dropdown';
import {Item} from "./SharedStyling.js";

import { Oval } from 'react-loader-spinner';

// Create Header
const Profile = ({isDarkMode}) => {
  const toggleArrowRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLInputElement>(null);
  const { error, account, library } = useWeb3React();
  // Get theme
  const theme = useTheme();
  const [address, setAddress] = React.useState('');
  const [ens, setENS] = React.useState('');
  const [ensFetched, setENSFetched] = React.useState(false);
  const [showDropdown, setShowDropdown] = React.useState(false);
  // Get Web3 Context
  const context = useWeb3React<Web3Provider>()
  const { deactivate } = context
  const dropdownValues = [
    {
      id: "walletAddress",
      value: account,
      title: account,
      icon: "./copy.svg",
    },
    {
      id: "prodDapp",
      value: "",
      link: "https://epns.io/",
      title: "Production dapp",
      icon: "./prod.svg",
    },
    {
      id: "disconnect",
      value: "",
      function: ()=>deactivate(),
      title: "Logout",
      icon: "./logout.svg",
    },
  ];
  
  React.useEffect(() => {
    const closeDropdown = (e) => {
      if(toggleArrowRef.current && !toggleArrowRef?.current.contains(e.target) && 
         dropdownRef.current && !dropdownRef?.current.contains(e.target))
      {
        setShowDropdown(false);
      }
    }

    document.addEventListener('click',closeDropdown);

    return () => document.removeEventListener('click',closeDropdown);
  })
  
  React.useEffect(() => {
    if (account && account != '') {
      // Check if the address is the same
      if (address !== account) {
        setENS('');
        setENSFetched(false);

        // get ens
        library
          .lookupAddress(account).then(function (name) {
            setENS(name);
            setENSFetched(true);
            setAddress(account);
          })
          .catch(() => {
            setENSFetched(true);
            setAddress(account);
          })
      }

    }
  }, [account]);

  // to create blockies
  return (
    <>
      {account && account !== "" && !error && (
        <Container>
          <Wallet bg={theme.profileBG} color={theme.profileText} isDarkMode={isDarkMode}>
            {!ensFetched && (
              <Oval
              color="#FFF"
              height={16}
              width={16}
            />
            )}
            {ensFetched && ens && <>{ens}</>}
            {ensFetched && !ens && (
              <>
                {account.substring(0, 6)}.....
                {account.substring(account.length - 6)}
              </>
            )}
            <ToggleArrowImg ref={toggleArrowRef}
              onClick={() => setShowDropdown(!showDropdown)} 
              filter={isDarkMode?theme.snackbarBorderIcon:"brightness(0) invert(1)"}>
              <img
                alt="arrow"
                className={`${showDropdown ? "down" : "up"}`}
                src="/svg/arrow.svg"
              />
            </ToggleArrowImg>
          </Wallet>
          {showDropdown && (
            <Item
              ref={dropdownRef}
              bg={theme.headerBg}
              border={`1px solid ${theme.snackbarBorderColor}`}
              radius="24px"
              align="flex-start"
              padding="1.3rem"
              position="absolute"
              top="4.1rem"
              right="-0.5rem"
            >
              <Dropdown dropdownValues={dropdownValues} />
            </Item>
          )}
        </Container>
      )}
    </>
  );
}

// css styles
const Container = styled.button`
  margin: 0;
  padding: 0;
  background: none;
  border: 0;
  outline: 0;
  justify-content: flex-start;
  flex: 1,
  flex-direction: row;
  align-items: center;
  display: flex;
`
const Wallet = styled.span`
  margin: 0px 10px;
  padding: 4px 16px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  color: ${props => props.color};
  border-radius:17px;
  background: ${props => props.bg};
  ${({ isDarkMode,bg }) => isDarkMode && `
    border: solid 3px transparent;
    background-image: linear-gradient(107deg, rgba(226,8,128,1) 30%, rgba(103,76,159,1) 70%, rgba(53,197,243,1) 100%), linear-gradient(107deg, rgba(226,8,128,1) 30%, rgba(103,76,159,1) 70%, rgba(53,197,243,1) 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: 2px 1000px 1px ${bg} inset;
  `}
 
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    pointer: hand;
  }
  &:active {
    opacity: 0.75;
    cursor: pointer;
    pointer: hand;
  }
`
const ToggleArrowImg = styled.div`
  margin-left: 2rem;
  filter:  ${props => props.filter};
  &:hover {
    cursor: pointer;
  }
  .down {
    transform: rotate(-180deg);
    transition: transform 0.25s;
  }

  .up {
    transform: rotate(-360deg);
    transition: transform 0.25s;
  }
`;

// Export Default
export default Profile;
