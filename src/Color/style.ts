import React from 'react'
import styled, { StyledComponentClass } from 'styled-components'

export interface ColorWithNameAndValue {
  [key: string]: string
}

export interface ColorBoxProps {
  hex: string
}

export const brandColors: ColorWithNameAndValue = {
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

export const appColors: ColorWithNameAndValue = {
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


export const ColorBox = styled.div`
  width: 10em;
  height: 7.5em;
  background-color: ${(props: ColorBoxProps) => props.hex};
  margin-bottom: 1em;
`

export const ColorName = styled.p`
  font-weight: 600;
`
export const WrappedList = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 50rem;
  margin-left: 0;
`
