import { combineReducers } from 'redux';
import homeReducer from '../pages/Home/redux/homeReducer';
import doctorsReducer from '../pages/Doctors/redux/doctorsReducer';
import dashboardReducer from '../pages/Dashboard/redux/dashboardReducer';

// combining all the reducers in here
export default combineReducers({
  homeReducer,
  dashboardReducer,
  doctorsReducer,
});
