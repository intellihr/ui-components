import styled, { css } from 'styled-components'
import { Props, Variables} from '../../../../common'
import { Text } from '../../../Typographies/Text'
import { UnstyledLink } from '../../../Links/UnstyledLink'

interface IStyledTileProps {
  tileSize?: Props.TileSize
  isHoverable?: boolean
}

interface IContentWrapperProps {
  hasTitleLabel?: boolean
}

interface IStyledFigureTextProps {
  textWidth: number
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

const ButtonContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 24px;
`
const ButtonDescriptionText = styled(Text)`
  max-height: 54px;
  overflow: hidden;
  margin: 8px auto;
`

const ButtonTitleText = styled(Text)`
  margin-top: 24px;
  max-height: 48px;
  overflow: hidden;
`
const IconWrapper = styled.img`
  height: 120px;
  display: block;
  margin: 0 auto;
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

export {
  StyledTileLabel,
  StyleTileButton,
  StyledAnchorTile,
  StyledFigureText,
  HeadingWrapper,
  StyledHeadingText,
  ContentWrapper,
  IconWrapper,
  HeadingLine,
  ButtonContentWrapper,
  ButtonDescriptionText,
  ButtonTitleText,
  StyledHoverLabel,
  TileContentWrapper
}
