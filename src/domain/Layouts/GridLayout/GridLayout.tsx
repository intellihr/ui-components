import { isNumber, isPlainObject, map } from 'lodash'
import React from 'react'

import { Props } from '../../../common'
import {
  GutterSize,
  HorizontalAlignment,
  IStyledCellOffsets,
  IStyledCellSizes,
  IStyledGridGutters,
  StyledCell,
  StyledGridLayout,
  VerticalAlignment
} from './style'

type AllowedCellSize = number | 'auto' | 'shrink' | 'fullWidth'

interface ICellSizeDefinition {
  min?: AllowedCellSize,
  tablet?: AllowedCellSize,
  desktop?: AllowedCellSize,
  bigDesktop?: AllowedCellSize
}

interface ICellOffsetDefinition {
  min?: number,
  tablet?: number,
  desktop?: number,
  bigDesktop?: number
}

interface IGutterSizeDefinition {
  min?: GutterSize,
  tablet?: GutterSize,
  desktop?: GutterSize,
  bigDesktop?: GutterSize
}

interface IGridLayoutCell {
  /** The content to place within the cell */
  content?: JSX.Element | string | null,
  /** The size this cell takes up within the grid */
  size?: ICellSizeDefinition | AllowedCellSize,
  /** The cell offset from the edge of the grid */
  offset?: ICellOffsetDefinition,
  /** Component context */
  componentContext?: string
}

interface IGridLayoutProps {
  /** The cells to place within the grid */
  cells: IGridLayoutCell[],
  /** The horizontal alignment of the items within the grid */
  horizontalAlignment?: HorizontalAlignment,
  /** The vertical alignment of the items within the grid */
  verticalAlignment?: VerticalAlignment,
  /** Adds gutters between cells as margin in the x direction */
  gutterMarginX?: IGutterSizeDefinition | GutterSize,
  /** Adds gutters between cells as margin in the y direction */
  gutterMarginY?: IGutterSizeDefinition | GutterSize,
  /** Adds gutters between cells as padding in the x direction */
  gutterPaddingX?: IGutterSizeDefinition | GutterSize,
  /** Adds gutters between cells as padding in the y direction */
  gutterPaddingY?: IGutterSizeDefinition | GutterSize,
  /** Determines the amount of columns within the grid */
  gridColumns?: number,
  /** Component context */
  componentContext?: string
}

export class GridLayout extends React.PureComponent<IGridLayoutProps, never> {
  public static HorizontalAlignment = HorizontalAlignment
  public static VerticalAlignment = VerticalAlignment

  public static defaultProps: Partial<IGridLayoutProps> = {
    gridColumns: 12,
    horizontalAlignment: HorizontalAlignment.Left,
    verticalAlignment: VerticalAlignment.Stretch,
    gutterMarginX: 'none',
    gutterMarginY: 'none',
    gutterPaddingX: 'none',
    gutterPaddingY: 'none'
  }

  private static breakpointOrder: Array<keyof IStyledCellSizes> = ['min', 'tablet', 'desktop', 'bigDesktop']

  public render (): JSX.Element {
    const {
      gridColumns,
      gutterMarginX,
      gutterMarginY,
      gutterPaddingX,
      gutterPaddingY,
      horizontalAlignment,
      verticalAlignment,
      cells,
      componentContext
    } = this.props

    const gutterMarginXForBreakpoints = this.fillInGutterDefinition(gutterMarginX!)
    const gutterMarginYForBreakpoints = this.fillInGutterDefinition(gutterMarginY!)
    const gutterPaddingXForBreakpoints = this.fillInGutterDefinition(gutterPaddingX!)
    const gutterPaddingYForBreakpoints = this.fillInGutterDefinition(gutterPaddingY!)

    return (
      <StyledGridLayout
        horizontalAlignment={horizontalAlignment!}
        verticalAlignment={verticalAlignment!}
        gutterMarginXForBreakpoints={gutterMarginXForBreakpoints}
        gutterMarginYForBreakpoints={gutterMarginYForBreakpoints}
        data-component-type={Props.ComponentType.GridLayout}
        data-component-context={componentContext}
      >
        {cells.map((cell, index) => {
          const {
            content,
            size,
            offset,
            componentContext
          } = cell

          return (
            <StyledCell
              key={index}
              gridColumns={gridColumns!}
              sizesForBreakpoints={this.fillInCellSizeDefinition(size || 'fullWidth')}
              offsetsForBreakpoints={this.fillInCellOffsetDefinition(offset || {})}
              gutterMarginXForBreakpoints={gutterMarginXForBreakpoints}
              gutterMarginYForBreakpoints={gutterMarginYForBreakpoints}
              gutterPaddingXForBreakpoints={gutterPaddingXForBreakpoints}
              gutterPaddingYForBreakpoints={gutterPaddingYForBreakpoints}
              data-component-type={Props.ComponentType.GridLayoutCell}
              data-component-context={componentContext}
            >
              {content}
            </StyledCell>
          )
        })}
      </StyledGridLayout>
    )
  }

  private fillInGutterDefinition = (gutterDefinition: IGutterSizeDefinition | GutterSize) => {
    const gutters: IStyledGridGutters = {
      min: 'none',
      tablet: 'none',
      desktop: 'none',
      bigDesktop: 'none'
    }
    let lastGutter: GutterSize | undefined

    // Iterate through the list and fill out any missing gutters
    for (const bkpt of GridLayout.breakpointOrder) {
      if (!isPlainObject(gutterDefinition)) {
        gutters[bkpt] = gutterDefinition as GutterSize
      } else {
        const currentGutter = (gutterDefinition as IGutterSizeDefinition)[bkpt as keyof IStyledGridGutters]
        if (currentGutter) {
          lastGutter = currentGutter
        }
        gutters[bkpt] = lastGutter || 'none'
      }
    }

    return gutters
  }

  private fillInCellSizeDefinition = (sizeDefinition: ICellSizeDefinition | AllowedCellSize): IStyledCellSizes => {
    const sizes: IStyledCellSizes = {
      min: 'fullWidth',
      tablet: 'fullWidth',
      desktop: 'fullWidth',
      bigDesktop: 'fullWidth'
    }
    let lastSize: AllowedCellSize | undefined

    // Iterate through the list and fill out any missing sizes
    for (const bkpt of GridLayout.breakpointOrder) {
      if (sizeDefinition === 'auto' || sizeDefinition === 'shrink' || sizeDefinition === 'fullWidth' || isNumber(sizeDefinition)) {
        sizes[bkpt] = sizeDefinition as 'auto' | 'shrink' | 'fullWidth' | number
      } else {
        const currentSize = sizeDefinition[bkpt]
        if (currentSize) {
          lastSize = currentSize
        }
        sizes[bkpt] = lastSize || 'fullWidth'
      }
    }

    return sizes
  }

  private fillInCellOffsetDefinition = (offsetDefinition: ICellOffsetDefinition): IStyledCellOffsets => {
    const offsets: IStyledCellOffsets = {
      min: 0,
      tablet: 0,
      desktop: 0,
      bigDesktop: 0
    }
    let lastOffset: number | undefined

    for (const bkpt of GridLayout.breakpointOrder) {
      // Iterate through the list and fill out any missing offsets
      const currentOffset = offsetDefinition[bkpt as keyof IStyledCellOffsets]
      if (currentOffset) {
        lastOffset = currentOffset
      }
      offsets[bkpt as keyof IStyledCellOffsets] = lastOffset || 0
    }

    return offsets
  }
}

export {
  IGridLayoutCell
}
