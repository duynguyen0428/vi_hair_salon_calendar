import _ from 'lodash';
import {FETCH_APPOINTMENTS, DELETE_APPOINTMENT} from '../action/constants';
export default function(state = {}, action) {
    switch (action.type) {
      case DELETE_APPOINTMENT:
        state = _.omit(state,action.payload);
        return state;
      case FETCH_APPOINTMENTS:
        return _.mapKeys(action.payload.data,"_id");
      default:
        return state;
    }
  }