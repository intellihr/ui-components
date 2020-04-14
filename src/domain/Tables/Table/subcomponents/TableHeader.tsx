import React, {useState} from 'react'

import {Variables} from '../../../../common'
import {
  FontAwesomeIconButton,
  IFontAwesomeIconButtonProps
} from '../../../Buttons/FontAwesomeIconButton/FontAwesomeIconButton'
import {GridLayout} from '../../../Layouts/GridLayout'
import {Text} from '../../../Typographies'
import {LinkVariant} from '../../../Typographies/Text/subcomponents/Link'
import {TableRowVariant} from '../services/colors'
import {
  getSortButtonDirection,
  handleHeaderTitleClicked,
  handleHovered,
  handleSortButtonClicked,
  handleTableHeaderCheckboxInputChange
} from '../services/helper'
import {
  StyledHeaderCell,
  StyledHeaderCellWithHeaderSize,
  StyledHeaderLeftCell,
  StyledRow,
  StyledSortButton
} from '../services/style'
import {
  ColumnAlignment,
  ColumnSize,
  IColumnProps,
  IColumnSorts,
  getActionsIconButtonGroup
} from '../Table'
import {TableCheckboxInput, TableCheckboxInputValue} from './TableCheckboxInput'

interface ITableHeaderProps {
  columns: IColumnProps[]
  selectedAll: TableCheckboxInputValue
  setSelectedAll: (value: TableCheckboxInputValue) => void
  isMobile: boolean
  bulkActions?: IFontAwesomeIconButtonProps[]
  hasBulkAction: boolean
  hasTableSwipeActions: boolean
  isEmpty: boolean
  sort: IColumnSorts
  onSortChange: (sort: IColumnSorts) => void
}

interface ITableHeaderCellContentProps {
  column: IColumnProps
  sort: IColumnSorts
  onSortChange: (sort: IColumnSorts) => void
  isLastColumn: boolean
  isFirstColumn: boolean
  hasTableSwipeActions: boolean
}

const TableHeaderCellContent: React.FC<ITableHeaderCellContentProps> = ({ column, sort, hasTableSwipeActions, onSortChange, isFirstColumn, isLastColumn }) => {
  const {
    name,
    title,
    alignment = ColumnAlignment.Left
  } =  column

  const [hasHeaderHovered, setHasHeaderHovered] = useState<boolean>(false)

  const sortButton = (
    <StyledSortButton alignment={alignment} sort={getSortButtonDirection(hasHeaderHovered, sort[name])} onClick={handleSortButtonClicked(name, sort, onSortChange)}>
      <FontAwesomeIconButton icon='arrow-down' type='solid' isHovered={hasHeaderHovered}/>
    </StyledSortButton>
  )

  if (title) {
    return (
      <>
        {alignment === ColumnAlignment.Right && sortButton}
        <span onMouseEnter={handleHovered(true, setHasHeaderHovered)} onMouseLeave={handleHovered(false, setHasHeaderHovered)}>
            <Text weight={Variables.FontWeight.fwSemiBold}>
              <Text.Link
                variant={LinkVariant.Unstyled}
                onClick={handleHeaderTitleClicked(name, sort, onSortChange, setHasHeaderHovered)}
              >
                {title}
              </Text.Link>
            </Text>
          </span>
        {alignment === ColumnAlignment.Left && sortButton}
      </>
    )
  }

  return null
}

const getHeaderCells = (
  hasTableSwipeActions: boolean,
  columns: IColumnProps[],
  sort: IColumnSorts,
  onSortChange: (sort: IColumnSorts) => void,
  bulkActions?: IFontAwesomeIconButtonProps[],
  isMobile?: boolean
) => {
  const hasHeaderSize = columns.some((column) => !!column.headerSize)

  if (hasHeaderSize) {
    return (
      <StyledHeaderCellWithHeaderSize colSpan={isMobile ? columns.length : columns.length + 1}>
        <GridLayout
          cells={
            columns.map((column, index) => {
              const size = column.headerSize || column.size

              return ({
                displayType: 'flex',
                flexHorizontalAlignment: (column.alignment && column.alignment === ColumnAlignment.Right) ? GridLayout.HorizontalAlignment.Right : GridLayout.HorizontalAlignment.Left,
                size: (size === ColumnSize.Shrink) ? 'shrink' : 'auto',
                content: <div><TableHeaderCellContent column={column} sort={sort} onSortChange={onSortChange} isLastColumn={index === columns.length - 1} isFirstColumn={!!isMobile && index === 0} hasTableSwipeActions={hasTableSwipeActions}/></div>
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
      const isFirstColumn = !!isMobile && index === 0

      if (bulkActions && !isMobile) {
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
          <TableHeaderCellContent column={column} sort={sort} onSortChange={onSortChange} isLastColumn={isLastColumn}  isFirstColumn={isFirstColumn} hasTableSwipeActions={hasTableSwipeActions}/>
        </StyledHeaderCell>
      )})
  )
}

const TableHeader: React.FC<ITableHeaderProps> = ({ columns, sort, onSortChange, hasTableSwipeActions, selectedAll, setSelectedAll, isMobile, bulkActions, hasBulkAction, isEmpty}) => {
  return (
    <StyledRow variant={TableRowVariant.Neutral}>
      {
        (isMobile || isEmpty) ? getHeaderCells(hasTableSwipeActions, columns, sort, onSortChange, hasBulkAction ? bulkActions : undefined ) : (
          <>
            <StyledHeaderLeftCell>
              <TableCheckboxInput
                name='selectAll'
                value={selectedAll}
                onChange={handleTableHeaderCheckboxInputChange(setSelectedAll)}
              />
            </StyledHeaderLeftCell>
            {
              getHeaderCells(hasTableSwipeActions, columns, sort, onSortChange, hasBulkAction ? bulkActions : undefined )
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
