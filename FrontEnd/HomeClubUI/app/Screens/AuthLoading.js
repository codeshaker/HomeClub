/*
 *  This Component Renders first and decides
 *  what should be rendered, App Screen or
 *  Auth Screen depending on whether the
 *  user is logged in or not.
 */

import React from "react";
import { View } from "react-native";
//import { firebaseAuth } from "../Config/firebase";
import firebase from "react-native-firebase";
import Logo from "../Components/Logo";

class AuthLoading extends React.Component {
  componentDidMount() {
    console.log("in auth loading");
    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? "App" : "Auth");
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }

  render() {
    return <Logo />;
  }
}

export default AuthLoading;
