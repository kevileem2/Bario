import React from "react"
import { View } from "react-native"
import { Button } from "../../shared"

/**
 * Sign in or sign up
 */

export default ({ navigation }) => (
  <View>
    <Button
      text="Sign in"
      onPress={() => navigation.navigate("SignIn")}
    ></Button>
    <Button text="Sign up" onPress={() => navigation.navigate("SignUp")} />
    <Button text="Skip" onPress={() => navigation.navigate("Home")} />
  </View>
)
