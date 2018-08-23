import React, { Component } from 'react';
import AppointmentList from '../../containers/AppointmentList/AppointmentList';
import AppointmentDetail from '../../containers/AppointmentDetail/AppointmentDetail';
import {Route,Redirect,Switch} from 'react-router-dom';
import HeaderComponent from '../HeaderComponent/HeaderComponent';


import ScheduleAppointmentComponent from '../ScheduleComponent/ScheduleAppointmentComponent';
class MainContent extends Component {
  render() {
    return (
        <div className="container">
          <div className="row">
              <div className="col-xs-10 col-xs-offset-1">
                <HeaderComponent />
              </div>
          </div>
          <Route exact path="/" component={AppointmentList} />
          <Route path="/appointments" component={AppointmentList} />
          <Route path="/appointment/:id" component={AppointmentDetail} />
        </div>
    );
  }
}

export default MainContent;
