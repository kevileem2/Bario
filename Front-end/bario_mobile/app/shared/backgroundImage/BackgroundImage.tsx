import React from "react"
import { StyledBackgroundImage } from "./component"
import { ImageSourcePropType } from "react-native"

interface backGroundImageProps {
  source: ImageSourcePropType
}

export default ({
  source,
  children
}: React.PropsWithChildren<backGroundImageProps>) => {
  return (
    <StyledBackgroundImage source={source}>{children}</StyledBackgroundImage>
  )
}
