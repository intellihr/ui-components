import styled, { css } from 'styled-components'

import { Props, Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'
import { styleForTruncatedText } from '../../Typographies/services/textStyles'
import { AvatarEntitySize } from './AvatarEntity'

interface IMainContentWrapperProps {
  size: AvatarEntitySize
}

interface IStyledAvatarEntityProps {
  isHoverable: boolean,
  margins?: Props.IMargins
}

interface IAvatarEntityInfoProps {
  size: AvatarEntitySize
}

interface IStyledAvatarProps {
  size: AvatarEntitySize
}

interface IStyledTertiaryTextProps {
  size: AvatarEntitySize
}

// use height in avatar-medium or avatar-small
const StyledAvatar = styled.span`
 height: 40px;
 ${(props: IStyledAvatarProps) => (props.size === AvatarEntitySize.SmallCompact || props.size === AvatarEntitySize.Small) && css`
    height: 30px;
  `}

  ${(props: IStyledAvatarProps) => props.size === AvatarEntitySize.XSmallCompact && css`
    height: 24px;
  `}
`

const StyledAvatarEntity = styled.div`
  ${(props: IStyledAvatarEntityProps) => styleForMargins(props.margins)}
  ${(props: IStyledAvatarEntityProps) => props.isHoverable && css`
    &:hover {
      color: ${Variables.Color.i400};
      cursor: pointer;
    }
  `}
`

// We're using magic numbers here to align the tertiary text with the primary and secondary text because it sits outside of the main avatar entity content
const StyledTertiaryText = styled.div`
  ${(props: IStyledTertiaryTextProps) => css`
    margin-left: ${(props.size === AvatarEntitySize.Normal || props.size === AvatarEntitySize.NormalCompact) ? 48 : 38}px;
  `}
  ${styleForTruncatedText()}
`

const MainContentWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${Variables.Color.n700};
  height: 44px;
 ${(props: IMainContentWrapperProps) => (props.size === AvatarEntitySize.SmallCompact || props.size === AvatarEntitySize.Small) && css`
    height: 38px;
  `}

  ${(props: IMainContentWrapperProps) => props.size === AvatarEntitySize.XSmallCompact && css`
    height: 24px;
  `}
}
`

const AvatarEntityInfo = styled.div`
  overflow: hidden;
  padding-left: ${Variables.Spacing.sXSmall}px;
  display: flex;
  flex-direction: column;
  ${(props: IAvatarEntityInfoProps) => (props.size === AvatarEntitySize.NormalCompact || props.size === AvatarEntitySize.SmallCompact || props.size === AvatarEntitySize.XSmallCompact) && css`
    flex-direction: row;
    align-items: center;
  `}
`

export {
  StyledAvatarEntity,
  MainContentWrapper,
  AvatarEntityInfo,
  StyledAvatar,
  StyledTertiaryText
}
