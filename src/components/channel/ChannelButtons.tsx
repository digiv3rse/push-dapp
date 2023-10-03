// External Packages
import { AiOutlinePlus } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import styled from 'styled-components';

// Internal Components
import { Button } from 'components/SharedStyling';

interface ChannelButtonProps {
  onClick: () => void;
}

export const AddDelegateButton = ({ onClick }: ChannelButtonProps) => {
  return (
    <ChannelButton onClick={onClick}>
      <AddButtonIcon />
      <ButtonText>Add Delegate</ButtonText>
    </ChannelButton>
  );
};

export const ManageSettingsButton = ({ onClick }: ChannelButtonProps) => {
  return (
    <ChannelButton onClick={onClick}>
      <FiSettings />
      <ButtonText>Manage Settings</ButtonText>
    </ChannelButton>
  );
};

export const ModifySettingsButton = ({ onClick }: ChannelButtonProps) => {
  return (
    <ChannelButtonWhite onClick={onClick}>
      <TransparentButtonText>Modify Settings</TransparentButtonText>
    </ChannelButtonWhite>
  );
};

export const AddSettingButton = ({ onClick }: ChannelButtonProps) => {
  return (
    <ChannelButton onClick={onClick}>
      <AddButtonIcon />
      <ButtonText>Add Setting</ButtonText>
    </ChannelButton>
  );
};

const ChannelButton = styled(Button)`
  height: 36px;
  background: #cf1c84;
  color: #fff;
  z-index: 0;
  font-family: 'Strawford';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  border-radius: 8px;
  padding: 4px 12px 4px 12px;
  @media (min-width: 600px) and (max-width: 700px) {
    margin-right: 9px;
  }
`;

const ChannelButtonWhite = styled.button`
  height: 36px;
  border: 1px solid ${(props) => props.theme.default.borderColor};
  background: transparent;
  color: #fff;
  z-index: 0;
  font-family: 'Strawford';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  border-radius: 8px;
  padding: 4px 12px 4px 12px;
  cursor: pointer;
  @media (min-width: 600px) and (max-width: 700px) {
    margin-right: 9px;
  }
`;

const ButtonText = styled.span`
  margin-left: 8px;
`;

const TransparentButtonText = styled.span`
  color: ${(props) => props.theme.default.color};
`;

const AddButtonIcon = styled(AiOutlinePlus)`
  font-size: 16px;
`;
