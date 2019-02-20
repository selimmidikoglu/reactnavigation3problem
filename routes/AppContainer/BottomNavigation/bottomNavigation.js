import React,{Component} from 'react';
import { Text, View,Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer,createStackNavigator } from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

//screens
import Home from './Home/home';
import Adress from './Adress/adress';
import Orders from './Orders/orders';
import Profile from './Profile/profile';



const BottomNavigation = createBottomTabNavigator({
    Home:Home,
    Adress:Adress,
    Orders:Orders,
    Profile:Profile,
});

export default BottomNavigation;