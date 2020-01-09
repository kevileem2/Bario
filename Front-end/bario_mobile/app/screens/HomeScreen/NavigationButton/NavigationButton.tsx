import React from "react"
import { ButtonContainer, Button, Icon } from "./components"
import { Colors } from "_theme"

interface Props {
  isActive?: boolean
  isPrimary?: boolean
  marginLeft?: number
  marginTop?: number
  iconName: string
  onPress: () => void
}

export default ({
  onPress,
  isPrimary,
  isActive,
  iconName,
  marginLeft
}: Props) => {
  return (
    <ButtonContainer>
      <Button
        onPress={onPress}
        underlayColor={Colors.red}
        marginLeft={marginLeft}
        isPrimary={isPrimary}
      >
        <Icon size={isPrimary ? 45 : 35} name={isActive ? "close" : iconName} />
      </Button>
    </ButtonContainer>
  )
}
