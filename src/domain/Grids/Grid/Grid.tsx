import React from 'react'
import { ThemeProvider } from 'styled-components'
import { pxToRem } from '@Domain/Styles'
import { IWithDefaults } from '@Domain/Defaults'

interface IBreakpoints {
  sm : number
  md : number
  lg : number
  xlg : number
  xxlg : number
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
          xlarge,
          xxlarge
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
      xlg: pxToRem(xlarge),
      xxlg: pxToRem(xxlarge)
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
