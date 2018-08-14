import React from 'react'
import styledBreakpoint from '@intellihr/styled-components-breakpoint'

const { breakpointMin, breakpointTablet, breakpointDesktop} = require('@Common/sass/variables.scss')

interface IWithStyledBreakpoints {
  breakpoint: {
    up: (size: string) => (t: TemplateStringsArray) => string
    down: (size: string) => (t: TemplateStringsArray) => string
    only: (size: string) => (t: TemplateStringsArray) => string
  }
}

const withStyledBreakpoints = <P extends IWithStyledBreakpoints>(StyledBreakpointsAwareComponent: React.ComponentType<P>) => (
  class extends React.PureComponent<P & Partial<IWithStyledBreakpoints>> {
    get breakpoints () {
      return styledBreakpoint({
        small: parseInt(breakpointMin, 10) || 0,
        medium: parseInt(breakpointTablet, 10) || 1,
        large: parseInt(breakpointDesktop, 10) || 2
      })
    }

    public render (): JSX.Element {
      return (
        (
          <StyledBreakpointsAwareComponent
            {...this.props}
            breakpoint={this.breakpoints}
          />
        )
      )
    }
  }
)

export {
  IWithStyledBreakpoints,
  withStyledBreakpoints
}
