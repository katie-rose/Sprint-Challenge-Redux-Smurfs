/*
  Be sure to import in all of the action types from `../actions`
*/

import {
  GET_SMURFS,
  ADD_SMURF,
  SMURF_ADDED,
  FETCH_ERROR,
  DELETING_SMURF,
  SMURF_DELETED,
  UPDATE_SMURF,
  SMURF_UPDATED
} from "../actions";

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 */
const initialState = {
   smurfs: [],
   getSmurfs: false,
   addSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
}

export const smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_SMURFS:
      return Object.assign({}, state, {getSmurfs:true});
    case SMURF_ADDED:
      return Object.assign({}, state, {
        smurfs: [...state.smurfs, ...action.payload],
        getSmurfs: false
      });
    case FETCH_ERROR:
      return Object.assign({}, state, {
        getSmurfs: false,
        error: "Error fetching smurfs"
      });
    case ADD_SMURF:
      return {...state, addingSmurf: true };
    case SMURF_ADDED:
      return {...state, addingSmurf: false, smurfs: action.payload };
    case DELETING_SMURF:
      return {...state, deletingSmurf: true };
    case SMURF_DELETED:
      return {...state, deletingSmurf: false, smurfs: action.payload };
    case UPDATE_SMURF:
      return {...state, updatingSmurf: true};
    case SMURF_UPDATED:
      return {...state, updatingSmurf: false, smurfs: action.payload }
    default:
      return state;
  }
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/



