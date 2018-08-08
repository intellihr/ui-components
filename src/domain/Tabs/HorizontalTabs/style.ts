import React from 'react'
import styled, { StyledComponentClass } from 'styled-components'
import { getColor } from '@Common/index'

const HorizontalTabsContainer = styled.div``

const HorizontalTabTitles = styled.ul`
  clear: both;
  list-style-type: none;
  margin: 0;
`

const HorizontalTabTitle = styled.li`
  float: left;
`

const HorizontalTabTitleAnchor = styled.a`
  border: 0;
  box-shadow: inset 0 -1px 0 0 ${getColor('neutral-base')};
  color: ${getColor('main-text')};
  display: block;
  font-size: inherit;
  font-weight: 600;
  padding: 15px 20px;
  text-transform: uppercase;
  transition: box-shadow .3s ease, color .3s ease;

  &:hover,
  &:focus {
    background-color: ${getColor('main-background')};
    box-shadow: inset 0 -3px 0 0 ${getColor('neutral-base')};
    color: ${getColor('primary-base')};
  }

  &.active {
    background-color: ${getColor('main-background')};
    border: 0;
    box-shadow: inset 0 -3px 0 0 ${getColor('primary-base')};
    color: ${getColor('primary-base')};
  }

  .left-component {
    margin-right: 5px;
  }

  .right-component {
    margin-left: 5px;
  }
`

const HorizontalTabContent = styled.div`
  border: 1px solid ${getColor('neutral-base')};
  clear: both;
  padding: 1rem;
`

export {
  HorizontalTabsContainer,
  HorizontalTabTitles,
  HorizontalTabTitle,
  HorizontalTabTitleAnchor,
  HorizontalTabContent
}
