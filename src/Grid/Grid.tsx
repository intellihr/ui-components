import React from 'react'
import { ThemeProvider } from 'styled-components'
import { IWithDefaults, withDefaults, DefaultsConsumer } from '../Defaults'
import { pxToRem } from '../Style'

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
            breakpoints: this.breakpoints
          }
        }}
      >
        {children}
      </ThemeProvider>
    )
  }
}

const Grid = withDefaults(GridBase)

export {
  IBreakpoints,
  IGridProps,
  Grid
}
