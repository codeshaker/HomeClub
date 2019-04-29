import * as types from "./actionTypes";
import * as usersApi from "../../api/usersApi";

export function loadCourseSuccess(users) {
  return { type: types.LOAD_USERS_SUCCESS, users };
}

// This is a thunk
export function loadUsers() {
  return function(dispatch) {
    return usersApi
      .getUsers()
      .then(users => {
        dispatch(loadCourseSuccess(users));
      })
      .catch(error => {
        throw error;
      });
  };
}
