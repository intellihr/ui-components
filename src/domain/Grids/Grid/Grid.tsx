import React from 'react'
import { ThemeProvider } from 'styled-components'
import { IWithDefaults, withDefaults, DefaultsConsumer } from '../../Defaults/index'
import { pxToRem } from '../../Styles/index'

interface IBreakpoints {
  sm  : number
  md  : number
  lg : number,
  xlg: number
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
      sm: pxToRem(small),
      md: pxToRem(medium),
      lg: pxToRem(large),
      xlg: pxToRem(xlarge)
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

export {
  IBreakpoints,
  IGridProps,
  Grid
}
