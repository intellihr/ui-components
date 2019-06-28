import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { Props } from '../../../common'
import {
  CellAnimation,
  CellSize,
  GutterSize,
  HorizontalAlignment,
  IStyledCellProps,
  StyledCell,
  StyledGridLayout,
  VerticalAlignment
} from './style'

import {
  Cell,
  CellDisplayType,
  ICellProps
} from './subcomponents/Cell'

interface ICellSizeDefinition {
  min?: CellSize,
  tablet?: CellSize,
  desktop?: CellSize,
  bigDesktop?: CellSize
}

interface ICellOffsetDefinition {
  min?: number
  tablet?: number
  desktop?: number
  bigDesktop?: number
}

interface IGutterSizeDefinition {
  min?: GutterSize
  tablet?: GutterSize
  desktop?: GutterSize
  bigDesktop?: GutterSize
}

interface IHorizontalAlignmentDefinition {
  min?: HorizontalAlignment
  tablet?: HorizontalAlignment
  desktop?: HorizontalAlignment
  bigDesktop?: HorizontalAlignment
}

interface IVerticalAlignmentDefinition {
  min?: VerticalAlignment
  tablet?: VerticalAlignment
  desktop?: VerticalAlignment
  bigDesktop?: VerticalAlignment
}

interface IGridLayoutCell {
  /**
   * Key for the cell. This is important for animations, as cells with the same key will be kept unanimated
   * when transitioning. Defaults to the index of the cell.
   */
  key?: string | number
  /** The content to place within the cell */
  content?: JSX.Element | string | null
  /** The size this cell takes up within the grid */
  size?: ICellSizeDefinition | CellSize
  /** The display type of this cell */
  displayType?: CellDisplayType
  /** The content alignment in this cell when the cell is in flex display type */
  flexHorizontalAlignment?: IHorizontalAlignmentDefinition | HorizontalAlignment
  /** The cell offset from the edge of the grid */
  offset?: ICellOffsetDefinition | number
  /** Animation style for adding/removing the cell (overrides the grid style) */
  animationStyle?: CellAnimation
  /** Component context */
  componentContext?: string
}

interface IGridLayoutBaseProps {
  /** The horizontal alignment of the items within the grid */
  horizontalAlignment?: IHorizontalAlignmentDefinition | HorizontalAlignment
  /** The vertical alignment of the items within the grid */
  verticalAlignment?: IVerticalAlignmentDefinition | VerticalAlignment
  /** Adds gutters between cells as margin in the x direction */
  gutterMarginX?: IGutterSizeDefinition | GutterSize
  /** Adds gutters between cells as margin in the y direction */
  gutterMarginY?: IGutterSizeDefinition | GutterSize
  /** Adds gutters between cells as padding in the x direction */
  gutterPaddingX?: IGutterSizeDefinition | GutterSize
  /** Adds gutters between cells as padding in the y direction */
  gutterPaddingY?: IGutterSizeDefinition | GutterSize
  /** Determines the amount of columns within the grid */
  gridColumns?: number
  /** Animation style for adding/removing cells to the grid */
  animationStyle?: CellAnimation
  /** Component context */
  componentContext?: string
  /** The margins around the component */
  margins?: Props.IMargins
}

interface IGridLayoutPropsWithCells extends IGridLayoutBaseProps {
  /** The cell objects to place within the grid */
  cells: IGridLayoutCell[]
}

interface IGridLayoutPropsWithChildren extends IGridLayoutBaseProps {
  /** The cell components to place within the grid */
  children: Array<React.ReactElement<ICellProps>> | React.ReactElement<ICellProps> | undefined
}

type GridLayoutProps = IGridLayoutPropsWithCells | IGridLayoutPropsWithChildren

export class GridLayout extends React.PureComponent<GridLayoutProps, never> {
  public static Cell = Cell
  public static HorizontalAlignment = HorizontalAlignment
  public static VerticalAlignment = VerticalAlignment

  public static defaultProps: Partial<GridLayoutProps> = {
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
      gridColumns,
      gutterMarginX,
      gutterMarginY,
      gutterPaddingX,
      gutterPaddingY,
      horizontalAlignment,
      verticalAlignment,
      componentContext,
      animationStyle: gridAnimationStyle,
      margins
    } = this.props

    let renderChildren: Array<React.ReactElement<IStyledCellProps>> = [<></>]

    if ('cells' in this.props) {
      renderChildren = this.props.cells && this.props.cells.map(this.getCellForDefinition)
    } else if (this.props.children) {
      renderChildren = React.Children.map<
        React.ReactElement,
        React.ReactElement<ICellProps>
      >(this.props.children, (child, index) => {
        const {
          key,
          size,
          offset,
          animationStyle: cellAnimationStyle,
          flexHorizontalAlignment,
          displayType
        } = child.props

        return (
          <CSSTransition
            key={key !== undefined ? key : index}
            classNames='grid-layout-cell-animation'
            timeout={200}
          >
            {React.cloneElement(child, {
              size,
              offset,
              displayType,
              gridColumns,
              gutterMarginX,
              gutterMarginY,
              gutterPaddingX,
              gutterPaddingY,
              animationStyle: cellAnimationStyle ? cellAnimationStyle : gridAnimationStyle,
              flexHorizontalAlignment
            })}
          </CSSTransition>
        )
      })
    }

    return (
      <StyledGridLayout
        margins={margins}
        horizontalAlignment={horizontalAlignment!}
        verticalAlignment={verticalAlignment!}
        gutterMarginX={gutterMarginX!}
        gutterMarginY={gutterMarginY!}
        data-component-type={Props.ComponentType.GridLayout}
        data-component-context={componentContext}
      >
        <TransitionGroup component={null}>{renderChildren}</TransitionGroup>
      </StyledGridLayout>
    )
  }

  private getCellForDefinition = (
    cell: IGridLayoutCell,
    index: number
  ): JSX.Element => {
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
      displayType,
      flexHorizontalAlignment,
      offset,
      componentContext,
      animationStyle: cellAnimationStyle
    } = cell

    return (
      <CSSTransition
        key={key !== undefined ? key : index}
        classNames='grid-layout-cell-animation'
        timeout={200}
      >
        <StyledCell
          size={size || 'auto'}
          offset={offset || 0}
          animationStyle={cellAnimationStyle || gridAnimationStyle || 'none'}
          gridColumns={gridColumns!}
          displayType={displayType || 'block'}
          flexHorizontalAlignment={flexHorizontalAlignment || HorizontalAlignment.Left}
          gutterMarginX={gutterMarginX!}
          gutterMarginY={gutterMarginY!}
          gutterPaddingX={gutterPaddingX!}
          gutterPaddingY={gutterPaddingY!}
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
