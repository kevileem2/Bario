// React imports
import "react-native-gesture-handler"
import React, { useState, useEffect } from "react"
import Realm from "realm"
import { Platform, StatusBar, StyleSheet, View } from "react-native"
import { AppLoading } from "expo"
import * as Font from "expo-font"
import RealmProvider from "./RealmProvider"

import AppNavigator from "./navigation/AppNavigator"
import { storage } from "./shared"

/**
 * @class Main
 * Root of App, this is used to not directly edit the 'App.js' file in the root folder
 */

export default () => {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const setUp = async () => {
      storage.performMigrations()
    }
    setUp()
  }, [])

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
      <RealmProvider>
        <View style={styles.container}>
          <AppNavigator />
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        </View>
      </RealmProvider>
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
