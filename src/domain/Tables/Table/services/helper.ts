import {clamp} from 'lodash'
import { useEffect, useRef } from 'react'

import {TableCheckboxInputValue} from '../subcomponents/TableCheckboxInput'
import {ColumnSortDirection, IColumnSorts, IRowProps, ISelectedRows} from '../Table'

const usePrevious = <T extends {}>(value: T): T => {
  const ref = useRef<T>()
  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current as T
}

const handleHovered = (value: boolean, setHasHovered: (value: boolean) => void) => () => setHasHovered(value)

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

const handleTableHeaderCheckboxInputChange = (setSelectedAll: (value: TableCheckboxInputValue) => void) => (value: TableCheckboxInputValue) => {
  setSelectedAll(value)
}

const handleSortButtonClicked = (name: string, sort: IColumnSorts, onSortChange: (sort: IColumnSorts) => void) => () => {
  onSortChange({
    ...sort,
    [name]: sort[name] === ColumnSortDirection.Up ? ColumnSortDirection.Down : ColumnSortDirection.Up
  })
}

const handleHeaderTitleClicked = (name: string, sort: IColumnSorts, onSortChange: (value: IColumnSorts) => void, setHasHeaderHovered: (value: boolean) => void) => () => {
  let newSort = {
    [name]: ColumnSortDirection.Down
  }

  if (sort[name]) {
    newSort = {
      ...sort,
      [name]: sort[name] === ColumnSortDirection.Up ? ColumnSortDirection.Down : ColumnSortDirection.Up
    }
  }
  setHasHeaderHovered(false)
  onSortChange(newSort)
}

const getSortButtonDirection = (hasHeaderHovered: boolean, currentSortDirection?: ColumnSortDirection) => {
  if (hasHeaderHovered) {
    if (currentSortDirection) {
      return currentSortDirection === ColumnSortDirection.Down ? ColumnSortDirection.Up : ColumnSortDirection.Down
    }

    return ColumnSortDirection.Down
  }

  return currentSortDirection
}

const parsedProgressToPercentage = (progress?: number) => progress ? clamp(progress, 0, 1) * 100 : 0

const handleRemoveButtonClick = (data: any, onRowRemove?: (data: any) => void) => () => {
  if (onRowRemove) {
    onRowRemove(data)
  }
}

const handleTableRowCheckboxInputChange = (id: string, selectedRows: ISelectedRows, setSelectedRows: (value: ISelectedRows) => void) => (value: TableCheckboxInputValue) => {
  const newValue = {
    ...selectedRows,
    [id]: value === TableCheckboxInputValue.True
  }
  setSelectedRows(newValue)
}

const handleTableCellClicked = (id: string, row: IRowProps, selectedRows: ISelectedRows, setSelectedRows: (value: ISelectedRows) => void, setHasHovered: (value: boolean) => void, handleSwipeActionClosed?: () => void, isSelectable?: boolean, onClick?: (data: any) => void) => () => {
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

  if (handleSwipeActionClosed) {
    handleSwipeActionClosed()
  }

  setHasHovered(false)
}

export {
  usePrevious,
  handleHovered,
  getUpdatedAllSelectableRows,
  handleSelectionChanged,
  getNewSelectedAll,
  handleHeaderTitleClicked,
  handleSortButtonClicked,
  handleTableHeaderCheckboxInputChange,
  getSortButtonDirection,
  parsedProgressToPercentage,
  handleRemoveButtonClick,
  handleTableRowCheckboxInputChange,
  handleTableCellClicked
}
