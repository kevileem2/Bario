import styled from "styled-components"
import { View, TouchableHighlight, Animated } from "react-native"
import { Colors } from "_theme"
import { MaterialCommunityIcons } from "react-native-vector-icons"

export const ButtonContainer = styled(View)`
  flex: 1;
  justify-content: center;
`

interface ButtonProps {
  marginLeft?: number
  isPrimary?: boolean
}

export const Button = styled(
  Animated.createAnimatedComponent(TouchableHighlight)
)`
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  width: ${({ isPrimary }: ButtonProps) => (isPrimary ? 70 : 65)};
  height: ${({ isPrimary }: ButtonProps) => (isPrimary ? 70 : 65)};
  border-radius: 50;
  margin-left: ${({ marginLeft }: ButtonProps) =>
    marginLeft ? marginLeft : 0};
  background-color: ${Colors.red};
  box-shadow: 0px 0px 10px rgb(100, 100, 100);
`

export const Icon = styled(MaterialCommunityIcons)`
  margin-top: 2px;
  margin-left: 1px;
  color: ${Colors.white};
`
