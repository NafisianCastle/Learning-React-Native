import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
    backgroundColor: "orange"
  },
  btntxt: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default class Button extends Component {
  render() {
    const { onPressButton, title } = this.props;
    return (
      <TouchableOpacity onPress={onPressButton} style={styles.wrapper}>
        <Text style={styles.btntxt}>{title}</Text>
      </TouchableOpacity>
    );
  }
}
