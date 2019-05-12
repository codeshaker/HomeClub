import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text>This is Home screen where list of cook and maid shown.</Text>
      </View>
    );
  }
}

export default HomeScreen;
