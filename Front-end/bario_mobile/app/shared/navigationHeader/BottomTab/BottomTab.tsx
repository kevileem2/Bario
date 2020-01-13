import React from "react"
import { TouchableWithoutFeedback, Text } from "react-native"
import { BottomTabContainer, Icon } from "./components"

interface BottomTabProps {
  isActive?: boolean
  iconName: string
  onPress?: () => void
}

export default ({ iconName, isActive, onPress }: BottomTabProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <BottomTabContainer>
        <Icon isActive={isActive} name={iconName} size={32}></Icon>
      </BottomTabContainer>
    </TouchableWithoutFeedback>
  )
}
