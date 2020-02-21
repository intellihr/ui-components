import styled, { css } from 'styled-components'

import { Props, Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'
import { styleForTruncatedText, styleForTypographyType } from '../../Typographies/services/textStyles'

export interface IAvatarTile {
  hovered: boolean
}

export interface IStyledContainer extends IAvatarTile {
  onMouseEnter: () => void
  onMouseLeave: () => void
  margins?: Props.IMargins
  displayStatusBanner: boolean
}

export interface IStyledStatusBanner extends IAvatarTile {
  statusColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'alert' | 'neutral' | 'highlight' | 'dark'
}

export interface IStyledDropdownMenu {
  displayStatusBanner: boolean
}

export interface IStyledJobNameContainer {
  displayJobCount: boolean
}

const StyledStatusBanner = styled.div`
  position: absolute;
  width: 260px;
  height: 22px;
  border-radius: 8px 8px 0px 0px;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: ease-in .2s;
  transform: translateY(-30px);

  ${(props: IStyledStatusBanner) => {
    if (props.statusColor) {
      switch (props.statusColor) {
        case 'primary':
          return css`
            background-color: ${Variables.Color.i400};
          `
        case 'secondary':
          return css`
            background-color: ${Variables.Color.b400};
          `
        case 'success':
          return css`
            background-color: ${Variables.Color.g400};
          `
        case 'warning':
          return css`
            background-color: ${Variables.Color.o400};
          `
        case 'alert':
          return css`
            background-color: ${Variables.Color.r400};
          `
        case 'neutral':
          return css`
            background-color: ${Variables.Color.n500};
          `
        case 'highlight':
          return css`
            background-color: ${Variables.Color.c400};
          `
        case 'dark':
          return css`
            background-color: ${Variables.Color.n700};
          `
      }
    }
  }}
`

const StyledDropdownMenu = styled.div`
  position: absolute;
  right: 4px;

  ${(props: IStyledDropdownMenu) => {
    if (props.displayStatusBanner) {
      return css`
        top: 26px;
      `
    }

    return css`
      top: 4px;
    `
  }}
`

const StyledDropdownButton = styled.div`
  color: ${Variables.Color.n700};
  cursor: pointer;
  outline: none;
  padding: 6px 0px 4px 0px;
  border-radius: 8px;

  &:hover {
    background-color: ${Variables.Color.c200};
  }

  &:active {
    background-color: ${Variables.Color.c300};
  }

  &:focus {
    background-color: ${Variables.Color.c200};
    border-color: ${Variables.Color.c400};
  }

  .icon {
    font-size: 1.5rem;
    line-height: 1;
    width: 1.3em;
  }
`

const StyledAvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: ease-in .2s;
  pointer-events: none;
  margin-top: 55px;
  margin-bottom: 4px;
`

const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: ease-in .2s;
  pointer-events: none;
`

const StyledPersonNameContainer = styled.span`
  max-width: 220px;
  font-weight: ${Variables.FontWeight.fwSemiBold};
  color: ${Variables.Color.n800};
  ${styleForTruncatedText()}

  ${(props: IAvatarTile) => {
    if (props.hovered) {
      return css`
        ${styleForTypographyType(Props.TypographyType.Small)}
        transition: ease-out .15s;
      `
    }

    return css`
      ${styleForTypographyType(Props.TypographyType.Body)}
      transition: ease-in 0.2s;
    `
  }}
`

const StyledJobContainer = styled.div`
  max-width: 220px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const StyledJobNameContainer = styled.span`
  display: block;
  color: ${Variables.Color.n800};
  ${styleForTypographyType(Props.TypographyType.XSmall)}
  ${styleForTruncatedText()}

  ${(props: IStyledJobNameContainer) => {
    if (props.displayJobCount) {
      return css`
        max-width: 185px;
      `
    }
  }}
`

const StyledActionArea = styled.div`
  border-radius: 8px 8px 0px 0px;
  height: 162px;
  width: 260px;
  position: absolute;
  top: 0px;

  ${(props: IAvatarTile) => {
    if (props.hovered) {
      return css`
        background-color: ${Variables.Color.c100};

        &:hover {
          background-color: ${Variables.Color.c200};
        }
      `
    }
  }}
`

const StyledContentContainer = styled.div`
  height: 116px;
  padding: 16px;
  transition: ease-in .2s;
  transform: translateY(70px);
`

const StyledContainer = styled.div`
  position: relative;
  background-color: ${Variables.Color.n100};
  width: 260px;
  height: 278px;
  border-radius: 8px;
  transition: ease-in 0.2s;
  overflow: hidden;

  ${(props: IStyledContainer) => styleForMargins(props.margins)}

  ${(props: IStyledContainer) => {
    if (props.hovered) {
      return css`
        ${StyledStatusBanner} {
          transform: translateY(0px);
          transition: ease-out .15s;
        }

        ${StyledContentContainer} {
          transform: translateY(-60px);
          transition: ease-out .15s;
        }

        ${StyledAvatarContainer} {
          transform: scale(0.6) translateY(-80px);
          transition: ease-out 0.15s;
        }

        ${StyledTitleContainer} {
          transform: translateY(-74px);
          transition: ease-out 0.15s;
        }
      `
    }
  }}

  ${(props: IStyledContainer) => {
    if (props.hovered && props.displayStatusBanner) {
      return css`
        ${StyledAvatarContainer} {
          transform: scale(0.6) translateY(-72px);
        }

        ${StyledTitleContainer} {
          transform: translateY(-66px);
        }
      `
    }
  }}
`

export {
  StyledStatusBanner,
  StyledDropdownMenu,
  StyledDropdownButton,
  StyledAvatarContainer,
  StyledTitleContainer,
  StyledPersonNameContainer,
  StyledJobContainer,
  StyledJobNameContainer,
  StyledActionArea,
  StyledContentContainer,
  StyledContainer
}
