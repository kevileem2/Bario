import React from "react"
import { View } from "react-native"

interface SpacerProps {
  vertical?: boolean
  size: number
}

export default (props: SpacerProps) => (
  <View
    style={props.vertical ? { width: props.size } : { height: props.size }}
  />
)
