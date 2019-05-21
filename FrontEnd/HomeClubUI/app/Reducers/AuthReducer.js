import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGIN_USER,
  PHONE_CHANGED,
  CODE_SENT_ERROR,
  CODE_CHANGED,
  CODE_DISPATCHED,
  LOGIN_USER_PHONE,
  CODE_SENT,
  CODE_NOT_CONFIRMED,
  LOGOUT,
  SET_USER_OBJECT,
  CLEAR_AUTH
} from "../Actions/ActionTypes";

export const INITIAL_STATE = {
  phone: "+91",
  user: null,
  message: "",
  loading: false,
  codeInput: "",
  confirmResult: null
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case PHONE_CHANGED:
      return {
        ...state,
        phone: action.payload
      };
    default:
      return state;
  }
};

export default AuthReducer;
