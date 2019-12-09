import React,{Component} from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Linking } from 'expo';
import Card from './../components/common/Card';
export default class DetailsScreen extends Component{
    static navigationOptions =({navigation})=>{ 
       const item = navigation.getParam('item',{});
       let title = item.title;
       return{
           title: title 
       };
    };
    goToUrl = url => {
        Linking.openURL(url);
    }
    render(){
        const {navigation} = this.props;
        const item = navigation.getParam('item',{});
        //console.log('item in details screen',item);
        return( 
                <Card>
                        <Image
                            style={{height:400,width:'100%',borderRadius:7}} 
                            resizeMode="cover" 
                            source={{uri:item.image_url}}
                        />
                        <Text style={{fontSize:17,padding:7}}>This recipe is published by {item.publisher}</Text>
                        <Text style={{fontSize:17,padding:7}}>Its current social rank is {item.social_rank}.</Text>
                        <Text style={{fontSize:17,padding:7}}>Full recipe details is in the given link :</Text>
                        <TouchableOpacity onPress={() => this.goToUrl(item.source_url)}>
                            <Text style={{color:'blue',padding:10,marginBottom:10}}> {item.source_url}</Text>
                        </TouchableOpacity>  
                </Card>
        )
    }
}