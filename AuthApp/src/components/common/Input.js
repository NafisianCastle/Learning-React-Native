import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput } from 'react-native';

const styles = StyleSheet.create({
    
});

export default class Button extends Component{
    render(){
        const {placeholder,handleinput,secureTextEntry} = this.props;
        return(
            <TextInput
                style={{height:50,borderRadius: 8,padding:10,borderBottomColor:'orange',borderBottomWidth:2}}
                placeholder={placeholder}
                onChangeText={handleinput}
                secureTextEntry={secureTextEntry}
            />
        )
    }
}
