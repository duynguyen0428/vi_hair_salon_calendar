import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {fetchAppointments,deleteAppointment} from '../../action/index';
import {Table, Modal} from "reactstrap";
import _ from 'lodash';
import moment from 'moment';
import {Link,Redirect } from 'react-router-dom';

class AppointmentList extends Component {
    constructor(){
        super()
        this.componentDidMount = () => {
            setInterval(() => {this.props.fetchAppointments()},5000);
        }
    }

    deleteAppintment(id){
        this.props.deleteAppointment(id,()=>{
            return <Redirect to="/" />
        })
    }

  renderList(){
        return _.map(this.props.Appointments, appt =>{
            return (
                <tr key={appt._id}>
                <td> {appt.cust_name} </td>
                <td> {moment(appt.date).format("LL")} </td>
                <td>{appt.email}</td>
                <td><Link to={"/appointment/" + appt._id} className="btn btn-primary" >Edit</Link></td>
                <td><button className="btn btn-delete" onClick={this.deleteAppintment.bind(this,appt._id)}>Delete</button></td>
              </tr>
            );
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

            <Modal>
                <div className="modal display-block">
                    <section className="modal-main">
                    <p> </p>
                    <button >close</button>
                    </section>
                </div>
            </Modal>
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
    return bindActionCreators({fetchAppointments , deleteAppointment}, dispatch);
  }

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps,mapDispatchToProps)(AppointmentList);
