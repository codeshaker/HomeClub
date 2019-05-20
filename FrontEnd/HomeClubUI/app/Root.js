import React from "react";
import { Provider } from "react-redux";
import { Navigator } from "./Navigation/index";
import { store } from "./Store/index";

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
