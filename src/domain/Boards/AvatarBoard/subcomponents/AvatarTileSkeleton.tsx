import styled from 'styled-components'

import { Variables } from '../../../../common'
import { styleForSkeletons } from '../../../Skeletons/style'

const AvatarTileSkeleton = styled.div`
  width: 260px;
  height: 278px;
  border-radius: 8px;
  ${styleForSkeletons(
    {
      display: 'inline-block',
      margins: {
        left: Variables.Spacing.sLarge,
        bottom: Variables.Spacing.sLarge
      }
    }
  )};
`

export {
  AvatarTileSkeleton
}
