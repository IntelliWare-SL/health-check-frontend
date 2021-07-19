import * as actionTypes from './homeActionTypes';

// Actions happening in home page
export function formsOpenClose(data) {
  return { type: actionTypes.OPEN_CLOSE_FORMS, data };
}

export function loginUser(data) {
  return { type: actionTypes.LOGIN, data };
}

export function logOutUser(data) {
  return { type: actionTypes.LOG_OUT, data };
}

export function registerUser(data) {
  return { type: actionTypes.REGISTER, data };
}
