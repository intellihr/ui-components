import React from 'react'
import { Row as StyledRow } from 'react-styled-flexboxgrid'
import { Column } from '../Column'

class Row extends React.PureComponent<any> {
  public static Column = Column

  public render (): JSX.Element {
    return (
      <StyledRow
        {...this.props}
      />
    )
  }
}

export {
  Row
}
