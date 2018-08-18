import  React, { Component } from 'react'
import moment from 'moment';
const AppointmentDetail = ({app}) =>{
    return (
    <tr>
      {/* <th scope="row">{index}</th> */}
      <td> {app.cust_name} </td>
      <td> {moment(app.date).format("LL")} </td>
      <td>{app.email}</td>
    </tr>
    );
}
export default AppointmentDetail;
