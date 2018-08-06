import React from 'react'
import { Row as StyledRow } from 'react-styled-flexboxgrid'

class Row extends React.PureComponent {

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
