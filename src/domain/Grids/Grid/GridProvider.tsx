import React from 'react'
import { Grid as StyledGrid } from 'react-styled-flexboxgrid'
import { ThemeProvider } from 'styled-components'
import { pxToRem } from '../../Styles'
const sassGlobals = require('../../../common/sass/variables.scss')

class GridProvider extends React.PureComponent {
  private get breakpoints () {
    return {
      xs: -1,
      sm: pxToRem(parseInt(sassGlobals['breakpoint-min'], 10)) || 0,
      md: pxToRem(parseInt(sassGlobals['breakpoint-tablet'], 10)) || 1,
      lg: pxToRem(parseInt(sassGlobals['breakpoint-desktop'], 10)) || 2
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
            breakpoints: this.breakpoints
          }
        }}
      >
        <StyledGrid fluid={true}>{children}</StyledGrid>
      </ThemeProvider>
    )
  }
}

export {
  GridProvider
}
