import { toast } from 'react-toastify';
import { put } from 'redux-saga/effects';
import createRequest from '../../../utils/axios';
import * as actionTypes from './dashboardActionTypes';

// Get all the appointments of the currently logged in patient
export function* getAppointments() {
  const Axios = yield createRequest();
  try {
    const { data } = yield Axios.get('patient/me/appointment');
    yield put({
      type: actionTypes.GET_PATIENT_APPOINTMENTS_SUCCESS,
      data: data.result,
    });
  } catch (error) {
    toast.error(error.response.data.message);
    yield put({
      type: actionTypes.GET_PATIENT_APPOINTMENTS_ERROR,
    });
  }
}

// Get all the appointments of the currently logged in doctor
export function* getDoctorAppointments() {
  const Axios = yield createRequest();
  try {
    const { data } = yield Axios.get('doctor/me/appointment');
    yield put({
      type: actionTypes.GET_DOCTOR_APPOINTMENTS_SUCCESS,
      data: data.result,
    });
  } catch (error) {
    toast.error(error.response.data.message);
    yield put({
      type: actionTypes.GET_DOCTOR_APPOINTMENTS_ERROR,
    });
  }
}

// Cancel an appointment, this is a common method for both doctors and patients
export function* cancelAppointments(action) {
  const _id = action.data;
  const Axios = yield createRequest();
  try {
    const { data } = yield Axios.delete(`appointment/${_id}`);
    yield put({
      type: actionTypes.CANCEL_APPOINTMENTS_SUCCESS,
    });
    yield put({
      type: actionTypes.GET_PATIENT_APPOINTMENTS,
    });
    yield put({
      type: actionTypes.GET_DOCTOR_APPOINTMENTS,
    });
  } catch (error) {
    toast.error(error.response.data.message);
    yield put({
      type: actionTypes.CANCEL_APPOINTMENTS_ERROR,
    });
  }
}
