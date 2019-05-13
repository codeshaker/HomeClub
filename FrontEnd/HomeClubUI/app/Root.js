import React from "react";
import { Provider } from "react-redux";
import { Navigator } from "./Navigation/Index";
import { store } from "./Store/Index";

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
