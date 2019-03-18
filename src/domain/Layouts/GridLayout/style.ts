import styled, { css } from 'styled-components'

import { Utils, Variables } from '../../../common'

enum HorizontalAlignment {
  Left = 'left',
  Right = 'right',
  Center = 'center',
  Justify = 'justify',
  Spaced = 'spaced'
}

enum VerticalAlignment {
  Top = 'top',
  Middle = 'middle',
  Bottom = 'bottom',
  Stretch = 'stretch'
}

type GutterSize = 'none' | Variables.Spacing | Variables.Layout

interface IStyledGridLayoutProps {
  horizontalAlignment: HorizontalAlignment,
  verticalAlignment: VerticalAlignment,
  gutterMarginXForBreakpoints: IStyledGridGutters,
  gutterMarginYForBreakpoints: IStyledGridGutters
}

interface IStyledCellSizes {
  min: number | 'auto' | 'shrink' | 'fullWidth',
  tablet: number | 'auto' | 'shrink' | 'fullWidth',
  desktop: number | 'auto' | 'shrink' | 'fullWidth',
  bigDesktop: number | 'auto' | 'shrink' | 'fullWidth'
}

interface IStyledCellOffsets {
  min: number,
  tablet: number,
  desktop: number,
  bigDesktop: number
}

interface IStyledGridGutters {
  min: GutterSize,
  tablet: GutterSize,
  desktop: GutterSize,
  bigDesktop: GutterSize
}

interface IStyledCellProps {
  gridColumns: number,
  sizesForBreakpoints: IStyledCellSizes,
  offsetsForBreakpoints: IStyledCellOffsets,
  gutterMarginXForBreakpoints: IStyledGridGutters,
  gutterMarginYForBreakpoints: IStyledGridGutters,
  gutterPaddingXForBreakpoints: IStyledGridGutters,
  gutterPaddingYForBreakpoints: IStyledGridGutters
}

function getPxForGutterSize (size: GutterSize) {
  if (size === 'none') {
    return 0
  }

  return size
}

function getPropertiesForHorizontalAlignment (alignment: HorizontalAlignment) {
  switch (alignment) {
    case HorizontalAlignment.Left:
      return css`
        justify-content: flex-start;
      `
    case HorizontalAlignment.Right:
      return css`
        justify-content: flex-end;
      `
    case HorizontalAlignment.Center:
      return css`
        justify-content: center;
      `
    case HorizontalAlignment.Justify:
      return css`
        justify-content: space-between;
      `
    case HorizontalAlignment.Spaced:
      return css`
        justify-content: space-around;
      `
  }
}

function getPropertiesForVerticalAlignment (alignment: VerticalAlignment) {
  switch (alignment) {
    case VerticalAlignment.Top:
      return css`
        align-items: flex-start;
      `
    case VerticalAlignment.Bottom:
      return css`
        align-items: flex-end;
      `
    case VerticalAlignment.Middle:
      return css`
        align-items: center;
      `
    case VerticalAlignment.Stretch:
      return css`
        align-items: stretch;
      `
  }
}

function gridStyleForPropsAtBreakpoint (
  props: IStyledGridLayoutProps,
  breakpoint: keyof IStyledGridGutters
) {
  const xMarginGutterSize = getPxForGutterSize(props.gutterMarginXForBreakpoints[breakpoint])
  const yMarginGutterSize = getPxForGutterSize(props.gutterMarginYForBreakpoints[breakpoint])
  let leftRightMarginGutters
  let topBottomMarginGutters

  if (xMarginGutterSize > 0) {
    leftRightMarginGutters = css`
      margin-left: -${xMarginGutterSize}px;
      margin-right: -${xMarginGutterSize}px;
    `
  }

  if (yMarginGutterSize > 0) {
    topBottomMarginGutters = css`
      margin-top: -${yMarginGutterSize}px;
      margin-bottom: -${yMarginGutterSize}px;
    `
  }

  return css`
    ${leftRightMarginGutters}
    ${topBottomMarginGutters}
  `
}

function gridStyleForProps (props: IStyledGridLayoutProps) {
  return css`
    ${Utils.mediaQueryBetweenSizes({ maxPx: Variables.Breakpoint.breakpointTablet })} {
      ${gridStyleForPropsAtBreakpoint(props, 'min')}
    }

    ${Utils.mediaQueryBetweenSizes({
      minPx: Variables.Breakpoint.breakpointTablet,
      maxPx: Variables.Breakpoint.breakpointDesktop
    })} {
      ${gridStyleForPropsAtBreakpoint(props, 'tablet')}
    }

    ${Utils.mediaQueryBetweenSizes({
      minPx: Variables.Breakpoint.breakpointDesktop,
      maxPx: Variables.Breakpoint.breakpointBigDesktop
    })} {
      ${gridStyleForPropsAtBreakpoint(props, 'desktop')}
    }

    ${Utils.mediaQueryBetweenSizes({ minPx: Variables.Breakpoint.breakpointBigDesktop })} {
      ${gridStyleForPropsAtBreakpoint(props, 'bigDesktop')}
    }

    ${getPropertiesForHorizontalAlignment(props.horizontalAlignment)}
    ${getPropertiesForVerticalAlignment(props.verticalAlignment)}
  `
}

