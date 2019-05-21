import { isPlainObject } from 'lodash'
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
type CellSize = number | 'auto' | 'shrink' | 'fullWidth'
type CellOffset = number
type CellAnimation = 'none' | 'fadeInOut' | 'zoomInOut'

interface IStyledCellSizes {
  min?: CellSize,
  tablet?: CellSize,
  desktop?: CellSize,
  bigDesktop?: CellSize
}

interface IStyledCellOffsets {
  min?: CellOffset,
  tablet?: CellOffset,
  desktop?: CellOffset,
  bigDesktop?: CellOffset
}

interface IStyledGridGutters {
  min?: GutterSize,
  tablet?: GutterSize,
  desktop?: GutterSize,
  bigDesktop?: GutterSize
}

interface IStyledHorizontalAlignment {
  min?: HorizontalAlignment,
  tablet?: HorizontalAlignment,
  desktop?: HorizontalAlignment,
  bigDesktop?: HorizontalAlignment
}

interface IStyledVerticalAlignment {
  min?: VerticalAlignment,
  tablet?: VerticalAlignment,
  desktop?: VerticalAlignment,
  bigDesktop?: VerticalAlignment
}

interface IStyledGridLayoutProps {
  horizontalAlignment: HorizontalAlignment | IStyledHorizontalAlignment,
  verticalAlignment: VerticalAlignment | IStyledVerticalAlignment,
  gutterMarginX: GutterSize | IStyledGridGutters,
  gutterMarginY: GutterSize | IStyledGridGutters
}

interface IStyledCellProps {
  gridColumns: number,
  sizes: CellSize | IStyledCellSizes,
  alignments: HorizontalAlignment | IStyledHorizontalAlignment,
  offsets: CellOffset | IStyledCellOffsets,
  gutterMarginX: GutterSize | IStyledGridGutters,
  gutterMarginY: GutterSize | IStyledGridGutters,
  gutterPaddingX: GutterSize | IStyledGridGutters,
  gutterPaddingY: GutterSize | IStyledGridGutters,
  animationStyle: CellAnimation
}

const breakpointOrder: ReadonlyArray<keyof IStyledCellSizes> = ['min', 'tablet', 'desktop', 'bigDesktop']

function isCellSize (size: CellSize | IStyledCellSizes): size is CellSize {
  return !isPlainObject(size)
}

function isCellOffset (offset: CellOffset | IStyledCellOffsets): offset is CellOffset {
  return !isPlainObject(offset)
}

function isGutterSize (gutters: GutterSize | IStyledGridGutters): gutters is GutterSize {
  return !isPlainObject(gutters)
}

function isHorizontalAlignment (horizontalAlignment: HorizontalAlignment | IStyledHorizontalAlignment): horizontalAlignment is HorizontalAlignment {
  return !isPlainObject(horizontalAlignment)
}

function isVerticalAlignment (verticalAlignment: VerticalAlignment | IStyledVerticalAlignment): verticalAlignment is VerticalAlignment {
  return !isPlainObject(verticalAlignment)
}

function getSizeAtBreakpoint (size: CellSize | IStyledCellSizes, breakpoint: keyof IStyledCellSizes): CellSize {
  if (isCellSize(size)) {
    return size
  }

  let lastSize: CellSize = 'auto'

  for (const curBreakpoint of breakpointOrder) {
    lastSize = size[curBreakpoint] || lastSize

    if (curBreakpoint === breakpoint) {
      break
    }
  }

  return lastSize
}

function getOffsetAtBreakpoint (offset: CellOffset | IStyledCellOffsets, breakpoint: keyof IStyledCellOffsets): CellOffset {
  if (isCellOffset(offset)) {
    return offset
  }

  let lastOffset: CellOffset = 0

  for (const curBreakpoint of breakpointOrder) {
    lastOffset = offset[curBreakpoint] || lastOffset

    if (curBreakpoint === breakpoint) {
      break
    }
  }

  return lastOffset
}

function getGutterPxAtBreakpoint (gutter: GutterSize | IStyledGridGutters, breakpoint: keyof IStyledGridGutters): number {
  if (isGutterSize(gutter)) {
    return gutter === 'none' ? 0 : gutter
  }

  let lastGutter: GutterSize = 'none'

  for (const curBreakpoint of breakpointOrder) {
    lastGutter = gutter[curBreakpoint] || lastGutter

    if (curBreakpoint === breakpoint) {
      break
    }
  }

  return lastGutter === 'none' ? 0 : lastGutter
}

function getHorizontalAlignmentAtBreakpoint (horizontalAlignment: HorizontalAlignment | IStyledHorizontalAlignment, breakpoint: keyof IStyledHorizontalAlignment): HorizontalAlignment {
  if (isHorizontalAlignment(horizontalAlignment)) {
    return horizontalAlignment
  }

  let lastAlignment: HorizontalAlignment = HorizontalAlignment.Left

  for (const curBreakpoint of breakpointOrder) {
    lastAlignment = horizontalAlignment[curBreakpoint] || lastAlignment

    if (curBreakpoint === breakpoint) {
      break
    }
  }

  return lastAlignment
}

