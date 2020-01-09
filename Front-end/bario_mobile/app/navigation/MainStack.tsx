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
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false
      }
    },
    Event: {
      screen: EventScreen,
      navigationOptions: {
        headerShown: false
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        headerShown: false
      }
    },
    Calender: {
      screen: Calender,
      navigationOptions: {
        headerShown: false
      }
    },
    SocialService: {
      screen: SocialService,
      navigationOptions: {
        headerShown: false
      }
    }
  },
  {
    initialRouteName: "Home"
  }
)
