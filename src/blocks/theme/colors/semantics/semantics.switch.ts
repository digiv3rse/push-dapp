import { colorBrands } from '../colors.brands';
import { colorPrimitives } from '../colors.primitives';
import { iconSemantics } from './semantics.icon';
import { strokeSemantics } from './semantics.stroke';
import { surfaceSemantics } from './semantics.surface';

export const switchSemantics = {
  'background-selected': { light: colorBrands['primary-600'], dark: colorBrands['primary-600'] },
  'background-unselected': { light: colorBrands['neutral-300'], dark: colorBrands['neutral-800'] },
  'background-hover': { light: colorBrands['primary-500'], dark: colorBrands['primary-500'] },
  'background-focus': { light: colorBrands['primary-500'], dark: colorBrands['primary-600'] },
  'background-disabled': { light: surfaceSemantics['disabled'].light, dark: surfaceSemantics['disabled'].dark },

  'icon-default': { light: colorPrimitives['white-100'], dark: colorPrimitives['white-100'] },
  'icon-disabled': { light: iconSemantics['disabled'].light, dark: iconSemantics['disabled'].dark },

  'stroke-focus': { light: colorBrands['primary-300'], dark: colorBrands['primary-500'] },
  'stroke-default': { light: strokeSemantics['tertiary'].light, dark: strokeSemantics['tertiary'].dark },
};
