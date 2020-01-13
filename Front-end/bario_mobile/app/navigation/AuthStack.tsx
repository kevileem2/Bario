import { createStackNavigator } from "react-navigation-stack"
import { AuthLoadingScreen } from "../screens/Authentication/AuthLoadingScreen"
import Login from "../screens/Authentication/Login"
import Register from "../screens/Authentication/Register"

/**
 * Navigation stack for non-authenticated users
 */

export default createStackNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Login: Login
  },
  {
    initialRouteName: "AuthLoading"
  }
)
