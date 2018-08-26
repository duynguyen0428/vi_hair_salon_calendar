import axios from "axios";
import { BASE_URL,APPOINTMENT_API,FETCH_APPOINTMENTS,DELETE_APPOINTMENT } from "./constants";
export function fetchAppointments() {
    var url = BASE_URL + APPOINTMENT_API;
    var request = axios.get(url);
    return {
        type: FETCH_APPOINTMENTS,
        payload: request
    };
}

export function deleteAppointment(apptId,callback){
    var url = BASE_URL + APPOINTMENT_API + "/"+apptId;
    var request = axios
                .delete(url)
                .then(() => callback());
    return {
        type: DELETE_APPOINTMENT,
        payload: apptId
    };
}


// export function fetchPostsWithRedux() {
//     return (dispatch) => {
//     // dispatch(fetchPostsRequest());
//     return fetchPosts().then(([response, json]) =>{
//         if(response.status === 200){
//         dispatch(fetchAppointments(json))
//       }
//       else{
//         // dispatch(fetchPostsError())
//       }
//     })
//   }
// }

// function fetchPosts() {
//   const URL = "http://localhost:5000/api/v1/appointment";
//   return fetch(URL, { method: 'GET'})
//      .then( response => Promise.all([response, response.json()]));
// }