const StyledGridLayout = styled.div<IStyledGridLayoutProps>`
  display: flex;
  flex-flow: row wrap;
  flex: 1 0 auto;

  ${gridStyleForProps}
`

function cellStyleForPropsAtBreakpoint (
  props: IStyledCellProps,
  breakpoint: keyof IStyledCellSizes
) {
  const intendedSize = props.sizesForBreakpoints[breakpoint]
  const intendedOffset = props.offsetsForBreakpoints[breakpoint]
  const xPaddingGutterSize = getPxForGutterSize(props.gutterPaddingXForBreakpoints[breakpoint])
  const yPaddingGutterSize = getPxForGutterSize(props.gutterPaddingYForBreakpoints[breakpoint])
  const xMarginGutterSize = getPxForGutterSize(props.gutterMarginXForBreakpoints[breakpoint])
  const yMarginGutterSize = getPxForGutterSize(props.gutterMarginYForBreakpoints[breakpoint])
  let flexProperties
  let offsetProperties
  let leftRightPaddingGutters
  let topBottomPaddingGutters
  let leftRightMarginGutters
  let topBottomMarginGutters

  if (xPaddingGutterSize > 0) {
    leftRightPaddingGutters = css`
      padding-left: ${xPaddingGutterSize}px;
      padding-right: ${xPaddingGutterSize}px;
    `
  }

  if (yPaddingGutterSize > 0) {
    topBottomPaddingGutters = css`
      padding-top: ${yPaddingGutterSize}px;
      padding-bottom: ${yPaddingGutterSize}px;
    `
  }

  if (xMarginGutterSize > 0) {
    leftRightMarginGutters = css`
      margin-left: ${xMarginGutterSize}px;
      margin-right: ${xMarginGutterSize}px;
    `
  }

  if (yMarginGutterSize > 0) {
    topBottomMarginGutters = css`
      margin-top: ${yMarginGutterSize}px;
      margin-bottom: ${yMarginGutterSize}px;
    `
  }

  if (intendedSize === 'auto') {
    flexProperties = css`
      flex: 1 1 0px;
      width: auto;
    `
  } else if (intendedSize === 'shrink') {
    flexProperties = css`
      flex: 0 0 auto;
      width: auto;
    `
  } else {
    const widthPercentage = (intendedSize === 'fullWidth') ? 100 : (intendedSize * 100 / props.gridColumns)

    if (xMarginGutterSize > 0) {
      flexProperties = css`
        width: calc(${widthPercentage}% - ${xMarginGutterSize * 2}px);
      `
    } else {
      flexProperties = css`
        width: ${widthPercentage}%;
      `
    }
  }

  if (intendedOffset > 0) {
    const offsetPercentage = intendedOffset * 100 / props.gridColumns

    if (xMarginGutterSize > 0) {
      offsetProperties = css`
        margin-left: calc(${offsetPercentage}% + ${xMarginGutterSize}px);
      `
    } else {
      offsetProperties = css`
        margin-left: ${offsetPercentage}%;
      `
    }
  }

  return css`
    ${leftRightPaddingGutters}
    ${topBottomPaddingGutters}
    ${leftRightMarginGutters}
    ${topBottomMarginGutters}
    ${flexProperties}
    ${offsetProperties}
  `
}

function cellStyleForProps (props: IStyledCellProps) {
  return css`
    ${Utils.mediaQueryBetweenSizes({ maxPx: Variables.Breakpoint.breakpointTablet })} {
      ${cellStyleForPropsAtBreakpoint(props, 'min')}
    }

    ${Utils.mediaQueryBetweenSizes({
      minPx: Variables.Breakpoint.breakpointTablet,
      maxPx: Variables.Breakpoint.breakpointDesktop
    })} {
      ${cellStyleForPropsAtBreakpoint(props, 'tablet')}
    }

    ${Utils.mediaQueryBetweenSizes({
      minPx: Variables.Breakpoint.breakpointDesktop,
      maxPx: Variables.Breakpoint.breakpointBigDesktop
    })} {
      ${cellStyleForPropsAtBreakpoint(props, 'desktop')}
    }

    ${Utils.mediaQueryBetweenSizes({ minPx: Variables.Breakpoint.breakpointBigDesktop })} {
      ${cellStyleForPropsAtBreakpoint(props, 'bigDesktop')}
    }
  `
}

const StyledCell = styled.div<IStyledCellProps>`
  flex: 0 0 auto;
  flex-basis: auto;
  min-height: 0;
  min-width: 0;
  width: 100%;

  ${cellStyleForProps}
`

export {
  IStyledCellSizes,
  IStyledCellOffsets,
  IStyledGridGutters,
  StyledGridLayout,
  StyledCell,
  HorizontalAlignment,
  VerticalAlignment,
  GutterSize
}
