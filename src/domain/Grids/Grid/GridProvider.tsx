import React from 'react'
import { Grid as StyledGrid } from 'react-styled-flexboxgrid'
import { ThemeProvider } from 'styled-components'

import { Variables } from '../../../common'
import { pxToRem } from '../../Styles'

class GridProvider extends React.PureComponent {
  private get breakpoints () {
    return {
      xs: -1,
      sm: pxToRem(Variables.Breakpoint.breakpointMin),
      md: pxToRem(Variables.Breakpoint.breakpointTablet),
      lg: pxToRem(Variables.Breakpoint.breakpointDesktop)
    }
  }

  public render (): JSX.Element {
    const {
      children
    } = this.props

    return (
      <ThemeProvider
        theme={{
          flexboxgrid: {
            gridSize: 12,
            gutterWidth: 0,
            outerMargin: 0,
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
  GridProvider
}
