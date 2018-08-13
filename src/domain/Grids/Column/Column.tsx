import React from 'react'
import { reduce, isNil, omit, pick } from 'lodash'
import { Col } from 'react-styled-flexboxgrid'

interface IColumnProps {
  xs?: number,
  sm?: number,
  md?: number,
  lg?: number
}

class Column extends React.PureComponent<IColumnProps> {
  public static defaultProps: Partial<IColumnProps> = {
    xs: 12
  }

  get dimensions () : IColumnProps {
    const {
      xs,
      sm,
      md,
      lg
    } = this.props

    const dimensions: Array<string> = ['xs', 'sm', 'md', 'lg']

    let previousValue: number = 12
    const that = this

    return reduce(dimensions, (acc: IColumnProps, key: string, k): IColumnProps => {
      const sizeValue = that.props[key as keyof IColumnProps]

      if (!isNil(sizeValue)) {
        previousValue = sizeValue
      }
      acc[key as keyof IColumnProps] = previousValue

      return acc
    }, {})
  }

  public render (): JSX.Element {
    return (
      <Col type='row'
        {...this.props}
        {...this.dimensions}
      />
    )
  }
}

export {
  Column
}
