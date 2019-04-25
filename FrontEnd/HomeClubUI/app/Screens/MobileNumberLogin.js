import React, { Component } from 'react';
import {
    Text,
    Image,
    View,
    TextInput,
    StyleSheet
} from 'react-native';

import Logo from '../Components/Logo';
import MobileNumberForm from '../Components/MobileNumberForm';
import Button from '../Components/Button';


export default class MobileNumberLogin extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <Logo/>
                <MobileNumberForm/>
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
