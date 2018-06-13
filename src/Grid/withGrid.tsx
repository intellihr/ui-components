import React from 'react'
import { Grid, IGridProps } from './Grid'

export const withGrid = <P extends {}>(Component: React.ComponentType<P>) =>
  class WithGrid extends React.Component<P & IGridProps> {
    render (): JSX.Element {
      return (
        <Grid {...this.props}>
          <Component {...this.props} />
        </Grid>
      )
    }
  }
