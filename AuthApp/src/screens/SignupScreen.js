import React, { Component } from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import Input from '../components/common/Input'
import Button from '../components/common/Button'
import * as firebase from 'firebase'

export default class SignupScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
      firstName:'',
      lastName:'',
      age:'',
      gender:'',
      emailError: null,
      loading : false
    }
  }
  handleInput= (key,value) =>{
    this.setState({
      [key]:value
    })
  }
 
  signUp =()=>{
    const {email,password,firstName,lastName,age,gender}=this.state;

    this.setState({
      loading:true
    })

    firebase
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .then(user =>{
        console.log('user',user)
        const userId = user.user.uid;
        firebase
          .database()
          .ref('users/'+userId)
          .set({
            email,
            password,
            firstName,
            lastName,
            age,
            gender
          })
          this.setState(
            {
               loading:false
            },
            () =>{
              this.props.navigation.navigate('Signin')   
            }
          )      
      });
  }
  checkEmail = ()=>{
    const {email,loading} = this.state;

    const emailRegex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    let isValid = emailRegex.test(String(email).toLowerCase());

    if(!isValid){
      this.setState({
        emailError:'Invalid Email'
      })
    }else{
      this.setState({
        emailError: null
      })
    }
  }
  render() {
    const {emailError,loading} = this.state;
    return (
      <View style={{flex:1,marginTop:50,marginHorizontal:20}}>

          <Text style={{marginBottom:20,fontSize:20}}>
            Create new account
          </Text>

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

          <View style={{flexDirection:'row'}}>
            <Input 
              customStyle={{flex:1}}
              handleInput={text => this.handleInput('firstName',text)} 
              placeholder='First Name'
            />
            <Input 
              customStyle={{flex:1}}  
              handleInput={text => this.handleInput('lastName',text)} 
              placeholder='Last Name'
            />
          </View>

          <View style={{flexDirection:'row'}}>
            <Input 
              customStyle={{flex:1}} 
              handleInput={text => this.handleInput('age',text)} 
              placeholder='Age'
            />
            <Input 
              customStyle={{flex:1}} 
              handleInput={text => this.handleInput('gender',text)} 
              placeholder='Gender'
            />
          </View>

          {loading ? <ActivityIndicator size='small'/>: <Button onPressButton={this.signUp} title="Sign up"/>}
          
      </View>
    )
  }
}