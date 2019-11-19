import styled from "styled-components"
import { View, TouchableHighlight } from "react-native"
import { Colors } from "../../../theme"
import { MaterialCommunityIcons } from "react-native-vector-icons"

export const ButtonContainer = styled(View)`
  flex: 1;
  justify-content: center;
`

interface ButtonProps {
  marginLeft?: number
}

export const Button = styled(TouchableHighlight)`
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  width: 75;
  height: 75;
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
