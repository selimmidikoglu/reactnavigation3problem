import React,{Component} from 'react';
import { Text, View,Button,TouchableOpacity } from 'react-native';
import { createBottomTabNavigator, createAppContainer,createStackNavigator } from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

export default class Products extends Component{
  render() {
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>Products Page</Text>
        <Button title="Go basket" onPress={()=>this.props.navigation.navigate("Basket")}></Button>
        <View style={{height:50,width:100,backgroundColor:'red'}}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate("Basket")}>
            <View style={{height:50,width:100,backgroundColor:'red'}}>
              <Text>Baskete</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

