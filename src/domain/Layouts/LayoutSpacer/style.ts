import styled from 'styled-components'

import { Variables } from '../../../common'

interface ILayoutSpacerContentItemProps {
  /** Size of the space between this content item and the next */
  spacingSize?: Variables.Layout

  /** @deprecated This is only here to support old components which had invalid layout sizes */
  spacingSizeOverride?: number
}

const spacingForContentItem = (props: ILayoutSpacerContentItemProps): number => {
  return ((props.spacingSizeOverride !== undefined) ? props.spacingSizeOverride : props.spacingSize) || 0
}

const StyledContentItem = styled.div<ILayoutSpacerContentItemProps>`
  margin-bottom: ${spacingForContentItem}px;

  &:last-child {
    margin-bottom: 0px;
  }
`

export {
  StyledContentItem
}
