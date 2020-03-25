import styled from 'styled-components'
import {styleForMargins} from '../../Spacers/services/margins'
import {Props, Variables} from '../../../common'

interface IStyledTableProps {
  margins?: Props.IMargins
}

const StyledTable = styled.div`
  margin: 0;
  border: 1px solid ${Variables.Color.n250};

  ${(props: IStyledTableProps) => styleForMargins(props.margins)}
`

export {
  StyledTable
}
