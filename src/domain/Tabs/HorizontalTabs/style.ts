import React from 'react'
import styled, { StyledComponentClass } from 'styled-components'
import { Variables } from '../../../common'

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
  box-shadow: inset 0 -1px 0 0 ${Variables.Color.n300};
  color: ${Variables.Color.n700};
  display: block;
  font-size: inherit;
  font-weight: 600;
  padding: 15px 20px;
  text-transform: uppercase;
  transition: box-shadow .3s ease, color .3s ease;

  &:hover,
  &:focus {
    box-shadow: inset 0 -3px 0 0 ${Variables.Color.n300};
    color: ${Variables.Color.i400};
  }

  &.active {
    border: 0;
    box-shadow: inset 0 -3px 0 0 ${Variables.Color.i400};
    color: ${Variables.Color.i400};
  }

  .left-component {
    margin-right: 5px;
  }

  .right-component {
    margin-left: 5px;
  }
`

const HorizontalTabContent = styled.div`
  border: 1px solid ${Variables.Color.n300};
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
