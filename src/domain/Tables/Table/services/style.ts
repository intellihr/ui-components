import styled, { css, keyframes } from 'styled-components'

import { Props, Variables } from '../../../../common'
import { FontAwesomeIcon } from '../../../Icons/FontAwesomeIcon'
import { styleForMargins } from '../../../Spacers/services/margins'
import { TableCheckboxInputValue } from '../subcomponents/TableCheckboxInput'
import { Table } from '../Table'
import { TableRowVariant, variantOptions } from './colors'

interface IStyledTableCheckboxInputProps {
  labelValue: TableCheckboxInputValue
}

interface IStyledTableCheckboxLabelProps {
  value: TableCheckboxInputValue
  hasStyledOnRowHovered: boolean
}

interface IStyledTableWrapperProps {
  margins?: Props.IMargins
}

interface IStyledRowProps {
  isSelected?: boolean
  isHoverable?: boolean
  variant: TableRowVariant
  movement?: number
  hasProgressBar?: boolean
  hideBottomBorder?: boolean
}

interface IStyledSwipeActionsProps {
  width: number
  hasProgressBar?: boolean
}

interface IStyledSwipeActionsButtonWrapperProps {
  isFullWidth: boolean
}

interface IStyledProgressBarProps {
  percentage: number
  previousPercentage: number
}

interface IStyledHeaderCellProps {
  size?: Table.ColumnSize
  alignment?: Table.ColumnAlignment
  isLastColumn?: boolean
  isFirstColumn?: boolean
}

interface IStyledDataCellProps {
  alignment?: Table.ColumnAlignment
  isLastColumn?: boolean
  isFirstColumn?: boolean
  hasProgressBar?: boolean
}

interface IStyledSortButtonProps {
  sort?: Table.ColumnSortDirection
  alignment: Table.ColumnAlignment
}

const StyledTHead = styled.thead`
  background: none;
  border-bottom: none;
`

const StyledTableWrapper = styled.div`
  overflow: scroll;
  border: 1px solid ${Variables.Color.n250};
  border-radius: ${Variables.Style.borderRadius}px;

  ${(props: IStyledTableWrapperProps) => styleForMargins(props.margins)}
`

const StyledTable = styled.table`
  margin: 0;
  overflow: hidden;
  border-collapse: collapse;
  border-spacing: 0;
`

const StyledHeaderCellWithHeaderSize = styled.th`
  padding:  ${Variables.Spacing.sSmall}px ${Variables.Spacing.sMedium}px;
`

const StyledHeaderCell = styled.th`
  padding:  ${Variables.Spacing.sSmall}px;
  text-align: left;

  ${(props: IStyledHeaderCellProps) => props.isLastColumn && css`
      padding-right: ${Variables.Spacing.sMedium}px;
  `}

  ${(props: IStyledHeaderCellProps) => props.isFirstColumn && css`
      padding-left: ${Variables.Spacing.sMedium}px;
  `}

  ${(props: IStyledHeaderCellProps) => props.size === Table.ColumnSize.Auto && css`
      width: 100%;
  `}

  ${(props: IStyledHeaderCellProps) => props.alignment === Table.ColumnAlignment.Right && css`
      text-align: right;
  `}
`

const StyledHeaderLeftCell = styled.th`
  padding: ${Variables.Spacing.sSmall}px ${Variables.Spacing.sSmall}px ${Variables.Spacing.sSmall}px ${Variables.Spacing.sMedium}px;
  text-align: center;
  width: ${Variables.Spacing.sXLarge}px;
`

const StyledSwipeActionsCell = styled.td`
  position: relative;
  padding: 0;
`

const StyledSwipeActionsButtonWrapper = styled.div`
  padding: 0;
  padding-left: ${Variables.Spacing.sSmall}px;

  ${(props: IStyledSwipeActionsButtonWrapperProps) => props.isFullWidth && css`
      padding-right: ${Variables.Spacing.sSmall}px;
      transition: 0.2s ease-out;
  `}
`

const StyledSwipeActions = styled.div`
  display: flex;
  align-items: center;
  top:0;
  width: 0;
  overflow: hidden;
  position: absolute;
  border-left: 1px solid ${Variables.Color.n250};
  height: 59px;

  ${(props: IStyledSwipeActionsProps) => props.width && css`
      width: ${props.width}px;
      transition: 0.2s ease-out;
  `}

  ${(props: IStyledSwipeActionsProps) => props.hasProgressBar && css`
      height: 57px;
      transition: 0.2s ease-out;
  `}
`

const StyledProgressBarRow = styled.tr`
  border-bottom: 1px solid ${Variables.Color.n250};
  background: ${Variables.Color.n100};
`
const StyledEmptyStateRow = styled.tr`
  border: none;
`

const StyledRow = styled.tr`
  white-space: nowrap;
  border: none;
  border-bottom: 1px solid ${Variables.Color.n250};
  background: ${Variables.Color.n100};
  transition: transform 0.2s ease-out;
  height: ${Variables.Spacing.sSmall * 2 + Variables.Spacing.sXLarge + 3}px;

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
      border-bottom: 1px solid ${Variables.Color.n100};
  `}

  ${(props: IStyledRowProps) => props.hasProgressBar && css`
      height: ${Variables.Spacing.sSmall * 2 + Variables.Spacing.sXLarge + 1}px;
  `}

  ${(props: IStyledRowProps) => props.movement && css`
      transform: translateX(-${props.movement}px);
      transition: transform 0.2s ease-out;
  `}

  ${(props: IStyledRowProps) => props.hideBottomBorder && css`
      border: none;
      border-bottom: 0;
  `}
