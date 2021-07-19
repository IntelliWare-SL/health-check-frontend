import * as actionTypes from './dashboardActionTypes';

const initialState = {
  loading: false,
  patientAppointments: [],
  doctorAppointments: [],
};

// all the dashboard page actions are handled here
function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_PATIENT_APPOINTMENTS:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_PATIENT_APPOINTMENTS_SUCCESS:
      return {
        ...state,
        patientAppointments: action.data,
        loading: false,
      };
    case actionTypes.GET_PATIENT_APPOINTMENTS_ERROR:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.GET_DOCTOR_APPOINTMENTS:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_DOCTOR_APPOINTMENTS_SUCCESS:
      return {
        ...state,
        doctorAppointments: action.data,
        loading: false,
      };
    case actionTypes.GET_DOCTOR_APPOINTMENTS_ERROR:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.CANCEL_APPOINTMENTS:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.CANCEL_APPOINTMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.CANCEL_APPOINTMENTS_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

export default reducer;
