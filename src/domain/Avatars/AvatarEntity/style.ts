import styled, { css } from 'styled-components'

import { Props, Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'
import { Size } from './AvatarEntity'

interface IMainContentWrapperProps {
  isHoverable: boolean,
  size: Size
}

interface IStyledAvatarEntityProps {
  margins?: Props.IMargins
}

interface IAvatarEntityInfoProps {
  isCompact: boolean,
  size: Size
}

const StyledAvatarEntity = styled.div`
  ${(props: IStyledAvatarEntityProps) => styleForMargins(props.margins)}
`

const MainContentWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${Variables.Color.n700};

  ${(props: IMainContentWrapperProps) => css`
      height: ${props.size === Size.Normal ? Variables.LineHeight.lhSmall + Variables.LineHeight.lhBody :  Variables.LineHeight.lhSmall + Variables.LineHeight.lhXSmall}px;
  `}

  ${(props: IMainContentWrapperProps) => props.isHoverable && css`
    &:hover {
      color: ${Variables.Color.i400};
      cursor: pointer;
    }
  `}
}
`

const AvatarEntityInfo = styled.div`
  overflow: hidden;
  padding-left: ${Variables.Spacing.sXSmall}px;
  display: flex;
  flex-direction: column;
  ${(props: IAvatarEntityInfoProps) => props.isCompact && css`
    flex-direction: row;
    align-items: center;
  `}
`

export {
  StyledAvatarEntity,
  MainContentWrapper,
  AvatarEntityInfo
}
