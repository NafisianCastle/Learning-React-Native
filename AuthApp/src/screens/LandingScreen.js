import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Button from './../components/common/Button';

export default class LandingScreen extends Component {
  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Button title="Sign in"/>
            <Button title="Sign up"/>
      </View>
    )
  }
}