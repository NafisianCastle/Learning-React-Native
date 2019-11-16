import React,{Component} from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import Card from './common/Card';


export default class RecipeItem extends Component{
    render(){
        const {item} = this.props;
        return(
            <Card>
               <Image style:{{flex:1,height:200,borderRadius:7}} resizeMode="cover" source:{{uri:item.image_url}}/>
            </Card>
            
        )
    }
}