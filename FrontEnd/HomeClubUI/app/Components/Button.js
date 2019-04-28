import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';

import {
    Text,
    Image,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

class Button extends Component {    
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={Styles.container}>
                <TouchableOpacity style={Styles.button} onPress={() => navigate('otp')} >
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

export default withNavigation(Button);


