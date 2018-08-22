import React from 'react'
import { Row as StyledRow } from 'react-styled-flexboxgrid'
import { Column } from '../Column'

interface IRoleProps {
  className?: string
  onClick?: () => void
  style?: object
}

class Row extends React.PureComponent<IRoleProps> {
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
