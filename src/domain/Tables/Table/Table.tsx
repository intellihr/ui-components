import { mapValues } from 'lodash'
import React, { useEffect, useState } from 'react'

import { Props, Variables } from '../../../common'
import {
  FontAwesomeIconButton,
  IFontAwesomeIconButtonProps
} from '../../Buttons/FontAwesomeIconButton/FontAwesomeIconButton'
import { GridLayout } from '../../Layouts/GridLayout'
import { TableRowVariant } from './services/colors'
import {getNewSelectedAll, getUpdatedAllSelectableRows, handleSelectionChanged} from './services/helper'
import {
  StyledEmptyStateCell,
  StyledTHead,
  StyledTable,
  StyledTableWrapper
} from './services/style'
import { TableCheckboxInputValue } from './subcomponents/TableCheckboxInput'
import { TableHeader } from './subcomponents/TableHeader'
import { TableRow } from './subcomponents/TableRow'

enum ColumnSize {
  Auto = 'auto',
  Shrink = 'shrink'
}
enum ColumnSortDirection {
  Up = 'up',
  Down = 'down'
}

enum ColumnAlignment {
  Left = 'left',
  Right = 'right'
}

enum TableTouchType {
  Hover = 'hover',
  Swipe = 'swipe'
}

interface ISelectedRows {
  [rowId: string]: boolean
}

interface IColumnSorts {
  [columnName: string]: ColumnSortDirection
}

interface ITableProps {
  /** Rows of the table */
  rows: IRowProps[]
  /** Columns of the table */
  columns: IColumnProps[]
  /** Empty state of the table */
  emptyState: JSX.Element
  /** Sorting of the table and only allow one column sorting at once */
  sort: IColumnSorts
  /** Called when the sorting is changed */
  onSortChange: (sort: IColumnSorts) => void
  /** Called when the selection is changed */
  onSelectionChanged?: (dataSet: any[]) => void
  /** Icon Buttons group for bulkActions when the user selects some row */
  bulkActions?: IFontAwesomeIconButtonProps[]
  /** Called when some row is removed */
  onRowRemove?: (data: any) => void
  /** If yes the left action cells are displayed (checkbox and remove button) */
  hasLeftAction?: boolean
  /** If touch type is Hover, it will display hover actions when hover. If touch type is swipe, it will display swipe actions when tap or swipe. */
  touchType?: TableTouchType
  /** Applies recommended settings for mobile and tablet viewports */
  isMobile?: boolean
  /** Margins around the table */
  margins?: Props.IMargins
  /** The component context */
  componentContext?: string
}

interface IRowProps {
  id: string
  isSelectable?: boolean
  isRemovable?: boolean
  tooltipText?: string
  progress?: number
  variant?: TableRowVariant
  data: any
  contentOverride?: (data: any) => JSX.Element[] | JSX.Element
  onClick?: (data: any) => void
  swipeActions?: IFontAwesomeIconButtonProps[]
}

interface IColumnProps {
  name: string
  title?: string
  size: ColumnSize
  headerSize?: ColumnSize
  content: (data: any) => JSX.Element
  alignment?: ColumnAlignment
  tooltipText?: (data: any) => string
  hoverActions?: (data: any) => IFontAwesomeIconButtonProps[]
}

const getActionsIconButtonGroup = (actions?: IFontAwesomeIconButtonProps[], name?: string, alignment?: ColumnAlignment) => {
  if (actions) {
    const horizontalAlignment = alignment === ColumnAlignment.Right ? GridLayout.HorizontalAlignment.Right : GridLayout.HorizontalAlignment.Left

    return (
      <GridLayout
        horizontalAlignment={horizontalAlignment}
        gutterMarginX={Variables.Spacing.sXSmall}
        verticalAlignment={GridLayout.VerticalAlignment.Middle}
        cells={
          actions.map((actionProps, index) => ({
            size:  ColumnSize.Shrink,
            content: <FontAwesomeIconButton key={`actions-${name}-${index}`} {...actionProps}/>
          }))
        }
      />
      )
  }

  return null
}

const Table: React.FC<ITableProps> = (props) => {
  const {
    onRowRemove,
    rows,
    sort,
    onSortChange,
    columns,
    onSelectionChanged,
    margins,
    componentContext,
    hasLeftAction = false,
    bulkActions,
    emptyState,
    touchType = TableTouchType.Hover
  } = props

  const [selectedAll, setSelectedAll] = useState<TableCheckboxInputValue>(TableCheckboxInputValue.False)
  const [selectedRows, setSelectedRows] = useState<ISelectedRows>(getUpdatedAllSelectableRows(rows, {}))

  useEffect(() => {
    setSelectedRows(getUpdatedAllSelectableRows(rows, selectedRows))
  }, [rows])
  useEffect(() => {
    if (hasLeftAction) {
      setSelectedRows({})
    }
  }, [hasLeftAction])
  useEffect(() => {
    if (selectedAll === TableCheckboxInputValue.False ) {
      setSelectedRows(mapValues(selectedRows, () => false))
    }

    if (selectedAll === TableCheckboxInputValue.True ) {
      setSelectedRows(mapValues(selectedRows, () => true))
    }
  }, [selectedAll])

  useEffect(() => {
    if (!hasLeftAction) {
      const currentSelectedRows = Object.values(selectedRows)
      setSelectedAll(getNewSelectedAll(currentSelectedRows))
      if (onSelectionChanged) {
        handleSelectionChanged(rows, selectedRows, onSelectionChanged)
      }
    }
  }, [selectedRows])

  const hasTableSwipeActions = touchType === TableTouchType.Swipe && rows.some((row) => !!row.swipeActions && row.swipeActions.length > 0)

  return (
    <StyledTableWrapper
      margins={margins}
      data-component-type={Props.ComponentType.Table}
      data-component-context={componentContext}
    >
      <StyledTable>
        <StyledTHead>
          <TableHeader
            sort={sort}
            onSortChange={onSortChange}
            columns={columns}
            selectedAll={selectedAll}
            setSelectedAll={setSelectedAll}
            hasLeftAction={hasLeftAction}
            bulkActions={bulkActions}
            hasTableSwipeActions={hasTableSwipeActions}
            hasBulkAction={selectedAll !== TableCheckboxInputValue.False}
            isEmpty={rows.length === 0}
          />
        </StyledTHead>
        <tbody>
        {
          rows.length === 0 ? (
            <tr><StyledEmptyStateCell colSpan={columns.length}>{emptyState}</StyledEmptyStateCell></tr>
          ) : rows.map((row: IRowProps) => (
            <TableRow
              key={row.id}
              hasTableSwipeActions={hasTableSwipeActions}
              columns={columns}
              row={row}
              selectedRows={selectedRows}
              setSelectedRows={setSelectedRows}
              hasLeftAction={hasLeftAction}
              touchType={touchType}
              onRowRemove={onRowRemove}
            />
          ))
        }
        </tbody>
      </StyledTable>
    </StyledTableWrapper>
  )
}

export {
  Table,
  IRowProps,
  IColumnProps,
  ISelectedRows,
  ColumnSize,
  ColumnAlignment,
  ColumnSortDirection,
  IColumnSorts,
  TableTouchType,
  getActionsIconButtonGroup
}
