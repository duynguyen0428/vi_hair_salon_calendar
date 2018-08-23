import _ from 'lodash';

export default function(state = {}, action) {
    switch (action.type) {
      case "FETCH_APPOINTMENTS":
      // console.log(action.payload.data)
        return _.mapKeys(action.payload.data,"_id");
      default:
        return state;
    }
    // return state;
  }