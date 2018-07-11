import styledBreakpoint from '@humblebee/styled-components-breakpoint'

const globals = require('../sass/globals.scss')

export const breakpoint = styledBreakpoint({
  small: parseInt(globals['breakpoint-small']),
  medium: parseInt(globals['breakpoint-medium']),
  large: parseInt(globals['breakpoint-large']),
  xlarge: parseInt(globals['breakpoint-xlarge']),
  xxlarge: parseInt(globals['breakpoint-xxlarge'])
})
