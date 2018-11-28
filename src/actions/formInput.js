/* eslint-disable import/prefer-default-export */

import { INPUT_UPDATE } from '../constants';

export function updateInput({ inputName, inputValue }) {
  return {
    type: INPUT_UPDATE,
    payload: {
      inputName,
      inputValue,
    },
  };
}
