import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import connect from "react-redux";
import LibraryList from './LibraryList';

class class LibraryList extends Component {
  render() {
    console.log('GLOBAL STATE LIBRARY LIST',this.props.LibraryList);
    return <FlatList data />;
  }
}

const mapStateToProps = state =>{
  return{
    LibraryList: state.libraries
  }
}

export default connect(mapStateToProps,null)(LibraryList)
