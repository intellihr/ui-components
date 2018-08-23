import React from 'react'
import styledBreakpoint from '@intellihr/styled-components-breakpoint'
import { Variables } from '../../../common'

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
        small: Variables.Breakpoint.breakpointMin,
        medium: Variables.Breakpoint.breakpointTablet,
        large: Variables.Breakpoint.breakpointDesktop
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
