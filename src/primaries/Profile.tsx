// React + Web3 Essentials
import React, { useContext, useRef } from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Compoonents
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { Item } from './SharedStyling.js';
import { envUtil, shortenText } from 'helpers/UtilityHelper';
import ProfileModal from 'components/ProfileModal';
import Dropdown from '../components/Dropdown';
import { useClickAway } from 'hooks/useClickAway';
import { useResolveWeb3Name } from 'hooks/useResolveWeb3Name';
import { useAccount } from 'hooks';

// Internal Configs
import APP_PATHS from 'config/AppPaths';
import { AppContext } from 'contexts/AppContext';
import { ErrorContext } from 'contexts/ErrorContext';
import { AppContextType } from 'types/context';

// Create Header
const Profile = ({ isDarkMode }) => {
  const { web3NameList }:AppContextType=useContext(AppContext);
  const { authError } = useContext(ErrorContext);
  const toggleArrowRef = useRef(null);
  const dropdownRef = useRef(null);
  const modalRef = React.useRef(null);
  const { account, disconnect, wallet } = useAccount();

  // resolve web3 name
  useResolveWeb3Name(account);
  const web3Name = web3NameList[account]

  // Get theme
  const theme = useTheme();
  const [showDropdown, setShowDropdown] = React.useState(false);
  useClickAway(modalRef, dropdownRef, () => showDropdown && setShowDropdown(false));

  const dropdownValues = [
    {
      id: 'walletAddress',
      value: account,
      title: account,
      function: ()=>{},
      invertedIcon: './copy.svg',
    },
    {
      id: 'userSettings',
      value: '',
      title: 'Settings',
      function: ()=>{},
      to: APP_PATHS.UserSettings,
      invertedIcon: 'svg/setting.svg'
    },
    {
      id: 'prodDapp',
      value: '',
      function: ()=>{},
      link: `https://${envUtil.prod}`,
      title: 'Production dapp',
      invertedIcon: './prod.svg',
    },
    {
      id: 'disconnect',
      value: '',
      function: async () => {
        await disconnect(wallet);
      },
      title: 'Logout',
      invertedIcon: './logout.svg',
    },
  ];

  useClickAway(toggleArrowRef, dropdownRef, () => {
    setShowDropdown(false);
  });

  // to create blockies
  return (
    <>
      {account && account !== '' && !authError && (
        <Body>
          <Wallet
            bg={theme.profileBG}
            color={theme.profileText}
            isDarkMode={isDarkMode}
            onClick={() => setShowDropdown(!showDropdown)}
            ref={toggleArrowRef}
          >
            {web3Name === null ? (
              <LoaderSpinner
                type={LOADER_TYPE.SEAMLESS}
                spinnerSize={20}
                spinnerColor="#FFF"
              />
            ) : web3Name ? (
              <>{web3Name}</>
            ) : (
              <>{shortenText(account, 6)}</>
            )}
            <ToggleArrowImg filter={isDarkMode ? theme.snackbarBorderIcon : 'brightness(0) invert(1)'}>
              <img
                alt="arrow"
                className={`${showDropdown ? 'down' : 'up'}`}
                src="/svg/arrow.svg"
              />
            </ToggleArrowImg>
          </Wallet>
          {showDropdown && (
            <Item
              position="absolute"
              top="3.6rem"
              right="-0.5rem"
              ref={dropdownRef}
            >
              <DropdownItem
                align="flex-start"
                ref={dropdownRef}
              >
                <Dropdown dropdownValues={dropdownValues} />
              </DropdownItem>
              <ItemModal ref={modalRef}>
                <ProfileModal
                  showDropdown={showDropdown}
                  setShowDropdown={setShowDropdown}
                  dropdownValues={dropdownValues}
                />
              </ItemModal>
            </Item>
          )}
        </Body>
      )}
    </>
  );
};

// css styles
const Body = styled.div`
  flex: 1;
  position: relative;
  margin: 0;
  padding: 0;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const Wallet = styled.div`
  width: 210px;
  margin: 0px 10px;
  box-sizing: border-box;
  padding: 4px 16px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 16px;
  color: ${(props) => props.color};
  border-radius: 17px;
  background: ${(props) => props.bg};
  @media (max-width: 992px) {
    width: 100%;
    padding: 4px 15px;
    box-sizing: border-box;
    justify-content: space-between;
    border-radius: 13px;
    background: linear-gradient(87.17deg, #B6A0F5 0%, #F46EF7 57.29%, #FF95D5 100%);
    margin: 0px 0px;
  }

  ${({ isDarkMode, bg }) =>
    isDarkMode &&
    `
    border: solid 3px transparent;
    background-image: linear-gradient(87.17deg, #B6A0F5 0%, #F46EF7 57.29%, #FF95D5 100%), linear-gradient(87.17deg, #B6A0F5 0%, #F46EF7 57.29%, #FF95D5 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: 2px 1000px 1px ${bg} inset;
  `}

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
  &:active {
    opacity: 0.75;
    cursor: pointer;
  }
`;
const ToggleArrowImg = styled.div`
  margin-left: 2rem;
  filter: ${(props) => props.filter};
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

const DropdownItem = styled(Item)`
  background: ${(props) => props.theme.header.bg};
  border: 1px solid ${(props) => props.theme.snackbarBorderColor};
  border-radius: 24px;
  align-items: flex-start;
  padding: 1.3rem;
  // position: absolute;
  // top:3.6rem;
  // right:-0.5rem;
  z-index: 10;
  @media (max-width: 425px) {
    align-items: flex-start;
    display: none;
  }
`;

const ItemModal = styled.div`
  position: fixed;
  // width: 100vw;
  // height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
  @media (min-width: 426px) {
    display: none;
  }
`;

// Export Default
export default Profile;
