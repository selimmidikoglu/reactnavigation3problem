import React,{Component} from 'react';
import { Text, View,Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer,createStackNavigator } from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

export default class Basket extends Component{
  render() {
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>Basket Page</Text>
        <Button title="Go AddAdressOrChoose" onPress={()=>this.props.navigation.navigate("AddAdressOrChoose")}></Button>
      </View>
    )
  }
}

