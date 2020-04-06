import { clamp } from 'lodash'
import React, {useEffect, useRef, useState} from 'react'
import { useDrag } from 'react-use-gesture'

import { Props, Variables } from '../../../common'
import { GridLayout } from '../../Layouts/GridLayout'
import { Text } from '../../Typographies'
import { RowVariant } from './colors'
import {
  StyledRow,
  StyledTable,
  StyledHeaderCell,
  StyledHeaderLeftCell,
  StyledTHead, StyledEmptyStateCell
} from './style'
import { TableCheckboxInput, TableCheckboxInputValue } from './subcomponents/TableCheckboxInput'
import {
  FontAwesomeIconButton,
  IFontAwesomeIconButtonProps
} from '../../Buttons/FontAwesomeIconButton/FontAwesomeIconButton'
import {TableRow} from './subcomponents/TableRow'

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
  [i: string]: boolean
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
  title?: string
  size: ColumnSize
  content: (data: any) => JSX.Element
  sort?: ColumnSortDirection
  onSortChange: () => void
  alignment?: ColumnAlignment
  tooltipText?: (data: any) => string
  hoverActions?: IFontAwesomeIconButtonProps[]
}

const handleTableHeaderCheckboxInputChange = (setSelectedAll: (value: TableCheckboxInputValue) => void) => (value: TableCheckboxInputValue) => {
  setSelectedAll(value)
}

const getActionsCells = (actions: IFontAwesomeIconButtonProps[], name?: string) => {
  return actions.map((actionProps, index) => ({
    size:  ColumnSize.Shrink,
    content: <FontAwesomeIconButton key={`actions-${name}-${index}`} {...actionProps}/>
  }))
}

const getHeaderCells = (columns: IColumnProps[], bulkActions?: IFontAwesomeIconButtonProps[], isMobile?: boolean) => columns.map((column, index) => {
  if (bulkActions && !isMobile) {
    return (
      <StyledHeaderCell key={index} size={column.size} alignment={column.alignment}>
        {
          index === 0 && (
            <GridLayout
              gutterMarginX={Variables.Spacing.sMedium}
              verticalAlignment={GridLayout.VerticalAlignment.Middle}
              cells={getActionsCells(bulkActions, 'bulk')}
            />
          )
        }
      </StyledHeaderCell>
    )
  }

  return (
    <StyledHeaderCell key={index} size={column.size} alignment={column.alignment} isLastColumn={index === columns.length - 1}  isFirstColumn={isMobile && index === 0}>
      <Text weight={Variables.FontWeight.fwSemiBold}>{column.title}</Text>
    </StyledHeaderCell>
  )
})

const TableHeader: React.FC<{columns: IColumnProps[], selectedAll: TableCheckboxInputValue, setSelectedAll: (value: TableCheckboxInputValue) => void, isMobile: boolean, bulkActions?: IFontAwesomeIconButtonProps[], hasBulkAction: boolean, isEmpty: boolean}> = ({ columns, selectedAll, setSelectedAll, isMobile, bulkActions, hasBulkAction, isEmpty}) => {
  return (
    <StyledRow variant={RowVariant.Neutral}>
      {
        (isMobile || isEmpty) ? getHeaderCells(columns, hasBulkAction ? bulkActions : undefined ) : (
          <>
            <StyledHeaderLeftCell>
              <TableCheckboxInput
                name='selectAll'
                value={selectedAll}
                onChange={handleTableHeaderCheckboxInputChange(setSelectedAll)}
              />
            </StyledHeaderLeftCell>
            {
              getHeaderCells(columns, hasBulkAction ? bulkActions : undefined )
            }
          </>
        )
      }

    </StyledRow>
  )
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

const Table: React.FC<ITableProps> = ({ rows, columns, onSelectionChanged, onProgressEnd, margins, componentContext, isMobile = false, bulkActions, emptyState}) => {
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
  return (
    <StyledTable margins={margins}>
      <StyledTHead>
        <TableHeader
          columns={columns}
          selectedAll={selectedAll}
          setSelectedAll={setSelectedAll}
          isMobile={isMobile}
          bulkActions={bulkActions}
          hasBulkAction={selectedAll !== TableCheckboxInputValue.False}
          isEmpty={rows.length === 0 }
        />
      </StyledTHead>
      <tbody>
        {
          rows.length === 0 ? (
            <tr><StyledEmptyStateCell colSpan={columns.length}>{emptyState}</StyledEmptyStateCell></tr>
          ) : rows.map((row) => <TableRow key={row.id} columns={columns} row={row} selectedRows={selectedRows} setSelectedRows={setSelectedRows} isMobile={isMobile} onProgressEnd={onProgressEnd}/>)
        }
      </tbody>
    </StyledTable>
  )
}

export {
  Table,
  IRowProps,
  IColumnProps,
  ISelectedRows,
  ColumnSize,
  ColumnAlignment
}
