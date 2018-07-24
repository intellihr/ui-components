import React from 'react'
import styled, { StyledComponentClass } from 'styled-components'
import { getColor } from '../Color'

const MenuItemWrapper = styled.li`
  &.active {
    a {
      border-left: 3px solid ${getColor('primary')};
      color: ${getColor('primary')};
      font-weight: 600;
      margin-left: 0;
    }
  }
`

const MenuItemAnchorWrapper = styled.a`
  padding: 1rem;
  display: block;
  align-items: center;
  line-height: 1;
  text-decoration: none;
  
  color: ${getColor('sidebar-text')};
  margin-left: 3px;
  white-space: nowrap;

  &:hover {
    color: ${getColor('sidebar-text')};
    background-color: ${getColor('neutral')};
    border-left: 3px solid ${getColor('neutral')};
    margin-left: 0;
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

const MenuWrapper = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  position: relative;
  
  li {
    display: block;
  }

  .Collapsible__trigger {
    a {
      position: relative;

      &::after {
        content: '\\e920';
        display: inline-block;
        font-family: 'intellihr';
        position: absolute;
        right: 1rem;
      }
    }

    &.is-open {
      a {
        font-weight: 600;

        &::after {
          font-weight: initial;
          transform: rotate(180deg);
        }
      }
    }
  }
`

const SubMenuWrapper = styled.ul`
  margin: 0;
  
  a {
    padding-left: 2.8rem;
  }
`

export {
  MenuItemWrapper,
  MenuItemAnchorWrapper,
  IconWrapper,
  LoadingIconWrapper,
  MenuWrapper,
  SubMenuWrapper
}
