import React from 'react'
import { map } from 'lodash'
import {
  WrappedList,
  ColorBox,
  ColorName
} from './style'
import { Variables } from '../../../common'

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
