// React + Web3 Essentials
import React from 'react';

// External Packages
import styled, { ThemeProvider, useTheme } from 'styled-components';
import * as PushAPI from '@pushprotocol/restapi';

// Internal Components
import ModalConfirmButton from 'primaries/SharedModalComponents/ModalConfirmButton';
import { ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { Input, TextField } from 'components/SharedStyling';
import { ReactComponent as AddGroupIcon } from 'assets/chat/group-chat/creategroupicon.svg';
import { ReactComponent as AddGroupIconDark } from 'assets/chat/group-chat/creategroupicondark.svg';
import { isLengthValid } from 'helpers/ValidationHelper';
import ErrorMessage from 'components/reusables/errorMessageLabel/errorMessageLabel';
import { appConfig } from 'config';

export const GroupDetailsContent = ({
  groupNameData,
  groupDescriptionData,
  groupImageData,
  groupTypeObject,
  handleGroupImageData,
  handleGroupNameData,
  handleGroupDescriptionData,
  handleGroupTypeObject,
  handleCreateGroupState,
}) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const fileUploadInputRef = React.useRef<HTMLInputElement>();
  const [errorInfo, setErrorInfo] = React.useState<{ name: string; description: string }>({
    name: '',
    description: '',
  });

  const options = [
    {
      id: 1,
      title: 'Public',
      subTitle: 'Chats are not encrypted',
      value: 'public',
    },
    {
      id: 2,
      title: 'Private',
      subTitle: 'Chats are encrypted',
      value: 'private',
    },
  ];

  const themes = useTheme();

  const getFileString = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      handleGroupImageData(reader.result);
    };
  };

  const handleValidation = async () => {
    try {
      const getGroupResponse = await PushAPI.chat.getGroupByName({ groupName: groupNameData, env: appConfig.appEnv });
      if (typeof getGroupResponse !== 'string') {
        setErrorInfo((x) => ({
          ...x,
          name: 'Group Name should be unique! Please retry!',
        }));

        return false;
      }
    } catch (e) {}

    if (!isLengthValid(groupNameData, 50)) {
      setErrorInfo((x) => ({
        ...x,
        name: 'Group Name should not exceed 50 characters! Please retry!',
      }));

      return false;
    }
    if (!isLengthValid(groupDescriptionData, 150, 3)) {
      setErrorInfo((x) => ({
        ...x,
        description: 'Group Description should be between 3 to 150 characters! Please retry!',
      }));

      return false;
    }
    return true;
  };

  const handleNextClick = async () => {
    if (groupDescriptionData && groupNameData && groupTypeObject?.groupTypeData && (await handleValidation())) {
      handleCreateGroupState(2);
    } else {
      handleCreateGroupState(1);
    }
  };

  const handleUpload = (e) => {
    fileUploadInputRef.current.click();
  };

  return (
    <ThemeProvider theme={themes}>
      <Container>
        <GroupIconContainer onClick={handleUpload}>
          {groupImageData ? (
            <ImageV2
              src={groupImageData}
              width="128px"
              height="128px"
              style={{ objectFit: 'contain' }}
            />
          ) : themes.scheme == 'light' ? (
            <AddGroupIcon />
          ) : (
            <AddGroupIconDark />
          )}
          <FileInput
            type="file"
            ref={fileUploadInputRef}
            onChange={getFileString}
            accept="image/*"
          />
        </GroupIconContainer>
        <TextFieldContainer>
          <TextFieldHeaderContainer>
            <TextFieldHeading color={themes.modalHeadingColor}>Group Name</TextFieldHeading>
            <CharacterCount color={themes.modalSecondaryTextColor}>{50 - groupNameData.length}</CharacterCount>
          </TextFieldHeaderContainer>
          <CustomInput
            type="text"
            value={groupNameData}
            // ref={groupNameInputRef}
            onChange={(e) => handleGroupNameData(e.target.value.slice(0, 50))}
            borderColor={themes.modalInputBorderColor}
            color={themes.modalMessageColor}
          />
          {errorInfo?.name && <ErrorMessage message={errorInfo?.name} />}
        </TextFieldContainer>
        <TextFieldContainer>
          <TextFieldHeaderContainer>
            <TextFieldHeading color={themes.modalHeadingColor}>Group Description</TextFieldHeading>
            <CharacterCount color={themes.modalSecondaryTextColor}>{150 - groupDescriptionData.length}</CharacterCount>
          </TextFieldHeaderContainer>
          <GroupDescription
            rows="4"
            value={groupDescriptionData}
            onChange={(e) => handleGroupDescriptionData(e.target.value.slice(0, 150))}
            borderColor={themes.modalInputBorderColor}
            color={themes.modalMessageColor}
          />
          {errorInfo?.description && <ErrorMessage message={errorInfo?.description} />}
        </TextFieldContainer>
        <ItemVV2 alignItems="baseline">
          <TextFieldHeading color={themes.modalHeadingColor}>Group Type</TextFieldHeading>
          <OptionsContainer>
            {options.map((option) => {
              return (
                <OptionContainer
                  borderRadius={option.id == 1 ? '12px 0px 0px 12px' : '0px 12px 12px 0px'}
                  hoverBackground={themes.modalOptionHoverBackgroundColor}
                  borderColor={themes.modalInputBorderColor}
                  backgroundColor={
                    option.id == groupTypeObject?.groupTypeId ? themes.modalOptionHoverBackgroundColor : 'transparent'
                  }
                  key={option.id}
                  onClick={() => {
                    handleGroupTypeObject({ groupTypeData: option.value, groupTypeId: option.id });
                  }}
                >
                  <OptionText
                    fontWeight="500"
                    fontSize="18px"
                    color={themes.modalMessageColor}
                    margin="0px 0px 2px 0px"
                  >
                    {option.title}
                  </OptionText>
                  <OptionText
                    fontWeight="400"
                    fontSize="12px"
                    color={themes.modalSecondaryTextColor}
                  >
                    {option.subTitle}
                  </OptionText>
                </OptionContainer>
              );
            })}
          </OptionsContainer>
        </ItemVV2>
        <ModalConfirmButton
          text="Next"
          onClick={() => {
            handleNextClick();
          }}
          isLoading={isLoading}
          backgroundColor={
            groupDescriptionData && groupNameData && groupTypeObject?.groupTypeData
              ? '#CF1C84'
              : themes.modalConfirmButtonBackground
          }
          color={
            groupDescriptionData && groupNameData && groupTypeObject?.groupTypeData
              ? '#FFF'
              : themes.modalConfirmButtonTextColor
          }
          border={
            groupDescriptionData && groupNameData && groupTypeObject?.groupTypeData
              ? 'none'
              : `1px solid ${themes.modalConfirmButtonBorder}`
          }
          topMargin="28px"
        />
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  padding: 42px 26px 0px;
  overflow-y: auto;
  overflow-x: hidden;
  &&::-webkit-scrollbar {
    width: 4px;
  }
  &&::-webkit-scrollbar-thumb {
    background: #d53a94;
    border-radius: 4px;
    border-bottom:200px solid transparent;
    background-clip:padding-box;
  }
  @media (max-width: 480px) {
    padding: 42px 24px 0px;
    &&::-webkit-scrollbar-thumb {
      border-bottom:400px solid transparent;
    }
  }
`;

const GroupIconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 28px;
`;

const FileInput = styled.input`
  display: none;
`;

const TextFieldContainer = styled(ItemVV2)`
  min-width: 299px;
  max-width: 333px;
  margin-bottom: 28px;
`;

const GroupDescription = styled(TextField)`
  resize: none;
  min-width: 299px;
  border: 1px solid ${(props) => props.borderColor || '#BAC4D6'};
  background: ${(props) => props.theme.modalInputBackgrundColor};
  border-radius: 12px;
  box-sizing: border-box;
  padding: 13px 16px;
  font-family: 'Strawford';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  &:focus {
    border: 1px solid #ffdbf0;
  }
  @media (max-width: 480px) {
    min-width: 318px;
  }
`;

const TextFieldHeaderContainer = styled(ItemHV2)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0px;
  margin-bottom: 8px;
`;

const TextFieldHeading = styled(SpanV2)`
  color: ${(props) => props.color || '#0000'};
  font-size: 18px;
  font-weight: 500;
`;

const CharacterCount = styled(SpanV2)`
  color: ${(props) => props.color || '#0000'};
  font-size: 14px;
  font-size: 400;
`;

const CustomInput = styled(Input)`
  min-width: 299px;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.borderColor || '#BAC4D6'};
  border-radius: 12px;
  background: ${(props) => props.theme.modalInputBackgrundColor};
  padding: 8px 16px;
  font-family: 'Strawford';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.019em;
  &:focus {
    border: 1px solid #ffdbf0;
  }
  @media (max-width: 480px) {
    min-width: 318px;
  }
`;

const OptionsContainer = styled(ItemHV2)`
  margin: 16px 0px 0px;
  box-sizing: border-box;
  align-items: center;
`;

const OptionContainer = styled(ItemVV2)`
  border: 1px solid ${(props) => props.borderColor || '#BAC4D6'};
  border-radius: ${(props) => props.borderRadius || '0px'};
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  box-sizing: border-box;
  min-width: 150px;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.hoverBackground || 'transparent'};
    border: 1px solid #bac4d6;
  }
`;

const OptionText = styled(SpanV2)`
  color: ${(props) => props.color || '#0000'};
  font-weight: ${(props) => props.fontWeight || 500};
  font-size: ${(props) => props.fontSize || '18px'};
`;
