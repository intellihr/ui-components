import { clamp } from 'lodash'
import { useEffect, useRef } from 'react'

import { Props, Variables } from '../../../../common'
import {
  FontAwesomeIconButton,
  IFontAwesomeIconButtonProps
} from '../../../Buttons/FontAwesomeIconButton/FontAwesomeIconButton'
import { TableCheckboxInputValue } from '../subcomponents/TableCheckboxInput'
import { IColumnSorts, IRowProps, ISelectedRows, Table } from '../Table'

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

const handleSortButtonClicked = (name: string, hasSortEnabled: boolean, sort?: IColumnSorts, onSortChange?: (sort: IColumnSorts) => void) => () => {
  if (sort && onSortChange && hasSortEnabled) {
    onSortChange({
      ...sort,
      [name]: sort[name] === Table.ColumnSortDirection.Descending ? Table.ColumnSortDirection.Ascending : Table.ColumnSortDirection.Descending
    })
  }
}

const handleHeaderTitleClicked = (name: string, setHasHeaderHovered: (value: boolean) => void, hasSortEnabled: boolean, sort?: IColumnSorts, onSortChange?: (value: IColumnSorts) => void) => () => {
  if (sort && onSortChange && hasSortEnabled) {
    let newSort = {
      [name]: Table.ColumnSortDirection.Ascending
    }

    if (sort[name]) {
      newSort = {
        ...sort,
        [name]: sort[name] === Table.ColumnSortDirection.Descending ? Table.ColumnSortDirection.Ascending : Table.ColumnSortDirection.Descending
      }
    }
    setHasHeaderHovered(false)
    onSortChange(newSort)
  }
}

const getSortButtonDirection = (hasHeaderHovered: boolean, currentSortDirection?: Table.ColumnSortDirection) => {
  if (hasHeaderHovered) {
    if (currentSortDirection) {
      return currentSortDirection === Table.ColumnSortDirection.Descending ? Table.ColumnSortDirection.Ascending : Table.ColumnSortDirection.Descending
    }

    return Table.ColumnSortDirection.Ascending
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

const handleTableCellClicked = <T extends {}>(
  id: string,
  row: IRowProps<T>,
  selectedRows: ISelectedRows,
  setSelectedRows: (value: ISelectedRows) => void,
  setHasHovered: (value: boolean) => void,
  handleSwipeAction?: () => void,
  isSelectable?: boolean,
  onClick?: (data: any) => void
) => () => {
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

  if (handleSwipeAction) {
    handleSwipeAction()
  }

  setHasHovered(false)
}

const getIconButtonWidth = (actions: IFontAwesomeIconButtonProps[]) => (
  actions.reduce((totalWidth: number, action) => {
    return totalWidth + (action.size === FontAwesomeIconButton.Size.Large ? Variables.Spacing.s3XLarge : Variables.Spacing.sXLarge)
  }, 0)
)

const getTransitionStyles = (state: 'entering' | 'entered' | 'exiting' | 'exited') => {
  switch (state) {
    case 'entering':
      return { opacity: 1 }
    case 'entered':
      return { opacity: 1 }
    case 'exiting':
      return { opacity: 0 }
    case 'exited':
      return { opacity: 0 }
  }
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
  handleTableCellClicked,
  getIconButtonWidth,
  getTransitionStyles
}
