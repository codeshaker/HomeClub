import React, { Component } from 'react';

import {
    Text,
    Image,
    View,
    StyleSheet
} from 'react-native';

export default class Logo extends Component {
    render() {
        return (
            <View style={Styles.container} >
                <Image style={{width:40, height:70}} source={require('../Images/logo.png')}/>
                <Text style={Styles.logoText}>HomeClub</Text>
                <Text style={Styles.logoMetaData}>Quick.Affordable.Trustable</Text>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems : 'center',
        flexDirection: 'column',
    },
    logoText: {
        fontSize: 20,
        color: '#000000'
    },
    logoMetaData: {
        fontSize: 14,
        color: '#000000'
    }
});


