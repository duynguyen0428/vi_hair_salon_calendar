import  React, {Component} from 'react'
import moment from 'moment';
import './AppointmentDetail.css';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

import _ from 'lodash';
import { Link } from 'react-router-dom';
class AppointmentDetail extends Component {
    constructor(){
      super();
      this.state = {appt : ''}
    }
    componentDidMount(){
      this.setState( {'appt': this.getAppointment(this.props.match.params.id)});
      this.handleSubmit = this.handleSubmit.bind(this);
    };
      getAppointment(id){
       return _.find(this.props.Appointments,(a)=>{
          return a._id === this.props.match.params.id;
        })
      }

      handleSubmit(values){
        console.log(values)
      }

      renderField({input,label,type,data,meta:{touched,error}}){
        return(
          <div>
            <label> {label} </label>
            <div>
              <input {...input} type={type} value={data} disabled={true}/>              
            </div>
          </div>
        );
      }

      render(){
      if((typeof this.state.appt !== 'undefined') && (typeof this.state.appt !== null ))
      {
        return ( 
         <form onSubmit={this.handleSubmit}>
         <Field
          name="cust_name"
          component={this.renderField}
          type = "text"
          label="Customer Name"
          data={this.state.appt.cust_name}
         />
         <Field
         name="email"
         component={this.renderField}
         type = "email"
         label="Customer Email"
         data={this.state.appt.email}
         />
         <Field
         name="apptdate"
         component={this.renderField}
         type = "date"
         label="Appointment Date"
         data={this.state.appt.date}
         />

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
}


// export default AppointmentDetail;
export default reduxForm({
  form: 'appointmentDetailForm'
})(connect(mapStateToProps)(AppointmentDetail));
