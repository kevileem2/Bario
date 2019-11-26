import React, { useState } from "react"
import { BackgroundImage } from "../../shared"
import { Container, AdditionalNavigationButtonsContainer } from "./components"
import { Dimensions } from "react-native"
import NavigationButton from "./NavigationButton/NavigationButton"
import { Metrics } from "../../theme"

export default ({ navigation }) => {
  const [navigationButtonPressed, setNavigationButtonPressed] = useState(false)

  const onPressNavigationButton = () => {
    setNavigationButtonPressed(prevState => !prevState)
  }

  const onPressEventScreen = () => {
    setNavigationButtonPressed(prevState => !prevState)
    navigation.navigate("EventScreen")
  }

  const onPressProfileScreen = () => {
    setNavigationButtonPressed(prevState => !prevState)
    navigation.navigate("Profile")
  }
  const onPressCalenderScreen = () => {
    setNavigationButtonPressed(prevState => !prevState)
    navigation.navigate("Calender")
  }
  const onPressSocialServiceScreen = () => {
    setNavigationButtonPressed(prevState => !prevState)
    navigation.navigate("SocialService")
  }

  return (
    <Container>
      <BackgroundImage
        source={require("_assets/belfort-background.jpg")}
      />
      <NavigationButton
        isActive={navigationButtonPressed}
        isPrimary
        marginLeft={Metrics.largeMargin}
        onPress={onPressNavigationButton}
        iconName="plus"
      />
      {navigationButtonPressed && (
        <AdditionalNavigationButtonsContainer
          width={Dimensions.get("window").width}
          height={Dimensions.get("window").height}
        >
          <NavigationButton
            onPress={onPressEventScreen}
            iconName="map-marker-radius"
          />
          <NavigationButton
            onPress={onPressCalenderScreen}
            iconName="calendar"
            marginLeft={Metrics.largeMargin * 3}
          />
          <NavigationButton
            onPress={onPressProfileScreen}
            iconName="account"
            marginLeft={Metrics.largeMargin * 3}
          />
          <NavigationButton
            onPress={onPressSocialServiceScreen}
            iconName="information"
          />
        </AdditionalNavigationButtonsContainer>
      )}
    </Container>
  )
}
