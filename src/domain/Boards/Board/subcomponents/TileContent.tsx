import React from 'react'

import { Props, Variables } from '../../../../common'
import {
  ButtonDescriptionText,
  ButtonTextContentWrapper,
  ButtonTitleText,
  ButtonWrapper,
  ChildrenWrapper,
  ContentWrapper,
  HeadingLine,
  HeadingWrapper,
  StyleFontAwesomeIcon,
  StyledFigureText,
  StyledHeadingText,
  StyledIntelliIcon,
  StyledTileLabel,
  TileContentWrapper
} from './style'

interface IBoardTileContentProps {
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
  /** If true, displays icon in intelliIcon set. If false, displays icon in fontawesome set */
  isIntelliIcon?: boolean
  /** button icon displayed in the tile */
  icon?: string
  /** button title displayed in the tile */
  buttonTitle?: string
  /** button description displayed after button title */
  buttonDescription?: string
  /** If yes the tile content would has a margin to ensure the hover label does not overlap with the content */
  hasHoverMargin?: boolean
  /** If yes the tile content would in admin style */
  isAdmin?: boolean
  /** If yes the tile content would in button style */
  isButton?: boolean
}

class TileContent extends React.PureComponent<IBoardTileContentProps, never> {
  public static defaultProps: Partial<IBoardTileContentProps> = {
    isHeadingWarning: false,
    isSubheadingWarning: false,
    isIntelliIcon: false
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

  private get icon (): JSX.Element | null {
    const {
      isIntelliIcon,
      icon
    } = this.props

    const IconTag = isIntelliIcon ? StyledIntelliIcon : StyleFontAwesomeIcon

    if (icon) {

        return <IconTag type={icon} color={Variables.Color.i300} size='xlarge' />
    }

    return null
  }

  private get buttonTitle (): JSX.Element | null {
    const {
      buttonTitle
    } = this.props

    if (buttonTitle) {
      return (
        <ButtonTitleText
          type={Props.TypographyType.Body}
          color={Variables.Color.n700}
        >
          {buttonTitle}
        </ButtonTitleText>
      )
    }

    return null
  }

  private get buttonDescription (): JSX.Element | null {
    const {
      buttonDescription,
      isAdmin
    } = this.props

    if (buttonDescription) {
      return (
        <ButtonDescriptionText
          type={Props.TypographyType.Small}
          color={Variables.Color.n600}
          hasLongDescription={isAdmin && buttonDescription.length > 48}
        >
          {buttonDescription}
        </ButtonDescriptionText>
      )
    }

    return null
  }

  private get content (): JSX.Element | null {
    const {
      heading,
      subheading,
      children,
      label,
      hasHoverMargin,
      isButton
    } = this.props

    if (heading || subheading) {
      return (
        <ChildrenWrapper
          hasHoverMargin={hasHoverMargin}
        >
          {children}
        </ChildrenWrapper>
      )
    }

    if (isButton) {
      return this.button
    }

    return (
      <ContentWrapper
        hasTitleLabel={!!label}
        hasHoverMargin={hasHoverMargin}
      >
        <div>
          {children}
        </div>
      </ContentWrapper>
    )
  }

  private get button (): JSX.Element | null {
    const {
      hasHoverMargin
    } = this.props

    return (
      <ButtonWrapper
        hasHoverMargin={hasHoverMargin}
      >
        {this.icon}
        <ButtonTextContentWrapper>
        {this.buttonTitle}
        {this.buttonDescription}
        </ButtonTextContentWrapper>
      </ButtonWrapper>
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
  TileContent
}
