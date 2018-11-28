import { MODAL_TOGGLE } from '../constants';

export default function modal(state = { modalOpen: false }, action) {
  switch (action.type) {
    case MODAL_TOGGLE:
      return {
        ...state,
        modalOpen: !state.modalOpen,
      };
    default:
      return state;
  }
}
