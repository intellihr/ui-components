import React from 'react'
import styled, { StyledFunction, css } from 'styled-components'

import {Utils, Variables} from '../../../../common'
import { Anchor, IAnchorProps } from '../../../Internals/Anchor'
import {
  CenteredContentHeading,
  CenteredContentImageWrapper,
  CenteredContentSubheading
} from './styles/centeredTileContent'

interface IStyledTileProps {
  tileSize: 'small'|'medium'|'fullWidth'
  isHoverable: boolean
  isButton: boolean
  type: 'default'|'hollow'|'card'
  hasHoverLabel: boolean
}

interface IStyledHeadingLabelProps {
  isHeading?: boolean
  labelStyle: 'success' | 'warning' | 'alert' | 'none'
}

interface IStyledFigureLabelProps {
  isHeading?: boolean
  textWidth: number
  labelStyle: 'success' | 'warning' | 'alert' | 'none'
}

const TileStyles = css`
  border-radius: ${Variables.Style.borderRadius}px;
  min-height: 300px;
  padding: ${Variables.Spacing.sMedium}px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.13);
  margin: 0 ${Variables.Spacing.sLarge}px ${Variables.Spacing.sLarge}px 0;

  ${(props: IStyledTileProps) => {
    if (props.type === 'card') {
      return css`
        background-color: ${Variables.Color.n100};
        box-shadow: 0 0 8px ${Variables.Color.n300};

        ${props.isHoverable && css`
          cursor: pointer;
          transition: transform 0.15s ease-in, color 0.15s ease-in, box-shadow 0.15s ease-in;

          :hover {
            transform: translateY(-8px);
            box-shadow: 0 4px 10px 4px ${Variables.Color.n300};
          }
        `}
      `
    }

    if (props.type === 'hollow') {
      return css`
        background-color: ${Variables.Color.n100};
        border: 1px dashed ${Variables.Color.n400};

        ${props.isHoverable && css`
          cursor: pointer;
          transition: background-color 0.15s ease-in, border-color 0.15s ease-in;

          :hover {
            border: 1px dashed ${Variables.Color.i400};
            background-color: ${Variables.Color.n100};
          }
        `}
      `
    }

    return css`
      background-color: ${Variables.Color.n200};

      ${props.isHoverable && css`
        cursor: pointer;
        transition: background-color 0.15s ease-in, border-color 0.15s ease-in;

        :hover {
          background-color: ${Variables.Color.n250};
        }
      `}
    `
  }}

  ${(props: IStyledTileProps) => {
    switch (props.tileSize) {
      case 'small':
        return css`
          width: 210px;
          min-height: 230px;

          @media (max-width: 443px) {
            width: calc(100% - ${Variables.Spacing.sLarge}px);
          }
        `
      case 'medium':
        return css`
          width: 370px;

          @media (max-width: 595px) {
            width: calc(100% - ${Variables.Spacing.sLarge}px);
          }
        `
      case 'fullWidth':
        return css`
          width: calc(100% - ${Variables.Spacing.sLarge}px);
        `
    }
  }}

  ${(props: IStyledTileProps) => props.isButton && css`
      min-height: 100px;
    `
  }}

  ${(props: IStyledTileProps) => props.hasHoverLabel && css`
      padding-bottom: ${Variables.Spacing.s3XLarge}px;
    `
  }}
  &:hover {
    ${(props: IStyledTileProps) => props.isHoverable && css`
      ${StyledTileLabel} {
        color: ${Variables.Color.i400};
      }

      ${CenteredContentHeading} {
        color: ${Variables.Color.i500};
      }

      ${CenteredContentSubheading} {
        color: ${Variables.Color.i500};
      }

      ${CenteredContentImageWrapper} {
        background-color: ${Variables.Color.n200};
        color: ${Variables.Color.i500};
      }
   `}
  }
`

const StyledTile = styled.div`
  ${TileStyles};
  outline: 0;
  position: relative;
`

const styledAnchor: StyledFunction<IStyledTileProps & IAnchorProps> = styled(
  (
    {
      tileSize,
      isHoverable,
      isButton,
      type,
      hasHoverLabel,
      ...rest
    }) => <Anchor {...rest} />
)

const StyledAnchorTile = styledAnchor`
  &,
  &:link,
  &:visited,
  &:hover,
  &:active {
    color: inherit;
  }

  ${TileStyles};
  position: relative;
`