`

const StyledDataCellChangeAnimation = keyframes`
  0% {
      opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const StyledDataCell = styled.td`
  padding:  ${Variables.Spacing.sSmall}px;
  text-align: left;
  animation-name: ${StyledDataCellChangeAnimation};
  animation-duration: 500ms;
  animation-timing-function: ease-in;

  ${(props: IStyledDataCellProps) => props.alignment === Table.ColumnAlignment.Right && css`
      text-align: right;
  `}

  ${(props: IStyledDataCellProps) => props.isLastColumn && css`
      padding-right: ${Variables.Spacing.sMedium}px;
  `}

  ${(props: IStyledDataCellProps) => props.isFirstColumn && css`
      padding-left: ${Variables.Spacing.sMedium}px;
  `}

  ${(props: IStyledDataCellProps) => props.hasProgressBar && css`
      padding-bottom:  ${Variables.Spacing.sSmall - 2}px;
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
`

const StyledEmptyStateCell = styled.td`
  padding: ${Variables.Spacing.s3XLarge}px;
`

const StyledSortButton = styled.div`
  display: none;
  margin: 0;
  transition: transform .2s ease-out, display .2s ease-out;

  ${(props: IStyledSortButtonProps) => props.alignment === Table.ColumnAlignment.Right && css`
      margin-right: ${Variables.Spacing.sXSmall}px;
  `}

  ${(props: IStyledSortButtonProps) => props.alignment === Table.ColumnAlignment.Left && css`
      margin-left: ${Variables.Spacing.sXSmall}px;
  `}

  ${(props: IStyledSortButtonProps) => props.sort && css`
      display: inline-block;
  `}

  ${(props: IStyledSortButtonProps) => props.sort === Table.ColumnSortDirection.Descending && css`
      transform: rotate(180deg);
  `}
`

const StyledTableCheckboxInput = styled.input`
  line-height: 16px;
  height: 0;
  opacity: 0;
  position: absolute;
  width: 0;

  margin: 0;

  &::-ms-clear {
    display: none;
  }

  & + label {
    margin: 0;
  }

  &:disabled + label {
    margin: 0;
    color: ${Variables.Color.n500};
    cursor: not-allowed;

    &::before {
      background-color: ${Variables.Color.n150};
      border-color: ${Variables.Color.n300};
    }
  }

  &:focus + label {
    margin: 0;
    &.checkbox {
      border-color: ${Variables.Color.i400};

      &::before {
        background-color: ${Variables.Color.n300};
        border-color: ${Variables.Color.i400};
      }
    }

    &.checkbox-button {
      background-color: ${Variables.Color.n200};
      border-color: ${Variables.Color.i400};
    }
  }

  &:checked + label {
    margin: 0;
    border-color: ${Variables.Color.i600};

    &::before {
      border-color: ${Variables.Color.i400};
    }

    &:hover {
      border-color: ${Variables.Color.i400};

      &::before {
        border-color: ${Variables.Color.i400};
      }
    }
  }

  ${(props: IStyledTableCheckboxInputProps) => props.labelValue === TableCheckboxInputValue.PartialTrue && css`
    & + label {
      margin: 0;
      border-color: ${Variables.Color.i600};

      &::before {
        border-color: ${Variables.Color.i400};
      }

      &:hover {
        border-color: ${Variables.Color.i400};

        &::before {
          border-color: ${Variables.Color.i400};
        }
      }
    }
  `}
`

const StyledTableCheckboxLabel = styled.label`
  width:20px;
  height:20px;
  position: relative;
  cursor: pointer;
  transition: .25s ease-out;
  margin: 0;

  &::before {
      background-color: ${Variables.Color.n150};
      border: 2px solid  ${Variables.Color.n400};
      border-radius: ${Variables.Style.borderRadius}px;
      content: '';
      display: inline-block;
      height: 20px;
      left: 0;
      position: absolute;
      top: 4px;
      transition: .25s ease-out, color .25s ease-out;
      vertical-align: top;
      width: 20px;
    }

  &:hover {

    &::before {
      background-color: ${Variables.Color.n300};
      border-color: ${Variables.Color.n600};
    }
  }

  ${(props: IStyledTableCheckboxLabelProps) => props.hasStyledOnRowHovered && props.value === TableCheckboxInputValue.False && css`
    ${StyledRow}:hover & {
      &::before {
        background-color: ${Variables.Color.n300};
        border-color: ${Variables.Color.n600};
        transition: .25s ease-out, color .25s ease-out;
      }
    }
`}
`

const styledFontAwesomeIconAnimation = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`

const StyledFontAwesomeIcon =  styled(FontAwesomeIcon)`
  position: absolute;
  width: 21px;
  height: 20px;
  top: 9px;
  left: 0;
  animation-name: ${styledFontAwesomeIconAnimation};
  animation-duration: .25s;
`

const StyledFontAwesomeIconButtonWrapper = styled.span`
  margin-right: ${Variables.Spacing.sXSmall}px;

  &:last-child {
    margin-right: 0;
  }
`

export {
  StyledTable,
  StyledRow,
  StyledProgressBar,
  StyledHeaderCell,
  StyledDataCell,
  StyledProgressBarCell,
  StyledProgressBarRow,
  StyledHeaderLeftCell,
  StyledTHead,
  StyledEmptyStateCell,
  StyledTableCheckboxInput,
  StyledTableCheckboxLabel,
  StyledFontAwesomeIcon,
  StyledSortButton,
  StyledTableWrapper,
  StyledSwipeActionsCell,
  StyledSwipeActions,
  StyledHeaderCellWithHeaderSize,
  StyledEmptyStateRow,
  StyledFontAwesomeIconButtonWrapper,
  StyledSwipeActionsButtonWrapper
}
