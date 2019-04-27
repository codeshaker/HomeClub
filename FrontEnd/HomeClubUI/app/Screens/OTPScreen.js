import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import OtpInputs from 'react-native-otp-inputs'

 
export default class App extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <OtpInputs handleChange={code => console.log(code)} numberOfInputs={4} />
      </View>
    )
  }
}


const Styles = StyleSheet.create({
  container: {
      backgroundColor: '#ffffff',
      flex: 1,
      justifyContent: 'center',
      alignItems : 'center'
  }
});