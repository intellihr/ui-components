import styled, { StyledFunction, css } from 'styled-components'

import { Variables } from '../../../common'
import { UnstyledLink } from '../../Links'
import { IUnstyledLinkProps } from '../../Links/UnstyledLink'

interface IStyledSuggestableTextInputProps {
  displayClearButton: boolean
}

interface IStyledTextInputProps {
  displaySuggestions: boolean
}

const StyledSuggestableTextInput = styled.div<IStyledSuggestableTextInputProps>`
  position: relative;
  color: ${Variables.Color.n800};
  width: 100%;

  ${({ displayClearButton }) => displayClearButton && css`
      input {
        padding-right: ${Variables.Spacing.sXLarge}px;
      }
  `}

`

const StyledTextInput = styled.input<IStyledTextInputProps>`
  line-height: 16px;
  margin: 0;

  ${
    ({ displaySuggestions }) => displaySuggestions && css`
      &, &:focus {
        border-color: ${Variables.Color.n300};
        border-bottom: 0;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    `
  }

  &::-ms-clear {
    display: none;
  }
`

const StyledClearButton = styled.button`
  position: absolute;
  top: 11px;
  right: ${Variables.Spacing.sSmall}px;
  outline: none;
  cursor: pointer;

  &:hover {
    color: ${Variables.Color.r600};
  }
`

const StyledSuggestions = styled.div`
  background-color: ${Variables.Color.n100};
  border: 1px solid ${Variables.Color.n300};
  border-radius: ${Variables.Style.borderRadius}px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
`

interface IStyledSuggestion extends IUnstyledLinkProps {
  active: boolean
  hidden: boolean
}

const styledUnstyledLink: StyledFunction<(props: IStyledSuggestion) => React.ReactElement> = styled(UnstyledLink)

const StyledSuggestion = styledUnstyledLink`
  display: block;
  padding: ${Variables.Spacing.sXSmall}px;

  ${
    ({ active }) => active && css`
      background-color: ${Variables.Color.n150};
    `
  }

  ${
    ({ hidden }) => hidden && css`
      display: none;
    `
  }

  &:hover,
  &:focus {
    background-color: ${Variables.Color.n150};
  }
`

export {
  StyledSuggestableTextInput,
  StyledTextInput,
  StyledClearButton,
  StyledSuggestions,
  StyledSuggestion
}
