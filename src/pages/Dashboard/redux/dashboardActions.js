import * as actionTypes from './dashboardActionTypes';

// Actions happening in dashboard page
export function getPatientAppointments() {
  return { type: actionTypes.GET_PATIENT_APPOINTMENTS };
}

export function getDoctorAppointments() {
  return { type: actionTypes.GET_DOCTOR_APPOINTMENTS };
}

export function cancelAppointments(data) {
  return { type: actionTypes.CANCEL_APPOINTMENTS, data };
}
