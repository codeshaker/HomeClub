import React, { Component } from "react";
import PhoneInput from "react-native-phone-input";
import { View, StatusBar, Text } from "react-native";
import { Container, Item, Input, Button } from "native-base";
import { firebaseAuth } from "../Config/firebase";
import { phoneChanged } from "../Actions/AuthActions";
import { connect } from "react-redux";

class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      valid: ""
    };
  }

  componentDidMount() {
    this.unsubscribe = firebaseAuth.onAuthStateChanged(user => {
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
    console.log("auth", auth.confirmResult);
    return (
      <Container style={{ flex: 1, backgroundColor: "#4F6D7A" }}>
        <StatusBar barStyle="light-content" backgroundColor="#062b40" />
        <Text>This is LoginScreen</Text>
        <Container
          style={{
            flex: 1,
            justifyContent: "center",
            backgroundColor: "#4F6D7A"
          }}
        >
          {auth.confirmResult}
        </Container>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  console.log("Inside MapsStatetoProps***************");
  console.log(JSON.stringify(state) + "*************");
  return {
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  { phoneChanged }
)(LoginScreen);
