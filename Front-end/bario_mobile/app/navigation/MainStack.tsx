import React from "react"
import { createBottomTabNavigator } from "react-navigation-tabs"

import HomeScreen from "../screens/HomeScreen"
import EventScreen from "../screens/EventScreen"

/**
 * Main app/navigation stack for authenticated users
 */

export default createBottomTabNavigator(
  {
    HomeScreen,
    EventScreen
  },
  {
    initialRouteName: "HomeScreen"
  }
)
