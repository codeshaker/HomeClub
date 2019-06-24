import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Platform
} from "react-native";
import { Button } from "native-base";
import { connect } from "react-redux";
import firebase from "react-native-firebase";
import { onSignOut } from "../Actions/AuthActions";
import { stringify } from "qs";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: []
    };
  }

  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    // Checking user Auth State
    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? "App" : "Auth");
    });

    // Fetching the list of workers from Remote Url
    return fetch("https://api.myjson.com/bins/11147j")
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.workers
          },
          function() {
            // In this block you can do something with new state.
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }

  render() {
    // First Loadf the activity indicator till the json data is not fetched
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    console.log(this.state.dataSource);

    return (
      <View style={styles.container}>
        <FlatList>data = {this.state.dataSource}</FlatList>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  FlatListItemStyle: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    textAlign: "center",
    color: "white"
  }
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  { onSignOut }
)(HomeScreen);
