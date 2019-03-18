import { map } from 'lodash'
import React from 'react'

import { Props } from '../../../common'
import {
  GutterSize,
  HorizontalAlignment,
  IStyledCellOffsets,
  IStyledCellSizes,
  StyledCell,
  StyledGridLayout,
  VerticalAlignment
} from './style'

interface ICellSizeDefinition {
  min?: number | 'auto' | 'shrink',
  tablet?: number | 'auto' | 'shrink',
  desktop?: number | 'auto' | 'shrink',
  bigDesktop?: number | 'auto' | 'shrink'
}

interface ICellOffsetDefinition {
  min?: number,
  tablet?: number,
  desktop?: number,
  bigDesktop?: number
}

interface IGridLayoutCell {
  /** The content to place within the cell */
  content?: JSX.Element | string | null,
  /** The size this cell takes up within the grid */
  size?: ICellSizeDefinition | 'auto' | 'shrink',
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
  gutterMarginX?: GutterSize,
  /** Adds gutters between cells as margin in the y direction */
  gutterMarginY?: GutterSize,
  /** Adds gutters between cells as padding in the x direction */
  gutterPaddingX?: GutterSize,
  /** Adds gutters between cells as padding in the y direction */
  gutterPaddingY?: GutterSize,
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

  private static breakpointOrder = ['min', 'tablet', 'desktop', 'bigDesktop']

  public render (): JSX.Element {
    const {
      gutterMarginX,
      gutterMarginY,
      horizontalAlignment,
      verticalAlignment,
      cells,
      componentContext
    } = this.props

    return (
      <StyledGridLayout
        horizontalAlignment={horizontalAlignment!}
        verticalAlignment={verticalAlignment!}
        gutterMarginX={gutterMarginX!}
        gutterMarginY={gutterMarginY!}
        data-component-type={Props.ComponentType.GridLayout}
        data-component-context={componentContext}
      >
        {map(cells, this.getCellForDefinition)}
      </StyledGridLayout>
    )
  }

  private getCellForDefinition = (cell: IGridLayoutCell, index: number): JSX.Element => {
    const {
      gridColumns,
      gutterMarginX,
      gutterMarginY,
      gutterPaddingX,
      gutterPaddingY
    } = this.props
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
        sizesForBreakpoints={this.fillInCellSizeDefinition(size || {})}
        offsetsForBreakpoints={this.fillInCellOffsetDefinition(offset || {})}
        gutterMarginX={gutterMarginX!}
        gutterMarginY={gutterMarginY!}
        gutterPaddingX={gutterPaddingX!}
        gutterPaddingY={gutterPaddingY!}
        data-component-type={Props.ComponentType.GridLayoutCell}
        data-component-context={componentContext}
      >
        {content}
      </StyledCell>
    )
  }

  private fillInCellSizeDefinition = (sizeDefinition: ICellSizeDefinition | 'auto' | 'shrink'): IStyledCellSizes => {
    const sizes: IStyledCellSizes = {
      min: 'auto',
      tablet: 'auto',
      desktop: 'auto',
      bigDesktop: 'auto'
    }
    let lastSize: number | 'auto' | 'shrink' | undefined

    // Iterate through the list and fill out any missing sizes
    for (const bkpt of GridLayout.breakpointOrder) {
      if (sizeDefinition === 'auto' || sizeDefinition === 'shrink') {
        sizes[bkpt as keyof IStyledCellSizes] = sizeDefinition as 'auto' | 'shrink'
      } else {
        const currentSize = sizeDefinition[bkpt as keyof IStyledCellSizes]
        if (currentSize) {
          lastSize = currentSize
        }
        sizes[bkpt as keyof IStyledCellSizes] = lastSize || 'auto'
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
