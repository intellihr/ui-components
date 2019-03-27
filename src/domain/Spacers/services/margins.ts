import { css } from 'styled-components'

import { Props, Utils, Variables } from '../../../common'

interface IBreakpointMargins {
  min?: Variables.Spacing | Variables.Layout | 'none'
  tablet?: Variables.Spacing | Variables.Layout | 'none'
  desktop?: Variables.Spacing | Variables.Layout | 'none'
  bigDesktop?: Variables.Spacing | Variables.Layout | 'none'
}

const breakpointOrder: ReadonlyArray<keyof IBreakpointMargins> = ['min', 'tablet', 'desktop', 'bigDesktop']

function getMarginSizeAtBreakpoint (breakpoint: keyof IBreakpointMargins, margin: IBreakpointMargins): number {
  let lastMargin: Variables.Spacing | Variables.Layout | 'none' = 'none'

  for (const curBreakpoint of breakpointOrder) {
    lastMargin = margin[curBreakpoint] || lastMargin

    if (curBreakpoint === breakpoint) {
      break
    }
  }

  return lastMargin === 'none' ? 0 : lastMargin
}

function styleForMargin (type: 'top' | 'bottom' | 'left' | 'right', margin?: Props.Margin) {
  if (!margin) {
    return null
  }

  if (typeof margin === 'number') {
    return css`
      margin-${type}: ${margin}px;
    `
  }

  return css`
    ${Utils.mediaQueryBetweenSizes({maxPx: Variables.Breakpoint.breakpointTablet})} {
      margin-${type}: ${getMarginSizeAtBreakpoint('min', margin)}px;
    }

    ${Utils.mediaQueryBetweenSizes({
      minPx: Variables.Breakpoint.breakpointTablet,
      maxPx: Variables.Breakpoint.breakpointDesktop
    })} {
      margin-${type}: ${getMarginSizeAtBreakpoint('tablet', margin)}px;
    }

    ${Utils.mediaQueryBetweenSizes({
      minPx: Variables.Breakpoint.breakpointDesktop,
      maxPx: Variables.Breakpoint.breakpointBigDesktop
    })} {
      margin-${type}: ${getMarginSizeAtBreakpoint('desktop', margin)}px;
    }

    ${Utils.mediaQueryBetweenSizes({minPx: Variables.Breakpoint.breakpointBigDesktop})} {
      margin-${type}: ${getMarginSizeAtBreakpoint('bigDesktop', margin)}px;
    }
  `
}

function styleForMargins (margins?: Props.IMargins) {
  if (margins) {
    return css`
      ${styleForMargin('top', margins.top)}
      ${styleForMargin('bottom', margins.bottom)}
      ${styleForMargin('left', margins.left)}
      ${styleForMargin('right', margins.right)}
    `
  }

  return null
}

export {
  styleForMargins
}
