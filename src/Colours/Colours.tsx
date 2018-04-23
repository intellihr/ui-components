import React, { Fragment } from 'react'
import styled from 'styled-components'

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

export class IntelliRoyalBlue extends React.PureComponent<ColourProps> {
  render() {
    return <Colour hex="#432DF3" description={this.props.description} />
  }
}


