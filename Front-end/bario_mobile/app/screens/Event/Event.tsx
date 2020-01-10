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

  return (
    <NavigationHeader
      handleNavigationPress={handleNavigationPress}
      title="Events"
      renderBottomTabs
      onLeftFlingGesture={handleLeftFlingGesture}
    >
      <View>
        <Text>yeet</Text>
      </View>
    </NavigationHeader>
  )
}
