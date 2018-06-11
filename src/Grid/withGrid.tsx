import React from 'react'
import { Grid } from './Grid'

export interface IGrid {
  /** Breakpoints used for the grid layout */
  breakpoints?: string[]
}

export const withGrid = <P extends {}>(Component: React.ComponentType<P>) =>
  class WithGrid extends React.Component<P & IGrid> {
    render (): JSX.Element {
      return (
        <Grid {...this.props}>
          <Component {...this.props} />
        </Grid>
      )
    }
  }
