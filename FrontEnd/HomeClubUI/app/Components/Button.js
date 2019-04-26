import React, { Component } from 'react';

import {
    Text,
    Image,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default class Button extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <TouchableOpacity style={Styles.button}>
                    <Text style={Styles.buttonText}>Login / SignUp</Text>
                </TouchableOpacity>
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
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000000',
        textAlign: 'center'
    },
    button: {
        backgroundColor: 'rgba(34, 167, 240, 1)',
        width: 300,
        borderRadius: 25,
        paddingVertical: 16
    }
});


