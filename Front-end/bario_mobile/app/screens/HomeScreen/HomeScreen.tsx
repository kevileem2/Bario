import React, { useState, useEffect } from "react"
import { BackgroundImage, NavigationButton } from "../../shared"
import { Container } from "./components"

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

  const showAdditionalNavigation = () => {}

  const hideAdditionalNavigation = () => {}

  return (
    <Container>
      <BackgroundImage
        source={require("../../assets/belfort-background.jpg")}
      />
      <NavigationButton
        isActive={navigationButtonPressed}
        onPress={onPressNavigationButton}
      />
    </Container>
  )
}
