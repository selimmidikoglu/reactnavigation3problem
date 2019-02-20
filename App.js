import React,{Component} from 'react';
import { Text, View,Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer,createStackNavigator } from 'react-navigation';
//import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
//Screens
import BottomNavigation from './routes/AppContainer/BottomNavigation/bottomNavigation';
import Entry from './routes/AppContainer/entry';


export default class App extends Component{
  render() {
    return(
      <AppContainer/>
    )
  }
}

const AppContainer = createAppContainer(
  createStackNavigator({
    Entry:Entry,
    BottomNavigation:BottomNavigation
  })
)