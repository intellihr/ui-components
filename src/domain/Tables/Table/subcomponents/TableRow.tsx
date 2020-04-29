import { isEqual } from 'lodash'
import React, { useCallback, useEffect, useState } from 'react'
import {useDrag} from 'react-use-gesture'

import { Variables } from '../../../../common'
import { FontAwesomeIconButton } from '../../../Buttons/FontAwesomeIconButton'
import { IconButtonVariants } from '../../../Buttons/FontAwesomeIconButton/colors'
import { TableRowVariant } from '../services/colors'
import {
  getIconButtonWidth,
  handleRemoveButtonClick,
  parsedProgressToPercentage,
  usePrevious
} from '../services/helper'
import {
  StyledDataCell,
  StyledHeaderLeftCell,
  StyledHeaderLeftCellContent,
  StyledProgressBar,
  StyledProgressBarCell,
  StyledProgressBarRow,
  StyledRow,
  StyledSwipeActions,
  StyledSwipeActionsButtonWrapper,
  StyledSwipeActionsCell
} from '../services/style'
import {
  IColumnProps,
  IRowProps,
  InteractionType
} from '../services/types'
import { getActionsIconButtonGroup } from './ActionIconButtonGroup'
import { TableCheckboxInput, TableCheckboxInputValue } from './TableCheckboxInput'
import { TableRowDataCell } from './TableRowDataCell'

interface ITableRowProps <T> {
  columns: Array<IColumnProps<T>>
  row: IRowProps<T>
  isSelected: boolean
  toggleSelected: (row: IRowProps<T>) => void
  interactionType: InteractionType
  hasLeftAction: boolean
  hasTableSwipeActions: boolean
  onRowRemove?: (removedRowData: T) => void
  expandedSwipeCellRow: string | null
  setExpandedSwipeCellRow: (value: string | null) => void
  lastRow: boolean
}

interface IUseDragProps {
  /* The movement in pixel [x-axis, y-axis]*/
  _movement: [number, number]
  /* If yes, the drag action is ongoing*/
  dragging: boolean
}

interface IGetLeftCell <T extends {}> {
  isSelectable: boolean
  isRemovable: boolean
  hasLeftAction: boolean
  row: IRowProps<T>
  isSelected: boolean
  toggleSelected: (row: IRowProps<T>) => void
  onRowRemove?: (data: T) => void
}

const getLeftCell = <T extends {}>({ isSelectable, isSelected, isRemovable, hasLeftAction, row, onRowRemove, toggleSelected }: IGetLeftCell<T>) => {
  if (!isRemovable && hasLeftAction) {
    const selectedCheckboxInputValue = isSelected ? TableCheckboxInputValue.True : TableCheckboxInputValue.False
    return (
      <StyledHeaderLeftCell>
        <StyledHeaderLeftCellContent>
          {
            isSelectable && (
              <TableCheckboxInput
                name={row.id}
                value={selectedCheckboxInputValue}
                // tslint:disable-next-line:jsx-no-lambda
                onChange={() => toggleSelected(row)}
              />
            )
          }
        </StyledHeaderLeftCellContent>
      </StyledHeaderLeftCell>
    )
  }

  if (isRemovable && hasLeftAction) {
    return (
        <StyledHeaderLeftCell>
          <StyledHeaderLeftCellContent>
            <FontAwesomeIconButton
              icon='times'
              type='regular'
              variant={row.variant === TableRowVariant.Error ? IconButtonVariants.Red : IconButtonVariants.Neutral}
              onClick={handleRemoveButtonClick(row.data, onRowRemove)}
              tooltipText='Delete'
            />
          </StyledHeaderLeftCellContent>
        </StyledHeaderLeftCell>
      )
  }

  return null
}

