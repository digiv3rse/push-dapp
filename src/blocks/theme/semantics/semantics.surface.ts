import { colorBrands } from '../colors/colors.brands';
import { colorPrimitives } from '../colors/colors.primitives';

export const surfaceSemantics = {
  primary: { light: colorPrimitives['white-100'], dark: colorBrands['neutral-900'] },
  secondary: { light: colorBrands['neutral-100'], dark: colorBrands['neutral-1000'] },
  tertiary: { light: colorBrands['neutral-200'], dark: colorBrands['neutral-800'] },

  'primary-inverse': { light: colorPrimitives['black-100'], dark: colorPrimitives['white-100'] },

  'brand-subtle': { light: colorBrands['primary-200'], dark: colorBrands['primary-300'] },
  'brand-medium': { light: colorBrands['primary-600'], dark: colorBrands['primary-500'] },
  'brand-bold': { light: colorBrands['primary-700'], dark: colorBrands['primary-200'] },

  'glass-subtle': { light: colorPrimitives['white-80'], dark: colorPrimitives['black-80'] },
  'glass-bold': { light: colorPrimitives['white-50'], dark: colorPrimitives['black-50'] },

  // surface states

  'success-subtle': { light: colorBrands['success-100'], dark: colorBrands['success-500'] },
  'success-bold': { light: colorBrands['success-500'], dark: colorBrands['success-200'] },

  'info-subtle': { light: colorBrands['info-100'], dark: colorBrands['info-500'] },
  'info-bold': { light: colorBrands['info-500'], dark: colorBrands['info-200'] },

  'warning-subtle': { light: colorBrands['warning-100'], dark: colorBrands['warning-500'] },
  'warning-bold': { light: colorBrands['warning-500'], dark: colorBrands['warning-200'] },

  'danger-subtle': { light: colorBrands['danger-100'], dark: colorBrands['danger-800'] },
  'danger-bold': { light: colorBrands['danger-500'], dark: colorBrands['danger-200'] },

  disabled: { light: colorBrands['neutral-200'], dark: colorBrands['neutral-800'] },
};
