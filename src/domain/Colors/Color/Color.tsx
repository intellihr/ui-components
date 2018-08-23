import React from 'react'
import { map } from 'lodash'
import {
  WrappedList,
  ColorBox,
  ColorName
} from './style'
import { Variables } from '../../../common'

export interface IColorGridProps {
  colors: Variables.Color[]
}

export class ColorsGrid extends React.PureComponent<IColorGridProps> {
  public render (): JSX.Element {
    const { colors } = this.props

    return (
      <WrappedList>
        {map(colors, (color: Variables.Color, idx: number) =>
          (
            <div key={idx}>
              <ColorBox hex={color} />
              <ColorName> {color} </ColorName>
              <p> {color} </p>
            </div>
          )
        )}
      </WrappedList>
    )
  }
}
