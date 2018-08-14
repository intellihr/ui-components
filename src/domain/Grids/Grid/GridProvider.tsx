import React from 'react'
import { Grid as StyledGrid } from 'react-styled-flexboxgrid'
import { ThemeProvider } from 'styled-components'
import { pxToRem } from '../../Styles'
const { breakpointMin, breakpointTablet, breakpointDesktop} = require('../../../common/sass/variables.scss')

class GridProvider extends React.PureComponent {
  private get breakpoints () {
    return {
      xs: -1,
      sm: pxToRem(parseInt(breakpointMin, 10)) || 0,
      md: pxToRem(parseInt(breakpointTablet, 10)) || 1,
      lg: pxToRem(parseInt(breakpointDesktop, 10)) || 2
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
