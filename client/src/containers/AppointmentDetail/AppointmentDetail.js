import  React, {Component} from 'react'
import moment from 'moment';
import './AppointmentDetail.css';
import {connect} from 'react-redux';

import _ from 'lodash';
import { Link } from '../../../node_modules/react-router-dom';
class AppointmentDetail extends Component {
    constructor(){
      super();
      this.state = {appt : ''}
    }
    componentDidMount(){
      this.setState( {'appt': this.getAppointment(this.props.match.params.id)});
    };
      getAppointment(id){
       return _.find(this.props.Appointments,(a)=>{
          return a._id === this.props.match.params.id;
        })
      }

      render(){
      if((typeof this.state.appt !== 'undefined') && (typeof this.state.appt !== null ))
      {
        return ( 
         <form>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Customer Name</label>
            <div className="col-sm-10">
              {this.state.appt.cust_name}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Appointment Date</label>
            <div className="col-sm-10">
              {this.state.appt.date} 
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-6">
              <button type="submit" className="btn btn-primary">Update</button>
            </div>
            <div className="col-sm-6 left">
            <Link to="/" className="btn btn-danger">Cancel</Link>
            </div>
          </div>

        </form>
        )
      }
        return <p> No appointment </p>
      };
};

 const mapStateToProps = (state)=>{
    return {
      Appointments: state.Appointments
  };
  // console.log(state.Appointments[id]);
  // const appt =  state.Appointments.id ;
  // console.log(appt);
  // if(appt){
  //   return {appt}
  // }else{
  //   return {}
  // }
}

// export default AppointmentDetail;
export default connect(mapStateToProps)(AppointmentDetail);
