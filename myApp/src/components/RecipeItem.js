import React,{Component} from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import Card from './common/Card';
import { bold, italic, underline } from 'ansi-colors';

const styles = StyleSheet.create{
    
}
export default class RecipeItem extends Component{
    render(){
        const {item} = this.props;
        return(
            <Card>
                <Image 
                    style:{{flex:1,height:200,borderTopLeftRadius:7,borderTopRightRadius:7}} 
                    resizeMode="cover" 
                    source:{{uri:item.image_url}}
                />
                <View style={{marginVertical:22,marginHorizontal:11}}>
                    <Text style={{fontWeight:bold}}>
                        {item.title}
                    </Text>
                    <Text style={{fontWeight:italic}}>
                        published by {item.publisher}
                    </Text>
                    <Text style={{fontStyle:underline, fontWeight:bold}}>

                    </Text>
                </View>
            </Card>
            
        )
    }
}