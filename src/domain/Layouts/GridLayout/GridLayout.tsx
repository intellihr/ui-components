import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { Props } from '../../../common'
import {
  CellAnimation,
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

interface IHorizontalAlignmentDefinition {
  min?: HorizontalAlignment,
  tablet?: HorizontalAlignment,
  desktop?: HorizontalAlignment,
  bigDesktop?: HorizontalAlignment
}

interface IGridLayoutCell {
  /**
   * Key for the cell. This is important for animations, as cells with the same key will be kept unanimated
   * when transitioning. Defaults to the index of the cell.
   */
  key?: string | number,
  /** The content to place within the cell */
  content?: JSX.Element | string | null,
  /** The size this cell takes up within the grid */
  size?: ICellSizeDefinition | CellSize,
  /** The cell offset from the edge of the grid */
  offset?: ICellOffsetDefinition | number,
  /** Animation style for adding/removing the cell (overrides the grid style) */
  animationStyle?: CellAnimation
  /** Component context */
  componentContext?: string
}

interface IGridLayoutProps {
  /** The cells to place within the grid */
  cells: IGridLayoutCell[],
  /** The horizontal alignment of the items within the grid */
  horizontalAlignment?: IHorizontalAlignmentDefinition | HorizontalAlignment,
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
  /** Animation style for adding/removing cells to the grid */
  animationStyle?: CellAnimation
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
        <TransitionGroup component={null}>
          {cells.map(this.getCellForDefinition)}
        </TransitionGroup>
      </StyledGridLayout>
    )
  }

  private getCellForDefinition = (cell: IGridLayoutCell, index: number): JSX.Element => {
    const {
      gridColumns,
      gutterMarginX,
      gutterMarginY,
      gutterPaddingX,
      gutterPaddingY,
      animationStyle: gridAnimationStyle
    } = this.props
    const {
      key,
      content,
      size,
      offset,
      componentContext,
      animationStyle: cellAnimationStyle
    } = cell

    return (
      <CSSTransition
        key={(key !== undefined) ? key : index}
        classNames='grid-layout-cell-animation'
        timeout={200}
      >
        <StyledCell
          gridColumns={gridColumns!}
          sizes={size || 'auto'}
          offsets={offset || 0}
          gutterMarginX={gutterMarginX!}
          gutterMarginY={gutterMarginY!}
          gutterPaddingX={gutterPaddingX!}
          gutterPaddingY={gutterPaddingY!}
          animationStyle={cellAnimationStyle || gridAnimationStyle || 'none'}
          data-component-type={Props.ComponentType.GridLayoutCell}
          data-component-context={componentContext}
        >
          {content}
        </StyledCell>
      </CSSTransition>
    )
  }
}

export {
  IGridLayoutCell
}
