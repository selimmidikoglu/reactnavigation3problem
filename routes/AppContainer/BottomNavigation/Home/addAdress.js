import React,{Component} from 'react';
import { Text, View,Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer,createStackNavigator } from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

export default class AddAdress extends Component{
  render() {
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>AddAdress Page</Text>
        <Button title="Go Products" onPress={()=>this.props.navigation.navigate("Products")}></Button>
      </View>
    )
  }
}

