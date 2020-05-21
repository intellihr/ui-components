import styled, { css } from 'styled-components'

import { Variables } from '../../../common'

interface IListItemProps {
  isDragging: boolean
  children: React.ReactNode
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
  display: grid;
  row-gap: ${Variables.Spacing.sXSmall}px;
`

export {
  StyledListArea,
  StyledListItem
}
