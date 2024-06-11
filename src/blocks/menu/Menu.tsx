import { FC,forwardRef } from 'react';
import styled from 'styled-components';

import { MenuProps } from './Menu.types';
// import { getSeparatorResponsiveCSS } from './Menu.utils';
// import { separatorRestrictedPropsKeys } from './Menu.constants';
import { blocksColors } from 'blocks/Blocks.colors';
import { getVariantStyles } from '../text/Text.utils';
import { getBlocksColor } from 'blocks/Blocks.utils';



const StyledMenu = styled.div<MenuProps>`
  /* Variant CSS */
  ${({ variant }) => getVariantStyles(variant)}

  // color: ${({ color }) => getBlocksColor(color)};
  // background-color: ${({ color }) => getBlocksColor(color)};
  // background-color: {theme.default.secondaryBg}
  margin: 0px;

  /* Full width of parent container */
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  /* Responsive props */

  /* Extra CSS props */
  ${(props) => props.css || ''}
`;

const Menu = forwardRef<HTMLElement, MenuProps>(({ children ,...props }, ref) => {
  return (
    <StyledMenu
      // as={as}
      ref={ref}
      {...props}
    >
      {children}
    </StyledMenu>
  );
});

Menu.displayName = 'Menu';

export { Menu };
