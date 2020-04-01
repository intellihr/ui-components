import { clamp } from 'lodash'
import React, { useEffect, useState } from 'react'
import { useDrag } from 'react-use-gesture'

import { Props, Variables } from '../../../common'
import { GridLayout } from '../../Layouts/GridLayout'
import { TooltipPopover } from '../../Popovers/TooltipPopover'
import { TooltipPopoverVariant } from '../../Popovers/TooltipPopover/TooltipPopover'
import { Text } from '../../Typographies'
import { RowVariant } from './colors'
import { StyledProgressBar, StyledRow, StyledSwipeActions, StyledTable } from './style'
import { TableCheckboxInput, TableCheckboxInputValue } from './subcomponents/TableCheckboxInput'

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
}

interface IRowProps {
  id: string
  isSelectable?: boolean
  isRemovable?: boolean
  tooltipText?: string
  progress?: [number, number]
  variant?: RowVariant
  data: any
  contentOverride?: (data: any) => JSX.Element[]
  onClick?: (data: any) => void
}

interface IColumnProps {
  title?: string
  size: ColumnSize
  headerSize?: ColumnSize
  content: (data: any) => JSX.Element
  sort?: ColumnSortDirection
  onSortChange: () => void
  alignment?: ColumnAlignment
  tooltipText?: (data: any) => string
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

const handleTableCellClicked = (id: string, row: IRowProps, selectedRows: ISelectedRows, setSelectedRows: (value: ISelectedRows) => void, isSelectable?: boolean, onClick?: (data: any) => void) => () => {
  if (isSelectable) {
    const newValue = {
      ...selectedRows,
      [id]: !selectedRows[id]
    }
    setSelectedRows(newValue)
  }

  if (onClick) {
    onClick(row.data)
  }
}

const TableCell: React.FC<{tooltipText?: string, onClick: () => void}> = ({ tooltipText, onClick, children}) => {
  if (tooltipText) {
    const toggleComponent = ({ openMenu, closeMenu, toggleComponentRef, ariaProps }: any) => (
      <span
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
        ref={toggleComponentRef}
        {...ariaProps}
      >
          {children}
      </span>
    )

    return (
      <div
        onClick={onClick}
      >
        <TooltipPopover
          variant={TooltipPopoverVariant.Dark}
          toggleComponent={toggleComponent}
        >
          {tooltipText}
        </TooltipPopover>
      </div>
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

const getTableRowLeftCell = (isSelectable: boolean, isRemovable: boolean, isMobile: boolean, row: IRowProps, selectedRows: ISelectedRows, setSelectedRows: (value: ISelectedRows) => void) => {
  if (isSelectable && !isRemovable && !isMobile) {
    const SelectedCheckboxInputValue = selectedRows[row.id] ? TableCheckboxInputValue.True : TableCheckboxInputValue.False
    return [getTableCheckboxInputCell(ColumnSize.Shrink, row.id, SelectedCheckboxInputValue, handleTableCheckboxInputChange(row.id, selectedRows, setSelectedRows))]
  }

  if (isRemovable && !isMobile) {
    return [{
      size: ColumnSize.Shrink,
      content: <Text>1</Text>
    }]
  }

  return []
}

const parsedProgressToPercentage = (progress?: number) => progress ? clamp(progress, 0, 1) * 100 : 0

const TableRow: React.FC<{columns: IColumnProps[], row: IRowProps, selectedRows: ISelectedRows, setSelectedRows: (value: ISelectedRows) => void, isMobile: boolean, onProgressEnd?: (row: any) => void}> = ({ columns, row, selectedRows, setSelectedRows, isMobile = false, onProgressEnd}) => {
  const {
    isSelectable = false,
    isRemovable = false,
    variant = RowVariant.Neutral,
    progress,
    onClick,
    contentOverride,
    data
  } = row

  const swipeContentWidth = 100

  const [hasProgressBarEnded, setHasProgressBarEnded] = useState<boolean>(false)
  const [movement, setMovement] = useState<number>(0)
  const blind = useDrag((props: any) => {
    if (isMobile && props._movement[0] <= movement) {
      console.log(props._movement, 'props._movement,')
      if (Math.floor(props._movement[0]) !== movement) {
        setMovement(Math.min(Math.trunc(Math.abs(props._movement[0])), swipeContentWidth))
      }

      if (!props.dragging && props._movement[0] < 0) {
        console.log('drag end')
        console.log(props._movement, 'props._movement,')
        console.log((Math.abs(props._movement[0]) < (swipeContentWidth / 2)) ? 0 : swipeContentWidth)
        setMovement((Math.abs(props._movement[0]) < (swipeContentWidth / 2)) ? 0 : swipeContentWidth)
      }
    }
  })
  useEffect(() => {
    if (onProgressEnd && hasProgressBarEnded) {
      onProgressEnd(data)
    }
  }, [hasProgressBarEnded])
  const leftCell = getTableRowLeftCell(isSelectable, isRemovable, isMobile, row, selectedRows, setSelectedRows)
  if (progress && progress[1] === 1 && !hasProgressBarEnded) {
    setTimeout(() => {
      setHasProgressBarEnded(true)
    }, 3000)
  }

  return (
    <>
      <StyledRow {...blind()} movement={movement} variant={variant} isHoverable={!isMobile && (isSelectable || !!onClick)} isSelected={!isMobile && isSelectable ? selectedRows[row.id] : false}>
        <GridLayout
          margins={{top: Variables.Spacing.sSmall, left: Variables.Spacing.sSmall, right: Variables.Spacing.sSmall, bottom: row.progress ? Variables.Spacing.sSmall - 2 : Variables.Spacing.sSmall}}
          verticalAlignment={GridLayout.VerticalAlignment.Middle}
          cells={leftCell.concat(columns.map((column, index) => ({
            size: column.size,
            content: <TableCell tooltipText={column.tooltipText ? column.tooltipText(row.data) : undefined} onClick={handleTableCellClicked(row.id, row, selectedRows, setSelectedRows, isSelectable, onClick)}>{contentOverride ? contentOverride(data)[index] : column.content(data)}</TableCell>
          })))}
        />
        {progress && <StyledProgressBar isEnd={hasProgressBarEnded} previousPercentage={parsedProgressToPercentage(progress[0])} percentage={parsedProgressToPercentage(progress[1])}/>}
      </StyledRow>
      {isMobile && <StyledSwipeActions width={movement}>12 13 14 15</StyledSwipeActions>}
    </>
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

const Table: React.FC<ITableProps> = ({ rows, columns, onSelectionChanged, onProgressEnd, margins, componentContext, isMobile = false}) => {
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
      <TableHeader columns={columns} selectedAll={selectedAll} setSelectedAll={setSelectedAll} isMobile={isMobile}/>
      {rows.map((row) => <TableRow key={row.id} columns={columns} row={row} selectedRows={selectedRows} setSelectedRows={setSelectedRows} isMobile={isMobile} onProgressEnd={onProgressEnd}/>)}
    </StyledTable>
  )
}

export {
  Table
}
