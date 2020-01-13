import React, { useState, useEffect } from "react"
import { withNavigation } from "react-navigation"
import { NavigationStackScreenProps } from "react-navigation-stack"
import {
  Directions,
  FlingGestureHandler,
  State as GestureState
} from "react-native-gesture-handler"
import {
  KeyboardAvoidingView,
  Platform,
  View,
  TouchableWithoutFeedback,
  StatusBar
} from "react-native"
import { Metrics } from "../../theme"
import Spacer from "../Spacer"
import {
  ContentContainer,
  HeadNavigationContainer,
  Row,
  IconContainer,
  IconButton,
  Title,
  BottomTabNavigator
} from "./components"
import BottomTab from "./BottomTab/BottomTab"

interface Props extends NavigationStackScreenProps {
  children?: JSX.Element[] | JSX.Element
  title: string
  dark?: boolean
  renderBottomTabs?: boolean
  handleNavigationPress?: () => void
  onLeftFlingGesture?: () => void
  onRightFlingGesture?: () => void
}

const LayoutContainerView = Platform.OS === "ios" ? KeyboardAvoidingView : View

const bottomTabModules = [
  {
    name: "Events",
    iconName: "map-marker-outline",
    activeIconName: "map-marker",
    locationName: "Event"
  },
  {
    name: "Kalender",
    iconName: "calendar-outline",
    activeIconName: "calendar",
    locationName: "Calender"
  },
  {
    name: "Profiel",
    iconName: "account-outline",
    activeIconName: "account",
    locationName: "Profile"
  },
  {
    name: "Sociale voorzieningen",
    iconName: "information-outline",
    activeIconName: "information",
    locationName: "SocialService"
  }
]

const NavigationHeader = ({
  navigation,
  children,
  handleNavigationPress,
  title,
  dark,
  renderBottomTabs,
  onLeftFlingGesture,
  onRightFlingGesture
}: Props) => {
  const [activeSection, setActiveSection] = useState<number>(0)

  const activeSectionLocationParameter = navigation.getParam("screen")

  useEffect(() => {
    setActiveSection(activeSectionLocationParameter)
  }, [])

  const mapBottomTabs = (): JSX.Element[] => {
    return bottomTabModules.map((element, index) => {
      const handleOnPress = () => {
        navigation.navigate(element.locationName, { screen: index })
      }
      return (
        <BottomTab
          isActive={activeSection === index ? true : false}
          iconName={
            activeSection === index ? element.activeIconName : element.iconName
          }
          onPress={handleOnPress}
        />
      )
    })
  }

  const handleLeftFlingStateChange = event => {
    const { oldState } = event.nativeEvent
    if (oldState === GestureState.ACTIVE && onLeftFlingGesture) {
      onLeftFlingGesture()
    }
  }

  const handleRightFlingStateChange = event => {
    const { oldState } = event.nativeEvent
    if (oldState === GestureState.ACTIVE && onRightFlingGesture) {
      onRightFlingGesture()
    }
  }

  return (
    <FlingGestureHandler
      direction={Directions.RIGHT}
      onHandlerStateChange={handleRightFlingStateChange}
    >
      <FlingGestureHandler
        direction={Directions.LEFT}
        onHandlerStateChange={handleLeftFlingStateChange}
      >
        <LayoutContainerView
          behavior="height"
          contentContainerStyle={{ flex: 1 }}
          style={{ flex: 1 }}
        >
          <StatusBar barStyle="light-content" />
          <HeadNavigationContainer>
            <Spacer size={Metrics.baseMargin} />
            <Row>
              <TouchableWithoutFeedback onPress={handleNavigationPress}>
                <IconContainer>
                  <IconButton name="arrow-left" size={25} />
                </IconContainer>
              </TouchableWithoutFeedback>
              <Spacer vertical size={Metrics.largeMargin} />
              <Title>{title}</Title>
            </Row>
          </HeadNavigationContainer>
          <ContentContainer dark={dark}>{children}</ContentContainer>
          {renderBottomTabs && (
            <BottomTabNavigator>
              <Row>{mapBottomTabs()}</Row>
            </BottomTabNavigator>
          )}
        </LayoutContainerView>
      </FlingGestureHandler>
    </FlingGestureHandler>
  )
}

export default withNavigation(NavigationHeader)
