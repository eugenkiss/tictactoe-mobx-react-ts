import * as React from 'react'
import styled from 'react-emotion'
import {
  alignItems,
  alignSelf,
  color,
  flex,
  flexDirection,
  flexWrap,
  fontSize,
  fontWeight,
  justifyContent,
  space,
  width
} from 'styled-system'

export const Box = styled('div')`
${space} 
${width}
${fontSize}
${fontWeight}
${color} 
${flex}
` as any

export const Flex = styled('div')`
display: flex;
${space}
${width}
${fontSize}
${color}
${flex}
${alignItems}
${justifyContent}
${flexWrap}
${flexDirection}
${alignSelf}
` as any