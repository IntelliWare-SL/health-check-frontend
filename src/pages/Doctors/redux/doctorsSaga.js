import { toast } from 'react-toastify';
import { put, select } from 'redux-saga/effects';
import createRequest from '../../../utils/axios';
import * as actionTypes from './doctorsActionTypes';

export function* getDoctors(action) {
  const filter = yield select((state) => state.doctorsReducer.filter);
  const Axios = yield createRequest();
  try {
    const { data } = yield Axios.get(`doctor`, {
      params: { filter: filter.length > 0 ? filter : [''] },
    });
    yield put({
      type: actionTypes.GET_DOCTORS_DATA_SUCCESS,
      data,
    });
  } catch (error) {
    toast.error(error.response.data.message);
    yield put({
      type: actionTypes.GET_DOCTORS_DATA_ERROR,
    });
  }
}

export function* getSelectedDoctor(action) {
  const { _id } = action.data.doctor;
  const Axios = yield createRequest();
  try {
    const { data } = yield Axios.get(`doctor/${_id}`);
    yield put({
      type: actionTypes.GET_SELECTED_DOCTOR_SUCCESS,
      timeSlots: data.result,
      doctorDetails: action.data.doctor,
    });
  } catch (error) {
    toast.error(error.response.data.message);
    yield put({
      type: actionTypes.GET_SELECTED_DOCTOR_ERROR,
    });
  }
}

export function* placeAppointment(action) {
  const Axios = yield createRequest();
  try {
    const { data } = yield Axios.post(`patient/appointment`, action.data);
    yield put({
      type: actionTypes.PLACE_APPOINTMENT_SUCCESS,
    });
    toast.success('Successfully made the appointment');
  } catch (error) {
    yield put({
      type: actionTypes.PLACE_APPOINTMENT_ERROR,
    });
    toast.error(error.response ? error.response.data.message : 'Unknown Error');
  }
}
