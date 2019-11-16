import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    wrapper:{
        padding :15,
        backgroundColor:'orange'
    },
    btntxt:{
        color:'#fff', 
        fontWeight:'bold', 
        textAlign:'center',
    }
});

export default class Button extends Component{
    render(){
        return(
            <TouchableOpacity style={styles.wrapper}>
                <Text style={styles.btntxt}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}
