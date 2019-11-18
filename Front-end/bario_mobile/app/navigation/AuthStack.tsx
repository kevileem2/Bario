import { createStackNavigator } from "react-navigation-stack"
import { AuthLoadingScreen } from "../screens/Authentication/AuthLoadingScreen"
import { AuthScreen } from "../screens/Authentication/AuthScreen"

/**
 * Navigation stack for non-authenticated users
 */

export default createStackNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: AuthScreen
  },
  {
    initialRouteName: "AuthLoading"
  }
)
