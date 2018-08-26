import {combineReducers } from "redux";
import AppointmentList from './reducer_appointmentlist';
import {reducer as FormReducer} from 'redux-form';

const rootReducer = combineReducers({
    Appointments : AppointmentList,
    form: FormReducer
})

export default rootReducer;