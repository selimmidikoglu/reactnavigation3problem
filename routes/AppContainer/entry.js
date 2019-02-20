import React,{Component} from 'react';
import { Text, View,Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer,createStackNavigator } from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

export default class Entry extends Component{
  render() {
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>Entry Page</Text>
        <Button title="Go BottomNavigation" onPress={()=>this.props.navigation.navigate("BottomNavigation")}></Button>
      </View>
    )
  }
}

