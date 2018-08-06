import React from 'react'
import { Col } from 'react-styled-flexboxgrid'

interface IColProps {
  xs  : number
  sm  : number
  md  : number,
  lg  : number
}

class Column extends React.PureComponent<IColProps> {

  get dimensions() {
    let xsmall : number = 0;
    let small  : number = 0;
    let medium : number = 0;
    let large  : number = 0;

    const {
      xs,
      sm,
      md,
      lg
    } = this.props

    !xs ? xsmall = 12 : xsmall = xs;

    !sm ? small = 12 : small = sm;

    !md ? medium = 6 : medium = md;

    !lg ? large = 6  : large = lg;

    (md && !lg) ? large = md : large = lg;

    (!md && lg) ? medium = lg : medium = md;

    return {
      xs: xsmall,
      sm: small,
      md: medium,
      lg: large
    }
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
