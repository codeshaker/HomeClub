import React, { Component } from "react";
import PhoneInput from "react-native-phone-input";
import { connect } from "react-redux";
import { View, StatusBar } from "react-native";
import { Container, Item, Input, Button, Text } from "native-base";
import { phoneChanged } from "../Actions/AuthActions";
//import firebase from "react-native-firebase";
import { auth } from "../Config/firebase";

class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor() {
    super();
    this.state = {
      valid: ""
    };
  }

  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        this.props.navigation.navigate("App");
      }
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }

  render() {
    const { auth } = this.props;
    return null;
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  { phoneChanged }
)(LoginScreen);
