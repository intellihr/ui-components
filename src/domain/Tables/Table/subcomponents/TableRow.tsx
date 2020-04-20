import React, { useCallback, useEffect, useState } from 'react'
import { useDrag } from 'react-use-gesture'

import { Variables } from '../../../../common'
import { FontAwesomeIconButton } from '../../../Buttons/FontAwesomeIconButton'
import { IconButtonVariants } from '../../../Buttons/FontAwesomeIconButton/colors'
import { TooltipPopover } from '../../../Popovers/TooltipPopover'
import { TooltipPopoverVariant } from '../../../Popovers/TooltipPopover/TooltipPopover'
import { TableRowVariant } from '../services/colors'
import {
  handleRemoveButtonClick,
  handleTableCellClicked,
  handleTableRowCheckboxInputChange,
  parsedProgressToPercentage,
  usePrevious
} from '../services/helper'
import {
  StyledDataCell,
  StyledHeaderLeftCell,
  StyledProgressBar,
  StyledProgressBarCell,
  StyledProgressBarRow,
  StyledRow,
  StyledSwipeActions,
  StyledSwipeActionsCell
} from '../services/style'
import { IColumnProps, IRowProps, ISelectedRows, Table, getActionsIconButtonGroup } from '../Table'
import { TableCheckboxInput, TableCheckboxInputValue } from './TableCheckboxInput'

interface ITableRowProps <T> {
  columns: Array<IColumnProps<T>>
  row: IRowProps<T>
  selectedRows: ISelectedRows
  setSelectedRows: (value: ISelectedRows) => void
  interactionType: Table.InteractionType
  hasLeftAction: boolean
  hasTableSwipeActions: boolean
  onRowRemove?: (removedRowData: T) => void
}

