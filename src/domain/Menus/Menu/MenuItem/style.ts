import React from 'react'
import styled, { StyledComponentClass } from 'styled-components'
const { i400, n700, n300 } = require('@Common/sass/variables.scss')

const MenuItemWrapper = styled.li`
  &.active {
    a {
      border-left: 3px solid ${i400};
      color: ${i400};
      font-weight: 600;
      margin-left: 0;
    }
  }

  a, a:focus {
    padding: 1rem;
    display: block;
    align-items: center;
    line-height: 1;
    text-decoration: none;

    color: ${n700};
    margin-left: 3px;
    white-space: nowrap;

    &:hover {
      color: ${n700};
      background-color: ${n300};
      border-left: 3px solid ${n300};
      margin-left: 0;
    }

     &.active {
      border-left: 3px solid ${i400};
      color: ${i400};
      font-weight: 600;
      margin-left: 0;
    }
  }
`

const IconWrapper = styled.span`
  margin-right: 0.2rem;
  width: 1.28571em;
  text-align: center;
  vertical-align: top;
`

const LoadingIconWrapper = styled.span`
  float: right;
`

const SubMenuWrapper = styled.ul`
  margin: 0;

  a, a:focus  {
    padding-left: 2.8rem;
  }
`

export {
  MenuItemWrapper,
  IconWrapper,
  LoadingIconWrapper,
  SubMenuWrapper
}
