import React from "react"
import { createStackNavigator } from "react-navigation-stack"

import HomeScreen from "../screens/HomeScreen"
import EventScreen from "../screens/EventScreen"
import Profile from "../screens/Profile"
import Calender from "../screens/Calender"
import SocialService from "../screens/SocialService"

/**
 * Main app/navigation stack for authenticated users
 */

export default createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false
      }
    },
    EventScreen,
    Profile,
    Calender,
    SocialService
  },
  {
    initialRouteName: "HomeScreen"
  }
)
