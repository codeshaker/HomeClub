//import { firebase } from "react-native-firebase";
import * as actionTypes from "./ActionTypes";
import { auth } from "../Config/firebase";

const phoneChanged = text => {
  return {
    type: actionTypes.PHONE_CHANGED,
    payload: text
  };
};

const onLoginSuccess = (dispatch, user) => {
  dispatch({
    type: actionTypes.LOGIN_SUCCESS,
    payload: user
  });
};

const signOut = dispatch => {
  dispatch({
    type: actionTypes.LOGOUT
  });
};

const onPhoneLogin = phone => {
  return dispatch => {
    dispatch({
      type: actionTypes.LOGIN_USER_PHONE
    });
    auth
      .signInWithPhoneNumber(phone)
      //  sign in success
      .then(confirmResult => {
        onCodeSent(dispatch, confirmResult);
      })
      //  sign in error
      .catch(error => onCodeSentError(dispatch, error));
  };
};

const codeChanged = text => {
  return {
    type: actionTypes.CODE_CHANGED,
    payload: text
  };
};

const onCodeSent = (dispatch, confirmResult) => {
  dispatch({
    type: actionTypes.CODE_SENT,
    payload: confirmResult
  });
};

const onCodeConfirmError = (dispatch, error) => {
  dispatch({
    type: actionTypes.CODE_NOT_CONFIRMED,
    payload: error
  });
};

const onCodeDispatched = code => {
  return (dispatch, getState) => {
    getState()
      .auth.confirmResult.confirm(code)
      .then(user => onLoginSuccess(dispatch, user))
      .catch(error => onCodeConfirmError(dispatch, error));
  };
};

const onCodeSentError = (dispatch, error) => {
  dispatch({
    type: actionTypes.CODE_SENT_ERROR,
    payload: error
  });
};

const onSignOut = () => {
  return dispatch => {
    auth
      .signOut()
      .then(() => signOut(dispatch))
      .catch(error => console.log(error));
  };
};

const clearAuth = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.CLEAR_AUTH
    });
  };
};

export {
  onSignOut,
  clearAuth,
  codeChanged,
  onPhoneLogin,
  phoneChanged,
  onCodeDispatched
};
