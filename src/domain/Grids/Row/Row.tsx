import React from 'react'
import { Row as StyledRow } from 'react-styled-flexboxgrid'
import { GridProvider } from '../Grid'
import { Column } from '../Column'

class Row extends React.PureComponent<any> {
  public static Column = Column

  public render (): JSX.Element {
    return (
      <GridProvider>
        <StyledRow
          {...this.props}
        />
      </GridProvider>
    )
  }
}

export {
  Row
}
