import React from 'react'
import styled from 'styled-components'
import { ColorObject, Color } from './Color'
import { WrappedList } from './style'

export interface ColorGridProps {
  colors: ColorObject[]
}

export class ColorsGrid extends React.PureComponent<ColorGridProps> {
  render () {
    const { colors } = this.props

    return (
      <WrappedList>
        {colors.map(c => <Color hex={c.hex} description={c.name} key={c.name} />)}
      </WrappedList>
    )
  }
}
