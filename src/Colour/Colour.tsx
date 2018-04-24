import React, { Fragment } from 'react'
import styled from 'styled-components'
import { transformColours } from './transformColours'

export interface ColourProps {
  description: string
}

export interface SProps extends ColourProps {
  hex: string
}

export interface ColourObject {
  name: string
  hex: string
}

export interface ColourWithNameAndValue {
  [key: string]: string
}

export const brandColours: ColourWithNameAndValue = {
  intelliRoyalBlue: '#432DF3',
  intelliGreen: '#04DBAC',
  intelliYellow: '#FFDD37',
  intelliRed: '#FF4D50',
  intelliCyan: '#03DEEB',
  intelliPurple: '#A35AFF',
  intelliCharcoal: '#303035',
  intelliGrey1: '#B3B3B5',
  intelliGrey2: '#E4E4E5',
  intelliBaseWhite: '#F5F7F9',
  intelliOffWhite: '#F5F5F5'
}

export const appColours: ColourWithNameAndValue = {
  intelliAppBlue: '#0F68FA',
  intelliDarkGrey: '#47525D',
  intelliGreyBlue1: '#C3CCD0',
  intelliGreyBlue2: '#DFE5E8',
  intelliWhite: '#FFFFFF',
  intelliRoyalBlueLight: '#EBE9FE',
  intelliAppBlueLight: '#D7F2FF',
  intelliGreenLight: '#E0FEF8',
  intelliYellowLight: '#FFF9DA',
  intelliRedLight: '#FFE6E6'
}

/**
 * This component is for demonstration of the colour plates purpose
 */
export class Colour extends React.PureComponent<SProps> {
  render () {
    const { hex, description } = this.props
    const Box = styled.div`
      width: 10em;
      height: 7.5em;
      background-color: ${hex};
      margin-bottom: 1em;
    `
    const ColourName = styled.p`
      font-weight: 600;
    `
    return (<div>
      <Box />
      <ColourName> {description} </ColourName>
      <p> {hex} </p>
    </div>)
  }
}

export const brandColoursArray: ColourObject[] = transformColours(brandColours)
export const appColoursArray: ColourObject[] = transformColours(appColours)
