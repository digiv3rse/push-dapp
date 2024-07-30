import {
  secondaryButtonSemantics,
  dangerButtonSemantics,
  dangerSecondaryButtonSemantics,
  outlineButtonSemantics,
  primaryButtonSemantics,
  tertiaryButtonSemantics,
} from '../semantics/semantics.button';
import { checkboxSemantics } from '../semantics/semantics.checkbox';
import { dropdownSemantics } from '../semantics/semantics.dropdown';
import { iconSemantics } from '../semantics/semantics.icon';
import { inputSemantics } from '../semantics/semantics.input';
import { modalSemantics } from '../semantics/semantics.modal';
import { radioSemantics } from '../semantics/semantics.radio';
import { skeletonSemantics } from '../semantics/semantics.skeleton';
import { strokeSemantics } from '../semantics/semantics.stroke';
import { surfaceSemantics } from '../semantics/semantics.surface';
import { switchSemantics } from '../semantics/semantics.switch';
import { textSemantics } from '../semantics/semantics.text';
import { textAreaSemantics } from '../semantics/semantics.textarea';
import { toastSemantics } from '../semantics/semantics.toast';
import { tooltipSemantics } from '../semantics/semantics.tooltip';
import { spinnerSemantics } from '../semantics/semantics.spinner';

// TODO: find a better way to do this in future
type SemanticKeys = {
  buttonPrimary: 'components-button-primary';
  buttonSecondary: 'components-button-secondary';
  buttonTertiary: 'components-button-tertiary';
  buttonOutline: 'components-button-outline';
  buttonDanger: 'components-button-danger';
  buttonDangerSecondary: 'components-button-danger-secondary';
  checkbox: 'components-checkbox';
  dropdown: 'components-dropdown';
  icon: 'icon';
  input: 'components-inputs';
  modal: 'components-modal';
  radio: 'components-radio-button';
  surface: 'surface';
  stroke: 'stroke';
  skeleton: 'components-skeleton-loader';
  text: 'text';
  textArea: 'components-textarea';
  toast: 'components-toast';
  toggle: 'components-toggle-switch';
  tooltip: 'components-tooltip';
  spinner: 'components-spin-loader-spinner';
};

export const semanticKeys: SemanticKeys = {
  buttonPrimary: 'components-button-primary',
  buttonSecondary: 'components-button-secondary',
  buttonTertiary: 'components-button-tertiary',
  buttonOutline: 'components-button-outline',
  buttonDanger: 'components-button-danger',
  buttonDangerSecondary: 'components-button-danger-secondary',
  checkbox: 'components-checkbox',
  dropdown: 'components-dropdown',
  icon: 'icon',
  input: 'components-inputs',
  modal: 'components-modal',
  radio: 'components-radio-button',
  surface: 'surface',
  stroke: 'stroke',
  skeleton: 'components-skeleton-loader',
  text: 'text',
  textArea: 'components-textarea',
  toast: 'components-toast',
  toggle: 'components-toggle-switch',
  tooltip: 'components-tooltip',
  spinner: 'components-spin-loader-spinner',
};

export const colorSemantics = {
  [semanticKeys.buttonPrimary]: primaryButtonSemantics,
  [semanticKeys.buttonSecondary]: secondaryButtonSemantics,
  [semanticKeys.buttonTertiary]: tertiaryButtonSemantics,
  [semanticKeys.buttonOutline]: outlineButtonSemantics,
  [semanticKeys.buttonDanger]: dangerButtonSemantics,
  [semanticKeys.buttonDangerSecondary]: dangerSecondaryButtonSemantics,
  [semanticKeys.checkbox]: checkboxSemantics,
  [semanticKeys.dropdown]: dropdownSemantics,
  [semanticKeys.icon]: iconSemantics,
  [semanticKeys.input]: inputSemantics,
  [semanticKeys.modal]: modalSemantics,
  [semanticKeys.radio]: radioSemantics,
  [semanticKeys.surface]: surfaceSemantics,
  [semanticKeys.stroke]: strokeSemantics,
  [semanticKeys.skeleton]: skeletonSemantics,
  [semanticKeys.text]: textSemantics,
  [semanticKeys.textArea]: textAreaSemantics,
  [semanticKeys.toast]: toastSemantics,
  [semanticKeys.toggle]: switchSemantics,
  [semanticKeys.tooltip]: tooltipSemantics,
  [semanticKeys.spinner]: spinnerSemantics,
};
