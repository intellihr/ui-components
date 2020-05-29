import styled, { css } from 'styled-components'

import { Props, Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

interface IListItemProps {
  isDragging: boolean
  children: React.ReactNode
}

interface IStyledDraggableListProps {
  margins?: Props.IMargins
}

const StyledListItem = styled.div<IListItemProps>`
  border: 1px solid ${Variables.Color.n250};
  background-color: ${Variables.Color.n100};
  padding: ${Variables.Spacing.sMedium}px;
  border-radius: ${Variables.Style.borderRadius}px;
  box-shadow: ${Variables.BoxShadow.bsLv1Static};

  ${(props) => props.isDragging && css`
    box-shadow: ${Variables.BoxShadow.bsLv3Active};
    background-color: ${Variables.Color.n150};
    cursor: grabbing !important;
  `}
`

const StyledListArea = styled.div`
  // We can't remove the margin on the last child because RBD needs consistent sizing to work properly
  margin-bottom: -${Variables.Spacing.sXSmall}px;
  > * {
    margin-bottom: ${Variables.Spacing.sXSmall}px;
  }
`

const StyledDraggableList = styled.div`
  ${(props: IStyledDraggableListProps) => styleForMargins(props.margins)}
`
export {
  StyledListArea,
  StyledListItem,
  StyledDraggableList
}
