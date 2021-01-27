import React, { useCallback, useMemo } from 'react'

import { TooltipPopover } from '../../../Popovers'
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
      width={300}
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
    onClick
  } = row

  const handleTableCellClicked = useCallback(() => {
    if (!onClick && isSelectable) {
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

  const tooltipText = column.tooltipText?.(row.data)

  return (
    <StyledDataCell
      clickable={!!onClick}
      size={column.size}
      hasProgressBar={hasProgressBar}
      colSpan={(isLastColumn && hasTableSwipeActions && !hasSwipeActions) ? 2 : undefined}
      alignment={column.alignment}
      onClick={handleTableCellClicked}
      isLastColumn={isLastColumn}
      isFirstColumn={isFirstColumn}
    >
      {tooltipText ? <TableCellTooltip tooltipText={tooltipText}>{children}</TableCellTooltip> : children}
    </StyledDataCell>
  )
}

export {
  TableRowDataCell
}
