import {combineReducers} from 'redux';
import employeesReducer from './employeesReducer';
import attendancesReducer from './attendancesReducer';
import errorReducer from './errorReducer';
export default combineReducers({
   errorReducer:errorReducer,
   attendances:attendancesReducer,
   employees:employeesReducer

});