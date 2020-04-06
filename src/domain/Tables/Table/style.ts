import styled, {css, keyframes} from 'styled-components'

import {Props, Variables} from '../../../common'
import {styleForMargins} from '../../Spacers/services/margins'
import {RowVariant, variantOptions} from './colors'
import {ColumnAlignment, ColumnSize} from './Table'

interface IStyledTableProps {
  margins?: Props.IMargins
}

interface IStyledRowProps {
  isSelected?: boolean
  isHoverable?: boolean
  variant: RowVariant
  movement?: number
  hasProgressBar?: boolean
}

interface IStyledSwipeActionsProps {
  width: number
}

interface IStyledProgressBarProps {
  percentage: number
  previousPercentage: number
  isEnd: boolean
}

interface IStyledHeaderCellProps {
  size?: ColumnSize
  alignment?: ColumnAlignment
  isLastColumn?: boolean
  isFirstColumn?: boolean
}

interface IStyledDataCellProps {
  alignment?: ColumnAlignment
  isLastColumn?: boolean
  isFirstColumn?: boolean
}

const StyledTHead = styled.thead`
  background: none;
  border-bottom: none;
`

const StyledTable = styled.table`
  border: 1px solid ${Variables.Color.n250};
  border-collapse: collapse;
  border-spacing: 0;

  ${(props: IStyledTableProps) => styleForMargins(props.margins)}
`

const StyledHeaderCell = styled.th`
  padding: ${Variables.Spacing.sSmall}px;
  text-align: left;

  ${(props: IStyledHeaderCellProps) => props.isLastColumn && css`
      padding:  ${Variables.Spacing.sSmall}px ${Variables.Spacing.sMedium}px ${Variables.Spacing.sSmall}px ${Variables.Spacing.sSmall}px;
  `}

  ${(props: IStyledHeaderCellProps) => props.isFirstColumn && css`
      padding: ${Variables.Spacing.sSmall}px ${Variables.Spacing.sSmall}px ${Variables.Spacing.sSmall}px ${Variables.Spacing.sMedium}px;
  `}

  ${(props: IStyledHeaderCellProps) => props.size === ColumnSize.Auto && css`
      width: 100%;
  `}

  ${(props: IStyledHeaderCellProps) => props.alignment === ColumnAlignment.Right && css`
      text-align: right;
  `}
`

const StyledHeaderLeftCell = styled.th`
  padding: ${Variables.Spacing.sSmall}px ${Variables.Spacing.sSmall}px ${Variables.Spacing.sSmall}px ${Variables.Spacing.sMedium}px;
  text-align: center;
  width: ${Variables.Spacing.sXLarge}px;
`

const StyledDataCell = styled.td`
  padding: ${Variables.Spacing.sSmall}px;
  text-align: left;

  ${(props: IStyledDataCellProps) => props.alignment === ColumnAlignment.Right && css`
      text-align: right;
  `}

  ${(props: IStyledDataCellProps) => props.isLastColumn && css`
      padding:  ${Variables.Spacing.sSmall}px ${Variables.Spacing.sMedium}px ${Variables.Spacing.sSmall}px ${Variables.Spacing.sSmall}px;
  `}

  ${(props: IStyledDataCellProps) => props.isFirstColumn && css`
      padding: ${Variables.Spacing.sSmall}px ${Variables.Spacing.sSmall}px ${Variables.Spacing.sSmall}px ${Variables.Spacing.sMedium}px;
  `}
`
const StyledProgressBarRow = styled.tr`
  border-bottom: 1px solid ${Variables.Color.n250};
  background: ${Variables.Color.n100};
`
const StyledRow = styled.tr`
  white-space: nowrap;
  border-bottom: 1px solid ${Variables.Color.n250};
  border-top: 1px solid ${Variables.Color.n250};
  background: ${Variables.Color.n100};
  transition: transform 0.2s ease-out;

  ${(props: IStyledRowProps) => props.isHoverable && !props.isSelected && css`
      &:hover {
        background: ${variantOptions[props.variant].hoverBackground};
      }
  `}

  ${(props: IStyledRowProps) => props.isHoverable && css`
      &:hover {
        cursor: pointer;
      }
  `}

  ${(props: IStyledRowProps) => props.isSelected && css`
      background: ${variantOptions[props.variant].selectBackground};
  `}

  ${(props: IStyledRowProps) => props.hasProgressBar && css`
      border-bottom: none;
  `}

  ${(props: IStyledRowProps) => props.movement && css`
      transform: translateX(-${props.movement}px);
      transition: transform 0.2s ease-out;
  `}
`

const StyledSwipeActions = styled.div`
  position: absolute;
  border-left: 1px solid ${Variables.Color.n250};
  display: block;
  top: 0;
  width: 0;
  height: 100%;
  transition: 0.2s ease-out;
  overflow: hidden;

  ${(props: IStyledSwipeActionsProps) => props.width && css`
      width: ${props.width}px;
      transition: 0.2s ease-out;
  `}
`

const StyledProgressBarAnimation = (props: IStyledProgressBarProps) => keyframes`
  0% {
      width: ${props.previousPercentage}%;
    background: ${props.previousPercentage === 100 ? Variables.Color.i400 : Variables.Color.n500};
  }
    100% {
    width: ${props.percentage}%;
    background: ${props.percentage === 100 ? Variables.Color.i400 : Variables.Color.n500};
  }
`

const StyledProgressBarCell = styled.td`
  height: ${Variables.Spacing.s3XSmall}px;
  padding: 0;
`

const StyledProgressBar = styled.div`
  height: 100%;
  animation-name: ${(props: IStyledProgressBarProps) => StyledProgressBarAnimation(props)};
  animation-duration: 1s;
  animation-timing-function: ease-in-out;

  ${(props: IStyledProgressBarProps) => css`
    width: ${props.percentage}%;
    background: ${props.percentage === 100 ? Variables.Color.i400 : Variables.Color.n500};
  `}

  ${(props: IStyledProgressBarProps) => props.isEnd && css`
      background: transparent;
  `}

`

const StyledEmptyStateCell =styled.td`
  padding: ${Variables.Spacing.s3XLarge}px;
`

export {
  StyledTable,
  StyledRow,
  StyledProgressBar,
  StyledSwipeActions,
  StyledHeaderCell,
  StyledDataCell,
  StyledProgressBarCell,
  StyledProgressBarRow,
  StyledHeaderLeftCell,
  StyledTHead,
  StyledEmptyStateCell
}
