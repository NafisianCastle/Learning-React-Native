import React, { Component } from 'react'
import { Text, View } from 'react-native'
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

    firebase
      .auth()
      .signInWithEmailAndPassword(email,password)
      .then(user =>{
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
      <View style={{flex:1}}>
        <Input 
            onBlur={this.checkEmail} 
            handleInput={text => this.handleInput('email',text)} 
            placeholder='Email'
          />
            {emailError && <Text style={{fontSize:14,color:'red'}}>{emailError}</Text>}

          <Input 
            handleInput={text =>  this.handleInput('password',text)} 
            placeholder='Password' 
            secureTextEntry={true}
          />
      </View>
          {loading ? <ActivityIndicator size='small'/>: <Button onPressButton={this.signUp} title="Sign in"/>}
    )
  }
}