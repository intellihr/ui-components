import React, { useEffect, useState } from 'react'

import { Props, Variables } from '../../../common'
import { GridLayout } from '../../Layouts/GridLayout'
import { RowVariant } from './services/colors'
import {
  StyledTable,
  StyledTHead,
  StyledEmptyStateCell,
  StyledTableWrapper
} from './services/style'
import { TableCheckboxInputValue } from './subcomponents/TableCheckboxInput'
import {
  FontAwesomeIconButton,
  IFontAwesomeIconButtonProps
} from '../../Buttons/FontAwesomeIconButton/FontAwesomeIconButton'
import { TableRow } from './subcomponents/TableRow'
import { TableHeader } from './subcomponents/TableHeader'

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

interface ISelectedRows {
  [rowId: string]: boolean
}

interface IColumnSorts {
  [columnName: string]: ColumnSortDirection
}

interface ITableProps {
  rows: IRowProps[]
  columns: IColumnProps[]
  onSelectionChanged?: (dataSet: any[]) => void
  /** Margins around the table */
  margins?: Props.IMargins
  /** The component context */
  componentContext?: string
  isMobile?: boolean
  onProgressEnd?: (data: any) => void
  bulkActions?: IFontAwesomeIconButtonProps[]
  emptyState: JSX.Element
  sort: IColumnSorts
  onSortChange: (sort: IColumnSorts) => void
}

interface IRowProps {
  id: string
  isSelectable?: boolean
  isRemovable?: boolean
  tooltipText?: string
  progress?: number
  variant?: RowVariant
  data: any
  checkboxOverride?: (data: any) => JSX.Element
  contentOverride?: (data: any) => JSX.Element[]
  onClick?: (data: any) => void
  swipeActions?: IFontAwesomeIconButtonProps[]
}

interface IColumnProps {
  name: string
  title?: string
  size: ColumnSize
  content: (data: any) => JSX.Element
  alignment?: ColumnAlignment
  tooltipText?: (data: any) => string
  hoverActions?: (data: any) => IFontAwesomeIconButtonProps[]
}

const getNewSelectedAll = (currentSelectedRows: boolean[]) => {
  let newSelectedAll = null

  for (const selectedRow of currentSelectedRows) {
    if (newSelectedAll === null) {
      newSelectedAll = selectedRow
    }

    if (newSelectedAll !== selectedRow) {
      return TableCheckboxInputValue.PartialTrue
    }
  }

  return newSelectedAll ? TableCheckboxInputValue.True : TableCheckboxInputValue.False
}

const getUpdatedAllSelectableRows = (rows: IRowProps[], selectedRows: ISelectedRows) => (
  rows.reduce((result: ISelectedRows, row) => {
    if (row.isSelectable) {
      result[row.id] = selectedRows[row.id] || false
    }
    return result
  }, {})
)

const handleSelectionChanged = (rows: IRowProps[], selectedRows: ISelectedRows, onSelectionChanged: (rows: any[]) => void) => {
  const selectedRowIds = Object.entries(selectedRows).reduce((result: string[], [key, value]) => {
    if (value) {
      result.push(key)
    }
    return result
  }, [])

  const selectedRowsData = rows.reduce((result: any[], row) => {
    if (selectedRowIds.includes(row.id)) {
      result.push(row.data)
    }

    return result
  }, [])
  onSelectionChanged(selectedRowsData)
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

const Table: React.FC<ITableProps> = ({ rows, sort, onSortChange, columns, onSelectionChanged, onProgressEnd, margins, componentContext, isMobile = false, bulkActions, emptyState}) => {
  const [selectedAll, setSelectedAll] = useState<TableCheckboxInputValue>(TableCheckboxInputValue.False)
  const [selectedRows, setSelectedRows] = useState<ISelectedRows>({})
  useEffect(() => {
    setSelectedRows(getUpdatedAllSelectableRows(rows, selectedRows))
  }, [rows])
  useEffect(() => {
    if (isMobile) {
      setSelectedRows({})
    }
  }, [isMobile])
  useEffect(() => {
    if (selectedAll === TableCheckboxInputValue.False || selectedAll === TableCheckboxInputValue.True ) {
      const newSelectedRows = rows.reduce((result: ISelectedRows, row) => {
        if (row.isSelectable) {
          result[row.id] = selectedAll === TableCheckboxInputValue.True
        }
        return result
      }, {})
      setSelectedRows(newSelectedRows)
    }
  }, [selectedAll])

  useEffect(() => {
    if (!isMobile) {
      const currentSelectedRows = Object.values(selectedRows)
      setSelectedAll(getNewSelectedAll(currentSelectedRows))
      if (onSelectionChanged) {
        handleSelectionChanged(rows, selectedRows, onSelectionChanged)
      }
    }
  }, [selectedRows])

  const hasTableSwipeActions = isMobile && rows.some((row) => !!row.swipeActions && row.swipeActions.length > 0)

  return (
    <StyledTableWrapper margins={margins}>
      <StyledTable>
        <StyledTHead>
          <TableHeader
            sort={sort}
            onSortChange={onSortChange}
            columns={columns}
            selectedAll={selectedAll}
            setSelectedAll={setSelectedAll}
            isMobile={isMobile}
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
          ) : rows.map((row) => <TableRow key={row.id} hasTableSwipeActions={hasTableSwipeActions} columns={columns} row={row} selectedRows={selectedRows} setSelectedRows={setSelectedRows} isMobile={isMobile} onProgressEnd={onProgressEnd}/>)
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
  getActionsIconButtonGroup
}
