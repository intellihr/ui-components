import { clamp } from 'lodash'
import React, { useEffect, useState } from 'react'
import { useDrag } from 'react-use-gesture'

import {Variables} from '../../../../common'
import { TooltipPopover } from '../../../Popovers/TooltipPopover'
import { TooltipPopoverVariant } from '../../../Popovers/TooltipPopover/TooltipPopover'
import { RowVariant } from '../services/colors'
import {handleHovered, usePrevious} from '../services/helper'
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
  onProgressEnd?: (row: any) => void
}

const handleTableCheckboxInputChange = (id: string, selectedRows: ISelectedRows, setSelectedRows: (value: ISelectedRows) => void) => (value: TableCheckboxInputValue) => {
  const newValue = {
    ...selectedRows,
    [id]: value === TableCheckboxInputValue.True
  }
  setSelectedRows(newValue)
}

const handleTableCellClicked = (id: string, row: IRowProps, selectedRows: ISelectedRows, setSelectedRows: (value: ISelectedRows) => void, setHasHovered: (value: boolean) => void, isSelectable?: boolean, onClick?: (data: any) => void) => () => {
  if (isSelectable) {
    const newValue = {
      ...selectedRows,
      [id]: !selectedRows[id]
    }
    setSelectedRows(newValue)
  }

  if (onClick) {
    onClick(row.data)
  }

  setHasHovered(false)
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

const getLeftCell = (isSelectable: boolean, isRemovable: boolean, isMobile: boolean, row: IRowProps, selectedRows: ISelectedRows, setSelectedRows: (value: ISelectedRows) => void, checkboxOverrideContent?: JSX.Element ) => {
  if (isSelectable && !isRemovable && !isMobile) {
    const SelectedCheckboxInputValue = selectedRows[row.id] ? TableCheckboxInputValue.True : TableCheckboxInputValue.False
    return (
      <StyledHeaderLeftCell>
        <TableCheckboxInput
          name={row.id}
          value={SelectedCheckboxInputValue}
          onChange={handleTableCheckboxInputChange(row.id, selectedRows, setSelectedRows)}
        />
      </StyledHeaderLeftCell>
    )
  }

  if (isRemovable && !isMobile) {
    return <StyledHeaderLeftCell>{checkboxOverrideContent}</StyledHeaderLeftCell>
  }

  return null
}

const getDataCells = (hasSwipeActions: boolean, hasTableSwipeActions: boolean, isSelected: boolean, columns: IColumnProps[], row: IRowProps, selectedRows: ISelectedRows, setSelectedRows: (value: ISelectedRows) => void, setHasHovered: (value: boolean) => void, isMobile: boolean, hasHoverButton: boolean) => columns.map((column, index) => {
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
      onClick={handleTableCellClicked(row.id, row, selectedRows, setSelectedRows, setHasHovered, isSelectable, onClick)}
      isLastColumn={isLastColumn}
      isFirstColumn={isMobile && index === 0}
    >
      {column.tooltipText ? <TableCellTooltip tooltipText={column.tooltipText(row.data)}>{content}</TableCellTooltip> : content}
    </StyledDataCell>
  )
})

const parsedProgressToPercentage = (progress?: number) => progress ? clamp(progress, 0, 1) * 100 : 0

