import React from "react"
import { createStackNavigator } from "react-navigation-stack"

import Home from "../screens/Home"
import Event from "../screens/Event"
import Profile from "../screens/Profile"
import Calender from "../screens/Calender"
import SocialService from "../screens/SocialService"

/**
 * Main app/navigation stack for authenticated users
 */

export default createStackNavigator(
  {
    Home,
    Event,
    Profile,
    Calender,
    SocialService
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerShown: false
    }
  }
)
