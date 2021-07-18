// eslint-disable-next-line no-unused-vars
import { all, takeEvery, takeLatest } from 'redux-saga/effects';
import * as homeActionTypes from '../pages/Home/redux/homeActionTypes';
import * as doctorsActionTypes from '../pages/Doctors/redux/doctorsActionTypes';
import * as dashboardActionTypes from '../pages/Dashboard/redux/dashboardActionTypes';

import { getData, loginUser, registerUser } from '../pages/Home/redux/homeSaga';
import {
  getDoctors,
  getSelectedDoctor,
  placeAppointment,
} from '../pages/Doctors/redux/doctorsSaga';
import {
  cancelAppointments,
  getAppointments,
  getDoctorAppointments,
} from '../pages/Dashboard/redux/dashboardSaga';

export default function* root() {
  yield all([
    // Home page
    takeEvery(homeActionTypes.GET_DATA, getData),
    takeEvery(homeActionTypes.LOGIN, loginUser),
    takeEvery(homeActionTypes.REGISTER, registerUser),

    // Doctors
    takeEvery(doctorsActionTypes.GET_DOCTORS_DATA, getDoctors),
    takeEvery(doctorsActionTypes.GET_SELECTED_DOCTOR, getSelectedDoctor),
    takeEvery(doctorsActionTypes.PLACE_APPOINTMENT, placeAppointment),

    // DashBoard
    takeEvery(dashboardActionTypes.GET_PATIENT_APPOINTMENTS, getAppointments),
    takeEvery(
      dashboardActionTypes.GET_DOCTOR_APPOINTMENTS,
      getDoctorAppointments
    ),
    takeEvery(dashboardActionTypes.CANCEL_APPOINTMENTS, cancelAppointments),
  ]);
}
