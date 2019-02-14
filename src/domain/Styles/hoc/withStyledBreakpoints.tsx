import styledBreakpoint from '@intellihr/styled-components-breakpoint'
import React from 'react'

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
        min: Variables.Breakpoint.breakpointMin,
        tablet: Variables.Breakpoint.breakpointTablet,
        desktop: Variables.Breakpoint.breakpointDesktop,
        bigDesktop: Variables.Breakpoint.breakpointBigDesktop
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
