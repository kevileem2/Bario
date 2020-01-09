import React from "react"
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
    navigation.navigate("Profile", { screen: 2 })
  }

  const handleRightFlingGesture = () => {
    navigation.navigate("Event", { screen: 0 })
  }

  return (
    <NavigationHeader
      handleNavigationPress={handleNavigationPress}
      title="Calender"
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
