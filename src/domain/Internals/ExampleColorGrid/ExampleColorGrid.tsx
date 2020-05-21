import map from 'lodash/map'
import React from 'react'

import { Variables } from '../../../common'
import {
  ColorBox,
  ColorName,
  WrappedList
} from './style'

interface IColorDefinition {
  colorHex: Variables.Color,
  name: string
}

export interface IExampleColorGridProps {
  colors: IColorDefinition[]
}

export class ExampleColorGrid extends React.PureComponent<IExampleColorGridProps> {
  public render (): JSX.Element {
    const { colors } = this.props

    return (
      <WrappedList>
        {map(colors, (color: IColorDefinition, idx: number) =>
          (
            <div key={idx}>
              <ColorBox hex={color.colorHex} />
              <ColorName> {color.name} </ColorName>
              <p> {color.colorHex} </p>
            </div>
          )
        )}
      </WrappedList>
    )
  }
}
