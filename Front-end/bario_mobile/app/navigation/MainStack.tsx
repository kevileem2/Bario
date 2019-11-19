import React from "react"
import { createBottomTabNavigator } from "react-navigation-tabs"
import { createStackNavigator } from "react-navigation-stack"

import HomeScreen from "../screens/HomeScreen"
import EventScreen from "../screens/EventScreen"

/**
 * Main app/navigation stack for authenticated users
 */

export default createStackNavigator(
  {
    HomeScreen,
    EventScreen
  },
  {
    initialRouteName: "HomeScreen",
    headerMode: "none"
  }
)
