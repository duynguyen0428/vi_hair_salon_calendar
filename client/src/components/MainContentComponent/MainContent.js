import React, { Component } from 'react';
import AppointmentList from '../../containers/AppointmentList/AppointmentList';
import AppointmentDetail from '../../containers/AppointmentDetail/AppointmentDetail';
import {Route,Switch} from 'react-router-dom';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import NavigationComponent from '../NavigationComponent/NavigationComponent';

import ScheduleAppointmentComponent from '../ScheduleComponent/ScheduleAppointmentComponent';
class MainContent extends Component {
  render() {
    return (
        <div className="container">
          <NavigationComponent />
          <div className="row">
            <Switch>
              <Route path="/appointment/:id" component={AppointmentDetail} />
              <Route path="/appointments" component={AppointmentList} />
              <Route exact path="/" component={AppointmentList} />
            </Switch>
          </div>
        </div>
    );
  }
}

export default MainContent;
