import React from "react"
import { View, Text } from "react-native"
import NavigationHeader from "../../shared/navigationHeader/NavigationHeader"
import { NavigationStackScreenProps } from "react-navigation-stack"

export default ({ navigation }: NavigationStackScreenProps) => {
  const handleNavigationPress = () => {
    navigation.navigate("Home")
  }

  const handleLeftFlingGesture = () => {
    navigation.navigate("SocialService", { screen: 3 })
  }

  const handleRightFlingGesture = () => {
    navigation.navigate("Calender", { screen: 1 })
  }

  return (
    <NavigationHeader
      handleNavigationPress={handleNavigationPress}
      title="Profile"
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
