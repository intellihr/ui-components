import React from 'react'

import { Props } from '../../../../common'
import {
  CellOffset,
  CellSize,
  GutterSize,
  HorizontalAlignment,
  IStyledCellOffsets,
  IStyledCellSizes,
  IStyledGridGutters,
  IStyledHorizontalAlignment,
  StyledCell
} from '../style'

type CellDisplayType = 'block' | 'flex'

interface ICellProps {
  gridColumns?: number
  size?: CellSize | IStyledCellSizes
  offset?: CellOffset | IStyledCellOffsets
  gutterMarginX?: GutterSize | IStyledGridGutters
  gutterMarginY?: GutterSize | IStyledGridGutters
  gutterPaddingX?: GutterSize | IStyledGridGutters
  gutterPaddingY?: GutterSize | IStyledGridGutters
  /** Component context */
  componentContext?: string
  displayType?: CellDisplayType
  flexHorizontalAlignment?: HorizontalAlignment | IStyledHorizontalAlignment
}

const Cell: React.FC<ICellProps> = ({
  children,
  gridColumns,
  size,
  offset,
  gutterMarginX,
  gutterMarginY,
  gutterPaddingX,
  gutterPaddingY,
  displayType,
  flexHorizontalAlignment,
  componentContext
}) => {
  return (
    <StyledCell
      size={size || 'auto'}
      offset={offset || 0}
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
      {children}
    </StyledCell>
  )
}

export {
  Cell,
  CellDisplayType,
  ICellProps
}
