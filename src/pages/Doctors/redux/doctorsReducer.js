import * as actionTypes from './doctorsActionTypes';

const initialState = {
  allDoctors: [],
  filter: [],
  loading: false,
  placeOrderLoading: false,
  oneDoctorLoading: false,
  oneDoctorOpen: false,
  doctorDetails: { name: '', email: '', field: '', timeSlots: {} },
};

// all the doctors page actions are handled here
function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_FILTER:
      return {
        ...state,
        filter: action.data,
      };
    case actionTypes.OPEN_CLOSE_ONE_DOCTOR:
      return {
        ...state,
        oneDoctorOpen: action.data,
      };
    case actionTypes.GET_SELECTED_DOCTOR:
      return {
        ...state,
        oneDoctorOpen: true,
        oneDoctorLoading: true,
      };
    case actionTypes.GET_SELECTED_DOCTOR_SUCCESS:
      return {
        ...state,
        oneDoctorLoading: false,
        doctorDetails: { ...action.doctorDetails, timeSlots: action.timeSlots },
      };
    case actionTypes.GET_SELECTED_DOCTOR_ERROR:
      return {
        ...state,
        oneDoctorLoading: false,
      };
    case actionTypes.GET_DOCTORS_DATA:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_DOCTORS_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        allDoctors: action.data.result,
      };
    case actionTypes.GET_DOCTORS_DATA_ERROR:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.PLACE_APPOINTMENT:
      return {
        ...state,
        placeOrderLoading: true,
      };
    case actionTypes.PLACE_APPOINTMENT_ERROR:
      return {
        ...state,
        placeOrderLoading: false,
      };
    case actionTypes.PLACE_APPOINTMENT_SUCCESS:
      return {
        ...state,
        oneDoctorOpen: false,
        placeOrderLoading: false,
      };
    default:
      return state;
  }
}

export default reducer;
