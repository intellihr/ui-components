import React from 'react'
import { Row as StyledRow } from 'react-styled-flexboxgrid'

import { Column } from '../Column'
import { GridProvider } from '../Grid'

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
