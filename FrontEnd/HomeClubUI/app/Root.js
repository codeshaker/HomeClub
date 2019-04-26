import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Launch from './Root/Launch';
import Logo from './Components/Logo';
import MobileNumberLogin from './Screens/MobileNumberLogin';

import {
    Text,
    Image,
    View,
    StyleSheet
} from 'react-native';

const AppNavigator = createStackNavigator({
    splash: {
      screen: Launch
    },
    login: {
      screen: MobileNumberLogin
    },
   },
    {
        defaultNavigationOptions: {
          header: null
        },
      }
    );
  
export default createAppContainer(AppNavigator);