import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {fetchAppointments} from '../../action/index';
import {Table, Modal} from "reactstrap";
import _ from 'lodash';
import moment from 'moment';
import {Link} from 'react-router-dom';
import AppointmentDetail from '../AppointmentDetail/AppointmentDetail';

class AppointmentList extends Component {
    constructor(){
        super()
        this.componentDidMount = () => {
            this.props.fetchAppointments();

            this.renderModal = this.renderModal.bind(this);
        }
    }

  renderModal(e){
      console.log(e)
      return(          
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
        <div className="modal-content">
            // <AppointmentDetail id={'5b7e3c759e64cf2c2c901905'} />
        </div>
        </div>
        </div>
      )
  }

  renderList(){
        return _.map(this.props.Appointments, appt =>{
            return (
                // <AppointmentDetail key={appt._id} app={appt}/>
                <tr key={appt._id}>
                {/* <th scope="row">{index}</th> */}
                <td> {appt.cust_name} </td>
                <td> {moment(appt.date).format("LL")} </td>
                <td>{appt.email}</td>
                <td><Link to="/appointment/5b7e3c759e64cf2c2c901905" className="btn btn-primary" >Edit</Link></td>
                <td><button className="btn btn-delete">Delete</button></td>
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
    return bindActionCreators({fetchAppointments }, dispatch);
  }

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps,mapDispatchToProps)(AppointmentList);
