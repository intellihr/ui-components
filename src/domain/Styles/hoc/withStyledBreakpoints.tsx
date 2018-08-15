import React from 'react'
import styledBreakpoint from '@intellihr/styled-components-breakpoint'

const sassGlobals = require('@Common/sass/variables.scss')

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
        small: parseInt(sassGlobals['breakpoint-min'], 10) || 0,
        medium: parseInt(sassGlobals['breakpoint-tablet'], 10) || 1,
        large: parseInt(sassGlobals['breakpoint-desktop'], 10) || 2
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
