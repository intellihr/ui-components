import React from 'react'
import { ThemeProvider } from 'styled-components'
import { IWithDefaults, withDefaults, DefaultsConsumer } from '../Defaults'

interface IBreakpoints {
  xs: number
  sm: number
  md: number
  lg: number
}

interface IGridProps {
    /** Breakpoints to use for the grid layout */
  breakpoints?: IBreakpoints
}

class GridBase extends React.PureComponent<IGridProps & IWithDefaults> {
  private pxToRem (px: number): number {
    return px * 0.0625
  }
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
      xs: this.pxToRem(small),
      sm: this.pxToRem(medium),
      md: this.pxToRem(large),
      lg: this.pxToRem(xlarge)
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
            breakpoints: this.breakpoints
          }
        }}
      >
        {children}
      </ThemeProvider>
    )
  }
}

// Export separately for styleguidist to show the correct name
export const Grid = withDefaults(GridBase)

export {
  IBreakpoints,
  IGridProps,
}
