import React from 'react'
import styled, { StyledComponentClass } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 40px;
  width: 300px;
  &:hover {
    color: rgb(67, 45, 243);
    cursor: pointer;
  }
`

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`

export const HelpContentBox = styled.div`
  margin: 10px 0 15px 0;
`

export const IconBox = styled.div`
  font-size: 10px;
`
