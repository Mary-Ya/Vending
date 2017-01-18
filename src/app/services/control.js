import { CONTROL_AVAILABLE_ON } from '../constants/Config';

export function isDisabled(controlName, status) {
  return CONTROL_AVAILABLE_ON[controlName] !== status;
}
