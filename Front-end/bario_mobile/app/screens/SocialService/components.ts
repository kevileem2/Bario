import styled from "styled-components"
import { View, TouchableOpacity, FlatList, Text } from "react-native"

import { Colors, Metrics } from "_theme"

export const Container = styled(View)`
  flex: 1;
`

export const List = styled(FlatList)`
  flex: 1;
  padding: ${Metrics.baseMargin};
  background-color: ${Colors.white}
`

export const ListItem = styled(TouchableOpacity)`
  flex: 1;
  background-color: ${Colors.primary};
  margin: ${Metrics.smallMargin} 0;
  padding: ${Metrics.baseMargin};
  border-radius: ${Metrics.roundness};
`