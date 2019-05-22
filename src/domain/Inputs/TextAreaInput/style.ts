import React from 'react'
import AutosizeTextarea from 'react-autosize-textarea'
import styled, { StyledComponentClass } from 'styled-components'

import { Props, Variables } from '../../../common'

interface IStyledGifButtonProps {
  /** If the popover gif list is opened */
  opened: boolean
}

const StyledAutosizeTextarea = styled(AutosizeTextarea)`
  min-height: 39px;
  resize: none;

  &:disabled,
  &[disabled] {
    color: ${Variables.Color.n600}
  }
`

const StyledGifButton = styled.div<IStyledGifButtonProps>`
 cursor: pointer;
 position: absolute;
 border-radius: ${Variables.Style.borderRadius}px;
 bottom: ${Variables.Spacing.sXSmall}px;
 right: ${Variables.Spacing.sXSmall}px;
 padding: ${Variables.Spacing.s2XSmall}px;
 font-size: ${Variables.FontSize.fzXSmall}px;
 color: ${Variables.Color.n600};
 user-select: none;
 font-weight: bold;
 letter-spacing: 1px;
 background-color: ${(props) => props.opened ? Variables.Color.n250 : undefined};
 color: ${(props) => props.opened ? Variables.Color.n700 : undefined};

 &:hover {
   background-color: ${Variables.Color.n250};
   color: ${Variables.Color.n700};
 }
`

const StyledGifList = styled.div`
  width: 252px;
  padding: 15px;
  border-radius: ${Variables.Style.borderRadius}px;
  background-color: white;
  border: 0.5px solid ${Variables.Color.n400};
  box-shadow: 0px 0px 2px ${Variables.Color.n400};
`

const StyledGifContainer = styled.div`
  margin-bottom: 4px;
`

const StyledScrollArea = styled.div`
  width: 230px;
  height: 400px;
  overflow: scroll;
  cursor: pointer;
`

export {
  StyledAutosizeTextarea,
  StyledGifButton,
  StyledGifList,
  StyledGifContainer,
  StyledScrollArea
}
