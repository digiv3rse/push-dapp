import { useContext } from 'react';
// External Packages
import styled from 'styled-components';

// Internal Components
import { ButtonV2, ImageV2 } from 'components/reusables/SharedStylingV2';

// Internal Configs
import { device } from 'config/Globals';
import { VideoCallContext } from 'contexts/VideoCallContext';

type CallButtonProps = {
  buttonStyles: {};
  iconSrc: any;
  onClick: () => void;
};

const CallButton = ({ buttonStyles, iconSrc, onClick }: CallButtonProps) => {
  const {endLocalStream} = useContext(VideoCallContext);

  return (
    <Button
      onClick={onClick}
      style={buttonStyles}
      onClickCapture={()=>endLocalStream()}
    >
      <Icon src={iconSrc} />
    </Button>
  );
};

const Button = styled(ButtonV2)`
  width: 4.56rem;
  max-width: 4.56rem;
  height: 2.75rem;
  hover-background: transparent;
  border-radius: 1rem;
  margin: 0 0.35rem;

  @media ${device.mobileL} {
    width: 3.375rem;
    max-width: 3.375rem;
    height: 2rem;
    border-radius: 0.75rem;
  }

  @media ${device.mobileM} {
    margin: 0 0.2rem;
  }
`;

const Icon = styled(ImageV2)`
  width: 22px;
  cursor: pointer;
  @media ${device.mobileL} {
    width: 17px;
  }
`;

export default CallButton;
