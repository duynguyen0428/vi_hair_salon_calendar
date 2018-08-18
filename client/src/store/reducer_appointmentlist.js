export default function(state = [], action) {
    switch (action.type) {
      case "FETCH_APPOINTMENTS":
      console.log("action payload: ",action.payload.data )
        return [action.payload.data, ...state];
    }
    return state;
  }