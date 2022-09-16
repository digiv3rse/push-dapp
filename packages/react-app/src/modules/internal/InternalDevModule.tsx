import React, { useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import styled, { useTheme } from 'styled-components';

import BlurBG from 'components/reusables/blurs/BlurBG';
import LoaderSpinner, { LOADER_OVERLAY, LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import ProgressBar from 'components/reusables/progress/ProgressBarUnit';
import { ButtonV2, ItemVV2, SectionV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import Spinner from 'components/reusables/spinners/SpinnerUnit';
import { showNotifcationToast } from 'components/reusables/toasts/toastController';
import GLOBALS, { device } from 'config/Globals';

// Helper Modules
const randomTextWithLines = (maxChar, maxLines) => {
  var lines = '';
  const numLines = Math.floor(Math.random() * maxLines + 1);
  for (var i = 0; i < numLines; i++) {
    if (i > 0) lines += '<br/>';
    for (var x = 0; x < maxChar; x++) lines += randomText(maxChar);
  }
  return lines;
};

const randomText = (length) => {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const createRandomToast = () => {
  toast.dark(randomTextWithLines(20, 1), {
    type: toast.TYPE.INFO,
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 10000,
    hideProgressBar: false
  });
};

const createNotificaionToast = () => {
  const payload = {
    data: {
      app: 'Testing Channel',
      sid: '1372',
      url: 'https://epns.io',
      acta: '',
      aimg: '',
      amsg: 'Testing 3..2..1',
      asub: '',
      icon:
        'https://gateway.ipfs.io/ipfs/bafybeifvqzq7pgr547ridaxceikskfvuxxrfz2m5vlpk7uljikwd3ybesa/QmdKPEWYv1xR6A6pEPPUwfaWSTztjeMWLVaaMjjEMo8foU',
      type: 1,
      epoch: '1663058708',
      etime: null,
      hidden: '0',
      sectype: null
    },
    recipients: '0xb59cdc85cacd15097ece4c77ed9d225014b4d56d',
    notification: {
      body: randomTextWithLines(5, 3),
      title: 'Testing Channel - '
    }
  };

  showNotifcationToast(payload, true);
};

// Create Module
const InternalDevModule = () => {
  const theme = useTheme();

  const [progress, setProgress] = useState(0);
  const [randomText, setRandomText] = useState(null);

  useEffect(() => {
    // Do progress bar
    setTimeout(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      } else {
        setProgress(0);
      }
    }, 100);
  }, [progress]);

  useEffect(() => {
    if (!randomText) {
      setRandomText(randomTextWithLines(20, 5));
    }
  }, [randomText]);

  return (
    <Container>
      {/* Progess Bar Component */}
      <IndividualComps caption="components/reusables/progress/ProgressBarUnit">
        <ProgressBar percent={progress} color={GLOBALS.COLORS.PRIMARY_PINK} />
      </IndividualComps>

      {/* Spinner Component */}
      <IndividualComps caption="components/reusables/spinner/SpinnerUnit">
        <Spinner />
      </IndividualComps>

      {/* Spinner Component */}
      <IndividualComps caption={`components/reusables/spinner/SpinnerUnit - color="#529015"`}>
        <Spinner color='#529015' />
      </IndividualComps>

      {/* Loader with Spinner Component */}
      <IndividualComps caption="components/reusables/loaders/LoaderSpinner - type=STANDALONE title=null">
        <LoaderSpinner type={LOADER_TYPE.STANDALONE} completed={false} />
      </IndividualComps>

      <IndividualComps caption="components/reusables/loaders/LoaderSpinner - type=STANDALONE_MINIMAL title=null">
        <LoaderSpinner type={LOADER_TYPE.STANDALONE_MINIMAL} completed={false} />
      </IndividualComps>

      {/* Loader with Spinner Component */}
      <IndividualComps caption="components/reusables/loaders/LoaderSpinner">
        <LoaderSpinner type={LOADER_TYPE.SEAMLESS} title="This time it's done" completed={true} />
      </IndividualComps>

      {/* Loader with Spinner Component */}
      <IndividualComps caption="components/reusables/loaders/LoaderSpinner - type=seamless title=null spinnerSize=20">
        <LoaderSpinner type={LOADER_TYPE.SEAMLESS} completed={false} spinnerSize={20} />
      </IndividualComps>

      {/* Loader with Spinner Component */}
      <IndividualComps caption="components/reusables/loaders/LoaderSpinner - type=STANDALONE spinnerSize=24">
        <LoaderSpinner type={LOADER_TYPE.STANDALONE} title="Randomized With Spinner Size" completed={false} spinnerSize={24} />
      </IndividualComps>

      {/* Loader with Spinner Component */}
      <IndividualComps caption={`components/reusables/loaders/LoaderSpinner - type=STANDALONE spinnerColor="#083c84"`}>
        <LoaderSpinner type={LOADER_TYPE.STANDALONE} title="Randomized With Spinner Color" completed={false} spinnerColor="#083c84" />
      </IndividualComps>
      
      {/* Loader with Spinner Component */}
      <IndividualComps caption="components/reusables/loaders/LoaderSpinner - type=STANDALONE spinnerSize=24">
        <LoaderSpinner type={LOADER_TYPE.STANDALONE} title="This time it's done" completed={true} spinnerSize={24} />
      </IndividualComps>

      {/* Loader with Spinner Component */}
      <IndividualComps caption="components/reusables/loaders/LoaderSpinner - type=STANDALONE">
        <LoaderSpinner type={LOADER_TYPE.SEAMLESS} title="Randomized With Long Text, Very Long" completed={false} />
      </IndividualComps>

      <IndividualComps caption="components/reusables/loaders/LoaderSpinner - type=STANDALONE">
        <LoaderSpinner type={LOADER_TYPE.STANDALONE} title="Randomized With Long Text, Very Long" completed={false} />
      </IndividualComps>

      {/* Loader with Spinner Component */}
      <IndividualComps caption="components/reusables/loaders/LoaderSpinner - type=seamless overlay=normal blur=0">
        <SpanV2 color={theme.default.color}>  
          {randomText}
        </SpanV2>
        <LoaderSpinner 
          type={LOADER_TYPE.SEAMLESS}
          title={"Randomized With Long Text, Very Long"}
          completed={false} 
        />
      </IndividualComps>

      {/* Loader with Spinner Component */}
      <IndividualComps caption="components/reusables/loaders/LoaderSpinner - type=seamless overlay=ontop blur=0">
        <SpanV2 color={theme.default.color}>  
          {randomText}
        </SpanV2>
        <LoaderSpinner 
          type={LOADER_TYPE.SEAMLESS}
          overlay={LOADER_OVERLAY.ONTOP} 
          title={"Randomized With Long Text, Very Long"}
          completed={false} 
        />
      </IndividualComps>

      {/* Loader with Spinner Component */}
      <IndividualComps caption="components/reusables/loaders/LoaderSpinner - type=seamless overlay=ontop blur=5">
        <SpanV2 color={theme.default.color}>  
          {randomText}
        </SpanV2>
        <LoaderSpinner 
          type={LOADER_TYPE.SEAMLESS}
          overlay={LOADER_OVERLAY.ONTOP} 
          blur={5}
          title={"Randomized With Long Text, Very Long"}
          completed={false} 
        />
      </IndividualComps>

      {/* Loader with Spinner Component */}
      <IndividualComps caption="components/reusables/loaders/LoaderSpinner - type=STANDALONE overlay=ontop blur=5">
        <SpanV2 color={theme.default.color}>  
          {randomText}
        </SpanV2>
        <LoaderSpinner 
          type={LOADER_TYPE.STANDALONE}
          overlay={LOADER_OVERLAY.ONTOP} 
          blur={5}
          title={"Randomized With Long Text, Very Long"}
          completed={false} 
        />
      </IndividualComps>

      {/* Toast Controller */}
      <IndividualComps caption="components/reusables/toasts/ToastController">
        <ButtonV2
          background="#e20880"
          color="#fff"
          flex="initial"
          borderRadius="15px"
          padding="20px 20px"
          onClick={() => {
            createNotificaionToast();
          }}
        >
          <SpanV2>
            Trigger Random Notification
          </SpanV2>
        </ButtonV2>
      </IndividualComps>

      {/* Toast Controller */}
      <IndividualComps caption="components/reusables/toasts/ToastController">
        <ButtonV2
          background="#e20880"
          color="#fff"
          flex="initial"
          borderRadius="15px"
          padding="20px 20px"
          onClick={() => {
            createRandomToast();
          }}
        >
          <SpanV2>
            Trigger Random Toast
          </SpanV2>
        </ButtonV2>
      </IndividualComps>

      {/* Loader with Spinner Component */}
      <IndividualComps caption="components/reusables/loaders/LoaderSpinner">
        <LoaderSpinner type={LOADER_TYPE.STANDALONE} title="Randomized" completed={false} />
      </IndividualComps>

      {/* Defined Blur */}
      <IndividualComps caption="components/reusables/blurs/BlurBG - Blur=10">
        <ButtonV2
          background="#e20880"
          color="#fff"
          flex="initial"
          borderRadius="15px"
          padding="20px 20px"
          onClick={() => {
            console.log('Nothing Should Be Clickable');
          }}
        >
          <SpanV2>
            Try to Trigger
          </SpanV2>
        </ButtonV2>
        <BlurBG blur={10} zIndex={99} />
      </IndividualComps>

      {/* Defined Blur Progress Bar */}
      <IndividualComps caption="components/reusables/blurs/BlurBG  - Blur=5">
        <ProgressBar percent={progress} color={GLOBALS.COLORS.PRIMARY_PINK} />
        <LoaderSpinner type={LOADER_TYPE.SEAMLESS} title="Randomized With Long Text, Very Long" completed={false} />
        <BlurBG blur={5} />
      </IndividualComps>

      {/* Defined Blur Loader Done */}
      <IndividualComps caption="components/reusables/blurs/BlurBG  - Blur=5">
        <LoaderSpinner type={LOADER_TYPE.SEAMLESS} title="This time it's done" completed={true} />
        <BlurBG blur={5} zIndex={99} />
      </IndividualComps>

      {/* Defined Blur Loader Done */}
      <IndividualComps caption="components/reusables/blurs/BlurBG  - Disabled">
        <ButtonV2
          background="#e20880"
          color="#fff"
          flex="initial"
          borderRadius="15px"
          padding="20px 20px"
          onClick={() => {
            console.log('This should be clickable');
          }}
        >
          <SpanV2>
            Try to Trigger
          </SpanV2>
        </ButtonV2>
        <BlurBG blur={0} />
      </IndividualComps>
    </Container>
  );
};
export default InternalDevModule;

// Define how the module is fitted, define it align-self to strect to fill entire bounds
// Define height: inherit to cover entire height
const Container = styled(SectionV2)`
  align-items: center;
  align-self: stretch;
  background: ${(props) => props.theme.default.bg};
  border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
  box-shadow: ${GLOBALS.ADJUSTMENTS.MODULE_BOX_SHADOW};
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  position: relative;

  margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};

  @media ${device.laptop} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
  }

  @media ${device.mobileM} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
  }
`;

const IndividualComps = styled(ItemVV2)`
	border-radius: 32px;
	border: 1px solid ${(props) => props.theme.default.secondaryBg};
	margin: 20px;
	min-height: 100px;
	min-width: 25%;
	overflow: hidden;
	padding: 20px;
	
	&:after {
		background: ${(props) => props.theme.default.secondaryBg};
		bottom: 0;
		content: '${(props) => props.caption}';
		font-size: 10px;
		left: 0;
		padding: 2px;
		position: absolute;
		right: 0;
		text-align: center;
    z-index: 100;
	}
`;
