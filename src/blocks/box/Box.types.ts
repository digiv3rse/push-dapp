import { CSSProperties, ReactNode } from 'react';

import { BlocksColors, ResponsiveProp, SpaceType, ValueOf } from '../Blocks.types';
import { FlattenSimpleInterpolation } from 'styled-components';

export type BoxResponsiveProps = {
  /* Sets align-items css property */
  alignItems?: ResponsiveProp<CSSProperties['alignItems']>;
  /* Sets flex-direction css property */
  direction?: ResponsiveProp<CSSProperties['flexDirection']>;
  /* Sets display css property */
  display?: ResponsiveProp<CSSProperties['display']>;
  /* Sets height css property */
  height?: ResponsiveProp<string>;
  /* Sets justify-content css property */
  justifyContent?: ResponsiveProp<CSSProperties['justifyContent']>;
  /* Sets margin css property */
  m?: ResponsiveProp<SpaceType>;
  /* Sets max-height css property */
  maxH?: ResponsiveProp<string>;
  /* Sets min-height css property */
  minH?: ResponsiveProp<string>;
  /* Sets max-width css property */
  maxW?: ResponsiveProp<string>;
  /* Sets min-width css property */
  minW?: ResponsiveProp<string>;
  /* Sets padding css property */
  p?: ResponsiveProp<SpaceType>;
  /* Sets width css property */
  width?: ResponsiveProp<string>;
};

export type BoxNonResponsiveProps = {
  /* Sets border css property */
  border?: string;
  /* Sets border-radius css property */
  borderRadius?: string;
  /* Sets background-color css property */
  bg?: BlocksColors;
  /* Sets color css property */
  color?: BlocksColors;
  /* Sets cursor css property */
  cursor?: CSSProperties['cursor'];
  /* Sets position css property */
  position?: CSSProperties['position'];
  /* Sets box-shadow css property */
  shadow?: string;
};

export type BoxCSSProps = BoxResponsiveProps & BoxNonResponsiveProps;

type BoxHTMLTags = 'div' | 'span';

export type BoxComponentProps = {
  /* Decides which HTML tag to render inside Box */
  as?: BoxHTMLTags;
  /* Additional prop from styled components to apply custom css to Box */
  css?: FlattenSimpleInterpolation;
  /* Child react nodes rendered by Box */
  children?: ReactNode;
};

export type BoxResponsiveCSSProperties =
  | 'align-items'
  | 'display'
  | 'flex-direction'
  | 'height'
  | 'justify-content'
  | 'margin'
  | 'max-height'
  | 'min-height'
  | 'max-width'
  | 'min-width'
  | 'padding'
  | 'width';

export type BoxResponsivePropValues = ValueOf<BoxResponsiveProps>;

export type BoxResponsiveCSSPropertiesData = { propName: BoxResponsiveCSSProperties; prop: BoxResponsivePropValues };
