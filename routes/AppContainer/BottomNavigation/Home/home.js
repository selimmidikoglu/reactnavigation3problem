import React,{Component} from 'react';
import { Text, View,Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer,createStackNavigator } from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

//screens
import AddAdressOrChoose from './addAdresOrChoose';
import AddAdress from './addAdress';
import Basket from './basket';
import Products from './products';

const Home = createStackNavigator({
    Products:Products,
    Basket:Basket,
    AddAdressOrChoose:AddAdressOrChoose,
    AddAdress:AddAdress
},{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

export default Home;