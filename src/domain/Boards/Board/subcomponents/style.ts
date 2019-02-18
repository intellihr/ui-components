import styled, { css } from 'styled-components'

import { Props, Variables } from '../../../../common'
import { FontAwesomeIcon, IntelliIcon } from '../../../Icons'
import { UnstyledLink } from '../../../Links/UnstyledLink'
import { Text } from '../../../Typographies/Text'

interface IStyledTileProps {
  tileSize?: Props.TileSize
  isHoverable?: boolean
  isButton?: boolean
  isAdmin?: boolean
}

interface IContentWrapperProps {
  hasTitleLabel?: boolean
}

interface IStyledFigureTextProps {
  textWidth: number
}

interface IButtonDescriptionTextProps {
  hasLongDescription?: boolean
}

const TileStyles = css`
  background-color: ${Variables.Color.n200};
  border-radius: 4px;
  min-height: 300px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.13);
  transition: background-color 0.15s ease-in;
  margin: 0 24px 24px 0;

  ${(props: IStyledTileProps) => props.isHoverable && css`

      :hover {
        background-color: ${Variables.Color.n250};
        transition: .25s ease-out;
      }
    `
  }}

  ${(props: IStyledTileProps) => (props.isHoverable && props.isButton && props.isAdmin) && css`

      background-color: ${Variables.Color.n100};
      border: 1px solid ${Variables.Color.n400};
      border-style: dashed;

      :hover {
        border: 1px solid ${Variables.Color.i400};
        background-color: ${Variables.Color.n100};
        border-style: dashed;
        transition: .25s ease-out;
      }
    `
  }}

  ${(props: IStyledTileProps) => {
    switch (props.tileSize) {
      case Props.TileSize.Small:
        return css`
          width: 210px;
          min-height: 230px;

          @media (max-width: 443px) {
            width: calc(100% - 24px);
          }
        `
      case Props.TileSize.Medium:
        return css`
          width: 286px;

          @media (max-width: 595px) {
            width: calc(100% - 24px);
          }
        `
      case Props.TileSize.Large:
        return css`
          width: calc(100% - 24px);
        `
    }
  }}

  ${(props: IStyledTileProps) => props.isButton && css`
      min-height: 100px;
    `
  }}

`
const StyleTileButton = styled.div`
  ${TileStyles};
  outline: 0;
  position: relative;
`

const StyledAnchorTile = styled(UnstyledLink)`
  ${TileStyles};
  position: relative;
`

const StyledTileLabel = styled.label`
  font-size: ${Variables.FontSize.fzSmall}px;
  line-height: ${Variables.LineHeight.lhSmall}px;
  font-weight: ${Variables.FontWeight.fwHeavy};
  text-transform: uppercase;
  margin-bottom: 4px;
  height: 40px;
  overflow: hidden;
`

const StyledFigureText = styled(Text)`
  ${(props: IStyledFigureTextProps) => {
    return css`
      width: ${props.textWidth}px;
      display: inline-block;
    `
  }}
`

const StyledHeadingText = styled(Text)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`

const HeadingLine = styled.div`
  display: flex;
  align-items: baseline;
`

const HeadingWrapper = styled.div`
  width: 100%;
  display: block;
  align-items: baseline;
  height: 76px;
`

const ContentWrapper = styled.div`
  width: 100%;
  min-height: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: calc(100% - 40px);

   ${(props: IContentWrapperProps) => {
    if (!props.hasTitleLabel) {
      return css`
           min-height: 270px;
        `
    }
  }}
`

const ButtonDescriptionText = styled(Text)`
  display: block;
  height: 40px;
  overflow: hidden;
  position: relative;
  top: -8px;

  ${(props: IButtonDescriptionTextProps) => props.hasLongDescription && css`
      height: 60px;
    `
  }}
`

const ButtonTitleText = styled(Text)`
  width: 100%;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${StyleTileButton}:hover & {
    color: ${Variables.Color.i400};
  }

  ${StyledAnchorTile}:hover & {
    color: ${Variables.Color.i400};
  }
`

const StyledHoverLabel = styled(Text)`
  opacity: 0;
  text-align: right;
  position: absolute;
  bottom: -8px;
  right: 0;
  max-width: 90%;
  text-transform: uppercase;
  padding: 16px;

  ${StyleTileButton}:hover & {
    opacity: 1;
    bottom: 0;
    transition: .25s ease-out;
  }

  ${StyledAnchorTile}:hover & {
    opacity: 1;
    bottom: 0;
    transition: .25s ease-out;
  }

  @media (max-width: 1033px) {
    opacity: 1;
    bottom: 0;
    transition: .25s ease-out;
  }
`

const TileContentWrapper = styled.div`
  height: 100%;
  display: block;
  width: 100%;
  position: relative;
`
const IconStyles = css`
  width: 32px;
  height: auto;
  margin: 6px 16px 0 4px;
  display: inline-block;
`
const StyleFontAwesomeIcon = styled(FontAwesomeIcon)`
  ${IconStyles};
`

const StyledIntelliIcon = styled(IntelliIcon)`
  ${IconStyles};
`

const ButtonWrapper = styled.div`
  display: flex;
  margin-bottom: -8px;
`

const ButtonTextContentWrapper = styled.div`
  width: calc(100% - 60px);
  position: relative;
`
export {
  ButtonTextContentWrapper,
  ButtonWrapper,
  StyleFontAwesomeIcon,
  StyledTileLabel,
  StyleTileButton,
  StyledAnchorTile,
  StyledFigureText,
  StyledIntelliIcon,
  HeadingWrapper,
  StyledHeadingText,
  ContentWrapper,
  HeadingLine,
  ButtonDescriptionText,
  ButtonTitleText,
  StyledHoverLabel,
  TileContentWrapper
}
