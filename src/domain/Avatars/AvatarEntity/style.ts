import React from 'react'
import styled, { StyledComponentClass } from 'styled-components'

const { i400, n600, n700 } = require('../../../common/sass/variables.scss')

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
  color: ${n700};

  &:hover {
    ${(props: IAvatarEntityWrapper) => {
    if (props.isHoverable) {
      return `
          color: ${i400};
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

export {
  IAvatarEntityWrapper,
  ITextWrapper,
  AvatarEntityWrapper,
  AvatarContainer,
  AvatarEntityInfo,
  SecondaryTextWrapper
}
