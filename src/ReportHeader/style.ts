import React from 'react'
import styled, { StyledComponentClass } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 40px;
  width: 300px;
  padding: 5px;

  &:hover {
    color: rgb(15, 104, 250);
    cursor: pointer;
  }
`

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
`

export const HelpContentBox = styled.div`
  margin: 10px 0 15px 0;
`

export const IconBox = styled.div`
  font-size: 10px;
`

export const ArrowIcon = styled.i`
  transform: rotate(180deg);
`

export const IconText = styled.span`
  padding: 0 10px;
`