function getVerticalAlignmentAtBreakpoint (verticalAlignment: VerticalAlignment | IStyledVerticalAlignment, breakpoint: keyof IStyledVerticalAlignment): VerticalAlignment {
  if (isVerticalAlignment(verticalAlignment)) {
    return verticalAlignment
  }

  let lastAlignment: VerticalAlignment = VerticalAlignment.Stretch

  for (const curBreakpoint of breakpointOrder) {
    lastAlignment = verticalAlignment[curBreakpoint] || lastAlignment

    if (curBreakpoint === breakpoint) {
      break
    }
  }

  return lastAlignment
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
  const xMarginGutterSize = getGutterPxAtBreakpoint(props.gutterMarginX, breakpoint)
  const yMarginGutterSize = getGutterPxAtBreakpoint(props.gutterMarginY, breakpoint)
  const horizontalAlignment = getHorizontalAlignmentAtBreakpoint(props.horizontalAlignment, breakpoint)
  const verticalAlignment = getVerticalAlignmentAtBreakpoint(props.verticalAlignment, breakpoint)
  let leftRightMarginGutters
  let topBottomMarginGutters

  if (xMarginGutterSize > 0) {
    leftRightMarginGutters = css`
      margin-left: -${xMarginGutterSize / 2}px;
      margin-right: -${xMarginGutterSize / 2}px;
    `
  }

  if (yMarginGutterSize > 0) {
    topBottomMarginGutters = css`
      margin-top: -${yMarginGutterSize / 2}px;
      margin-bottom: -${yMarginGutterSize / 2}px;
    `
  }

  return css`
    ${leftRightMarginGutters}
    ${topBottomMarginGutters}
    ${getPropertiesForHorizontalAlignment(horizontalAlignment)}
    ${getPropertiesForVerticalAlignment(verticalAlignment)}
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
  `
}

const StyledGridLayout = styled.div<IStyledGridLayoutProps>`
  display: flex;
  flex-flow: row wrap;
  flex: 1 0 auto;

  ${gridStyleForProps}
`

interface ICellStyleArguments {
  gridColumns: number
  size: CellSize
  alignment: HorizontalAlignment
  offset: CellOffset
  gutters: {
    marginXPx: number,
    marginYPx: number
    paddingXPx: number,
    paddingYPx: number
  }
}

function cellStyleForSizeAndGutters (
  {
    gridColumns,
    size,
    alignment,
    offset,
    gutters
  }: ICellStyleArguments
) {
  let flexProperties
  let offsetProperties
  let leftRightPaddingGutters
  let topBottomPaddingGutters
  let leftRightMarginGutters
  let topBottomMarginGutters

  if (gutters.paddingXPx > 0) {
    leftRightPaddingGutters = css`
      padding-left: ${gutters.paddingXPx / 2}px;
      padding-right: ${gutters.paddingXPx / 2}px;
    `
  }

  if (gutters.paddingYPx > 0) {
    topBottomPaddingGutters = css`
      padding-top: ${gutters.paddingYPx / 2}px;
      padding-bottom: ${gutters.paddingYPx / 2}px;
    `
  }

  if (gutters.marginXPx > 0) {
    leftRightMarginGutters = css`
      margin-left: ${gutters.marginXPx / 2}px;
      margin-right: ${gutters.marginXPx / 2}px;
    `
  }

  if (gutters.marginYPx > 0) {
    topBottomMarginGutters = css`
      margin-top: ${gutters.marginYPx / 2}px;
      margin-bottom: ${gutters.marginYPx / 2}px;
    `
  }

  if (size === 'auto') {
    flexProperties = css`
      flex: 1 1 0%;
      width: auto;
    `
  } else if (size === 'shrink') {
    flexProperties = css`
      flex: 0 0 auto;
      width: auto;
    `
  } else {
    const widthPercentage = (size === 'fullWidth') ? 100 : (size * 100 / gridColumns)

    if (gutters.marginXPx > 0) {
      flexProperties = css`
        width: calc(${widthPercentage}% - ${gutters.marginXPx}px);
      `
    } else {
      flexProperties = css`
        width: ${widthPercentage}%;
      `
    }
  }

  if (offset > 0) {
    const offsetPercentage = offset * 100 / gridColumns

    if (gutters.marginXPx > 0) {
      offsetProperties = css`
        margin-left: calc(${offsetPercentage}% + ${gutters.marginXPx / 2}px);
      `
    } else {
      offsetProperties = css`
        margin-left: ${offsetPercentage}%;
      `
    }
  }

  return css`
    display: flex;

    ${leftRightPaddingGutters}
    ${topBottomPaddingGutters}
    ${leftRightMarginGutters}
    ${topBottomMarginGutters}
    ${flexProperties}
    ${offsetProperties}
    ${getPropertiesForHorizontalAlignment(alignment)}
  `
}

