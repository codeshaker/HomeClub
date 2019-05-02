import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_ERROR:
      console.log("login failed");
      return {
        ...state,
        authError: "login failed"
      };
    case types.LOGIN_SUCCESS:
      console.log("login success");
      return {
        ...state,
        authError: null
      };

    default:
      return state;
  }
}
