import axios from "axios";

export function fetchAppointments() {
    var url = "http://localhost:5000/api/v1/appointment";
    var request = axios.get(url);
    return {
        type: "FETCH_APPOINTMENTS",
        payload: request
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