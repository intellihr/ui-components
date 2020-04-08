import React, {useState} from 'react'

import {Variables} from '../../../../common'
import {Text} from '../../../Typographies'
import {RowVariant} from '../services/colors'
import {StyledHeaderCell, StyledHeaderLeftCell, StyledRow, StyledSortButton} from '../services/style'
import {TableCheckboxInput, TableCheckboxInputValue} from './TableCheckboxInput'
import {
  FontAwesomeIconButton,
  IFontAwesomeIconButtonProps
} from '../../../Buttons/FontAwesomeIconButton/FontAwesomeIconButton'
import {ColumnAlignment, ColumnSortDirection, getActionsIconButtonGroup, IColumnProps, IColumnSorts} from '../Table'
import {LinkVariant} from '../../../Typographies/Text/subcomponents/Link'
import {handleHovered} from '../services/helper'

interface ITableHeaderProps {
  columns: IColumnProps[]
  selectedAll: TableCheckboxInputValue
  setSelectedAll: (value: TableCheckboxInputValue) => void
  isMobile: boolean
  bulkActions?: IFontAwesomeIconButtonProps[]
  hasBulkAction: boolean
  isEmpty: boolean
  sort: IColumnSorts
  onSortChange: (sort: IColumnSorts) => void
}

interface ITableHeaderCellProps {
  column: IColumnProps
  sort: IColumnSorts
  onSortChange: (sort: IColumnSorts) => void
  isLastColumn: boolean
  isFirstColumn: boolean
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

const TableHeaderCell: React.FC<ITableHeaderCellProps> = ({ column, sort, onSortChange, isFirstColumn, isLastColumn }) => {
  const {
    name,
    size,
    title,
    alignment = ColumnAlignment.Left
  } =  column

  const [hasHeaderHovered, setHasHeaderHovered] = useState<boolean>(false)

  const sortButton = (
    <StyledSortButton alignment={alignment} sort={getSortButtonDirection(hasHeaderHovered, sort[name])} onClick={handleSortButtonClicked(name, sort, onSortChange)}>
      <FontAwesomeIconButton icon='arrow-down' type='solid' isHovered={hasHeaderHovered}/>
    </StyledSortButton>
  )

  return (
    <StyledHeaderCell size={size} alignment={alignment} isLastColumn={isLastColumn} isFirstColumn={isFirstColumn}>
      {
        title && <>
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
      }
    </StyledHeaderCell>
  )
}

const getHeaderCells = (columns: IColumnProps[], sort: IColumnSorts, onSortChange: (sort: IColumnSorts) => void, bulkActions?: IFontAwesomeIconButtonProps[], isMobile?: boolean) => columns.map((column, index) => {
  const {
    name,
    size,
    alignment = ColumnAlignment.Left
  } =  column

  if (bulkActions && !isMobile) {
    return (
      <StyledHeaderCell key={name} size={size} alignment={alignment}>
        {
          index === 0 && getActionsIconButtonGroup(bulkActions, 'bulk')
        }
      </StyledHeaderCell>
    )
  }

  return <TableHeaderCell key={name} column={column} sort={sort} onSortChange={onSortChange} isLastColumn={index === columns.length - 1}  isFirstColumn={!!isMobile && index === 0}/>
})

const TableHeader: React.FC<ITableHeaderProps> = ({ columns, sort, onSortChange, selectedAll, setSelectedAll, isMobile, bulkActions, hasBulkAction, isEmpty}) => {
  return (
    <StyledRow variant={RowVariant.Neutral}>
      {
        (isMobile || isEmpty) ? getHeaderCells(columns, sort, onSortChange, hasBulkAction ? bulkActions : undefined ) : (
          <>
            <StyledHeaderLeftCell>
              <TableCheckboxInput
                name='selectAll'
                value={selectedAll}
                onChange={handleTableHeaderCheckboxInputChange(setSelectedAll)}
              />
            </StyledHeaderLeftCell>
            {
              getHeaderCells(columns, sort, onSortChange, hasBulkAction ? bulkActions : undefined )
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
