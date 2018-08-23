import React from 'react'
import styled, { StyledComponentClass } from 'styled-components'
import { Variables } from '../../../common'

interface IAvatarEntityWrapper {
  className?: string
  isHoverable?: boolean
}

interface ITextWrapper {
  isCompact?: boolean
}

const AvatarEntityWrapper = styled.div`
  align-items: center;
  display: inline-flex;
  padding: 2px;
  color: ${Variables.Color.n700};

  &:hover {
    ${(props: IAvatarEntityWrapper) => {
    if (props.isHoverable) {
      return `
          color: ${Variables.Color.i400};
          cursor: pointer;
        `
    }

    return null
  }
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

const SecondaryTextWrapper = styled.span`
  line-height: 1.3;
  margin-top: 2px;
  margin-left: ${(props: ITextWrapper) => props.isCompact ? '5px' : '0px'};
`

const TertiaryTextWrapper = styled.span`
  color: ${Variables.Color.n600};
  font-size: .75rem;
  font-weight: 600;
`

export {
  IAvatarEntityWrapper,
  ITextWrapper,
  AvatarEntityWrapper,
  AvatarContainer,
  AvatarEntityInfo,
  SecondaryTextWrapper,
  TertiaryTextWrapper
}