function cellStyleForProps (props: IStyledCellProps) {
  return css`
    ${Utils.mediaQueryBetweenSizes({ maxPx: Variables.Breakpoint.breakpointTablet })} {
      ${cellStyleForSizeAndGutters({
        gridColumns: props.gridColumns,
        size: getSizeAtBreakpoint(props.sizes, 'min'),
        offset: getOffsetAtBreakpoint(props.offsets, 'min'),
        alignment: getHorizontalAlignmentAtBreakpoint(props.alignments, 'min'),
        gutters: {
          marginXPx: getGutterPxAtBreakpoint(props.gutterMarginX, 'min'),
          marginYPx: getGutterPxAtBreakpoint(props.gutterMarginY, 'min'),
          paddingXPx: getGutterPxAtBreakpoint(props.gutterPaddingX, 'min'),
          paddingYPx: getGutterPxAtBreakpoint(props.gutterPaddingY, 'min')
        }
      })}
    }

    ${Utils.mediaQueryBetweenSizes({
      minPx: Variables.Breakpoint.breakpointTablet,
      maxPx: Variables.Breakpoint.breakpointDesktop
    })} {
      ${cellStyleForSizeAndGutters({
        gridColumns: props.gridColumns,
        size: getSizeAtBreakpoint(props.sizes, 'tablet'),
        offset: getOffsetAtBreakpoint(props.offsets, 'tablet'),
        alignment: getHorizontalAlignmentAtBreakpoint(props.alignments, 'tablet'),
        gutters: {
          marginXPx: getGutterPxAtBreakpoint(props.gutterMarginX, 'tablet'),
          marginYPx: getGutterPxAtBreakpoint(props.gutterMarginY, 'tablet'),
          paddingXPx: getGutterPxAtBreakpoint(props.gutterPaddingX, 'tablet'),
          paddingYPx: getGutterPxAtBreakpoint(props.gutterPaddingY, 'tablet')
        }
      })}
    }

    ${Utils.mediaQueryBetweenSizes({
      minPx: Variables.Breakpoint.breakpointDesktop,
      maxPx: Variables.Breakpoint.breakpointBigDesktop
    })} {
      ${cellStyleForSizeAndGutters({
        gridColumns: props.gridColumns,
        size: getSizeAtBreakpoint(props.sizes, 'desktop'),
        offset: getOffsetAtBreakpoint(props.offsets, 'desktop'),
        alignment: getHorizontalAlignmentAtBreakpoint(props.alignments, 'desktop'),
        gutters: {
          marginXPx: getGutterPxAtBreakpoint(props.gutterMarginX, 'desktop'),
          marginYPx: getGutterPxAtBreakpoint(props.gutterMarginY, 'desktop'),
          paddingXPx: getGutterPxAtBreakpoint(props.gutterPaddingX, 'desktop'),
          paddingYPx: getGutterPxAtBreakpoint(props.gutterPaddingY, 'desktop')
        }
      })}
    }

    ${Utils.mediaQueryBetweenSizes({ minPx: Variables.Breakpoint.breakpointBigDesktop })} {
      ${cellStyleForSizeAndGutters({
        gridColumns: props.gridColumns,
        size: getSizeAtBreakpoint(props.sizes, 'bigDesktop'),
        offset: getOffsetAtBreakpoint(props.offsets, 'bigDesktop'),
        alignment: getHorizontalAlignmentAtBreakpoint(props.alignments, 'bigDesktop'),
        gutters: {
          marginXPx: getGutterPxAtBreakpoint(props.gutterMarginX, 'bigDesktop'),
          marginYPx: getGutterPxAtBreakpoint(props.gutterMarginY, 'bigDesktop'),
          paddingXPx: getGutterPxAtBreakpoint(props.gutterPaddingX, 'bigDesktop'),
          paddingYPx: getGutterPxAtBreakpoint(props.gutterPaddingY, 'bigDesktop')
        }
      })}
    }
  `
}

function cellAnimationForProps (props: IStyledCellProps) {
  if (props.animationStyle === 'fadeInOut') {
    return css`
      transition: opacity 200ms ease-in-out;

      &.grid-layout-cell-animation-enter {
        opacity: 0;
      }

      &.grid-layout-cell-animation-enter-active {
        opacity: 1;
      }

      &.grid-layout-cell-animation-exit {
        opacity: 1;
      }

      &.grid-layout-cell-animation-exit-active {
        opacity: 0;
      }
    `
  } else if (props.animationStyle === 'zoomInOut') {
    return css`
      transition: transform 200ms ease-in-out;

      &.grid-layout-cell-animation-enter {
        transform: scale(0.1);
      }

      &.grid-layout-cell-animation-enter-active {
        transform: scale(1.0);
      }

      &.grid-layout-cell-animation-exit {
        transform: scale(1.0);
      }

      &.grid-layout-cell-animation-exit-active {
        transform: scale(0.1);
      }
    `
  }
}

const StyledCell = styled.div<IStyledCellProps>`
  flex: 0 0 auto;
  flex-basis: auto;
  min-height: 0;
  min-width: 0;
  width: 100%;

  ${cellStyleForProps}
  ${cellAnimationForProps}
`

export {
  IStyledCellSizes,
  IStyledCellOffsets,
  IStyledGridGutters,
  StyledGridLayout,
  StyledCell,
  HorizontalAlignment,
  VerticalAlignment,
  GutterSize,
  CellAnimation
}
