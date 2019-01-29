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

enum GutterSize {
  None = 'none',
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

interface IStyledGridLayoutProps {
  horizontalAlignment: HorizontalAlignment,
  verticalAlignment: VerticalAlignment,
  gutterMarginX: GutterSize,
  gutterMarginY: GutterSize
}

interface IStyledCellSizes {
  min: number | 'auto' | 'shrink',
  tablet: number | 'auto' | 'shrink',
  desktop: number | 'auto' | 'shrink',
  bigDesktop: number | 'auto' | 'shrink'
}

interface IStyledCellOffsets {
  min: number,
  tablet: number,
  desktop: number,
  bigDesktop: number
}

interface IStyledCellProps {
  gridColumns: number,
  sizesForBreakpoints: IStyledCellSizes,
  offsetsForBreakpoints: IStyledCellOffsets,
  gutterMarginX: GutterSize,
  gutterMarginY: GutterSize,
  gutterPaddingX: GutterSize,
  gutterPaddingY: GutterSize
}

function getPxForGutterSize(size: GutterSize) {
  switch (size) {
    case GutterSize.Large:
      return 32
    case GutterSize.Medium:
      return 24
    case GutterSize.Small:
      return 16
  }

  return 0
}

function getPropertiesForHorizontalAlignment(alignment: HorizontalAlignment) {
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

function getPropertiesForVerticalAlignment(alignment: VerticalAlignment) {
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

function gridStyleForProps(props: IStyledGridLayoutProps) {
  const xMarginGutterSize = getPxForGutterSize(props.gutterMarginX)
  const yMarginGutterSize = getPxForGutterSize(props.gutterMarginY)
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
    ${getPropertiesForHorizontalAlignment(props.horizontalAlignment)}
    ${getPropertiesForVerticalAlignment(props.verticalAlignment)}
  `
}

const StyledGridLayout = styled.div<IStyledGridLayoutProps>`
  display: flex;
  flex-flow: row wrap;
  
  ${gridStyleForProps}
`

function cellStyleForPropsAtBreakpoint(
  props: IStyledCellProps,
  breakpoint: keyof IStyledCellSizes
) {
  const intendedSize = props.sizesForBreakpoints[breakpoint]
  const intendedOffset = props.offsetsForBreakpoints[breakpoint]
  const xMarginGutterSize = getPxForGutterSize(props.gutterMarginX)
  let flexProperties
  let offsetProperties

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
    const widthPercentage = intendedSize * 100 / props.gridColumns

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
    ${flexProperties}
    ${offsetProperties}
  `
}

function cellStyleForProps(props: IStyledCellProps) {
  const xPaddingGutterSize = getPxForGutterSize(props.gutterPaddingX)
  const yPaddingGutterSize = getPxForGutterSize(props.gutterPaddingY)
  const xMarginGutterSize = getPxForGutterSize(props.gutterMarginX)
  const yMarginGutterSize = getPxForGutterSize(props.gutterMarginY)
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

  return css`
    ${leftRightPaddingGutters}
    ${topBottomPaddingGutters}
    ${leftRightMarginGutters}
    ${topBottomMarginGutters}
  `
}

const StyledCell = styled.div<IStyledCellProps>`
  flex: 0 0 auto;
  flex-basis: auto;
  min-height: 0;
  min-width: 0;
  width: 100%;
  
  ${Utils.mediaQueryBetweenSizes({ maxPx: Variables.Breakpoint.breakpointTablet })} {
    ${(props: IStyledCellProps) => cellStyleForPropsAtBreakpoint(props, 'min')}
  }
  
  ${Utils.mediaQueryBetweenSizes({
    minPx: Variables.Breakpoint.breakpointTablet,
    maxPx: Variables.Breakpoint.breakpointDesktop
  })} {
    ${(props: IStyledCellProps) => cellStyleForPropsAtBreakpoint(props, 'tablet')}
  }
  
  ${Utils.mediaQueryBetweenSizes({
    minPx: Variables.Breakpoint.breakpointDesktop,
    maxPx: Variables.Breakpoint.breakpointBigDesktop
  })} {
    ${(props: IStyledCellProps) => cellStyleForPropsAtBreakpoint(props, 'desktop')}
  }
  
  ${Utils.mediaQueryBetweenSizes({ minPx: Variables.Breakpoint.breakpointBigDesktop })} {
    ${(props: IStyledCellProps) => cellStyleForPropsAtBreakpoint(props, 'bigDesktop')}
  }
  
  ${cellStyleForProps}
`

export {
  IStyledCellSizes,
  IStyledCellOffsets,
  StyledGridLayout,
  StyledCell,
  HorizontalAlignment,
  VerticalAlignment,
  GutterSize
}
