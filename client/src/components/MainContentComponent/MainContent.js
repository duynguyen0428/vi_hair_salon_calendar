import React, { Component } from 'react';
import AppointmentList from '../../containers/AppointmentList/AppointmentList';
import GalleryComponent from '../GalleryComponent/GalleryComponent';
import {Route} from 'react-router-dom';


import ScheduleAppointmentComponent from '../ScheduleComponent/ScheduleAppointmentComponent';
class MainContent extends Component {
  render() {
    return (
        <div className="row">
          <Route path="/" component={GalleryComponent} />
          <Route path="/appointment" component={ScheduleAppointmentComponent} />
          <Route path="/appointments" component={AppointmentList} />
        </div>
    );
  }
}

export default MainContent;
