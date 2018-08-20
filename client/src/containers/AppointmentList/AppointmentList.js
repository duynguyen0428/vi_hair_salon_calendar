import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {fetchAppointments,fetchPostsWithRedux} from '../../action/index';
import {Table} from "reactstrap";

import AppointmentDetail from '../AppointmentDetail/AppointmentDetail';

class AppointmentList extends Component {
    constructor(){
        super()
        this.componentDidMount = () => {
            this.props.fetchAppointments();
        }
    }
  renderList(){
      return this.props.Appointments.map( appt => {
        if(typeof appt !== 'undefined' ){
            return appt.map(app =>{
                    return(                
                            <AppointmentDetail key={app._id} app={app}/>
                    );
                }) 
            }
        });
      }

  render() {
    return (
      <div className="table table-stripe">
        <Table className="table">
            <thead>
                <tr>
                <th scope="col">Customer Name</th>
                <th scope="col">Appointment Date</th>
                <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {this.renderList()}
            </tbody>
        </Table>
      </div>
    )
  }
}

function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside of BookList
    return {
        Appointments: state.Appointments
    };
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchAppointments }, dispatch);
  }

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps,mapDispatchToProps)(AppointmentList);
