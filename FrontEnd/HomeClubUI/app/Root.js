import React, { Component } from 'react';
import Launch from './Root/Launch';
import Logo from './Components/Logo';
import MobileNumberLogin from './Screens/MobileNumberLogin';

import {
    Text,
    Image,
    View,
    StyleSheet
} from 'react-native';

export default class Root extends Component {
    render() {
        return (
            <MobileNumberLogin/>
        )
    }
}