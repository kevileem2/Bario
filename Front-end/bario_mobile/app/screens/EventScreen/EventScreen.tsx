import React, { useState } from "react"
import { View, Text } from "react-native"
import NavigationHeader from "../../shared/navigationHeader/NavigationHeader"
import { NavigationStackScreenProps } from "react-navigation-stack"

/**
 * Event Screen
 */

export default ({ navigation }: NavigationStackScreenProps) => {
  const handleNavigationPress = () => {
    navigation.navigate("Home")
  }

  const handleLeftFlingGesture = () => {
    navigation.navigate("Calender", { screen: 1 })
  }

  const handleRightFlingGesture = () => {
    navigation.navigate("Home")
  }

  return (
    <NavigationHeader
      handleNavigationPress={handleNavigationPress}
      title="Events"
      renderBottomTabs
      onLeftFlingGesture={handleLeftFlingGesture}
      onRightFlingGesture={handleRightFlingGesture}
    >
      <View>
        <Text>yeet</Text>
      </View>
    </NavigationHeader>
  )
}
