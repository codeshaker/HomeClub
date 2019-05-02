import * as types from "./actionTypes";

export const signIn = credentials => {
  return function(dispatch, getState, { getFirebase }) {
    const firebase = getFirebase();
    var appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(credentials.phoneNumber, appVerifier)
      .then(function(confirmationResult) {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        dispatch({ type: types.LOGIN_SUCCESS });
      })
      .catch(function(err) {
        // Error; SMS not sent
        // ...
        dispatch({ type: types.LOGIN_ERROR, err });
      });
  };
};
