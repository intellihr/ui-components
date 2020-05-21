import isNil from 'lodash/isNil'
import reduce from 'lodash/reduce'
import React from 'react'
import { Col } from 'react-styled-flexboxgrid'

interface IColumnProps {
  sm?: number,
  md?: number,
  lg?: number
}

class Column extends React.PureComponent<IColumnProps> {
  public static defaultProps: Partial<IColumnProps> = {
    sm: 12
  }

  get dimensions (): IColumnProps {
    const {
      sm,
      md,
      lg
    } = this.props

    const dimensions: string[] = ['sm', 'md', 'lg']

    let previousValue: number = 12
    const that = this

    return reduce(dimensions,
                 (acc: IColumnProps,
                          key: string,
                          index: number): IColumnProps => {
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
      <Col
        type='row'
        {...this.props}
        {...this.dimensions}
      />
    )
  }
}

export {
  Column
}
