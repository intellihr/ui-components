import { clamp } from 'lodash'
import React, { useEffect, useState } from 'react'
import { useDrag } from 'react-use-gesture'

import {Variables} from '../../../../common'
import {FontAwesomeIconButton} from '../../../Buttons/FontAwesomeIconButton'
import {IconButtonVariants} from '../../../Buttons/FontAwesomeIconButton/colors'
import { TooltipPopover } from '../../../Popovers/TooltipPopover'
import { TooltipPopoverVariant } from '../../../Popovers/TooltipPopover/TooltipPopover'
import { TableRowVariant } from '../services/colors'
import {
  handleHovered, handleRemoveButtonClick, handleTableCellClicked,
  handleTableRowCheckboxInputChange,
  parsedProgressToPercentage,
  usePrevious
} from '../services/helper'
import {
  StyledDataCell,
  StyledHeaderCell,
  StyledHeaderLeftCell,
  StyledProgressBar,
  StyledProgressBarCell,
  StyledProgressBarRow, StyledRow, StyledSortButton, StyledSwipeActions, StyledSwipeActionsCell
} from '../services/style'
import {ColumnAlignment, IColumnProps, IRowProps, ISelectedRows, getActionsIconButtonGroup} from '../Table'
import { TableCheckboxInput, TableCheckboxInputValue } from './TableCheckboxInput'

interface ITableRowProps {
  columns: IColumnProps[]
  row: IRowProps
  selectedRows: ISelectedRows
  setSelectedRows: (value: ISelectedRows) => void
  isMobile: boolean
  hasTableSwipeActions: boolean
  onRowRemove?: (data: any) => void
}

const TableCellTooltip: React.FC<{tooltipText: string}> = ({ tooltipText, children}) => {
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
    <TooltipPopover
      variant={TooltipPopoverVariant.Dark}
      toggleComponent={toggleComponent}
    >
      {tooltipText}
    </TooltipPopover>
  )
}

const getLeftCell = (isSelectable: boolean, isRemovable: boolean, isMobile: boolean, row: IRowProps, selectedRows: ISelectedRows, setSelectedRows: (value: ISelectedRows) => void, onRowRemove?: (data: any) => void ) => {
  if (isSelectable && !isRemovable && !isMobile) {
    const SelectedCheckboxInputValue = selectedRows[row.id] ? TableCheckboxInputValue.True : TableCheckboxInputValue.False
    return (
      <StyledHeaderLeftCell>
        <TableCheckboxInput
          name={row.id}
          value={SelectedCheckboxInputValue}
          onChange={handleTableRowCheckboxInputChange(row.id, selectedRows, setSelectedRows)}
        />
      </StyledHeaderLeftCell>
    )
  }

  if (isRemovable && !isMobile) {
    return (
        <StyledHeaderLeftCell>
          <FontAwesomeIconButton
            icon='times'
            type='regular'
            variant={row.variant === TableRowVariant.Red ? IconButtonVariants.Red : IconButtonVariants.Neutral}
            onClick={handleRemoveButtonClick(row.data, onRowRemove)}
            tooltipText='Delete'
          />
        </StyledHeaderLeftCell>
      )
  }

  return null
}

const getDataCells = ( hasSwipeActions: boolean, hasTableSwipeActions: boolean, isSelected: boolean, columns: IColumnProps[], row: IRowProps, selectedRows: ISelectedRows, setSelectedRows: (value: ISelectedRows) => void, setHasHovered: (value: boolean) => void, isMobile: boolean, hasHoverButton: boolean, handleSwipeActionClosed?: () => void) => columns.map((column, index) => {
  const {
    isSelectable = false,
    onClick,
    contentOverride,
    data,
    id
  } = row

  if (column.hoverActions && hasHoverButton && !contentOverride && !isSelected) {
    return (
      <StyledDataCell
        key={column.name}
        alignment={column.alignment}
        isLastColumn={index === columns.length - 1}
        isFirstColumn={isMobile && index === 0}
      >
        {getActionsIconButtonGroup(column.hoverActions(data), id, column.alignment)}
      </StyledDataCell>
    )
  }

  const content = contentOverride ? contentOverride(data)[index] : column.content(data)
  const isLastColumn = index === columns.length - 1

  return (
    <StyledDataCell
      key={column.name}
      colSpan={(isLastColumn && hasTableSwipeActions && !hasSwipeActions) ? 2 : undefined}
      alignment={column.alignment}
      onClick={handleTableCellClicked(row.id, row, selectedRows, setSelectedRows, setHasHovered, handleSwipeActionClosed, isSelectable, onClick)}
      isLastColumn={isLastColumn}
      isFirstColumn={isMobile && index === 0}
    >
      {column.tooltipText ? <TableCellTooltip tooltipText={column.tooltipText(row.data)}>{content}</TableCellTooltip> : content}
    </StyledDataCell>
  )
})

