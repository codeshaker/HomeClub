import React, { Component } from "react";
import PhoneInput from "react-native-phone-input";
import { View, StatusBar, Text } from "react-native";
import { Container, Item, Input, Button } from "native-base";
import firebase from "react-native-firebase";
import {
  phoneChanged,
  codeChanged,
  onCodeDispatched,
  onPhoneLogin,
  clearAuth,
  onSignOut
} from "../Actions/AuthActions";
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
    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.navigation.navigate("Location");
      }
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }

  onPhoneChange(text) {
    this.props.phoneChanged(text);
    if (this.phone.isValidNumber()) {
      this.setState({
        valid: true
      });
    } else {
      this.setState({
        valid: false
      });
    }
  }

  onCodeChange(text) {
    this.props.codeChanged(text);
  }

  onLoginButtonPress() {
    this.props.onPhoneLogin(this.props.auth.phone);
  }

  onCodeButtonPress() {
    this.props.onCodeDispatched(this.props.auth.codeInput);
  }

  renderPhoneNumberInput() {
    const { auth } = this.props;
    return (
      <View
        style={{
          paddingRight: 20,
          paddingLeft: 20
        }}
      >
        <Item
          rounded
          style={{
            backgroundColor: "white",
            alignContent: "center"
          }}
        >
          <Input
            style={{
              textAlign: "center"
            }}
            maxLength={15}
            keyboardType={"phone-pad"}
          />
          <PhoneInput
            ref={ref => {
              this.phone = ref;
            }}
            style={{
              alignContent: "center",
              justifyContent: "center"
            }}
            textStyle={{
              fontSize: 20,
              fontWeight: "bold"
            }}
            onChangePhoneNumber={this.onPhoneChange.bind(this)}
            value={auth.phone}
          />
        </Item>
        {this.state.valid ? (
          <Button
            light
            rounded
            style={{
              width: "100%",
              marginTop: 10,
              justifyContent: "center"
            }}
            onPress={this.onLoginButtonPress.bind(this)}
          >
            <Text
              style={{
                fontSize: 20,
                color: "#042a41",
                fontWeight: "bold"
              }}
            >
              Log In / SignUp
            </Text>
          </Button>
        ) : null}
      </View>
    );
  }

  renderCodeInput() {
    const { auth } = this.props;
    return (
      <View
        style={{
          paddingRight: 20,
          paddingLeft: 20
        }}
      >
        <Item
          rounded
          style={{
            backgroundColor: "white",
            alignContent: "center"
          }}
        >
          <Input
            style={{
              textAlign: "center",
              fontSize: 20,
              color: "#042a41",
              fontWeight: "bold"
            }}
            maxLength={8}
            keyboardType={"numeric"}
            placeholder="confirmation code here"
            onChangeText={this.onCodeChange.bind(this)}
            value={auth.codeInput}
          />
        </Item>
        {auth.codeInput !== "" && (
          <Button
            light
            rounded
            style={{
              width: "100%",
              marginTop: 10,
              justifyContent: "center"
            }}
            onPress={this.onCodeButtonPress.bind(this)}
          >
            <Text
              style={{
                fontSize: 20,
                color: "#042a41",
                fontWeight: "bold"
              }}
            >
              Enter Code
            </Text>
          </Button>
        )}
      </View>
    );
  }

  renderStatusMessage() {
    const { message } = this.props.auth;
    if (message) {
      return (
        <View
          style={{
            paddingRight: 20,
            paddingLeft: 20
          }}
        >
          <Text
            style={{
              margin: 25,
              fontWeight: "bold",
              fontSize: 18,
              color: "white"
            }}
          >
            {message.startsWith("Sign in with Phone number error:")
              ? "Waiting to read verification SMS..."
              : message}
          </Text>
        </View>
      );
    }
    return null;
  }

  render() {
    const { auth } = this.props;
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
          {!auth.confirmResult && this.renderPhoneNumberInput()}
          {auth.confirmResult && this.renderCodeInput()}
          {this.renderStatusMessage()}
          {auth.message.startsWith("Code confirmation error:") && (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Button
                light
                rounded
                style={{
                  width: "100%",
                  marginTop: 10,
                  justifyContent: "center"
                }}
                onPress={() => this.props.clearAuth()}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "#042a41",
                    fontWeight: "bold"
                  }}
                >
                  Try Again
                </Text>
              </Button>
            </View>
          )}
        </Container>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  console.log(JSON.stringify(state) + "*************");
  return {
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  {
    phoneChanged,
    codeChanged,
    onCodeDispatched,
    onPhoneLogin,
    clearAuth,
    onSignOut
  }
)(LoginScreen);
