import React from 'react'
import { reduce, isNil, keys } from 'lodash'
import { Col } from 'react-styled-flexboxgrid'

interface IColumnProps {
  xs?: number,
  sm?: number,
  md?: number,
  lg?: number
}

class Column extends React.PureComponent<IColumnProps> {
  get dimensions () : IColumnProps {
    const {
      xs,
      sm,
      md,
      lg
    } = this.props

    const defaultColumnSize = 12
    const numberOfColumnSizes = 3

    const dimensions: string[] = ['xs', 'sm', 'md', 'lg']

    let previousValue: number
    const that = this

    return reduce(dimensions, (acc: IColumnProps, key: string, index): IColumnProps => {
      const sizeValue = that.props[key as keyof IColumnProps]

      if(!previousValue &&  index === numberOfColumnSizes) {
        previousValue = defaultColumnSize
      }

      if (!isNil(sizeValue)) {
        previousValue = sizeValue
      }
      acc[key as keyof IColumnProps] = sizeValue

      keys(acc).forEach((identifier) => {
        if(!acc[identifier as keyof IColumnProps]) {
          acc[identifier as keyof IColumnProps] = previousValue
        }
      })

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
