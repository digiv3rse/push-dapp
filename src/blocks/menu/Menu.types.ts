import { CSSProperties, ReactNode } from 'react';
import { BlockWithoutStyleProp, ResponsiveProp, SpaceType, ValueOf } from '../Blocks.types';
import { FlattenSimpleInterpolation } from 'styled-components';

export type MenuComponentProps = {
  /* Additional prop from styled components to apply custom css to Box */
  css?: FlattenSimpleInterpolation;
  /* Child react nodes rendered by Box */
  children: ReactNode;
};

export type MenuItemComponentProps = {
  /* icon element  */
  icon?: ReactNode;
  /* onClick action */
  onClick?: () => void;
  /* label attached to the button */
  label: string;
  /* Additional prop from styled components to apply custom css to Box */
  css?: FlattenSimpleInterpolation;
};

export type MenuResponsivePropValues = ValueOf<MenuResponsiveProps>;
