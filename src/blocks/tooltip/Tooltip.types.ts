import type { ReactNode } from 'react';

import type { BlockWithoutStyleProp, ResponsiveProp, SpaceType, ValueOf } from '../Blocks.types';
import type { FlattenSimpleInterpolation } from 'styled-components';

export type TooltipResponsiveProps = {
  /* Sets height css property */
  height?: ResponsiveProp<string>;
  /* Sets margin css property */
  margin?: ResponsiveProp<SpaceType>;
  /* Sets max-height css property */
  maxHeight?: ResponsiveProp<string>;
  /* Sets min-height css property */
  minHeight?: ResponsiveProp<string>;
  /* Sets max-width css property */
  maxWidth?: ResponsiveProp<string>;
  /* Sets min-width css property */
  minWidth?: ResponsiveProp<string>;
  /* Sets width css property */
  width?: ResponsiveProp<string>;
};

export type TooltipPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

export type TooltipComponentProps = {
  /* Additional prop from styled components to apply custom css to Tooltip */
  css?: FlattenSimpleInterpolation;
  /* Child react nodes rendered by Tooltip */
  children?: ReactNode;
  /* Overlay content component of the Tooltip */
  overlay?: ReactNode;
  /* Title of the Tooltip */
  title?: string;
  /* Description to be displayed in the tooltip */
  description?: string;
  /* Position of the Tooltip */
  tooltipPosition?: TooltipPosition;
  /* Boolean value indicating whether Tooltip is visible */
  visible?: boolean;
  /* Width of the tooltip container */
  containerWidth?: number;
  /* Height of the toolip container */
  containerHeight?: number;
};

export type TooltipContainerProps = {
  /* Trigger for the Tooltip to open */
  trigger?: 'hover' | 'click';
};

export type TooltipProps = TooltipResponsiveProps &
  TooltipComponentProps &
  TooltipContainerProps &
  BlockWithoutStyleProp<HTMLDivElement>;

export type TooltipResponsiveCSSProperties =
  | 'height'
  | 'max-height'
  | 'min-height'
  | 'max-width'
  | 'min-width'
  | 'width';

export type TooltipResponsivePropValues = ValueOf<TooltipResponsiveProps>;

export type TooltipResponsiveCSSPropertiesData = {
  propName: TooltipResponsiveCSSProperties;
  prop: TooltipResponsivePropValues;
};
