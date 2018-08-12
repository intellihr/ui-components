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

class GridProvider extends React.PureComponent<IGridProps & IWithDefaults> {
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
          small,
          medium,
          large,
          xlarge
        }
      }
    } = this.props

    if (breakpoints) {
      return breakpoints
    }

    return {
      xs: pxToRem(small),
      sm: pxToRem(medium),
      md: pxToRem(large),
      lg: pxToRem(xlarge)
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
            gutterWidth: 1,
            outerMargin: 2,
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
  GridProvider
}
