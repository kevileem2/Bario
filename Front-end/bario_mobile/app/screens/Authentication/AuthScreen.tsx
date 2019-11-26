import React, { Component } from "react"
import { View, Button } from "react-native"


import { Text } from '../../shared'

/**
 * Sign in or sign up
 */

export const AuthScreen = ({ navigation }) => {
  return (
    <View>
      <Text type="title">Auth screen</Text>
      <Text type="subtitle">Sign in</Text>
      <Text type="subtitle">Sign up</Text>
      <Button
        title="Authenticate"
        onPress={() => navigation.navigate("Main")}
      />
    </View>
  )
}
