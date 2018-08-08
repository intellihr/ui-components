import React from 'react'
import { Grid as StyledGrid } from 'react-styled-flexboxgrid'
import { ThemeProvider } from 'styled-components'
import { pxToRem } from '@Domain/Styles'
import { IWithDefaults } from '@Domain/Defaults'

interface IBreakpoints {
  xs : number
  sm : number
  md : number
  lg : number
}

interface IGridProps {
  /** Breakpoints to use for the grid layout */
  breakpoints?: IBreakpoints
}

class Grid extends React.PureComponent<IGridProps & IWithDefaults> {
  /**
   * Retrieve breakpoints in the following orders:
   * 1. Breakpoints directly provided to the component
   * 2. Breakpoints defined in the Default Provider
   */
  private get breakpoints () {
    const {
      breakpoints,
      defaults: {
        breakpoints: {
          xsmall,
          small,
          medium,
          large
        }
      }
    } = this.props

    if (breakpoints) {
      return breakpoints
    }

    return {
      xs: pxToRem(xsmall),
      sm: pxToRem(small),
      md: pxToRem(medium),
      lg: pxToRem(large)
    }
  }

  public render (): JSX.Element {
    const {
      children,
      breakpoints
    } = this.props

    return (
      <ThemeProvider
        theme={{
          flexboxgrid: {
            gridSize: 12,
            breakpoints: this.breakpoints
          }
        }}
      >
        <StyledGrid fluid>{children}</StyledGrid>
      </ThemeProvider>
    )
  }
}

export {
  IBreakpoints,
  IGridProps,
  Grid
}
