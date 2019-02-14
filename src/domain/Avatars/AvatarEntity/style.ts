import React from 'react'
import styled, { css } from 'styled-components'

import { Props, Variables } from '../../../common'
import { styleForTruncatedText, styleForTypographyType } from '../../Typographies/services/textStyles'

interface IAvatarEntityWrapper {
  className?: string,
  isHoverable?: boolean
}

interface ITextWrapper {
  isCompact?: boolean
}

const AvatarEntityWrapper = styled.div`
  align-items: center;
  display: flex;
  padding: 2px;
  color: ${Variables.Color.n700};

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
  ${styleForTypographyType(Props.TypographyType.Body)}
  font-weight: ${Variables.FontWeight.fwNormal};

  ${(props: ITextWrapper) => {
    if (!props.isCompact) {
      return css`
        display: block;
      `
    }
  }}
  ${styleForTruncatedText()}
`

const SecondaryTextWrapper = styled.span`
  ${styleForTypographyType(Props.TypographyType.XSmall)}
  font-weight: ${Variables.FontWeight.fwNormal};

  margin-top: 2px;
  margin-left: ${(props: ITextWrapper) => props.isCompact ? '5px' : '0px'};

  ${styleForTruncatedText()}

  ${(props: ITextWrapper) => {
  if (!props.isCompact) {
    return css`
        display: block;
      `
    }
}}
`

const TertiaryTextWrapper = styled.span`
  ${styleForTypographyType(Props.TypographyType.XSmall)}
  font-weight: ${Variables.FontWeight.fwHeavy};

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
