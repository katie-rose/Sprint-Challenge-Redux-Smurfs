/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

import axios from "axios";

export const ADD_SMURF = "ADD_SMURF";
export const FETCH_ERROR = "FETCH_ERROR";

export const GET_SMURFS = "GET_SMURFS";
export const SMURF_ADDED = "SMURF_ADDED";

export const UPDATE_SMURF = "UPDATE_SMURF";
export const SMURF_UPDATED = "SMURF_UPDATED";

export const DELETING_SMURF = "DELETING_SMURF";
export const SMURF_DELETED = "SMURF_DELETED";


export const addSmurf = () => dispatch => {
  dispatch({ type: ADD_SMURF });

  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log("fetch smurfs res", res);
      dispatch({ type: SMURF_ADDED, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_ERROR });
    });
};

export const newSmurf = smurf => dispatch => {
  dispatch({ type: GET_SMURF });

  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      console.log("newSmurf", smurf);
      console.log("newSmurf res", res);
      dispatch({ type: SMURF_ADDED, payload: res.data });
    })
    .catch(err => {
      console.log("newSmurf", smurf);

      dispatch({ type: FETCH_ERROR, payload: err });
    });
};

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETING_SMURF });

  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      dispatch({ type: SMURF_DELETED, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_ERROR, payload: err });
    });
};

export const updateSmurf = (id, info) => dispatch => {
  dispatch({ type: UPDATE_SMURF });

  axios
    .put(`http://localhost:3333/smurfs/${id}`, info)
    .then(res => {
      dispatch({ type: SMURF_UPDATED, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_ERROR, payload: err });
    });
};
