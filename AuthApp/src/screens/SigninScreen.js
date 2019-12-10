import React, { Component } from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import * as firebase from 'firebase'
import Input from './../components/common/Input';
import Button from './../components/common/Button';
export default class SigninScreen extends Component {
  
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
      loading : false
    }
  }
  
  signIn = () =>{
    const {email,password} = this.state;

    this.setState({
      loading:true
    })

    firebase
      .auth()
      .signInWithEmailAndPassword(email,password)
      .then(user =>{
          this.setState(
            {
              loading:false
            })
          console.log('user',user)
          this.props.navigation.navigate('Profile')
    })
  }

  handleInput= (key,value) =>{
    this.setState({
      [key]:value
    })
  }

  render() {
    const{loading} = this.state;
    return (
      <View>
          <Input 
            onBlur={this.checkEmail} 
            handleInput={text => this.handleInput('email',text)} 
            placeholder='Email'
          />
          <Input 
            handleInput={text =>  this.handleInput('password',text)} 
            placeholder='Password' 
            secureTextEntry={true}
          />
              {loading ? <ActivityIndicator size='small'/>: <Button onPressButton={this.signIn} title="Sign in"/>}
      </View>
    )
  }
}