import React, { Component } from "react";
import Logo from "../Components/Logo";
//import { firebase } from "react-native-firebase";
import { firebaseAuth } from "../Config/firebase";
import { Text } from "react-native";

class LaunchScreen extends Component {
  componentDidMount() {
    this.unsubscribe = firebaseAuth.onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? "App" : "Auth");
    });
  }

  render() {
    return <Text>Launch Screen</Text>;
  }
}

export default LaunchScreen;
