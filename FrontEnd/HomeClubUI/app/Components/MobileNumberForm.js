import React, { Component } from 'react';
import Logo from '../Components/Logo';
import Button from '../Components/Button';

import {
    Text,
    Image,
    View,
    TextInput,
    StyleSheet
} from 'react-native';

export default class MobileNumberForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            myNumber: '',
            showLoginButton: false
        };
      }

    render() {
        return (
            <View style={Styles.container}>
                <TextInput style={Styles.inputBox} 
                    underlineColorAndroid='rgba(255,0,255,0)'
                    placeholder='Mobile Number'
                    placeholderTextColor='#000000'
                    keyboardType='numeric'
                    onChangeText={(text)=> this.onChanged(text)}
                    value={this.state.myNumber}
                    maxLength={10}/>
                    {
                        (this.state.showLoginButton) ? <Button/> : null 
                    }
            </View>
        )
    }

    onChanged(text){
        let newText = '';
        let numbers = '0123456789';
    
        for (var i=0; i < text.length; i++) {
            if(numbers.indexOf(text[i]) > -1 ) {
                newText = newText + text[i];
            }
            else {
                // your call back function
                alert("please enter numbers only");
            }
        }
        this.setState({ myNumber: newText });

        if(newText.length == 10) {
            this.setState({ 
                myNumber: newText,
                showLoginButton: !this.state.showLoginButton
            });
       }
    }
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        justifyContent: 'flex-start',
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
