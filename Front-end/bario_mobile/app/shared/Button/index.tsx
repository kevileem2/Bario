import React from "react"
import styled from "styled-components/native"
import { Colors, Metrics } from "../../theme"
import { Feather } from "@expo/vector-icons"
import { ActivityIndicator } from "react-native"

interface ButtonText {
  text: string
  children: string
}

interface ButtonProps {
  text?: string
  isDisabled?: boolean
  isLoading?: boolean
  children?: React.ReactElement
  onPress?: (params?: any) => void | Promise<void>
  icon?: React.ReactElement
}

const ButtonContainer = styled.TouchableOpacity`
    flex: 1;
    height: 64px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color: ${Colors.primary}
    border-radius: ${Metrics.roundness};
    `

const Text = styled.Text`
  font-size: 16px;
  color: ${Colors.primaryTextLight};
`

const IconLeft = styled.View`
  position: absolute;
  left: 20;
  color: ${Colors.primaryTextLight};
`

const ButtonText: React.FC = ({ children }: ButtonText): React.ReactElement => {
  return <Text>{children}</Text>
}

export default ({
  isDisabled,
  isLoading,
  text,
  onPress,
  icon
}: ButtonProps) => {
  return (
    <ButtonContainer disabled={isDisabled} onPress={onPress}>
      {!isLoading ? (
        <React.Fragment>
          <IconLeft>
            <Feather name={icon} color={Colors.primaryTextLight} size={20} />
          </IconLeft>
          <ButtonText>{text}</ButtonText>
        </React.Fragment>
      ) : (
        <ActivityIndicator size="small" />
      )}
    </ButtonContainer>
  )
}
