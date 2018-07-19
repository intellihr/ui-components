import React from 'react'
import styledBreakpoint from '@humblebee/styled-components-breakpoint'
import { ThemeProvider } from 'styled-components'
import { defaults as fallbackDefaults, IDefaults, DefaultsConsumer } from '../Defaults'

interface IWithStyledBreakpoints {
  breakpoint: {
    up: (size: string) => (t: TemplateStringsArray) => string
    down: (size: string) => (t: TemplateStringsArray) => string
    only: (size: string) => (t: TemplateStringsArray) => string
  }
}

const withStyledBreakpoints = <P extends IWithStyledBreakpoints>(StyledBreakpointsAwareComponent: React.ComponentType<P>) => (
  class extends React.PureComponent<P & Partial<IWithStyledBreakpoints>> {
    // defaults may be undefined if DefaultProvider is not used
    public getBreakpoint (defaults: IDefaults | undefined) {
      let breakpoints = fallbackDefaults.breakpoints

      if (defaults && defaults.breakpoints) {
        breakpoints = defaults.breakpoints
      }

      return styledBreakpoint({
        ...breakpoints
      })
    }

    public render (): JSX.Element {
      return (
        <DefaultsConsumer>
          {defaults => (
            <StyledBreakpointsAwareComponent
              {...this.props}
              breakpoint={this.getBreakpoint(defaults)}
            />
          )}
        </DefaultsConsumer>
      )
    }
  }
)

export {
  IWithStyledBreakpoints,
  withStyledBreakpoints
}
