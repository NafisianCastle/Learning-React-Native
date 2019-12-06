import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Input from '../components/common/Input'

export default class SignupScreen extends Component {
  render() {
    return (
      <View style={{flex:1,marginTop:50,marginHorizontal:20}}>
            <Text style={{marginBottom:20,fontSize:20}}>Create new account</Text>
            <Input placeholder='Email'/>
            <Input placeholder='Password' secureTextEntry='true'/>
      </View>
    )
  }
}