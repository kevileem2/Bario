import React from "react"

import { createAppContainer, createSwitchNavigator } from "react-navigation"

import AuthStack from "./AuthStack"
import MainStack from "./MainStack"

/**
 * Top level navigation container
 */

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
      Main: MainStack
    },
    {
      initialRouteName: "Main"
    }
  )
)
