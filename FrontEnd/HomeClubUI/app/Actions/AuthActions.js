//import { firebase } from "react-native-firebase";
import * as actionTypes from "./ActionTypes";
import { firebaseAuth } from "../Config/firebase";

const phoneChanged = text => {
  return {
    type: actionTypes.PHONE_CHANGED,
    payload: text
  };
};

export { phoneChanged };
