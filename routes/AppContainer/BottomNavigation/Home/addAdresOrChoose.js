import React,{Component} from 'react';
import { Text, View,Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer,createStackNavigator } from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

export default class AddAdressOrChoose extends Component{
  render() {
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>AddAdressOrChoose Page</Text>
        <Button title="Go AddAdress" onPress={()=>this.props.navigation.navigate("AddAdress")}></Button>
      </View>
    )
  }
}

