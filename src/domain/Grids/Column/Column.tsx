import React from 'react'
import { map, reduce, isNil } from 'lodash'
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

    const dimensions: IColProps = {'xs': xs, 'sm': sm, 'md': md, 'lg': lg}

    let previousValue: number = 12

    return reduce(Object.keys(dimensions), (acc: IColProps, key: string): IColProps => {
      const sizeValue = dimensions[key as keyof IColProps]

      if (!isNil(sizeValue)) {
        previousValue = sizeValue
      }

      acc[key as keyof IColProps] = previousValue

      return acc
    }, {})
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