const TableRow: React.FC<ITableRowProps> = ({onRowRemove, columns, row, selectedRows, setSelectedRows, isMobile = false, hasTableSwipeActions}) => {
  const {
    isSelectable = false,
    isRemovable = false,
    variant = TableRowVariant.Neutral,
    progress,
    onClick,
    swipeActions
  } = row

  const [movement, setMovement] = useState<number>(0)
  const [previousProgress, setPreviousProgress] = useState<number>(0)
  const [hasHovered, setHasHovered] = useState<boolean>(false)

  const swipeContentWidth = swipeActions ? swipeActions.length * Variables.Spacing.sXLarge + (swipeActions.length - 1) * Variables.Spacing.sXSmall + 2 * Variables.Spacing.sMedium : 0

  const blind = useDrag((props: any) => {
    if (isMobile && swipeActions && props._movement[0] <= movement && props._movement[0] !== 0) {
      if (Math.floor(props._movement[0]) !== movement) {
        setMovement(Math.min(Math.trunc(Math.abs(props._movement[0])), swipeContentWidth))
      }

      if (!props.dragging && props._movement[0] < 0) {
        setMovement((Math.abs(props._movement[0]) < (swipeContentWidth / 2)) ? 0 : swipeContentWidth)
      }
    }
  })

  const previousRowProps = usePrevious<IRowProps>(row)
  const previousProgressFromPreviousRowProps = previousRowProps ? (previousRowProps.progress ? previousRowProps.progress : 0) : 0
  const isSelected = !isMobile && isSelectable ? selectedRows[row.id] : false
  const handleSwipeActionClosed = () => (isMobile && movement !== 0) ? setMovement(0) : undefined

  useEffect(() => {
    if (progress && previousProgressFromPreviousRowProps !== (progress ? progress : 0)) {
      setPreviousProgress(previousProgressFromPreviousRowProps)
    }
  }, [progress])

  const hasSwipeActions = isMobile  && !!swipeActions && swipeActions.length > 0

  return (
    <>
      <StyledRow
        {...blind()}
        movement={movement}
        variant={variant}
        isHoverable={!isMobile && (isSelectable || !!onClick)}
        isSelected={isSelected}
        hasProgressBar={progress}
        onMouseEnter={handleHovered(true, setHasHovered)}
        onMouseLeave={handleHovered(false, setHasHovered)}
      >
        {getLeftCell(isSelectable, isRemovable, isMobile, row, selectedRows, setSelectedRows, onRowRemove)}
        {getDataCells(hasSwipeActions, hasTableSwipeActions, isSelected, columns, row, selectedRows, setSelectedRows, setHasHovered, isMobile, hasHovered, handleSwipeActionClosed)}
        {
          hasSwipeActions && (
            <StyledSwipeActionsCell>
              <StyledSwipeActions width={movement}>
                {getActionsIconButtonGroup(swipeActions)}
              </StyledSwipeActions>
            </StyledSwipeActionsCell>
          )
        }
      </StyledRow>
      {(progress) && (
        <StyledProgressBarRow>
          <StyledProgressBarCell colSpan={isMobile ? columns.length : columns.length + 1}>
            <StyledProgressBar previousPercentage={parsedProgressToPercentage(previousProgress)} percentage={parsedProgressToPercentage(progress)}/>
          </StyledProgressBarCell>
        </StyledProgressBarRow>
      )}
    </>
  )
}

export {
  TableRow
}
