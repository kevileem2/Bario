import styled from "styled-components"
import { View, TouchableWithoutFeedback, Text } from "react-native"
import { MaterialCommunityIcons } from "react-native-vector-icons"

import { Colors, Metrics } from "../../theme"

interface ContentContainerProps {
  noPadding?: boolean
  dark?: boolean
}

export const ContentContainer = styled(View)`
  flex: 1;
  padding: ${(props: ContentContainerProps) =>
    props.noPadding ? 0 : Metrics.baseMargin}px;
  background-color: ${({ dark }: ContentContainerProps) =>
    dark ? Colors.dark : Colors.background};
`
export const HeadNavigationContainer = styled(View)`
  height: ${Metrics.statusBarHeight +
    Metrics.doubleLargeMargin +
    Metrics.baseMargin};
  background-color: ${Colors.emerald};
  align-content: flex-end;
`
export const Row = styled(View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
`
export const IconContainer = styled(View)`
  margin-left: ${Metrics.halfLargeMargin};
  width: 25;
  height: 25;
`
export const IconButton = styled(MaterialCommunityIcons)`
  color: ${Colors.white};
`
export const Title = styled(Text)`
  font-size: ${Metrics.largeMargin}px;
  font-weight: 500;
  color: ${Colors.white};
`
export const BottomTabNavigator = styled(View)`
  height: ${Metrics.doubleLargeMargin}px;
  background-color: ${Colors.white};
`
