import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Input from '../components/common/Input'
import Button from '../components/common/Button'
import * as firebase from 'firebase'

export default class SignupScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:''
    }
  }
  onChangeEmail = text => {
      this.setState({
        email:text
      })
  }
  onChangePassword = text => {
      this.setState({
        password:text
      })
  }
  signUp =()=>{
    const {email,password}=this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .then(user => console.log('user',user));
  }
  render() {
    return (
      <View style={{flex:1,marginTop:50,marginHorizontal:20}}>
            <Text style={{marginBottom:20,fontSize:20}}>Create new account</Text>
            <Input handleInput={text => this.onChangeEmail(text)} placeholder='Email'/>
            <Input handleInput={text => this.onChangePassword(text)} placeholder='Password' secureTextEntry={true}/>
            <Button onPressButton={this.signUp} title="Submit"/>
      </View>
    )
  }
}