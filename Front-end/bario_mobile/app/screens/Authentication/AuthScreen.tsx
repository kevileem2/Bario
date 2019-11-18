import React, { Component } from "react"
import { View, Text, Button } from "react-native"

/**
 * Sign in or sign up
 */

export const AuthScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Auth screen</Text>
      <Text>Sign In</Text>
      <Text>Sign Up</Text>
      <Button
        title="Authenticate"
        onPress={() => navigation.navigate("Main")}
      />
    </View>
  )
}
