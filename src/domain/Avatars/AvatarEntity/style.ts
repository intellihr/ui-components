import styled, { css } from 'styled-components'

import { Props, Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'
import { styleForTruncatedText, styleForTypographyType } from '../../Typographies/services/textStyles'

interface IAvatarEntityWrapper {
  className?: string,
  isHoverable?: boolean,
  margins?: Props.IMargins
}

interface IPrimaryTextWrapper {
  isCompact?: boolean
  textType: Props.TypographyType
  primaryColor: Variables.Color
  primaryWeight: Variables.FontWeight
}

interface ISecondaryTextWrapper {
  isCompact?: boolean
  textType: Props.TypographyType
  secondaryColor: Variables.Color
  secondaryWeight: Variables.FontWeight
}

interface ITextWrapper {
  isCompact?: boolean
  textType: Props.TypographyType
}

const AvatarEntityWrapper = styled.div`
  align-items: center;
  display: flex;
  color: ${Variables.Color.n700};
  ${(props: IAvatarEntityWrapper) => styleForMargins(props.margins)}

  ${(props: IAvatarEntityWrapper) => {
    if (props.isHoverable) {
      return css`
        &:hover {
          color: ${Variables.Color.i400};
          cursor: pointer;
        }
      `
    }
  }}
}
`

const AvatarContainer = styled.div`
  align-self: start;
  position: relative;
  display: flex;
`

const AvatarEntityInfo = styled.div`
  overflow: hidden;
  padding-left: 10px;
  align-self: center;
`
const PrimaryTextWrapper = styled.span`
  ${(props: IPrimaryTextWrapper) => styleForTypographyType(props.textType)}
  ${(props: IPrimaryTextWrapper) => (props.primaryColor)}
  ${(props: IPrimaryTextWrapper) => (props.primaryWeight)}

  ${(props: IPrimaryTextWrapper) => {
    if (!props.isCompact) {
      return css`
        display: block;
      `
    }
  }}
  ${styleForTruncatedText()}
`

const SecondaryTextWrapper = styled.span`
  ${(props: ISecondaryTextWrapper) => styleForTypographyType(props.textType)}
  ${(props: ISecondaryTextWrapper) => (props.secondaryColor)}
  ${(props: ISecondaryTextWrapper) => (props.secondaryWeight)}

  margin-top: 2px;
  margin-left: ${(props: ISecondaryTextWrapper) => props.isCompact ? '5px' : '0px'};

  ${styleForTruncatedText()}

  ${(props: ISecondaryTextWrapper) => {
  if (!props.isCompact) {
    return css`
        display: block;
      `
    }
}}
`

const TertiaryTextWrapper = styled.span`
  ${(props: ITextWrapper) => styleForTypographyType(props.textType)}
  font-weight: ${Variables.FontWeight.fwSemiBold};

  ${styleForTruncatedText()}

  ${(props: ITextWrapper) => {
    if (!props.isCompact) {
      return css`
        display: block;
      `
    }
  }}
`

export {
  IAvatarEntityWrapper,
  ITextWrapper,
  AvatarEntityWrapper,
  AvatarContainer,
  AvatarEntityInfo,
  PrimaryTextWrapper,
  SecondaryTextWrapper,
  TertiaryTextWrapper
}
