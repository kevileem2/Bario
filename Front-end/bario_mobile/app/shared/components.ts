import styled from "styled-components"
import { View } from "react-native"
import { Text } from "."
import { Colors, Metrics } from "../theme"

export const SmallCenterText = styled(Text)`
  font-size: 15;
  color: ${Colors.hintText};
  text-align: center;
`
export const TextFieldContainer = styled(View)`
  width: 100%;
  padding-right: ${Metrics.baseMargin};
  padding-left: ${Metrics.baseMargin};
`