import { clamp } from 'lodash'
import { useEffect, useRef } from 'react'

import { Variables } from '../../../../common'
import {
  FontAwesomeIconButton,
  IFontAwesomeIconButtonProps
} from '../../../Buttons/FontAwesomeIconButton/FontAwesomeIconButton'
import {
  ColumnSortDirection,
  IColumnSorts,
  IRowProps,
  ISelectedRows,
  TableCheckboxInputValue
} from './types'

const usePrevious = <T extends {}>(value: T): T => {
  const ref = useRef<T>(value)
  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
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
      [name]: sort[name] === ColumnSortDirection.Descending ? ColumnSortDirection.Ascending : ColumnSortDirection.Descending
    })
  }
}

const handleHeaderTitleClicked = (name: string, setHasHeaderHovered: (value: boolean) => void, hasSortEnabled: boolean, sort?: IColumnSorts, onSortChange?: (value: IColumnSorts) => void) => () => {
  if (sort && onSortChange && hasSortEnabled) {
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

const getIconButtonWidth = (actions: IFontAwesomeIconButtonProps[]) => (
  actions.reduce((totalWidth: number, action) => {
    return totalWidth + (action.size === FontAwesomeIconButton.Size.Large ? Variables.Spacing.s3XLarge : Variables.Spacing.sXLarge)
  }, 0)
)

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
  getIconButtonWidth
}
