import { isEqual } from 'lodash'
import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { Props } from '../../../common'
import {
  IFontAwesomeIconButtonProps
} from '../../Buttons/FontAwesomeIconButton/FontAwesomeIconButton'
import { TableRowVariant } from './services/colors'
import {
  getSelectAllTableCheckboxInputValue,
  getUpdatedAllSelectableRows,
  handleSelectionChanged
} from './services/helper'
import {
  StyledEmptyStateCell,
  StyledEmptyStateRow,
  StyledTHead,
  StyledTable,
  StyledTableWrapper
} from './services/style'
import {
  ColumnAlignment,
  ColumnSize,
  ColumnSortDirection,
  IColumnProps,
  IColumnSorts,
  IRowProps,
  ISelectedRows,
  InteractionType
} from './services/types'
import { TableCheckboxInputValue } from './subcomponents/TableCheckboxInput'
import { TableHeader } from './subcomponents/TableHeader'
import { TableRow } from './subcomponents/TableRow'

const validateProps = <T extends {}>(props: ITableProps<T>) => {
  if (props.hasLeftAction && props.interactionType === InteractionType.Swipe) {
    throw new Error('Having left actions is not compatible with swipe interaction')
  }

  if (props.onSortChange && !props.sort) {
    throw new Error('You must provide a sort for onSortChange to work')
  }
}

interface ITableProps <T extends {}> {
  /** Rows of the table */
  rows: Array<IRowProps<T>>
  /** Columns of the table */
  columns: Array<IColumnProps<T>>
  /** Empty state of the table */
  emptyState: JSX.Element
  /** Sorting of the table and only allow one column sorting at once */
  sort?: IColumnSorts
  /** Called when the sorting is changed */
  onSortChange?: (sort: IColumnSorts) => void
  /** Called when the selected row is changed */
  onSelectedRowChange?: (selectedRowData: T[]) => void
  /** Icon Buttons group for bulkActions when the user selects some row */
  bulkActions?: IFontAwesomeIconButtonProps[]
  /** Called when some row is removed */
  onRowRemove?: (removedRowData: T) => void
  /** If yes the left action cells are displayed (checkbox and remove button) */
  hasLeftAction?: boolean
  /** If interaction type is Hover, it will display hover actions when hover. If interaction type is swipe, it will display swipe actions when tap or swipe. */
  interactionType?: InteractionType
  /** If yes, sort is enable with interaction. If no, sort button display in disable style with given sort */
  hasSortEnabled?: boolean
  /** Margins around the table */
  margins?: Props.IMargins
  /** The component context */
  componentContext?: string
}

const Table = <T extends {}>(props: ITableProps<T>) => {
  const {
    onRowRemove,
    rows,
    sort,
    onSortChange,
    columns,
    onSelectedRowChange,
    margins,
    componentContext,
    hasLeftAction = false,
    bulkActions,
    emptyState,
    interactionType = InteractionType.Hover,
    hasSortEnabled = true
  } = props

  validateProps(props)
  const [selectedRows, setSelectedRows] = useState<ISelectedRows>(() => getUpdatedAllSelectableRows(rows, {}))
  const [expandedSwipeCellRow, setExpandedSwipeCellRow] = useState<string | null>(null)

  const selectAllTableCheckboxInputValue = useMemo(() => getSelectAllTableCheckboxInputValue(Object.values(selectedRows)), [selectedRows])
  const areRowsSelected = useMemo(() => {
    return Object.values(selectedRows).includes(true)
  }, [selectedRows])

  const setAllRows = useCallback((value: TableCheckboxInputValue) => {
    const newSelectedRows = rows.reduce<ISelectedRows>((acc, row) => {
      acc[row.id] = (value === TableCheckboxInputValue.True)

      return acc
    }, {})

    setSelectedRows(newSelectedRows)
  }, [rows, setSelectedRows])

  const toggleSingleRow = useCallback((row: IRowProps<T>) => {
    setSelectedRows(
      (selectedRowsFromState) => ({...selectedRowsFromState, [row.id]: !selectedRowsFromState[row.id] })
    )
  }, [setSelectedRows])

  useEffect(() => {
    const updatedSelectedRows = getUpdatedAllSelectableRows<T>(rows, selectedRows)

    if (!isEqual(updatedSelectedRows, selectedRows)) {
      setSelectedRows(updatedSelectedRows)
    }
  }, [rows])
  useEffect(() => {
    if (hasLeftAction) {
      setSelectedRows({})
    }
  }, [hasLeftAction])
  useEffect(() => {
    if (hasLeftAction && onSelectedRowChange) {
      handleSelectionChanged<T>(rows, selectedRows, onSelectedRowChange)
    }
  }, [selectedRows])

  const hasTableSwipeActions = interactionType === InteractionType.Swipe && rows.some((row) => !!row.actions && row.actions.length > 0)

  return (
    <StyledTableWrapper
      margins={margins}
      data-component-type={Props.ComponentType.Table}
      data-component-context={componentContext}
    >
      <StyledTable>
        <StyledTHead>
          <TableHeader<T>
            sort={sort}
            onSortChange={onSortChange}
            columns={columns}
            selectAllTableCheckboxInputValue={selectAllTableCheckboxInputValue}
            setSelectAllTableCheckboxInputValue={setAllRows}
            hasLeftAction={hasLeftAction}
            bulkActions={bulkActions}
            hasTableSwipeActions={hasTableSwipeActions}
            hasBulkAction={selectAllTableCheckboxInputValue !== TableCheckboxInputValue.False}
            isEmpty={rows.length === 0}
            hasSortEnabled={hasSortEnabled}
          />
        </StyledTHead>
          {
            rows.length === 0 ? (
              <StyledEmptyStateRow>
                <StyledEmptyStateCell colSpan={columns.length}>
                  {emptyState}
                </StyledEmptyStateCell>
              </StyledEmptyStateRow>
            ) : rows.map((row, index) => (
              <TableRow<T>
                key={row.id}
                row={row}
                lastRow={index === rows.length - 1}
                hasTableSwipeActions={hasTableSwipeActions}
                columns={columns}
                areRowsSelected={areRowsSelected}
                isSelected={selectedRows[row.id] || false}
                toggleSelected={toggleSingleRow}
                hasLeftAction={hasLeftAction}
                interactionType={interactionType}
                onRowRemove={onRowRemove}
                expandedSwipeCellRow={expandedSwipeCellRow}
                setExpandedSwipeCellRow={setExpandedSwipeCellRow}
              />
            ))
          }
      </StyledTable>
    </StyledTableWrapper>
  )
}

type ITableType = typeof Table & {
  ColumnAlignment: typeof ColumnAlignment
  ColumnSize: typeof ColumnSize
  ColumnSortDirection: typeof ColumnSortDirection
  InteractionType: typeof InteractionType
  RowVariant: typeof TableRowVariant
}

const MemoTable: ITableType = React.memo(Table) as any

MemoTable.ColumnSize = ColumnSize
MemoTable.ColumnAlignment = ColumnAlignment
MemoTable.ColumnSortDirection = ColumnSortDirection
MemoTable.InteractionType = InteractionType
MemoTable.RowVariant = TableRowVariant

export {
  Table as UnmemoTable, // Needed for styleguide (memoed components won't be detected)
  MemoTable as Table
}
