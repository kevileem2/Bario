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
    (height / 100) * 20};
  right: 0;
  width: ${({ width }: AdditionalNavigationButtonsContainerProps) =>
    (width / 100) * 80};
  height: ${({ height }: AdditionalNavigationButtonsContainerProps) =>
    (height / 100) * 60};
`
