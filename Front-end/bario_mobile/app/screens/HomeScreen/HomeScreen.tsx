import React, { useState, useEffect } from "react"
import { BackgroundImage } from "../../shared"
import { Container, AdditionalNavigationButtonsContainer } from "./components"
import { Dimensions } from "react-native"
import NavigationButton from "./NavigationButton/NavigationButton"
import { Metrics } from "../../theme"

export default ({ navigation }) => {
  const [navigationButtonPressed, setNavigationButtonPressed] = useState(false)

  useEffect(() => {
    navigationButtonPressed
      ? showAdditionalNavigation()
      : hideAdditionalNavigation()
  }, [navigationButtonPressed])

  const onPressNavigationButton = () => {
    setNavigationButtonPressed(prevState => !prevState)
  }

  const onPressEventScreen = () => {
    navigation.navigate("EventScreen")
  }

  const showAdditionalNavigation = () => {}

  const hideAdditionalNavigation = () => {}

  return (
    <Container>
      <BackgroundImage
        source={require("../../assets/belfort-background.jpg")}
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
            onPress={onPressEventScreen}
            iconName="calendar"
            marginLeft={Metrics.largeMargin * 3}
          />
          <NavigationButton
            onPress={onPressEventScreen}
            iconName="account"
            marginLeft={Metrics.largeMargin * 3}
          />
          <NavigationButton
            onPress={onPressEventScreen}
            iconName="information"
          />
        </AdditionalNavigationButtonsContainer>
      )}
    </Container>
  )
}