interface IGetDataCells <T extends {}> {
  hasProgressBar: boolean
  hasSwipeActions: boolean
  hasTableSwipeActions: boolean
  isSelected: boolean
  hasLeftAction: boolean
  hasHoverButton: boolean
  handleSwipeAction?: () => void
  toggleSelected: (row: IRowProps<T>) => void
  setHasHovered: (value: boolean) => void
  columns: Array<IColumnProps<T>>
  row: IRowProps<T>
}

const getDataCells = <T extends {}>(props: IGetDataCells<T>) => {
  const {
    hasProgressBar,
    hasSwipeActions,
    hasTableSwipeActions,
    isSelected,
    hasLeftAction,
    hasHoverButton,
    handleSwipeAction,
    toggleSelected,
    setHasHovered,
    columns,
    row,
    row: {
      isSelectable = false,
      contentOverride,
      data,
      id,
      actions,
      isRemovable
    }
  } = props

  const contentOverrideChildren = (contentOverride ? contentOverride(data) : null)

  if (contentOverrideChildren && !Array.isArray(contentOverrideChildren)) {
    return (
      <StyledDataCell
        hasProgressBar={hasProgressBar}
        colSpan={hasSwipeActions ? columns.length : columns.length + 1}
        isFirstColumn={!hasLeftAction}
        isLastColumn
      >
        {contentOverrideChildren}
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

      return (
        <TableRowDataCell<T>
          key={`${column.name}-${id}`}
          hasProgressBar={hasProgressBar}
          isLastColumn={index === columns.length - 1}
          hasTableSwipeActions={hasTableSwipeActions}
          hasSwipeActions={hasSwipeActions}
          column={column}
          row={row}
          toggleSelected={toggleSelected}
          setHasHovered={setHasHovered}
          handleSwipeAction={handleSwipeAction}
          isFirstColumn={!hasLeftAction && index === 0}
        >
          {contentOverrideChildren ? contentOverrideChildren[index] : column.content(data)}
        </TableRowDataCell>
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
    isSelected: propsIsSelected,
    toggleSelected,
    hasTableSwipeActions,
    expandedSwipeCellRow,
    setExpandedSwipeCellRow,
    lastRow
  } = props

  const {
    id,
    isSelectable = false,
    isRemovable = false,
    variant = TableRowVariant.Neutral,
    progress,
    onClick,
    actions
  } = row

  const previousProgress = usePrevious<number>(row.progress || 0)
  const [movement, setMovement] = useState<number>(0)
  const [hasHovered, setHasHovered] = useState<boolean>(false)

  const isSelected = isSelectable && propsIsSelected && hasLeftAction
  const setHoveredTrue = useCallback(() => setHasHovered(true), [setHasHovered])
  const setHoveredFalse = useCallback(() => setHasHovered(false), [setHasHovered])
  const hasSwipeActions = interactionType === InteractionType.Swipe && !!actions && actions.length > 0
  const hasHoverActions = interactionType === InteractionType.Hover && !!actions && actions.length > 0
  const hasHoverButton = (!isSelected && hasHoverActions) ? hasHovered : false

  const swipeContentWidth = hasSwipeActions && actions ? getIconButtonWidth(actions) + (actions.length - 1) * Variables.Spacing.sXSmall + 2 * Variables.Spacing.sMedium : 0

  const onDragBlind = useDrag((useDragProps: IUseDragProps) => {
    if (hasSwipeActions && useDragProps._movement[0] !== 0) {
      // new position = oldposition - movement, clamped by [0, maxwidth]
      let newMovement = Math.floor(movement - useDragProps._movement[0])
      newMovement = Math.max(Math.min(newMovement, swipeContentWidth), 0)

      // When dragging stops, snap to one of the two ends
      if (!useDragProps.dragging) {
        newMovement = (newMovement < (swipeContentWidth / 2)) ? 0 : swipeContentWidth
      }

      if (newMovement !== movement) {
        setMovement(newMovement)

        if (newMovement > 0) {
          setExpandedSwipeCellRow(id)
        } else if (newMovement === 0 && expandedSwipeCellRow !== id) {
          setExpandedSwipeCellRow(null)
        }
      }
    }
  })

  useEffect(() => {
    if (expandedSwipeCellRow !== id) {
      setMovement(0)
    }
  }, [expandedSwipeCellRow])

  const handleSwipeAction = () => {
    if (hasSwipeActions) {
      if (movement !== 0) {
        setMovement(0)
        if (expandedSwipeCellRow !== id) {
          setExpandedSwipeCellRow(null)
        }
      } else {
        setMovement(swipeContentWidth)
        setExpandedSwipeCellRow(id)
      }
    }
  }

  return (
    <>
      <StyledRow
        {...onDragBlind()}
        movement={movement}
        variant={variant}
        isHoverable={interactionType === InteractionType.Hover  && (isSelectable || !!onClick)}
        isSelected={isSelected}
        hasProgressBar={progress}
        onMouseEnter={setHoveredTrue}
        onMouseLeave={setHoveredFalse}
        hideBottomBorder={!!progress || lastRow}
      >
        {hasLeftAction && getLeftCell<T>({ isSelectable, isRemovable, hasLeftAction, row, isSelected, toggleSelected, onRowRemove })}
        {getDataCells<T>({
          hasProgressBar: !!progress,
          hasSwipeActions,
          hasTableSwipeActions,
          isSelected,
          toggleSelected,
          columns,
          row,
          setHasHovered,
          hasLeftAction,
          hasHoverButton,
          handleSwipeAction
        })}
        {
          hasSwipeActions && (
            <StyledSwipeActionsCell>
              <StyledSwipeActions width={movement} hasProgressBar={!!progress}>
                <StyledSwipeActionsButtonWrapper isFullWidth={movement === swipeContentWidth}>
                  {getActionsIconButtonGroup(actions)}
                </StyledSwipeActionsButtonWrapper>
              </StyledSwipeActions>
            </StyledSwipeActionsCell>
          )
        }
      </StyledRow>
      {(progress) && (
        <StyledProgressBarRow>
          <StyledProgressBarCell colSpan={!hasLeftAction ? columns.length : columns.length + 1}>
            <StyledProgressBar
              previousPercentage={parsedProgressToPercentage(previousProgress)}
              percentage={parsedProgressToPercentage(progress)}
            />
          </StyledProgressBarCell>
        </StyledProgressBarRow>
      )}
    </>
  )
}

const MemoTableRow: typeof TableRow = React.memo(TableRow,
  (prevProps, nextProps) => (
    prevProps.columns === nextProps.columns &&
    prevProps.row.id === nextProps.row.id &&
    prevProps.row.isSelectable === nextProps.row.isSelectable &&
    prevProps.row.isRemovable === nextProps.row.isRemovable &&
    prevProps.row.tooltipText === nextProps.row.tooltipText &&
    prevProps.row.progress === nextProps.row.progress &&
    prevProps.row.variant === nextProps.row.variant &&
    prevProps.row.contentOverride === nextProps.row.contentOverride &&
    prevProps.row.onClick === nextProps.row.onClick &&
    prevProps.row.actions === nextProps.row.actions &&
    isEqual(prevProps.row.data, nextProps.row.data) &&
    prevProps.isSelected === nextProps.isSelected &&
    prevProps.toggleSelected === nextProps.toggleSelected &&
    prevProps.interactionType === nextProps.interactionType &&
    prevProps.hasLeftAction === nextProps.hasLeftAction &&
    prevProps.hasTableSwipeActions === nextProps.hasTableSwipeActions &&
    prevProps.onRowRemove === nextProps.onRowRemove &&
    prevProps.expandedSwipeCellRow === nextProps.expandedSwipeCellRow &&
    prevProps.setExpandedSwipeCellRow === nextProps.setExpandedSwipeCellRow &&
    prevProps.lastRow === nextProps.lastRow
  )
) as any

export {
  MemoTableRow as TableRow
}
