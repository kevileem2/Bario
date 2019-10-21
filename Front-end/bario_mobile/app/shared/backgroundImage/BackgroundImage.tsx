import React from "react"
import { StyledBackgroundImage, StyledBackgroundContainer } from "./component"
import { ImageSourcePropType } from "react-native"

interface backGroundImageProps {
  source: ImageSourcePropType
}

export default ({
  source,
  children
}: React.PropsWithChildren<backGroundImageProps>) => {
  return (
    <StyledBackgroundContainer>
      <StyledBackgroundImage source={source}>{children}</StyledBackgroundImage>
    </StyledBackgroundContainer>
  )
}
