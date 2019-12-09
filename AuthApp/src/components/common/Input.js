import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput } from 'react-native';

export default class Input extends Component{
    render(){
        const {placeholder,handleinput,secureTextEntry} = this.props;
        return(
            <TextInput
                style={{
                    height:50,
                    borderRadius: 8,
                    padding:10,
                    borderColor:'orange',
                    borderBottomWidth:2,
                    marginBottom:25
                }}
                placeholder={placeholder}
                onChangeText={handleinput}
                secureTextEntry={secureTextEntry}
            />
        )
    }
}
