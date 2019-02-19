import React from 'react'

import {
  HeadingLine,
  HeadingWrapper,
  StyledFigureLabel,
  StyledHeadinglabel,
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
  /** The displayed color style of heading */
  headingStyle?: 'success' | 'warning' | 'alert' | 'none'
  /** The displayed color style of subheading */
  subheadingStyle?: 'success' | 'warning' | 'alert' | 'none'
}

class FigureTileContent extends React.PureComponent<IBoardFigureTileContentProps, never> {
  public static defaultProps: Partial<IBoardFigureTileContentProps> = {
    headingStyle: 'none',
    subheadingStyle: 'none'
  }

  private get headingFigure (): JSX.Element | null {
    const {
      headingFigure,
      headingStyle
    } = this.props

    if (headingFigure) {
      return (
        <StyledFigureLabel
          isHeading
          labelStyle={headingStyle!}
          textWidth={this.figureTextWidth}
        >
          {headingFigure}
        </StyledFigureLabel>
      )
    }

    return null
  }

  private get heading (): JSX.Element | null {
    const {
      heading,
      headingStyle
    } = this.props

    if (heading) {
      return (
        <StyledHeadinglabel
          isHeading
          labelStyle={headingStyle!}
        >
          {heading}
        </StyledHeadinglabel>
      )
    }

    return null
  }

  private get subheadingFigure (): JSX.Element | null {
    const {
      subheadingFigure,
      subheadingStyle
    } = this.props

    if (subheadingFigure) {
      return (
        <StyledFigureLabel
          labelStyle={subheadingStyle!}
          textWidth={this.figureTextWidth}
        >
          {subheadingFigure}
        </StyledFigureLabel>
      )
    }

    return null
  }

  private get subheading (): JSX.Element | null {
    const {
      subheading,
      subheadingStyle
    } = this.props

    if (subheading) {
      return (
        <StyledHeadinglabel
          labelStyle={subheadingStyle!}
        >
          {subheading}
        </StyledHeadinglabel>
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
      children
    } = this.props

    return (
      <div>
        {children}
      </div>
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
