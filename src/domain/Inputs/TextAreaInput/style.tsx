import React from 'react'
import AutosizeTextarea from 'react-autosize-textarea'
import styled, { StyledFunction } from 'styled-components'

import { Variables } from '../../../common'

interface IStyledGifButtonProps {
  /** If the popover gif list is opened */
  opened: boolean
}

interface IStyledAutosizeTextAreaProps {
  /** If the necessary props are passed in to enable gifs */
  gifsEnabled: boolean
  /** If a gif has been selected */
  hasGif: boolean
}

const StyledMainGifContainer = styled.div`
  display: flex;
  min-height: ${Variables.Spacing.s2XLarge}px;
  border: 1px solid ${Variables.Color.n400};
  border-top: none;
  border-radius: 0 0 ${Variables.Style.borderRadius}px ${Variables.Style.borderRadius}px;
  padding: ${Variables.Spacing.sSmall}px;
  background-color: ${Variables.Color.n150};
  transition: border-color 0.3s ease-in-out;
  justify-content: center;
  align-items: flex-start;
`

const textArea: StyledFunction<IStyledAutosizeTextAreaProps> = styled(({ hasGif, gifsEnabled, ...rest }) => <AutosizeTextarea {...rest} />)

const StyledAutosizeTextarea = textArea`
  min-height: 39px;
  resize: none;
  margin-bottom: ${(props) => props.gifsEnabled ? 0 : undefined};
  border-radius: ${(props) => props.gifsEnabled && props.hasGif ? `${Variables.Style.borderRadius}px ${Variables.Style.borderRadius}px 0 0` : undefined};
  /**
  * Don't want a border bottom on the text area when there is a gif,
  * but need to assign '0px solid <color>' instead of 'none' to keep the color from flickering
  * from black to n400 when a gif is removed.
  */
  border-bottom: ${(props) => props.gifsEnabled && props.hasGif ? '0px solid' + Variables.Color.n400 : undefined};

  &:focus {
    border-bottom: ${(props) => props.gifsEnabled && props.hasGif ? 'none' : undefined};
  }

  &:focus + ${StyledMainGifContainer} {
    border-color: ${Variables.Color.i400};
  }

  &:disabled,
  &[disabled] {
    color: ${Variables.Color.n600}
  }
`

const StyledGifButton = styled.div<IStyledGifButtonProps>`
 cursor: pointer;
 position: absolute;
 border-radius: ${Variables.Style.borderRadius}px;
 /* This needs to be 6px, otherwise it look tragic */
 bottom: 6px;
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
  width: 245px;
  padding: ${Variables.Spacing.sSmall}px;
  border-radius: ${Variables.Style.borderRadius}px;
  background-color: white;
  border: 0.5px solid ${Variables.Color.n400};
  box-shadow: 0px 0px 2px ${Variables.Color.n400};
`

const StyledGifContainer = styled.div`
  margin-bottom: ${Variables.Spacing.s2XSmall}px;
`

const StyledScrollArea = styled.div`
  width: 230px;
  height: 400px;
  overflow: scroll;
  cursor: pointer;
`

const StyledGif = styled.img`
  border-radius: ${Variables.Style.borderRadius}px;
  height: 120px;
`

const StyledTextAreaContainer = styled.div`
  position: relative;
`

const StyledRemoveButton = styled.div`
  cursor: pointer;
  margin-left: ${Variables.Spacing.sSmall}px;
  color: ${Variables.Color.n500};
  font-size: ${Variables.FontSize.fzSmall}px;

  &:hover {
    color: ${Variables.Color.r400};
  }
`

export {
  StyledAutosizeTextarea,
  StyledGifButton,
  StyledGifContainer,
  StyledGif,
  StyledGifList,
  StyledMainGifContainer,
  StyledRemoveButton,
  StyledScrollArea,
  StyledTextAreaContainer
}
