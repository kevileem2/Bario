// React imports
import "react-native-gesture-handler"
import React, { useState } from "react"
import { Platform, StatusBar, StyleSheet, View } from "react-native"
import { AppLoading } from "expo"
import * as Font from "expo-font"

import AppNavigator from "./navigation/AppNavigator"

/**
 * @class Main
 * Root of App, this is used to not directly edit the 'App.js' file in the root folder
 */

export default () => {
  const [isLoading, setLoading] = useState(true)
  const _loadResourcesAsync = async () => {
    await Promise.all([
      Font.loadAsync({
        Inter: require("./assets/fonts/Inter-Regular.ttf"),
        InterBold: require("./assets/fonts/Inter-Bold.ttf")
      })
    ])
  }

  if (isLoading) {
    return (
      <AppLoading
        startAsync={_loadResourcesAsync}
        onFinish={() => setLoading(false)}
        onError={console.warn}
      />
    )
  } else {
    return (
      <View style={styles.container}>
        <AppNavigator />
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff"
  }
})
