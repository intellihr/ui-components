import React, { Fragment } from 'react'
import styled from 'styled-components'
import { kebabCase } from 'lodash'

export interface ColourProps {
  description: string
}

export interface SProps extends ColourProps {
  hex: string
}

export class Colour extends React.PureComponent<SProps> {
  render() {
    const { hex, description } = this.props
    const Box = styled.div`
      width: 10em;
      height: 7.5em;
      background-color: ${hex};
      margin-bottom: 1em;
    `
    const ColourName = styled.p`
      font-weight: 600
    `
    return (<div>
      <Box />
      <ColourName> {description} </ColourName>
      <p> {hex} </p>
    </div>)
  }
}

export interface ColourObject {
  name: string;
  hex: string;
}
export interface ColourGridProps {
  colours:  ColourObject[]
}

const brandColoursObject: any = {
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
  intelliOffWhite: '#F5F5F5',
}

const appColoursObject: any = {
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

const transformColours = (c: any) => Object.keys(c).map(k => ({
  name: kebabCase(k),
  hex: c[k]
}))


export const brandColours: ColourObject[] = transformColours(brandColoursObject)
export const appColours: ColourObject[] = transformColours(appColoursObject)

export class ColourGrid extends React.PureComponent<ColourGridProps> {
  render() {
    const WrappedList = styled.div`
      display: flex;
      flex-wrap: wrap
      max-width: 50rem;
      margin-left: 0;
    `
    const { colours } = this.props

    return (
      <WrappedList>
        {colours.map(c => <Colour hex={c.hex} description={c.name} />)}
      </WrappedList>
    )
  }
}

export class IntelliRoyalBlue extends React.PureComponent<ColourProps> {
  render() {
    return <Colour hex="#432DF3" description={this.props.description} />
  }
}



