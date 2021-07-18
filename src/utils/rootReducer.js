import { combineReducers } from 'redux';
import homeReducer from '../pages/Home/redux/homeReducer';
import doctorsReducer from '../pages/Doctors/redux/doctorsReducer';
import dashboardReducer from '../pages/Dashboard/redux/dashboardReducer';

export default combineReducers({
  homeReducer,
  dashboardReducer,
  doctorsReducer,
});
