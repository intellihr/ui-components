import styled from 'styled-components'
import { getColor } from '../Color'

interface IAvatarEntityWrapper {
  className?: string
  isHoverable?: boolean
}

interface ITextWrapper {
  isCompact?: boolean
}

export const AvatarEntityWrapper = styled.div`
  align-items: center;
  display: inline-flex;
  padding: 2px;
  
  &:hover {
    ${(props: IAvatarEntityWrapper) => {
    if (props.isHoverable) {
      return `
          color: ${getColor('link-text')};
          cursor: pointer;
        `
    }

    return null
  }
}
`

export const AvatarContainer = styled.div`
  align-self: start;
  position: relative;
  display: flex;
`

export const AvatarEntityInfo = styled.div`
  overflow: hidden;
  padding-left: 10px;
  align-self: center;
`

export const SecondaryTextWrapper = styled.span`
  color: ${getColor('main-text-light')};
  line-height: 1.3;
  margin-top: 2px;
  margin-left: ${(props: ITextWrapper) => props.isCompact ? '5px' : '0px'};
`

export const TertiaryTextWrapper = styled.span`
  color: ${getColor('main-text-light')};
  font-size: .75rem;
  font-weight: 600;
`
