import React,{Component} from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';


export default class HomeScreen extends Component{
    static navigationOptions ={ 
        title :'Recipe Details',
	};
    render(){
        const {navigation} = this.props;
        const item = navigation.getParam('item',{});
        //console.log('item in details screen',item);
        return(
                <View style={{flex:1,padding:10,backgroundColor:'orange'}}>
                     <Image
                        style={{height:200,flex:1,borderRadius:7}} 
                        resizeMode="cover" 
                        source={{uri:item.image_url}}
                    />
                    <Text style={{fontWeight:'bold',fontSize:17,padding:10}}>Recipe name : {item.title}</Text>
                    <Text style={{fontSize:17,padding:9}}>This recipe is published by {item.publisher}</Text>
                    <Text style={{color:'blue'}}>   {item.publisher_url}.</Text>
                    <Text style={{fontSize:17,padding:9}}>Its current social rank is {item.social_rank}.</Text>
                    <Text style={{fontSize:17,padding:9}}>Full recipe details is in the given link :</Text>
                    <Text style={{color:'blue'}}>   {item.source_url}</Text>
                </View>
            
        )
    }
}