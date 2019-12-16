import React from "react"
import { View } from "react-native"
import Button from '_shared/Button'

/**
 * Sign in or sign up
 */

export const AuthScreen = ({ navigation }) =>
  <View style={{ flex: 1 }}>
    <View style={{ flex: 6 }}>
    </View>
    <Button
      icon='log-in'
      text="Sign in"
      onPress={() => navigation.navigate("SignIn")}
    >
    </Button>
    <Button
      icon='user-plus'
      text="Sign up"
      onPress={() => navigation.navigate("SignUp")}
    />
    <Button
      isLoading={true}
      text="Skip for now"
      onPress={() => navigation.navigate("HomeScreen")}
    />
  </View >
