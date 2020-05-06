import React, {useCallback, useState} from 'react'

import { Variables } from '../../../../common'
import {
  FontAwesomeIconButton,
  IFontAwesomeIconButtonProps
} from '../../../Buttons/FontAwesomeIconButton/FontAwesomeIconButton'
import { GridLayout } from '../../../Layouts/GridLayout'
import { Text } from '../../../Typographies'
import { TableRowVariant } from '../services/colors'
import {
  getSortButtonDirection,
  handleHeaderTitleClicked
} from '../services/helper'
import {
  StyledHeaderCell, StyledHeaderCellContent,
  StyledHeaderCellWithHeaderSize,
  StyledHeaderLeftCell, StyledHeaderLeftCellContent, StyledRow,
  StyledSortButton
} from '../services/style'
import {
  ColumnAlignment,
  ColumnSize,
  IColumnProps,
  IColumnSorts
} from '../services/types'
import {
  getActionsIconButtonGroup
} from './ActionIconButtonGroup'
import { TableCheckboxInput, TableCheckboxInputValue } from './TableCheckboxInput'

interface ITableHeaderProps <T> {
  columns: Array<IColumnProps<T>>
  selectAllTableCheckboxInputValue: TableCheckboxInputValue
  setSelectAllTableCheckboxInputValue: (value: TableCheckboxInputValue) => void
  bulkActions?: IFontAwesomeIconButtonProps[]
  hasLeftAction: boolean
  hasBulkAction: boolean
  hasTableSwipeActions: boolean
  isEmpty: boolean
  sort?: IColumnSorts
  onSortChange?: (sort: IColumnSorts) => void
  hasSortEnabled: boolean
}

interface ITableHeaderCellContentProps <T> {
  column: IColumnProps<T>
  sort?: IColumnSorts
  onSortChange?: (sort: IColumnSorts) => void
  hasSortEnabled: boolean
}

const TableHeaderCellContent = <T extends {}>(props: ITableHeaderCellContentProps<T>) => {
  const { column, sort, onSortChange, hasSortEnabled } = props
  const {
    name,
    title,
    alignment = ColumnAlignment.Left
  } = column

  const [hasHeaderHovered, setHasHeaderHovered] = useState<boolean>(false)

  const setHeaderHoveredTrue = useCallback(() => hasSortEnabled && setHasHeaderHovered(true), [setHasHeaderHovered])
  const setHeaderHoveredFalse = useCallback(() => hasSortEnabled && setHasHeaderHovered(false), [setHasHeaderHovered])

  const sortButton = (
    <StyledSortButton alignment={alignment} sort={sort && getSortButtonDirection(hasHeaderHovered, sort[name])}>
      <FontAwesomeIconButton icon='arrow-up' type='solid' isHovered={hasHeaderHovered} isDisabled={!hasSortEnabled}/>
    </StyledSortButton>
  )

  if (title) {
    return (
      <StyledHeaderCellContent
        hasSortEnabled={hasSortEnabled}
        onClick={handleHeaderTitleClicked(name, setHasHeaderHovered, hasSortEnabled, sort, onSortChange)}
      >
        {alignment === ColumnAlignment.Right && sortButton}
        <span onMouseEnter={setHeaderHoveredTrue} onMouseLeave={setHeaderHoveredFalse}>
            <Text weight={Variables.FontWeight.fwSemiBold}>
              {title}
            </Text>
          </span>
        {alignment === ColumnAlignment.Left && sortButton}
      </StyledHeaderCellContent>
    )
  }

  return null
}

const getHeaderCells = <T extends {}>(
  hasSortEnabled: boolean,
  hasTableSwipeActions: boolean,
  columns: Array<IColumnProps<T>>,
  hasLeftAction: boolean,
  sort?: IColumnSorts,
  onSortChange?: (sort: IColumnSorts) => void,
  bulkActions?: IFontAwesomeIconButtonProps[]
) => {
  const hasHeaderSize = columns.some((column) => !!column.headerSize)

  if (hasHeaderSize) {
    return (
      <StyledHeaderCellWithHeaderSize colSpan={!hasLeftAction ? columns.length : columns.length + 1}>
        <GridLayout
          cells={
            columns.map((column, index) => {
              const size = column.headerSize || column.size

              return ({
                displayType: 'flex',
                flexHorizontalAlignment: (column.alignment && column.alignment === ColumnAlignment.Right) ? GridLayout.HorizontalAlignment.Right : GridLayout.HorizontalAlignment.Left,
                size: (size === ColumnSize.Shrink) ? 'shrink' : 'auto',
                content: <div><TableHeaderCellContent<T> column={column} sort={sort} onSortChange={onSortChange} hasSortEnabled={hasSortEnabled}/></div>
              })
            })
          }
        />
      </StyledHeaderCellWithHeaderSize>
    )
  }

  return (
    columns.map((column, index) => {
      const {
        name,
        size,
        alignment = ColumnAlignment.Left
      } =  column

      const isLastColumn = index === columns.length - 1
      const isFirstColumn = !hasLeftAction && index === 0

      if (bulkActions && hasLeftAction && index === 0) {
        return (
          <StyledHeaderCell key={name} size={size} alignment={alignment}>
            {index === 0 && getActionsIconButtonGroup(bulkActions.map((action) => ({...action, size: FontAwesomeIconButton.Size.Small})), 'bulk')}
          </StyledHeaderCell>
        )
      }

      return (
        <StyledHeaderCell key={name} colSpan={(isLastColumn && hasTableSwipeActions) ? 2 : undefined} size={size} alignment={alignment} isLastColumn={isLastColumn} isFirstColumn={isFirstColumn}>
          <TableHeaderCellContent<T> column={column} sort={sort} onSortChange={onSortChange} hasSortEnabled={hasSortEnabled}/>
        </StyledHeaderCell>
      )})
  )
}

const TableHeader = <T extends {}>(props: ITableHeaderProps<T>) => {
  const {
    hasLeftAction,
    columns,
    sort,
    onSortChange,
    hasTableSwipeActions,
    selectAllTableCheckboxInputValue,
    setSelectAllTableCheckboxInputValue,
    bulkActions,
    hasBulkAction,
    isEmpty,
    hasSortEnabled
  } = props

  return (
    <StyledRow variant={TableRowVariant.Neutral}>
      {
        (!hasLeftAction || isEmpty) ? getHeaderCells(hasSortEnabled, hasTableSwipeActions, columns, hasLeftAction, sort, onSortChange,hasBulkAction ? bulkActions : undefined ) : (
          <>
            <StyledHeaderLeftCell>
              <StyledHeaderLeftCellContent>
                <TableCheckboxInput
                  name='selectAll'
                  value={selectAllTableCheckboxInputValue}
                  onChange={setSelectAllTableCheckboxInputValue}
                  hasStyledOnRowHovered={false}
                />
              </StyledHeaderLeftCellContent>
            </StyledHeaderLeftCell>
            {
              getHeaderCells(hasSortEnabled, hasTableSwipeActions, columns, hasLeftAction, sort, onSortChange,hasBulkAction ? bulkActions : undefined )
            }
          </>
        )
      }

    </StyledRow>
  )
}

// Purposefully not deep comparison as columns and sort are both memoisable in other applications
const MemoTableHeader: typeof TableHeader = React.memo(TableHeader) as any

export {
  MemoTableHeader as TableHeader
}
