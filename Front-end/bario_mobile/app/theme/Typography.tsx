import React from 'react'
import styled from "styled-components"
import { Text as NativeText } from "react-native"

const CustomText = ({style, color, children}) => ( <NativeText style={[...style, {color}]}>{children}</NativeText>)

export const Title = styled(CustomText)`
  font-family: InterBold;
  font-size: 24;
  margin-bottom: 32;
  color: ${props => props.color || '#000'}
`

export const Subtitle = styled(CustomText)`
  font-family: InterBold;
  font-size: 16;
  margin-bottom: 24;
  color: ${props => props.color || '#000'}
`

export const Text = styled(CustomText)`
  font-family: Inter;
  font-size: 12;
  margin-bottom: 16;
  color: ${props => props.color || '#000'}
`