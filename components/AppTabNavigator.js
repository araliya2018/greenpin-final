import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen'
import Chat from '../screens/ChatScreen';
import PlantATree from '../screens/PlantATree'

import MyForestScreen from '../screens/MyForestScreen'

import Status  from '../screens/Status'



export const AppTabNavigator = createBottomTabNavigator({
    HomeScreen: {screen: HomeScreen},
    Activity: {screen: Chat},
    PlantATree: {screen: PlantATree},
    MyForestScreen: {screen: MyForestScreen},
    Status: {screen: Status},


  },
  {
    defaultNavigationOptions: ({navigation})=>({
      tabBarIcon: ()=>{
        const routeName = navigation.state.routeName;
        if(routeName === "HomeScreen"){
          return(
            <Image
            source={require("../assets/home-icon.png")}
            style={{width:20, height:20}}
          />
          )

        }
        else if(routeName === "Activity"){
          return(
            <Image
            source={require("../assets/chat-icon.png")}
            style={{width:20, height:20,}}
          />)

        }

        else if(routeName === "PlantATree"){
          return(
            <Image
            source={require("../assets/plant-icon.png")}
            style={{width:20, height:20,}}
          />)

        }

        else if(routeName === "Status"){
          return(
            <Image
            source={require("../assets/progress.jpeg")}
            style={{width:20, height:20,}}
          />)

        }

        else if(routeName === "MyForestScreen"){
          return(
            <Image
            source={require("../assets/forest.png")}
            style={{width:20, height:20,}}
          />)

        }
      }
    })
  }
);