import React,{Component} from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';
import Card from './common/Card';
import { bold, italic, underline } from 'ansi-colors';
import Button from './common/Button';

const styles = StyleSheet.create({
    details:{
        flexDirection:'row',
        alignItems:'center',
        flex:1,
    }
});
export default class RecipeItem extends Component{
    render(){
        const {item} = this.props;
        return(
            <Card>
                <Image 
                    style={{flex:1,height:200,borderTopLeftRadius:7,borderTopRightRadius:7}} 
                    resizeMode="cover" 
                    source={{uri:item.image_url}}
                />
                <View style={{marginVertical:22,marginHorizontal:11}}>
                    <View style={styles.details}>
                        <Text style={{fontSize:18,fontWeight:'bold',color:'#666'}}>
                            {item.title}
                        </Text>
                        <Text style={{color:'#666'}}>
                            <Text style={{fontWeight:'italic'}}>
                                published by 
                            </Text>
                            <Text style={{fontStyle:'underline', fontWeight:'bold'}}>
                                {item.publisher}
                            </Text>
                        </Text>
                    </View>
                </View>
                <Button title={'View Details'}/>
            </Card>
            
        )
    }
}