import React, { Component } from 'react';
import Logo from '../Components/Logo';

import {
    Text,
    Image,
    View,
    StyleSheet
} from 'react-native';

export default class Launch extends Component {
    render() {
        return (
            <Logo/>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        justifyContent: 'center',
        alignItems : 'center'
    },
    text: {
        fontSize: 18,
        color: '#000000'
    }
});


