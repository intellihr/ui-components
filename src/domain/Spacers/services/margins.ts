import { css } from 'styled-components'

import { Props, Utils, Variables } from '../../../common'
import { GutterSize } from '../../Layouts/GridLayout/style'

interface IBreakpointMargins {
  min?: Variables.Spacing | Variables.Layout | 'none'
  tablet?: Variables.Spacing | Variables.Layout | 'none'
  desktop?: Variables.Spacing | Variables.Layout | 'none'
  bigDesktop?: Variables.Spacing | Variables.Layout | 'none'
}

const breakpointOrder: ReadonlyArray<keyof IBreakpointMargins> = ['min', 'tablet', 'desktop', 'bigDesktop']

function getMarginSizeAtBreakpoint (breakpoint: keyof IBreakpointMargins, margin: IBreakpointMargins): number {
  let lastMargin: GutterSize = 'none'

  for (const curBreakpoint of breakpointOrder) {
    lastMargin = margin[curBreakpoint] || lastMargin

    if (curBreakpoint === breakpoint) {
      break
    }
  }

  return lastMargin === 'none' ? 0 : lastMargin
}

function getMargin (type: 'top' | 'bottom' | 'left' | 'right', margin?: Props.Margin) {
  if (margin) {
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

  return null
}

function styleForMargins (margins?: Props.IMargins): any {
  if (margins) {
    return css`
      ${getMargin('top', margins.top)}
      ${getMargin('bottom', margins.bottom)}
      ${getMargin('left', margins.left)}
      ${getMargin('right', margins.right)}
    `
  }

  return null
}

export {
  styleForMargins
}
