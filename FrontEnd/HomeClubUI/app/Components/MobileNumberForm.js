import React, { Component } from 'react';
import Logo from '../Components/Logo';

import {
    Text,
    Image,
    View,
    TextInput,
    StyleSheet
} from 'react-native';

export default class MobileNumberForm extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <TextInput style={Styles.inputBox} 
                    underlineColorAndroid='rgba(255,0,255,0)'
                    placeholder='Mobile Number'
                    placeholderTextColor='#000000'/>
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
    },
    inputBox: {
        width: 300,
        backgroundColor: 'rgba(255,255,0,0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#000000'
    }
});
