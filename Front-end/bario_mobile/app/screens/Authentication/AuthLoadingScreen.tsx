import React, { useState, useEffect } from "react"
import { View, Button, ActivityIndicator } from "react-native"

/**
 * Splash screen
 * Check if the user is authenticated
 * Redirect the user to authentication screen if not
 */

export const AuthLoadingScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const checkIfAuthenticated = async () => {
      let authenticated = true
      setTimeout(() => {
        authenticated
          ? navigation.navigate("Home")
          : navigation.navigate("Auth")
      }, 1000)
    }
    checkIfAuthenticated()
  }, [])

  return isLoading && <ActivityIndicator />
}
