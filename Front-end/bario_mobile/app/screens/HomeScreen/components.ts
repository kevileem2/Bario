import styled from "styled-components"
import { View, TouchableHighlight } from "react-native"

export const Container = styled(View)`
  flex: 1;
`

interface AdditionalNavigationButtonsContainerProps {
  width: number
  height: number
}

export const AdditionalNavigationButtonsContainer = styled(View)`
  position: absolute;
  top: ${({ height }: AdditionalNavigationButtonsContainerProps) =>
    (height / 100) * 25};
  right: 0;
  width: ${({ width }: AdditionalNavigationButtonsContainerProps) =>
    (width / 100) * 70};
  height: ${({ height }: AdditionalNavigationButtonsContainerProps) =>
    (height / 100) * 50};
`