const TableRow: React.FC<ITableRowProps> = ({ columns, row, selectedRows, setSelectedRows, isMobile = false, onProgressEnd, hasTableSwipeActions}) => {
  const {
    isSelectable = false,
    isRemovable = false,
    variant = RowVariant.Neutral,
    progress,
    onClick,
    checkboxOverride,
    data,
    swipeActions
  } = row

  const swipeContentWidth = swipeActions ? swipeActions.length * Variables.Spacing.sXLarge + (swipeActions.length - 1) * Variables.Spacing.sXSmall + 2 * Variables.Spacing.sMedium : 0

  const [hasProgressBarEnded, setHasProgressBarEnded] = useState<boolean>(false)
  const [movement, setMovement] = useState<number>(0)
  const [previousProgress, setPreviousProgress] = useState<number>(0)
  const [hasHovered, setHasHovered] = useState<boolean>(false)

  const blind = useDrag((props: any) => {
    if (isMobile && swipeActions && props._movement[0] <= movement) {
      console.log(props._movement, 'props._movement,')
      if (Math.floor(props._movement[0]) !== movement) {
        setMovement(Math.min(Math.trunc(Math.abs(props._movement[0])), swipeContentWidth))
      }

      if (!props.dragging && props._movement[0] < 0) {
        console.log('drag end')
        console.log(props._movement, 'props._movement,')
        console.log((Math.abs(props._movement[0]) < (swipeContentWidth / 2)) ? 0 : swipeContentWidth)
        setMovement((Math.abs(props._movement[0]) < (swipeContentWidth / 2)) ? 0 : swipeContentWidth)
      }
    }
  })
  useEffect(() => {
    if (onProgressEnd && hasProgressBarEnded) {
      onProgressEnd(data)
    }
  }, [hasProgressBarEnded])
  if (progress && progress === 1 && !hasProgressBarEnded) {
    setTimeout(() => {
      setHasProgressBarEnded(true)
    }, 3000)
  }

  const previousRowProps = usePrevious<IRowProps>(row)
  const previousProgressFromPreviousRowProps = previousRowProps ? (previousRowProps.progress ? previousRowProps.progress : 0) : 0
  const isSelected = !isMobile && isSelectable ? selectedRows[row.id] : false

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
        {getLeftCell(isSelectable, isRemovable, isMobile, row, selectedRows, setSelectedRows, checkboxOverride ? checkboxOverride(data) : undefined)}
        {getDataCells(hasSwipeActions, hasTableSwipeActions, isSelected, columns, row, selectedRows, setSelectedRows, setHasHovered, isMobile, hasHovered)}
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
      {(progress && !hasProgressBarEnded) && (
        <StyledProgressBarRow>
          <StyledProgressBarCell colSpan={isMobile ? columns.length : columns.length + 1}>
            <StyledProgressBar isEnd={hasProgressBarEnded} previousPercentage={parsedProgressToPercentage(previousProgress)} percentage={parsedProgressToPercentage(progress)}/>
          </StyledProgressBarCell>
        </StyledProgressBarRow>
      )}
    </>
  )

  // return (
  //   <>
  //     <StyledRow {...blind()} movement={movement} variant={variant} isHoverable={!isMobile && (isSelectable || !!onClick)} isSelected={!isMobile && isSelectable ? selectedRows[row.id] : false}>
  //       <GridLayout
  //         gutterMarginX={Variables.Spacing.sMedium}
  //         margins={{top: Variables.Spacing.sSmall, left: Variables.Spacing.sSmall, right: Variables.Spacing.sSmall, bottom: row.progress ? Variables.Spacing.sSmall - 2 : Variables.Spacing.sSmall}}
  //         verticalAlignment={GridLayout.VerticalAlignment.Middle}
  //         cells={leftCell.concat(columns.map((column, index) => ({
  //           size: column.size,
  //           content: <TableCell tooltipText={column.tooltipText ? column.tooltipText(row.data) : undefined} onClick={handleTableCellClicked(row.id, row, selectedRows, setSelectedRows, isSelectable, onClick)}>{contentOverride ? contentOverride(data)[index] : column.content(data)}</TableCell>
  //         })))}
  //       />
  //       {progress && <StyledProgressBar isEnd={hasProgressBarEnded} previousPercentage={parsedProgressToPercentage(progress[0])} percentage={parsedProgressToPercentage(progress[1])}/>}
  //     </StyledRow>
  //     {isMobile && swipeActions && (
  //       <StyledSwipeActions width={movement}>
  //         <GridLayout
  //           gutterMarginX={Variables.Spacing.sMedium}
  //           margins={{top: Variables.Spacing.sSmall, left: Variables.Spacing.sSmall, right: Variables.Spacing.sSmall, bottom: row.progress ? Variables.Spacing.sSmall - 2 : Variables.Spacing.sSmall}}
  //           cells={getActionsCells(swipeActions)}
  //         />
  //       </StyledSwipeActions>
  //     )}
  //   </>
  // )
}

export {
  TableRow
}
