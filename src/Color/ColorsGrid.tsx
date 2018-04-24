import React from 'react'
import styled from 'styled-components'
import { ColorObject, Color } from './Color'

export interface ColorGridProps {
  colors: ColorObject[]
}

export class ColorsGrid extends React.PureComponent<ColorGridProps> {
  render () {
    const WrappedList = styled.div`
      display: flex;
      flex-wrap: wrap;
      max-width: 50rem;
      margin-left: 0;
    `
    const { colors } = this.props

    return (
      <WrappedList>
        {colors.map(c => <Color hex={c.hex} description={c.name} key={c.name} />)}
      </WrappedList>
    )
  }
}
