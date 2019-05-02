import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function userReducer(state = initialState.users, action) {
  switch (action.type) {
    case types.LOAD_USERS_SUCCESS:
      return action.users;
    case types.CREATE_USER_SUCCESS:
      console.log("created user", action.user);
      return state;
    case types.CREATE_USER_ERROR:
      console.log("create user error", action.err);
      return state;

    default:
      return state;
  }
}
