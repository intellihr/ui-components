import React, { Fragment } from 'react'
import {
  ColorBox,
  ColorName,
  appColors,
  brandColors
} from './style'
import { transformColors } from '../services/transformColors'

export interface ColorProps {
  description: string
}

export interface SProps extends ColorProps {
  hex: string
}

export interface ColorObject {
  name: string
  hex: string
}

/**
 * This component is for demonstration of the Color plates purpose
 */
export class Color extends React.PureComponent<SProps> {
  render () {
    const { hex, description } = this.props
    return (
      <div>
        <ColorBox hex={hex} />
        <ColorName> {description} </ColorName>
        <p> {hex} </p>
      </div>
    )
  }
}

export const brandColorsArray: ColorObject[] = transformColors(brandColors)
export const appColorsArray: ColorObject[] = transformColors(appColors)
