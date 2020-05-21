import React from 'react'
import styled, { StyledFunction, css } from 'styled-components'

import { Variables } from '../../../../../common'
import { Anchor, IAnchorProps } from '../../../../Internals/Anchor'

interface IActionLinkProps extends IAnchorProps {
  isActive?: boolean
}

const styledAnchor: StyledFunction<(props: IActionLinkProps) => React.ReactElement> = styled(({isActive, ...props}) => <Anchor {...props}/>)
const StyledMenuItem = styledAnchor`
  padding: 1rem;
  display: block;
  align-items: center;
  line-height: 1;
  text-decoration: none;
  height: 50px;
  color: ${Variables.Color.n700};

  &:hover {
    background-color: ${Variables.Color.n300};
    color: ${Variables.Color.i400};
  }

  ${({isActive}) => {
    if (isActive) {
      return css`
        color: ${Variables.Color.i400};
        border-left: 3px solid ${Variables.Color.i400};
        margin-left: 0;
      `
    }

    return css`
      margin-left: 3px;
    `
  }}
`

const StyledIcon = styled.span<{isActive?: boolean}>`
  margin-right: 0.25rem;
  vertical-align: top;
`

const StyledLoadingIcon = styled.span`
  float: right;
`

const StyledMenuItemLabel = styled.span<{isActive?: boolean, isOpen?: boolean}>`
  margin-left: 7.5px;
  white-space: nowrap;
  vertical-align: top;

  ${({isOpen}) => isOpen && css`
    font-weight: 600;
  `}

  ${({isActive}) => {
    if (isActive) {
      return css`
         font-weight: 600;
        `
    }
  }}
`

export {
  StyledIcon,
  StyledMenuItem,
  StyledLoadingIcon,
  StyledMenuItemLabel
}
