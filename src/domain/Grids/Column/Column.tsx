import React from 'react'
import { map } from 'lodash'
import { Col } from 'react-styled-flexboxgrid'

interface IColProps {
  xs?: number,
  sm?: number,
  md?: number,
  lg?: number
}

class Column extends React.PureComponent<IColProps> {
  public static defaultProps: Partial<IColProps> = {
    xs: 12
  }

  get dimensions () : IColProps {
    const {
      xs,
      sm,
      md,
      lg
    } = this.props

    let dimensions = {'xs': xs, 'sm': sm, 'md': md, 'lg': lg}
    let value = 0
    map(dimensions, function (item, key) {
      if (item) {
        value = item
      } else {
        dimensions[key as keyof IColProps] = value
      }
    })
    return dimensions
  }

  public render (): JSX.Element {
    return (
      <Col
        {...this.props}
        {...this.dimensions}
      />
    )
  }
}

export {
  Column
}
