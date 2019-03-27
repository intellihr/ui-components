import React from 'react'

import { Props } from '../../../common'
import {
  GutterSize,
  HorizontalAlignment,
  StyledCell,
  StyledGridLayout,
  VerticalAlignment
} from './style'

type CellSize = number | 'auto' | 'shrink' | 'fullWidth'

interface ICellSizeDefinition {
  min?: CellSize,
  tablet?: CellSize,
  desktop?: CellSize,
  bigDesktop?: CellSize
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
  size?: ICellSizeDefinition | CellSize,
  /** The cell offset from the edge of the grid */
  offset?: ICellOffsetDefinition | number,
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
  /** If the grid should hide overflow from cell margins extending outside the width of the grid. */
  hideOverflow?: boolean
}

export class GridLayout extends React.PureComponent<IGridLayoutProps, never> {
  public static HorizontalAlignment = HorizontalAlignment
  public static VerticalAlignment = VerticalAlignment

  public static defaultProps: Partial<IGridLayoutProps> = {
    hideOverflow: false,
    gridColumns: 12,
    horizontalAlignment: HorizontalAlignment.Left,
    verticalAlignment: VerticalAlignment.Stretch,
    gutterMarginX: 'none',
    gutterMarginY: 'none',
    gutterPaddingX: 'none',
    gutterPaddingY: 'none'
  }

  public render (): JSX.Element {
    const {
      cells,
      componentContext,
      gutterMarginX,
      gutterMarginY,
      hideOverflow,
      horizontalAlignment,
      verticalAlignment
    } = this.props

    return (
      <StyledGridLayout
        horizontalAlignment={horizontalAlignment!}
        verticalAlignment={verticalAlignment!}
        gutterMarginX={gutterMarginX!}
        gutterMarginY={gutterMarginY!}
        hideOverflow={hideOverflow!}
        data-component-type={Props.ComponentType.GridLayout}
        data-component-context={componentContext}
      >
        {cells.map(this.getCellForDefinition)}
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
        sizes={size || 'auto'}
        offsets={offset || 0}
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
}

export {
  IGridLayoutCell
}
