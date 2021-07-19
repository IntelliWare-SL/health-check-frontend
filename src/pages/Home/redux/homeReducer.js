import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import * as actionTypes from './homeActionTypes';

const initialState = {
  name: 'Home Page',
  loginFormOpen: false,
  RegisterFormOpen: false,
  loading: false,
};

// all the home page actions are handled here
function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.OPEN_CLOSE_FORMS:
      return { ...state, ...action.data };
    case actionTypes.LOGIN:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loginFormOpen: false,
        user: action.data.user,
        idToken: action.data.token,
        loading: false,
      };
    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.LOG_OUT:
      return {
        ...state,
        loginFormOpen: false,
        user: undefined,
        idToken: undefined,
      };
    case actionTypes.REGISTER:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        RegisterFormOpen: false,
        loginFormOpen: true,
        loading: false,
      };
    case actionTypes.REGISTER_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

const persistConfig = {
  keyPrefix: 'fcode-',
  key: 'cartlist',
  storage,
};

export default persistReducer(persistConfig, reducer);
