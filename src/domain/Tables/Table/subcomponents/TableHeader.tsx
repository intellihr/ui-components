import React, {useCallback, useState} from 'react'

import { Variables } from '../../../../common'
import {
  FontAwesomeIconButton,
  IFontAwesomeIconButtonProps
} from '../../../Buttons/FontAwesomeIconButton/FontAwesomeIconButton'
import { GridLayout } from '../../../Layouts/GridLayout'
import { Text } from '../../../Typographies'
import { LinkVariant } from '../../../Typographies/Text/subcomponents/Link'
import { TableRowVariant } from '../services/colors'
import {
  getSortButtonDirection,
  handleHeaderTitleClicked,
  handleSortButtonClicked
} from '../services/helper'
import {
  StyledHeaderCell,
  StyledHeaderCellWithHeaderSize,
  StyledHeaderLeftCell,
  StyledRow,
  StyledSortButton
} from '../services/style'
import {
  IColumnProps,
  IColumnSorts,
  Table,
  getActionsIconButtonGroup
} from '../Table'
import { TableCheckboxInput, TableCheckboxInputValue } from './TableCheckboxInput'

interface ITableHeaderProps <T> {
  columns: Array<IColumnProps<T>>
  selectedAll: TableCheckboxInputValue
  setSelectedAll: (value: TableCheckboxInputValue) => void
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
    alignment = Table.ColumnAlignment.Left
  } = column

  const [hasHeaderHovered, setHasHeaderHovered] = useState<boolean>(false)

  const setHeaderHoveredTrue = useCallback(() => hasSortEnabled && setHasHeaderHovered(true), [setHasHeaderHovered])
  const setHeaderHoveredFalse = useCallback(() => hasSortEnabled && setHasHeaderHovered(false), [setHasHeaderHovered])

  const sortButton = (
    <StyledSortButton alignment={alignment} sort={sort && getSortButtonDirection(hasHeaderHovered, sort[name])} onClick={handleSortButtonClicked(name, hasSortEnabled, sort, onSortChange)}>
      <FontAwesomeIconButton icon='arrow-up' type='solid' isHovered={hasHeaderHovered} isDisabled={!hasSortEnabled}/>
    </StyledSortButton>
  )

  const headerTitleLink = (
    <Text.Link
      variant={LinkVariant.Unstyled}
      onClick={handleHeaderTitleClicked(name, setHasHeaderHovered, hasSortEnabled, sort, onSortChange)}
    >
      {title}
    </Text.Link>
  )

  if (title) {
    return (
      <>
        {alignment === Table.ColumnAlignment.Right && sortButton}
        <span onMouseEnter={setHeaderHoveredTrue} onMouseLeave={setHeaderHoveredFalse}>
            <Text weight={Variables.FontWeight.fwSemiBold}>
              {hasSortEnabled ? headerTitleLink : title}
            </Text>
          </span>
        {alignment === Table.ColumnAlignment.Left && sortButton}
      </>
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
                flexHorizontalAlignment: (column.alignment && column.alignment === Table.ColumnAlignment.Right) ? GridLayout.HorizontalAlignment.Right : GridLayout.HorizontalAlignment.Left,
                size: (size === Table.ColumnSize.Shrink) ? 'shrink' : 'auto',
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
        alignment = Table.ColumnAlignment.Left
      } =  column

      const isLastColumn = index === columns.length - 1
      const isFirstColumn = !hasLeftAction && index === 0

      if (bulkActions && hasLeftAction) {
        return (
          <StyledHeaderCell key={name} size={size} alignment={alignment}>
            {
              index === 0 && getActionsIconButtonGroup(bulkActions, 'bulk')
            }
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
    selectedAll,
    setSelectedAll,
    bulkActions,
    hasBulkAction,
    isEmpty,
    hasSortEnabled
  } = props

  const setSelectedAllTableCheckboxInputValue = useCallback((value) => setSelectedAll(value), [setSelectedAll])

  return (
    <StyledRow variant={TableRowVariant.Neutral}>
      {
        (!hasLeftAction || isEmpty) ? getHeaderCells(hasSortEnabled, hasTableSwipeActions, columns, hasLeftAction, sort, onSortChange,hasBulkAction ? bulkActions : undefined ) : (
          <>
            <StyledHeaderLeftCell>
              <TableCheckboxInput
                name='selectAll'
                value={selectedAll}
                onChange={setSelectedAllTableCheckboxInputValue}
                hasStyledOnRowHovered={false}
              />
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

export {
  TableHeader
}
