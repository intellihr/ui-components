import React from 'react'
import { Col } from 'react-styled-flexboxgrid'

interface IColProps {
  sm: number,
  md: number,
  lg: number,
  xlg: number,
  xxlg: number
}

class Column extends React.PureComponent<IColProps> {
  get dimensions () {
    let small: number = 0
    let medium: number = 0
    let large: number = 0
    let xlarge: number = 0
    let xxlarge: number = 0

    const {
      sm,
      md,
      lg,
      xlg,
      xxlg
    } = this.props

    !sm ? small = 12 : small = sm

    !md ? medium = 6 : medium = md

    !lg ? large = 3 : large = lg

    !xlg ? xlarge = 3 : xlarge = xlg

    !xxlg ? xxlarge = 3 : xxlarge = xxlg

    if (md && !lg && !xlg && !xxlg) {
      large = md
      xlarge = md
      xxlarge = md
    }

    if (lg && !xlg && !xxlg) {
      medium = lg
      xlarge = lg
      xxlarge = lg
    }

    return {
      sm: small,
      md: medium,
      lg: large,
      xlg: xlarge,
      xxlg: xxlarge
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
