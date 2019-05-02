import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import firebaseConfig from "./../../firebaseConfig";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for redux dev tools

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(
        thunk.withExtraArgument({ getFirebase, getFirestore }),
        reduxImmutableStateInvariant()
      ),
      reduxFirestore(firebaseConfig),
      reactReduxFirebase(firebaseConfig)
    )
  );
}
