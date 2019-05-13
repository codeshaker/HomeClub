import React, { Component } from "react";
import Logo from "../Components/Logo";
//import { firebase } from "react-native-firebase";
import { auth } from "../Config/firebase";
import { Text } from "react-native";

class LaunchScreen extends Component {
  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? "App" : "Auth");
    });
  }

  render() {
    return <Text>Launch Screen</Text>;
  }
}

export default LaunchScreen;
