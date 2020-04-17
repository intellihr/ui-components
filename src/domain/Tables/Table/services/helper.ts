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

const getUpdatedAllSelectableRows = <T extends {}>(rows: Array<IRowProps<T>>, selectedRows: ISelectedRows) => (
  rows.reduce((result: ISelectedRows, row) => {
    if (row.isSelectable) {
      result[row.id] = selectedRows[row.id] || false
    }
    return result
  }, {})
)

const handleSelectionChanged = <T extends {}>(rows: Array<IRowProps<T>>, selectedRows: ISelectedRows, onSelectionChanged: (rows: any[]) => void) => {
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

const getSelectAllTableCheckboxInputValue = (currentSelectedRows: boolean[]) => {
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

const handleSortButtonClicked = (name: string, sort?: IColumnSorts, onSortChange?: (sort: IColumnSorts) => void) => () => {
  if (sort && onSortChange) {
    onSortChange({
      ...sort,
      [name]: sort[name] === ColumnSortDirection.Descending ? ColumnSortDirection.Ascending : ColumnSortDirection.Descending
    })
  }
}

const handleHeaderTitleClicked = (name: string, setHasHeaderHovered: (value: boolean) => void, sort?: IColumnSorts, onSortChange?: (value: IColumnSorts) => void) => () => {
  if (sort && onSortChange) {
    let newSort = {
      [name]: ColumnSortDirection.Ascending
    }

    if (sort[name]) {
      newSort = {
        ...sort,
        [name]: sort[name] === ColumnSortDirection.Descending ? ColumnSortDirection.Ascending : ColumnSortDirection.Descending
      }
    }
    setHasHeaderHovered(false)
    onSortChange(newSort)
  }
}

const getSortButtonDirection = (hasHeaderHovered: boolean, currentSortDirection?: ColumnSortDirection) => {
  if (hasHeaderHovered) {
    if (currentSortDirection) {
      return currentSortDirection === ColumnSortDirection.Descending ? ColumnSortDirection.Ascending : ColumnSortDirection.Descending
    }

    return ColumnSortDirection.Ascending
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

const handleTableCellClicked = <T extends {}>(id: string, row: IRowProps<T>, selectedRows: ISelectedRows, setSelectedRows: (value: ISelectedRows) => void, setHasHovered: (value: boolean) => void, handleSwipeActionClosed?: () => void, isSelectable?: boolean, onClick?: (data: any) => void) => () => {
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
  getUpdatedAllSelectableRows,
  handleSelectionChanged,
  getSelectAllTableCheckboxInputValue,
  handleHeaderTitleClicked,
  handleSortButtonClicked,
  getSortButtonDirection,
  parsedProgressToPercentage,
  handleRemoveButtonClick,
  handleTableRowCheckboxInputChange,
  handleTableCellClicked
}
