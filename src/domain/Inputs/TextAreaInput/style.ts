import AutosizeTextarea from 'react-autosize-textarea'
import styled from 'styled-components'

import { Variables } from '../../../common'

interface IStyledGifButtonProps {
  /** If the popover gif list is opened */
  opened: boolean
}

interface IStyledAutosizeTextArea {
  gifsEnabled: boolean
}

const StyledMainGifContainer = styled.div`
  border: 1px solid ${Variables.Color.n400};
  border-radius: 0 0 4px 4px;
  padding: ${Variables.Spacing.sSmall}px;
  background-color: ${Variables.Color.n150};
  min-height: ${Variables.Spacing.s2XLarge}px;
  transition: border-color 0.3s ease-in-out;
  display: flex;
  justify-content: center;
`

const StyledAutosizeTextarea = styled(AutosizeTextarea)<IStyledAutosizeTextArea>`
  min-height: 39px;
  resize: none;
  margin-bottom: ${(props) => props.gifsEnabled ? 0 : undefined};
  border-radius: ${(props) => props.gifsEnabled ? '4px 4px 0 0' : undefined};
  border-bottom: ${(props) => props.gifsEnabled ? 'none' : undefined};

  &:focus {
    border-bottom: ${(props) => props.gifsEnabled ? 'none' : undefined};
  }

  &:focus + ${StyledMainGifContainer} {
    border-color: ${Variables.Color.i400};
    border-top-color: ${Variables.Color.n400}
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
 /* This needs to be 6px, otherwise it look uggo */
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
  margin-bottom: 4px;
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

export {
  StyledAutosizeTextarea,
  StyledGifButton,
  StyledGifList,
  StyledGifContainer,
  StyledScrollArea,
  StyledMainGifContainer,
  StyledGif,
  StyledTextAreaContainer
}
