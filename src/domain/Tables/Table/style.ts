import styled, {css} from 'styled-components'

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
}

const StyledTable = styled.div`
  border: 1px solid ${Variables.Color.n250};
  border-bottom: 0px;

  ${(props: IStyledTableProps) => styleForMargins(props.margins)}
`

const StyledRow = styled.div`
  border-bottom: 1px solid ${Variables.Color.n250};
  border-top: 1px solid ${Variables.Color.n250};
  background: ${Variables.Color.n100};

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
`

export {
  StyledTable,
  StyledRow,
  IStyledRowProps
}
