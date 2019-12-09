import React from "react"
import { View, Button } from "react-native"

/**
 * Sign in or sign up
 */

export const AuthScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Sign in"
        onPress={() => navigation.navigate("SignIn")}
      >
      </Button>
      <Button
        title="Sign up"
        onPress={() => navigation.navigate("SignUp")}
      />
      <Button
        title="Skip"
        onPress={() => navigation.navigate("HomeScreen")}
      />
    </View>
  )
}