interface IUseDragProps {
  /* The movement in pixel [x-axis, y-axis]*/
  _movement: number[]
  /* If yes, the drag action is ongoing*/
  dragging: boolean
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

const getLeftCell = <T extends {}>(isSelectable: boolean, isRemovable: boolean, hasLeftAction: boolean, row: IRowProps<T>, selectedRows: ISelectedRows, setSelectedRows: (value: ISelectedRows) => void, onRowRemove?: (data: T) => void ) => {
  if (!isRemovable && hasLeftAction) {
    const SelectedCheckboxInputValue = selectedRows[row.id] ? TableCheckboxInputValue.True : TableCheckboxInputValue.False
    return (
      <StyledHeaderLeftCell>
        {
          isSelectable && (
            <TableCheckboxInput
              name={row.id}
              value={SelectedCheckboxInputValue}
              onChange={handleTableRowCheckboxInputChange(row.id, selectedRows, setSelectedRows)}
            />
          )
        }
      </StyledHeaderLeftCell>
    )
  }

  if (isRemovable && hasLeftAction) {
    return (
        <StyledHeaderLeftCell>
          <FontAwesomeIconButton
            icon='times'
            type='regular'
            variant={row.variant === TableRowVariant.Error ? IconButtonVariants.Red : IconButtonVariants.Neutral}
            onClick={handleRemoveButtonClick(row.data, onRowRemove)}
            tooltipText='Delete'
          />
        </StyledHeaderLeftCell>
      )
  }

  return null
}

const getDataCells = <T extends {}>(
  hasProgressBar: boolean,
  hasSwipeActions: boolean,
  hasTableSwipeActions: boolean,
  isSelected: boolean,
  columns: Array<IColumnProps<T>>,
  row: IRowProps<T>,
  selectedRows: ISelectedRows,
  setSelectedRows: (value: ISelectedRows) => void,
  setHasHovered: (value: boolean) => void,
  hasLeftAction: boolean,
  hasHoverButton: boolean,
  handleSwipeActionClosed?: () => void
) => {
  const {
    isSelectable = false,
    onClick,
    contentOverride,
    data,
    id,
    actions,
    isRemovable
  } = row

  if (contentOverride && !Array.isArray(contentOverride(data))) {
    return (
      <StyledDataCell
        hasProgressBar={hasProgressBar}
        colSpan={hasSwipeActions ? columns.length : columns.length + 1}
        isFirstColumn={!hasLeftAction}
        isLastColumn
      >
        {contentOverride(data)}
      </StyledDataCell>
    )
  }

  return (
    columns.map((column, index) => {

      if (hasHoverButton && !contentOverride && !isSelected && index === columns.length - 1 && !isRemovable && isSelectable) {
        return (
          <StyledDataCell
            key={column.name}
            hasProgressBar={hasProgressBar}
            alignment={column.alignment}
            isLastColumn
            isFirstColumn={!hasLeftAction && index === 0}
          >
            {getActionsIconButtonGroup(actions, id)}
          </StyledDataCell>
        )
      }

      const cellContentOverride = (contentOverride && Array.isArray(contentOverride(data))) ? contentOverride(data) as JSX.Element[] : undefined
      const content = cellContentOverride ? cellContentOverride[index] : column.content(data)
      const isLastColumn = index === columns.length - 1

      return (
        <StyledDataCell
          key={column.name}
          hasProgressBar={hasProgressBar}
          colSpan={(isLastColumn && hasTableSwipeActions && !hasSwipeActions) ? 2 : undefined}
          alignment={column.alignment}
          onClick={handleTableCellClicked(row.id, row, selectedRows, setSelectedRows, setHasHovered, handleSwipeActionClosed, isSelectable, onClick)}
          isLastColumn={isLastColumn}
          isFirstColumn={!hasLeftAction && index === 0}
        >
          {column.tooltipText ? <TableCellTooltip tooltipText={column.tooltipText(row.data)}>{content}</TableCellTooltip> : content}
        </StyledDataCell>
      )
    })
  )
}

const TableRow = <T extends {}>(props: ITableRowProps<T>) => {
  const {
    hasLeftAction,
    interactionType,
    onRowRemove,
    columns,
    row,
    selectedRows,
    setSelectedRows,
    hasTableSwipeActions
  } = props

  const {
    isSelectable = false,
    isRemovable = false,
    variant = TableRowVariant.Neutral,
    progress,
    onClick,
    actions
  } = row

  const [movement, setMovement] = useState<number>(0)
  const [previousProgress, setPreviousProgress] = useState<number>(0)
  const [hasHovered, setHasHovered] = useState<boolean>(false)

  const setHoveredTrue = useCallback(() => setHasHovered(true), [setHasHovered])
  const setHoveredFalse = useCallback(() => setHasHovered(false), [setHasHovered])
  const hasSwipeActions = interactionType === Table.InteractionType.Swipe && !!actions && actions.length > 0
  const hasHoverActions = interactionType === Table.InteractionType.Hover && !!actions && actions.length > 0

  const swipeContentWidth = hasSwipeActions && actions ? actions.length * Variables.Spacing.sXLarge + (actions.length - 1) * Variables.Spacing.sXSmall + 2 * Variables.Spacing.sMedium : 0

  const onDragBlind = useDrag((useDragProps: IUseDragProps) => {
    if (hasSwipeActions && useDragProps._movement[0] <= movement && useDragProps._movement[0] !== 0) {
      if (Math.floor(useDragProps._movement[0]) !== movement) {
        setMovement(Math.min(Math.trunc(Math.abs(useDragProps._movement[0])), swipeContentWidth))
      }

      if (!useDragProps.dragging && useDragProps._movement[0] < 0) {
        setMovement((Math.abs(useDragProps._movement[0]) < (swipeContentWidth / 2)) ? 0 : swipeContentWidth)
      }
    }
  })

  const previousRowProps = usePrevious<IRowProps<T>>(row)
  const previousProgressFromPreviousRowProps = previousRowProps ? (previousRowProps.progress ? previousRowProps.progress : 0) : 0
  const isSelected = hasLeftAction && isSelectable ? selectedRows[row.id] : false
  const handleSwipeActionClosed = () => (hasSwipeActions  && movement !== 0) ? setMovement(0) : undefined

  useEffect(() => {
    if (progress && previousProgressFromPreviousRowProps !== (progress ? progress : 0)) {
      setPreviousProgress(previousProgressFromPreviousRowProps)
    }
  }, [progress])

  return (
    <>
      <StyledRow
        {...onDragBlind()}
        movement={movement}
        variant={variant}
        isHoverable={interactionType === Table.InteractionType.Hover  && (isSelectable || !!onClick)}
        isSelected={isSelected}
        hasProgressBar={progress}
        onMouseEnter={setHoveredTrue}
        onMouseLeave={setHoveredFalse}
      >
        {hasLeftAction && getLeftCell<T>(isSelectable, isRemovable, hasLeftAction, row, selectedRows, setSelectedRows, onRowRemove)}
        {getDataCells<T>(!!progress, hasSwipeActions, hasTableSwipeActions, isSelected, columns, row, selectedRows, setSelectedRows, setHasHovered, hasLeftAction, hasHoverActions ? hasHovered : false, handleSwipeActionClosed)}
        {
          hasSwipeActions && (
            <StyledSwipeActionsCell>
              <StyledSwipeActions width={movement}>
                {getActionsIconButtonGroup(actions)}
              </StyledSwipeActions>
            </StyledSwipeActionsCell>
          )
        }
      </StyledRow>
      {(progress) && (
        <StyledProgressBarRow>
          <StyledProgressBarCell colSpan={!hasLeftAction ? columns.length : columns.length + 1}>
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
