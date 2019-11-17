import React,{Component} from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const AppNavigator = createStackNavigator(
    {
        Home :{screen: HomeScreen},
        Details:{screen:DetailsScreen},
    },
    {
        initialRouteName : 'Home', 
    }
);

export default createAppContainer(AppNavigator);