import  React, {Component} from 'react'
import moment from 'moment';
import './AppointmentDetail.css';
import {connect} from 'react-redux';

import _ from 'lodash';
class AppointmentDetail extends Component {
  
      render(){
        console.log(this.props.appt);
       return ( 
         <ul>

        </ul>
       )
      };
};

 const mapStateToProps = (state,id)=>{
  //   return {
  //     Appointments: state.Appointments
  // };
  console.log(state.Appointments[id]);
  const appt =  state.Appointments.id ;
  console.log(appt);
  if(appt){
    return {appt}
  }else{
    return {}
  }
}

export default connect(mapStateToProps)(AppointmentDetail);
