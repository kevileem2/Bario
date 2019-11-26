import React from "react"
import { View, Button } from "react-native"

import { Text } from '../../shared'

/**
 * Check if the user is authenticated
 * Redirect the user to authentication screen if not
 */

export const AuthLoadingScreen = ({ navigation }) => {
  return (
    <View>
      <Text type="largeText">Auth loading</Text>
      <Button
        title="Skip auth loading screen"
        onPress={() => navigation.navigate("Auth")}
      />
    </View>
  )
}
