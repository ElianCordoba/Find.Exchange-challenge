import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import modal from './modal';
import form from './form';

export default combineReducers({
  user,
  runtime,
  modal,
  form,
});
