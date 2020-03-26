import React, { useEffect, useState } from 'react'

import { Props, Variables } from '../../../common'
import { GridLayout } from '../../Layouts/GridLayout'
import { Text } from '../../Typographies'
import { RowVariant } from './colors'
import { StyledRow, StyledTable } from './style'
import { TableCheckboxInput, TableCheckboxInputValue } from './subcomponents/TableCheckboxInput'
import {TooltipPopover} from '../../Popovers/TooltipPopover'

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
  onSelectionChanged: (data: any[]) => void
  /** Margins around the highlight area */
  margins?: Props.IMargins
  /** The component context */
  componentContext?: string
  isMobile?: boolean
}

interface IRowProps {
  id: string
  isSelectable?: boolean
  isRemovable?: boolean
  tooltipText?: string
  progress?: number
  variant?: RowVariant
  data: any
  contentOverride?: (data: any) => JSX.Element[]
}

interface IColumnProps {
  name: string
  title?: string
  size: ColumnSize
  headerSize?: ColumnSize
  content: (data: any[]) => JSX.Element
  sort?: ColumnSortDirection
  onSortChange: () => void
  alignment?: ColumnAlignment
  tooltipText?: (data: any[]) => string
}

const getTableCheckboxInputCell = (size: ColumnSize, name: string, value: TableCheckboxInputValue, onChange: (value: TableCheckboxInputValue) => void) => {
  return ({
      size,
      content: (
        <TableCheckboxInput
          name={name}
          value={value}
          onChange={onChange}
        />
      )
    })
}

const handleTableCheckboxInputChange = (id: string, selectedRows: ISelectedRows, setSelectedRows: (value: ISelectedRows) => void) => (value: TableCheckboxInputValue) => {
  const newValue = {
    ...selectedRows,
    [id]: value === TableCheckboxInputValue.True
  }
  setSelectedRows(newValue)
}

const handleTableHeaderCheckboxInputChange = (setSelectedAll: (value: TableCheckboxInputValue) => void) => (value: TableCheckboxInputValue) => {
  setSelectedAll(value)
}

const TableHeader: React.FC<{columns: IColumnProps[], selectedAll: TableCheckboxInputValue, setSelectedAll: (value: TableCheckboxInputValue) => void, isMobile: boolean}> = ({ columns, selectedAll, setSelectedAll, isMobile}) => {
  const selectCheckbox = [getTableCheckboxInputCell(ColumnSize.Shrink, 'selectAll', selectedAll, handleTableHeaderCheckboxInputChange(setSelectedAll))]
  const headerCells = columns.map((column) => ({
    size: column.headerSize || column.size,
    content: <Text weight={Variables.FontWeight.fwSemiBold}>{column.title}</Text>
  }))

  return (
    <StyledRow variant={RowVariant.Neutral}>
      <GridLayout
        margins={{top: Variables.Spacing.sSmall, left: Variables.Spacing.sSmall, right: Variables.Spacing.sSmall, bottom: Variables.Spacing.sSmall}}
        verticalAlignment={GridLayout.VerticalAlignment.Middle}
        cells={isMobile ? headerCells : selectCheckbox.concat(headerCells)}
      />
    </StyledRow>
  )
}

const handleTableCellClicked = (id: string, selectedRows: ISelectedRows, setSelectedRows: (value: ISelectedRows) => void, isSelectedRow?: boolean) => () => {
  if (isSelectedRow) {
    const newValue = {
      ...selectedRows,
      [id]: !selectedRows[id]
    }
    setSelectedRows(newValue)
  }
}

const TableCell: React.FC<{tooltipText?: string, onClick: () => void}> = ({ tooltipText, onClick, children}) => {
  if (tooltipText) {
    const toggleComponent = ({ openMenu, closeMenu, toggleComponentRef, ariaProps }: any) => (
      <span
        onClick={onClick}
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
        ref={toggleComponentRef}
        {...ariaProps}
      >
          {children}
      </span>
    )

    return (
      <TooltipPopover
        toggleComponent={toggleComponent}
      >
        {tooltipText}
      </TooltipPopover>
    )
  }

  return (
    <div
      onClick={onClick}
    >
      {children}
    </div>
  )
}

const TableRow: React.FC<{columns: IColumnProps[], row: IRowProps, selectedRows: ISelectedRows, setSelectedRows: (value: ISelectedRows) => void, isMobile: boolean}> = ({ columns, row, selectedRows, setSelectedRows, isMobile}) => {
  let isSelectedRow: boolean | undefined
  let leftCell
  if (row.isSelectable && !row.isRemovable && !isMobile) {
    isSelectedRow = selectedRows[row.id]
    const SelectedCheckboxInputValue = isSelectedRow ? TableCheckboxInputValue.True : TableCheckboxInputValue.False
    leftCell = [getTableCheckboxInputCell(ColumnSize.Shrink, row.id, SelectedCheckboxInputValue, handleTableCheckboxInputChange(row.id, selectedRows, setSelectedRows))]
  } else {
    leftCell = [{
      size: ColumnSize.Shrink,
      content: <Text>1</Text>
    }]
  }
  return (
    <StyledRow variant={row.variant || RowVariant.Neutral} isHoverable isSelected={isSelectedRow}>
      <GridLayout
        margins={{top: Variables.Spacing.sSmall, left: Variables.Spacing.sSmall, right: Variables.Spacing.sSmall, bottom: Variables.Spacing.sSmall}}
        verticalAlignment={GridLayout.VerticalAlignment.Middle}
        cells={leftCell.concat(columns.map((column, index) => ({
          size: column.size,
          content: <TableCell tooltipText={column.tooltipText ? column.tooltipText(row.data) : undefined} onClick={handleTableCellClicked(row.id, selectedRows, setSelectedRows, isSelectedRow)}>{row.contentOverride ? row.contentOverride(row.data)[index] : column.content(row.data)}</TableCell>
        })))}
      />
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

const allSelectableRowsToFalse = (rows: IRowProps[]) => (
  rows.reduce((result: ISelectedRows, row) => {
    if (row.isSelectable) {
      result[row.id] = false
    }
    return result
  }, {})
)

const Table: React.FC<ITableProps> = ({ rows, columns, onSelectionChanged, margins, componentContext, isMobile = false}) => {
  const [selectedAll, setSelectedAll] = useState<TableCheckboxInputValue>(TableCheckboxInputValue.False)
  const [selectedRows, setSelectedRows] = useState<ISelectedRows>(allSelectableRowsToFalse(rows))
  useEffect(() => {
    setSelectedRows(allSelectableRowsToFalse(rows))
  }, [rows])
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
    const currentSelectedRows = Object.values(selectedRows)
    setSelectedAll(getNewSelectedAll(currentSelectedRows))
    }, [selectedRows])
  return (
    <StyledTable margins={margins}>
      <TableHeader columns={columns} selectedAll={selectedAll} setSelectedAll={setSelectedAll} isMobile={isMobile}/>
      {rows.map((row) => <TableRow key={row.id} columns={columns} row={row} selectedRows={selectedRows} setSelectedRows={setSelectedRows} isMobile={isMobile}/>)}
    </StyledTable>
  )
}

export {
  Table
}
