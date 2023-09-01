import { ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { ReactComponent as Close } from 'assets/chat/group-chat/close.svg';
import { Button } from 'components/SharedStyling';
import InstallMetamaskSnapModal from 'components/MetamaskSnap/InstallMetamaskSnapModal';
import SnapInformationModal from 'components/MetamaskSnap/SnapInformationModal';
import MetamaskSnapConfigureModal from 'components/MetamaskSnap/MetamaskSnapConfigureModal';
import { ReactComponent as Back } from 'assets/chat/arrowleft.svg';


const MetamaskPushSnapModal = ({
    onClose
}) => {
    const theme = useTheme();

    const [SnapState, setSnapState] = useState(1);
    const [configure, setConfigure] = useState(false);




    return (
        <ItemVV2 padding="20px 15px" width="420px">
            <ItemHV2 justifyContent='space-between'>

                {SnapState !== 1 && <Back width='24px' cursor='pointer' onClick={()=>setSnapState(1)}/>}

                {SnapState === 1 && <SpanV2
                    fontWeight="500"
                    fontSize="20px"
                    color={theme.fontColor}
                    flex="1"
                    onClick={() => setConfigure(!configure)}
                >
                    Receive Notifications
                </SpanV2>}
                <Close
                    onClick={() => onClose()}
                    style={{ cursor: 'pointer' }}
                />
            </ItemHV2>

            {SnapState == 1 && <InstallMetamaskSnapModal setSnapState={setSnapState} setConfigure={setConfigure} configure={configure} />}
            {SnapState == 2 && <SnapInformationModal />}
            {SnapState == 3 && <MetamaskSnapConfigureModal />}


        </ItemVV2>
    );
};

export default MetamaskPushSnapModal;

const Image = styled.img`

`

const SnapContainer = styled(ItemHV2)`
    border-radius: 14px;
    padding:7px 14px;
    background: #F9F9F9;
    justify-content:space-between;
`

const SnapInner = styled.div`
    display:flex;
    align-items:center;
    gap:8px;
`

const InstallButton = styled(Button)`
  width: fit-content;
  min-width:102px;
  background: #D53A94;
  color: #fff;
  z-Index:0;
  font-family: 'Strawford';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: normal;
  border-radius: 8px;
  padding: 14px 16px;
  
`;

const QRCodeContainer = styled(ItemVV2)`
    border-radius: 14px;
    padding:7px 14px;
    background: #F9F9F9;
    padding-bottom:15px;
    
`

const DownloadContainer = styled.div`
    display:flex;
    border-radius: 8px;
    background: #1E1E1E;
    padding: 4px 11px;
    gap: 8px;
    height:36px;
    max-height: 36px;
    align-items: center;
`

const DownloadInner = styled.div`
    display:flex;
    flex-direction: column;
`