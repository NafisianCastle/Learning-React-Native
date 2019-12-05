import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    wrapper:{
        //IOS
        shadowColor: "#000",
        shadowOffset: {
    	width: 0,
	    height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        //Android
        elevation: 3,

        marginBottom:20,
        marginHorizontal:25,

        borderRadius:8,
        borderWidth:1,
        borderColor:'#ddd',
        backgroundColor:'white',

        overflow:'hidden'

    }
  });

export default class Card extends Component{
    render(){
       const {children}=this.props;
       return <View style={styles.wrapper}>{children}</View>
    }
}

