import React, { useCallback } from 'react'

import { TooltipPopover } from '../../../Popovers/TooltipPopover'
import { TooltipPopoverVariant } from '../../../Popovers/TooltipPopover/TooltipPopover'
import { StyledDataCell } from '../services/style'
import { IColumnProps, IRowProps } from '../services/types'

interface ITableRowDataCellProps <T> {
  column: IColumnProps<T>
  row: IRowProps<T>
  hasProgressBar: boolean
  isLastColumn: boolean
  hasTableSwipeActions: boolean
  hasSwipeActions: boolean
  toggleSelected: (row: IRowProps<T>) => void
  setHasHovered: (value: boolean) => void
  handleSwipeAction?: () => void
  isFirstColumn: boolean
  children: JSX.Element
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

const TableRowDataCell = <T extends {}>(props: ITableRowDataCellProps<T>) => {
  const {
    hasProgressBar,
    isLastColumn,
    hasTableSwipeActions,
    hasSwipeActions,
    column,
    row,
    toggleSelected,
    setHasHovered,
    handleSwipeAction,
    isFirstColumn,
    children
  } = props

  const {
    isSelectable = false,
    onClick,
    id
  } = row

  const handleTableCellClicked = useCallback(() => {
    if (isSelectable) {
      toggleSelected(row)
    }

    if (onClick) {
      onClick(row.data)
    }

    if (handleSwipeAction) {
      handleSwipeAction()
    }

    setHasHovered(false)
  }, [isSelectable, toggleSelected, row, onClick, handleSwipeAction, setHasHovered])

  return (
    <StyledDataCell
      hasProgressBar={hasProgressBar}
      colSpan={(isLastColumn && hasTableSwipeActions && !hasSwipeActions) ? 2 : undefined}
      alignment={column.alignment}
      onClick={handleTableCellClicked}
      isLastColumn={isLastColumn}
      isFirstColumn={isFirstColumn}
    >
      {column.tooltipText ? <TableCellTooltip tooltipText={column.tooltipText(row.data)}>{children}</TableCellTooltip> : children}
    </StyledDataCell>
  )
}

export {
  TableRowDataCell
}
