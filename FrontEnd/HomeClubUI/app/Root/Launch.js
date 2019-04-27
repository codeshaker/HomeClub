import React, { Component } from 'react';
import Logo from '../Components/Logo';
import { StackActions, NavigationActions } from 'react-navigation';

import {
    Text,
    Image,
    View,
    StyleSheet
} from 'react-native';

export default class Launch extends Component {
    
    componentDidMount() {
        const { navigate } = this.props.navigation;
        setTimeout(
            () => {
                navigate('login')
            },
            2*1000
        );
    }

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


