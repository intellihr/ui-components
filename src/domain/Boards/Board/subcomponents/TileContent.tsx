import React from 'react'
import { Props, Variables } from '../../../../common'
import {
  StyledFigureText,
  HeadingWrapper,
  StyledHeadingText,
  ContentWrapper,
  IconWrapper,
  HeadingLine,
  StyledTileLabel,
  ButtonContentWrapper,
  ButtonDescriptionText,
  ButtonTitleText,
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
  /** button icon href displayed in the tile */
  iconHref?: string
  /** button title displayed in the tile */
  buttonTitle?:string
  /** button description displayed after button title */
  buttonDescription?: string
}

class TileContent extends React.PureComponent<IBoardTileContentProps, never> {
  public static defaultProps: Partial<IBoardTileContentProps> = {
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

  private get icon (): JSX.Element | null {
    const {
      iconHref
    } = this.props

    if (iconHref) {
      return (
        <IconWrapper src={iconHref} />
      )
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
          color={Variables.Color.i400}
          isInline={false}
        >
          {buttonTitle}
        </ButtonTitleText>
      )
    }

    return null
  }

  private get buttonDescription (): JSX.Element | null {
    const {
      buttonDescription
    } = this.props

    if (buttonDescription) {
      return (
        <ButtonDescriptionText
          type={Props.TypographyType.XSmall}
          color={Variables.Color.n800}
          isInline={false}
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
      buttonTitle
    } = this.props

    if (heading || subheading) {
      return (
        <>
          {children}
        </>

      )
    }

    if (buttonTitle) {
      return this.button
    }

    return (
      <ContentWrapper
        hasTitleLabel={!!label}
      >
        <div>
          {children}
        </div>
      </ContentWrapper>
    )
  }

  private get button (): JSX.Element | null {
    const {
      children
    } = this.props

    return (
      <ButtonContentWrapper>
        <div>
          {this.icon}
          {this.buttonTitle}
          {this.buttonDescription}
          {children}
        </div>
      </ButtonContentWrapper>
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
