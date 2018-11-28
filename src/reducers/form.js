import { INPUT_UPDATE } from '../constants';

const defaultState = {
  words: '',
  name: '',
  email: '',
};

export default function form(state = defaultState, action) {
  switch (action.type) {
    case INPUT_UPDATE:
      return {
        ...state,
        [action.payload.inputName]: action.payload.inputValue,
      };
    default:
      return state;
  }
}
