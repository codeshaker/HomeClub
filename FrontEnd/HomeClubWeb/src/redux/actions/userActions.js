import * as types from "./actionTypes";
import * as usersApi from "../../api/usersApi";

export function loadUsersSuccess(users) {
  return { type: types.LOAD_USERS_SUCCESS, users };
}

// This is a thunk
export function loadUsers() {
  return function(dispatch) {
    return usersApi
      .getUsers()
      .then(users => {
        dispatch(loadUsersSuccess(users));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function CreateUser(user) {
  return function(dispatch, getState, { getFirebase, getFirestore }) {
    // make async call to database
    const firestore = getFirestore();
    firestore
      .collection("users")
      .add({
        ...user,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: types.CREATE_USER_SUCCESS, user });
      })
      .catch(err => {
        dispatch({ type: types.CREATE_USER_ERROR, err });
      });
  };
}
