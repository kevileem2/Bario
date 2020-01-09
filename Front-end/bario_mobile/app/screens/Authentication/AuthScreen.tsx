import React from "react"
import { View } from "react-native"
import Button from "_shared/Button"

/**
 * Sign in or sign up
 */

export const AuthScreen = ({ navigation }) => (
  <View>
    <Button
      title="Sign in"
      onPress={() => navigation.navigate("SignIn")}
    ></Button>
    <Button title="Sign up" onPress={() => navigation.navigate("SignUp")} />
    <Button title="Skip" onPress={() => navigation.navigate("Home")} />
  </View>
)
