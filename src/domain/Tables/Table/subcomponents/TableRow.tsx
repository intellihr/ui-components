import { clamp } from 'lodash'
import React, {useEffect, useRef, useState} from 'react'
import { useDrag } from 'react-use-gesture'

import { IColumnProps, IRowProps, ISelectedRows } from '../Table'
import { TableCheckboxInput, TableCheckboxInputValue } from './TableCheckboxInput'
import {
  FontAwesomeIconButton,
  IFontAwesomeIconButtonProps
} from '../../../Buttons/FontAwesomeIconButton/FontAwesomeIconButton'
import { TooltipPopover } from '../../../Popovers/TooltipPopover'
import { TooltipPopoverVariant } from '../../../Popovers/TooltipPopover/TooltipPopover'
import { RowVariant } from '../colors'
import {
  StyledDataCell,
  StyledProgressBar,
  StyledRow,
  StyledProgressBarCell,
  StyledProgressBarRow,
  StyledHeaderLeftCell
} from '../style'
import {validateSourceMapOncePerProject} from 'ts-loader/dist/types/utils'

enum ColumnSize {
  Auto = 'auto',
  Shrink = 'shrink'
}
enum ColumnSortDirection {
  Up = 'up',
  Down = 'down'
}

enum ColumnAlignment {
  Left = 'left',
  Right = 'right'
}

interface ITableRowProps {
  columns: IColumnProps[]
  row: IRowProps
  selectedRows: ISelectedRows
  setSelectedRows: (value: ISelectedRows) => void
  isMobile: boolean
  onProgressEnd?: (row: any) => void
}

const handleTableCheckboxInputChange = (id: string, selectedRows: ISelectedRows, setSelectedRows: (value: ISelectedRows) => void) => (value: TableCheckboxInputValue) => {
  const newValue = {
    ...selectedRows,
    [id]: value === TableCheckboxInputValue.True
  }
  setSelectedRows(newValue)
}

const getActionsCells = (actions: IFontAwesomeIconButtonProps[], name?: string) => {
  return actions.map((actionProps, index) => ({
    size:  ColumnSize.Shrink,
    content: <FontAwesomeIconButton key={`actions-${name}-${index}`} {...actionProps}/>
  }))
}

const handleTableCellClicked = (id: string, row: IRowProps, selectedRows: ISelectedRows, setSelectedRows: (value: ISelectedRows) => void, isSelectable?: boolean, onClick?: (data: any) => void) => () => {
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

const getTableRowLeftCell = (isSelectable: boolean, isRemovable: boolean, isMobile: boolean, row: IRowProps, selectedRows: ISelectedRows, setSelectedRows: (value: ISelectedRows) => void, checkboxOverrideContent?: JSX.Element ) => {
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

const parsedProgressToPercentage = (progress?: number) => progress ? clamp(progress, 0, 1) * 100 : 0

const usePrevious = <T extends {}>(value: T): T => {
  const ref = useRef<T>()
  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current as T
}

const TableRow: React.FC<ITableRowProps> = ({ columns, row, selectedRows, setSelectedRows, isMobile = false, onProgressEnd}) => {
  const {
    isSelectable = false,
    isRemovable = false,
    variant = RowVariant.Neutral,
    progress,
    onClick,
    checkboxOverride,
    contentOverride,
    data,
    swipeActions
  } = row

  const swipeContentWidth = swipeActions ? swipeActions.length * 40 + 10 : 0

  const [hasProgressBarEnded, setHasProgressBarEnded] = useState<boolean>(false)
  const [movement, setMovement] = useState<number>(0)
  const [previousProgress, setPreviousProgress] = useState<number>(0)
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
  const leftCell = getTableRowLeftCell(isSelectable, isRemovable, isMobile, row, selectedRows, setSelectedRows, checkboxOverride ? checkboxOverride(data) : undefined)
  const dataCells = columns.map((column, index) => {
    const content = contentOverride ? contentOverride(data)[index] : column.content(data)
    return (
      <StyledDataCell
        key={index}
        alignment={column.alignment}
        onClick={handleTableCellClicked(row.id, row, selectedRows, setSelectedRows, isSelectable, onClick)}
        isLastColumn={index === columns.length - 1}
        isFirstColumn={isMobile && index === 0}
      >
        {column.tooltipText ? <TableCellTooltip tooltipText={column.tooltipText(row.data)}>{content}</TableCellTooltip> : content}
      </StyledDataCell>
    )
  })
  if (progress && progress === 1 && !hasProgressBarEnded) {
    setTimeout(() => {
      setHasProgressBarEnded(true)
    }, 3000)
  }

  const previousRowProps = usePrevious<IRowProps>(row)
  const previousProgressFromPreviousRowProps = previousRowProps ? (previousRowProps.progress ? previousRowProps.progress : 0) : 0

  useEffect(() => {
    if (progress && previousProgressFromPreviousRowProps !== (progress ? progress : 0)) {
      setPreviousProgress(previousProgressFromPreviousRowProps)
    }
  }, [progress])

  console.log(progress)
  console.log(row)

  return (
    <>
      <StyledRow
        {...blind()}
        movement={movement}
        variant={variant}
        isHoverable={!isMobile && (isSelectable || !!onClick)}
        isSelected={!isMobile && isSelectable ? selectedRows[row.id] : false}
        hasProgressBar={progress}
      >
        {leftCell}
        {dataCells}
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
