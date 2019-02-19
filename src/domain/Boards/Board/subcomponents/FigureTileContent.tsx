import React from 'react'

import { Props, Variables } from '../../../../common'
import {
  ButtonDescriptionText,
  ButtonTextContentWrapper,
  ButtonTitleText,
  ButtonWrapper,
  CenteredContentWrapper,
  ChildrenWrapper,
  HeadingLine,
  HeadingWrapper,
  StyleFontAwesomeIcon,
  StyledFigureText,
  StyledHeadingText,
  StyledIntelliIcon,
  StyledTileLabel,
  TileContentWrapper
} from './style'

interface IBoardFigureTileContentProps {
  /** Text displayed above the content of tile */
  label?: string
  /** Text displayed at the top of tile content */
  heading?: string
  /** Text displayed in the heading */
  headingFigure?: string
  /** Text displayed after heading */
  subheading?: string
  /** Text displayed in the subheading */
  subheadingFigure?: string
  /** If true, displays heading in a warning style */
  isHeadingWarning?: boolean
  /** If true, displays subheading in a warning style */
  isSubheadingWarning?: boolean
  /** If yes the tile content would has a margin to ensure the hover label does not overlap with the content */
  hasHoverMargin?: boolean
}

class FigureTileContent extends React.PureComponent<IBoardFigureTileContentProps, never> {
  public static defaultProps: Partial<IBoardFigureTileContentProps> = {
    isHeadingWarning: false,
    isSubheadingWarning: false
  }

  private get headingFigure (): JSX.Element | null {
    const {
      headingFigure,
      isHeadingWarning
    } = this.props

    if (headingFigure) {
      return (
        <StyledFigureText
          type={Props.TypographyType.DisplayLarge}
          color={isHeadingWarning ? Variables.Color.r400 : Variables.Color.n800}
          isUpper
          textWidth={this.figureTextWidth}
        >
          {headingFigure}
        </StyledFigureText>
      )
    }

    return null
  }

  private get heading (): JSX.Element | null {
    const {
      heading,
      isHeadingWarning
    } = this.props

    if (heading) {
      return (
        <StyledHeadingText
          type={Props.TypographyType.Heading}
          color={isHeadingWarning ? Variables.Color.r400 : Variables.Color.n800}
          isUpper
        >
          {heading}
        </StyledHeadingText>
      )
    }

    return null
  }

  private get subheadingFigure (): JSX.Element | null {
    const {
      subheadingFigure,
      isSubheadingWarning
    } = this.props

    if (subheadingFigure) {
      return (
        <StyledFigureText
          type={Props.TypographyType.Display}
          color={isSubheadingWarning ? Variables.Color.r400 : Variables.Color.n800}
          isUpper
          textWidth={this.figureTextWidth}
        >
          {subheadingFigure}
        </StyledFigureText>
      )
    }

    return null
  }

  private get subheading (): JSX.Element | null {
    const {
      subheading,
      isSubheadingWarning
    } = this.props

    if (subheading) {
      return (
        <StyledHeadingText
          type={Props.TypographyType.Small}
          isUpper
          color={isSubheadingWarning ? Variables.Color.r400 : Variables.Color.n800}
        >
          {subheading}
        </StyledHeadingText>
      )
    }

    return null
  }

  private get figureTextWidth (): number {
    const {
      headingFigure,
      subheadingFigure
    } = this.props

    const headingFigureTextLength = headingFigure ? headingFigure.length : 0
    const subheadingFigureTextLength = subheadingFigure ? subheadingFigure.length : 0

    return Math.max(headingFigureTextLength * 20, subheadingFigureTextLength * 15) + 16
  }

  private get headings (): JSX.Element | null {
    const {
      heading,
      subheading
    } = this.props

    if (heading || subheading) {
      return (
        <HeadingWrapper>
          <HeadingLine>
            {this.headingFigure}
            {this.heading}
          </HeadingLine>
          <HeadingLine>
            {this.subheadingFigure}
            {this.subheading}
          </HeadingLine>
        </HeadingWrapper>
      )
    }

    return null
  }

  private get content (): JSX.Element {
    const {
      children,
      hasHoverMargin
    } = this.props

    return (
      <ChildrenWrapper
        hasHoverMargin={hasHoverMargin}
      >
        {children}
      </ChildrenWrapper>
    )
  }

  private get tileLabel (): JSX.Element | null {
    const {
      label
    } = this.props

    if (label) {
      return (
        <StyledTileLabel>
          {label}
        </StyledTileLabel>
      )
    }

    return null
  }

  public render (): JSX.Element {
    return (
      <TileContentWrapper
      >
        {this.tileLabel}
        {this.headings}
        {this.content}
      </TileContentWrapper>
    )
  }
}

export {
  FigureTileContent
}
