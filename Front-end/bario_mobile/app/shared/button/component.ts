import styled from "styled-components"
import { Button as ReactButton } from "react-native"
import { Colors } from "../../theme"

export const Button = styled(ReactButton)`
  background: ${Colors.accent};
  width: 70%;
  align-self: center;
  border-radius: 100;
`
