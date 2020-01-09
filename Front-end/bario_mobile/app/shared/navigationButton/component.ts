import styled from "styled-components"
import { TouchableHighlight, View, Platform } from "react-native"
import { Colors, Metrics } from "../../theme"
import { MaterialCommunityIcons } from "react-native-vector-icons"

export const Container = styled(View)`
  flex: 1;
  justify-content: center;
  margin-left: ${Metrics.largeMargin};
`

export const Button = styled(TouchableHighlight)`
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  width: 75;
  height: 75;
  border-radius: 50;
  background-color: ${Colors.red};
`

export const Icon = styled(MaterialCommunityIcons)`
  margin-top: ${Platform.OS === "ios" ? "2px" : "0px"};
  margin-left: ${Platform.OS === "ios" ? "1px" : "0px"};
  color: ${Colors.white};
`
