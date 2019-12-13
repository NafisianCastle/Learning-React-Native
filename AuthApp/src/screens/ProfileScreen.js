import React, { Component } from "react";
import { Text, View } from "react-native";
import * as firebase from "firebase";
export default class ProfileScreen extends Component {
  componentDidUpdate() {
    let userId = firebase.auth().currentUser.uid;
    return firebase
      .database()
      .ref("/user/" + userId)
      .on("value", function(snapshot) {
        console.log(snapshot.val());
      });
  }

  render() {
    return (
      <View>
        <Text> ProfileScreen</Text>
      </View>
    );
  }
}
