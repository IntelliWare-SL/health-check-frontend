import * as actionTypes from './doctorsActionTypes';

export function getDoctors() {
  return { type: actionTypes.GET_DOCTORS_DATA };
}

export function oneDoctorOpenClose(data) {
  return { type: actionTypes.OPEN_CLOSE_ONE_DOCTOR, data };
}

export function getSelectedDoctor(data) {
  return { type: actionTypes.GET_SELECTED_DOCTOR, data };
}

export function placeAppointment(data) {
  return { type: actionTypes.PLACE_APPOINTMENT, data };
}

export function setFilter(data) {
  return { type: actionTypes.SET_FILTER, data };
}
