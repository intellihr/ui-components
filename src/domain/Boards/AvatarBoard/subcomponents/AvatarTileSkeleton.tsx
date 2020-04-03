import styled from 'styled-components'

import { Variables } from '../../../../common'
import { styleForSkeletons } from '../../../Skeletons/style'

const AvatarTileSkeleton = styled.div`
  position: relative;
  width: 100%;
  max-width: 540px;
  height: 278px;
  border-radius: 8px;
  ${styleForSkeletons(
    {
      display: 'inline-block'
    }
  )};
`

export {
  AvatarTileSkeleton
}