const StyledTileLabel = styled.span`
  font-size: ${Variables.FontSize.fzBody}px;
  line-height: ${Variables.LineHeight.lhBody}px;
  color: ${Variables.Color.n700};
  width: 100%;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${Utils.mediaQueryBetweenSizes({ maxPx: Variables.Breakpoint.breakpointTablet })} {
    text-align: center;
  }
`

const StyledFigureLabel = styled.span`
  ${(props: IStyledFigureLabelProps) => {
    switch (props.labelStyle) {
      case 'success':
        return css`
            color: ${Variables.Color.g400};
          `
      case 'warning':
        return css`
            color: ${Variables.Color.o400};
          `
      case 'alert':
        return css`
            color: ${Variables.Color.r400};
          `
      case 'none':
        return css`
            color: ${Variables.Color.n800};
          `
    }
  }}

  ${(props: IStyledFigureLabelProps) => {
    return css`
      width: ${props.textWidth}px;
      display: inline-block;
      font-size: ${Variables.FontSize.fzDisplay}px;
      line-height: ${Variables.LineHeight.lhDisplay}px;
      font-weight: ${Variables.FontWeight.fwHeavy};
      text-transform: uppercase;
    `
  }}

  ${(props: IStyledFigureLabelProps) => props.isHeading && css`
      font-size: ${Variables.FontSize.fzDisplayLarge}px;
      line-height: ${Variables.LineHeight.lhDisplayLarge}px;
    `
  }}
`

const StyledHeadinglabel = styled.span`
  font-size: ${Variables.FontSize.fzSmall}px;
  line-height: ${Variables.LineHeight.lhSmall}px;
  font-weight: ${Variables.FontWeight.fwHeavy};
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;

  ${(props: IStyledHeadingLabelProps) => {
  switch (props.labelStyle) {
    case 'success':
      return css`
            color: ${Variables.Color.g400};
          `
      case 'warning':
        return css`
            color: ${Variables.Color.o400};
          `
      case 'alert':
        return css`
            color: ${Variables.Color.r400};
          `
      case 'none':
        return css`
            color: ${Variables.Color.n800};
          `
    }
  }}

  ${(props: IStyledHeadingLabelProps) => props.isHeading && css`
      font-size: ${Variables.FontSize.fzHeading}px;
      line-height: ${Variables.LineHeight.lhHeading}px;
    `
  }}
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

const ButtonDescriptionLabel = styled.span`
  font-size: ${Variables.FontSize.fzSmall}px;
  line-height: ${Variables.LineHeight.lhSmall}px;
  color: ${Variables.Color.n600};
  display: block;
  height: 60px;
  overflow: hidden;
  position: relative;
  top: -${Variables.Spacing.sXSmall}px;

  @media (max-width: 600px) {
    text-align: center;
  }
`

const StyledHoverLabel = styled.span`
  font-size: ${Variables.FontSize.fzBody}px;
  line-height: ${Variables.LineHeight.lhBody}px;
  color: ${Variables.Color.i400};
  font-weight: ${Variables.FontWeight.fwHeavy};
  opacity: 0;
  text-align: right;
  position: absolute;
  bottom: -${Variables.Spacing.sXSmall}px;
  right: 0;
  max-width: 90%;
  padding: ${Variables.Spacing.sMedium}px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${StyledTile}:hover & {
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
const StyledIconWrapper = styled.div`
  width: ${Variables.Spacing.sXLarge}px;
  height: auto;
  margin: ${Variables.Spacing.s2XSmall}px ${Variables.Spacing.sMedium}px ${Variables.Spacing.sMedium}px 0;
  display: inline-block;
`

const ButtonWrapper = styled.div`
  display: flex;
  margin-bottom: -${Variables.Spacing.sXSmall}px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`

const ButtonTextContentWrapper = styled.div`
  width: calc(100% - 56px);
  position: relative;

  @media (max-width: 600px) {
    width: calc(100% - 8px);
  }
`
export {
  ButtonTextContentWrapper,
  ButtonWrapper,
  StyledIconWrapper,
  StyledTile,
  StyledTileLabel,
  StyledAnchorTile,
  StyledFigureLabel,
  HeadingWrapper,
  StyledHeadinglabel,
  HeadingLine,
  ButtonDescriptionLabel,
  StyledHoverLabel,
  TileContentWrapper
}
