import { combineReducers } from "redux";
import users from "./userReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  users,
  firestoreReducer,
  firebaseReducer,
  authReducer
});

export default rootReducer;
