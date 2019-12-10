import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Button from './../components/common/Button';

export default class LandingScreen extends Component {
    static navigationOptions = {
        title: 'Authentication'
    }
    signIn = () =>{
        this.props.navigation.navigate('Signin');
    }
    signUp = () =>{
        this.props.navigation.navigate('Signup');
    }
    render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Button
             onPressButton={this.signIn} 
             title="Sign in" 
             style={{width:200,borderRadius:8,backgroundColor:'#00bfff'}}
             />
            <Button
             onPressButton={this.signUp} 
             title="Sign up" 
             style={{width:300,borderRadius:8}}
             />
      </View>
    )
  }
}