import styled, {css, keyframes} from 'styled-components'

import { Props, Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'
import { RowVariant, variantOptions } from './colors'

interface IStyledTableProps {
  margins?: Props.IMargins
}

interface IStyledRowProps {
  isSelected?: boolean
  isHoverable?: boolean
  variant: RowVariant
  movement?: number
}

interface IStyledSwipeActionsProps {
  width: number
}

interface IStyledProgressBarProps {
  percentage: number
  previousPercentage: number
  isEnd: boolean
}

const StyledTable = styled.div`
  border: 1px solid ${Variables.Color.n250};
  border-bottom: 0px;
  overflow: hidden;

  ${(props: IStyledTableProps) => styleForMargins(props.margins)}
`

const StyledRow = styled.div`
  display: block;
  border-bottom: 1px solid ${Variables.Color.n250};
  border-top: 1px solid ${Variables.Color.n250};
  border-right: none;
  background: ${Variables.Color.n100};
  margins: 0;
  transition: 0.2s ease-out;

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

  ${(props: IStyledRowProps) => props.movement && css`
      border-right: 1px solid ${Variables.Color.n250};
      margin-left: -${props.movement}px;
      margin-right: ${props.movement}px;
      transition: 0.2s ease-out;
  `}
`

const StyledSwipeActions = styled.div`
  border-left: 1px solid ${Variables.Color.n250};
  display: block;
  float: right;
  width: 0;
  height: 50px;
  transition: 0.2s ease-out;
  overflow: hidden;
  margin-top: -50px;

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

const StyledProgressBar = styled.div`
  height: ${Variables.Spacing.s3XSmall}px;
  animation-name: ${(props: IStyledProgressBarProps) => StyledProgressBarAnimation(props)};
  animation-duration: 1s;

  ${(props: IStyledProgressBarProps) => css`
    width: ${props.percentage}%;
    background: ${props.percentage === 100 ? Variables.Color.i400 : Variables.Color.n500};
  `}

  ${(props: IStyledProgressBarProps) => props.isEnd && css`
      background: transparent;
  `}

`

export {
  StyledTable,
  StyledRow,
  StyledProgressBar,
  StyledSwipeActions
}
