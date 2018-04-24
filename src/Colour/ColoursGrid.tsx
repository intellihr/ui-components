import React from 'react'
import styled from 'styled-components'
import { ColourObject, Colour, ColourWithNameAndValue } from './Colour'

export interface ColourGridProps {
  colours: ColourObject[]
}

export class ColoursGrid extends React.PureComponent<ColourGridProps> {
  render () {
    const WrappedList = styled.div`
      display: flex;
      flex-wrap: wrap;
      max-width: 50rem;
      margin-left: 0;
    `
    const { colours } = this.props

    return (
      <WrappedList>
        {colours.map(c => <Colour hex={c.hex} description={c.name} key={c.name} />)}
      </WrappedList>
    )
  }
}
