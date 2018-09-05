import React from 'react'
import styled, { StyledComponentClass } from 'styled-components'
import { Variables } from '../../../common'

const TabGroupContainer = styled.div`
  align-items: center;
  border-bottom: solid 1px ${Variables.Color.n300};
  display: flex;
  flex-wrap: nowrap;
  height: 41px;
  width: 100%;
`

const TabChevronButton = styled.button`
  color: ${Variables.Color.n700};
  cursor: pointer;
  display: block;
  flex-grow: 0;
  height: 100%;
  line-height: ${Variables.LineHeight.lhBody}px;
  outline: none;
  text-align: center;

  &:hover,
  &:focus {
    color: ${Variables.Color.i400};
  }

  &:disabled {
    color: ${Variables.Color.n400};
    cursor: not-allowed;
  }
  
  .fa {
    margin: 0;
  }
`

const TabList = styled.ul`
  clear: both;
  display: flex;
  flex-grow: 1;
  list-style-type: none;
  height: 100%;
  margin: 0;
  overflow-x: scroll;
  position: relative;
  
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  
  &::-webkit-scrollbar {
    background: transparent;
    width: 0;
  }
`

const TabListItem = styled.li`
  align-items: center;
  display: flex;
  flex-basis: auto;
  height: 100%;
`

const TabListItemAnchor = styled.a`
  align-items: center;
  color: ${Variables.Color.n600};
  display: flex;
  font-size: ${Variables.FontSize.fzBody}px;
  font-weight: ${Variables.FontWeight.fwMedium};
  line-height: ${Variables.LineHeight.lhBody}px;
  height: 100%;
  margin: 0 16px;
  outline: none;
  text-align: center;
  white-space: nowrap;

  &:hover,
  &:focus,
  &.active{
    color: ${Variables.Color.i400};
  }

  .left-component {
    margin-right: 5px;
  }

  .right-component {
    margin-left: 5px;
  }
`

export {
  TabGroupContainer,
  TabChevronButton,
  TabList,
  TabListItem,
  TabListItemAnchor
}
