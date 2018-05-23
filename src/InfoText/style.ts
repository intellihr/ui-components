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

