import React, { Component } from 'react'
import { Text, View } from 'react-native'
import AppNavigation from './src/AppNavigation'
import * as firebase from 'firebase'

export default class App extends Component {
  componentWillMount(){
    const firebaseConfig = {
      apiKey: "AIzaSyDDVnQPI8k-QA8bZvKz4JGTCQ2WG5RpDmw",
      authDomain: "authapp-b56a4.firebaseapp.com",
      databaseURL: "https://authapp-b56a4.firebaseio.com",
      projectId: "authapp-b56a4",
      storageBucket: "authapp-b56a4.appspot.com",
      messagingSenderId: "446346639463",
      appId: "1:446346639463:web:20c74a65e84040be6f7cc2"
    };
     // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }
  
  render() {
    return (
      <AppNavigation/>
    )
  }
}