import styled, { css } from 'styled-components'

import { Variables } from '../../../common'

export interface IExpandComponentWrapperProps {
  isExpanded: boolean
}

export interface ICardWrapperProps {
  isExpanded: boolean,
  hasHoverStyle: boolean
}

export interface IStyleToggleButtonProps {
  isExpanded: boolean,
  hasParentHoverStyle: boolean
}

const CardWrapper = styled.div`
  height: auto;
  margin-bottom: 8px;
  padding: ${Variables.Spacing.sMedium}px ${Variables.Spacing.sMedium}px ${Variables.Spacing.sMedium}px ${Variables.Spacing.sMedium}px
  background-color: ${Variables.Color.n100};
  border: 1px solid ${Variables.Color.n250};
  border-radius: ${Variables.Style.borderRadius}px;
  transition: background-color .25s ease-out;
  transition: height .5s;
  cursor: pointer;

  ${(props: ICardWrapperProps) => props.hasHoverStyle && css`
      &:hover {
      background-color: ${Variables.Color.n200};
    }
  `}

  ${(props: ICardWrapperProps) => {
      if (props.isExpanded) {
        return css`
          animation-name: animate-out;
          animation-duration: 0.5s;
          animation-iteration-count: 1;
          animation-direction: alternate;
          animation-timing-function: ease-in-out;
          animation-fill-mode: both;
          animation-delay: 0s;
        `
      }

      return css`
          animation-name: animate-in;
          animation-duration: 0.6s;
          animation-iteration-count: 1;
          animation-direction: normal;
          animation-timing-function: ease-in;
          animation-fill-mode: both;
          animation-delay: 0s;
        `
  }}
`

const ButtonStyle = css`
  outline: none;
  color: ${Variables.Color.n600};
  width: 28px;
  height: 28px;
  border-radius: 50%;

  &:hover {
    color: ${Variables.Color.n800};
    background-color: ${Variables.Color.n300};
  }
`

const StyleToggleButton = styled.button`
  ${ButtonStyle};

  ${(props: IStyleToggleButtonProps) => props.isExpanded && css`
      transform: rotate(180deg);
  `}

  ${(props: IStyleToggleButtonProps) => props.hasParentHoverStyle && css`
    ${CardWrapper}:hover & {
      color: ${Variables.Color.n800};
      background-color: ${Variables.Color.n300};
    }
  `}
`

const StyleActionButton = styled.button`
  ${ButtonStyle};

  &:hover ${StyleToggleButton} {
    background-color: transparent;
    color: ${Variables.Color.n600};
  }

  &:hover ${CardWrapper} {
    background-color: ${Variables.Color.n100};
  }
`

const ExpandComponentWrapper = styled.div`
  display: none;

  ${(props: IExpandComponentWrapperProps) => props.isExpanded && css`
      display: block;
  `}
`


export {
  CardWrapper,
  ExpandComponentWrapper,
  StyleActionButton,
  StyleToggleButton
}
