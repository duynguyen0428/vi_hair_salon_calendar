import {combineReducers } from "redux";
import AppointmentList from './reducer_appointmentlist';

const rootReducer = combineReducers({
    Appointments : AppointmentList
})

export default rootReducer;