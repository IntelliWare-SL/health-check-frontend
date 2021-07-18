import { toast } from 'react-toastify';
import { put } from 'redux-saga/effects';
import createRequest from '../../../utils/axios';
import * as actionTypes from './homeActionTypes';

// eslint-disable-next-line import/prefer-default-export
export function* getData() {
  yield console.log('Saga Working');
}

export function* loginUser(action) {
  const Axios = yield createRequest();
  try {
    const { data } = yield Axios.post(`${action.data.type}/login`, action.data);
    localStorage.setItem('idToken', data.token);
    yield put({
      type: actionTypes.LOGIN_SUCCESS,
      data,
    });
  } catch (error) {
    yield put({
      type: actionTypes.LOGIN_ERROR,
    });
    toast.error(error.response ? error.response.data.message : 'Unknown Error');
  }
}

export function* registerUser(action) {
  const Axios = yield createRequest();
  try {
    const { data } = yield Axios.post(`patient/register`, action.data);
    toast.success('Registered Successfully');
    yield put({
      type: actionTypes.REGISTER_SUCCESS,
      data,
    });
  } catch (error) {
    yield put({
      type: actionTypes.REGISTER_ERROR,
    });
    toast.error(error.response ? error.response.data.message : 'Unknown Error');
  }
}
