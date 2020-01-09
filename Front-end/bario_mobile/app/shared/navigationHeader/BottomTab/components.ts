import styled from "styled-components"
import { View } from "react-native"
import { Colors } from "../../../theme"
import { MaterialCommunityIcons } from "react-native-vector-icons"

interface BottomTabContainerProps {
  isActive?: boolean
}
export const BottomTabContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  elevation: 3;
`
export const Icon = styled(MaterialCommunityIcons)`
  color: ${({ isActive }: BottomTabContainerProps) =>
    isActive ? Colors.emerald : Colors.black};
`
