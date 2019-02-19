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

interface IBoardButtonTileContentProps {
  /** Text displayed above the content of tile */
  label?: string
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
}

class ButtonTileContent extends React.PureComponent<IBoardButtonTileContentProps, never> {
  public static defaultProps: Partial<IBoardButtonTileContentProps> = {
    isIntelliIcon: false
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
        {this.content}
      </TileContentWrapper>
    )
  }
}

export {
  ButtonTileContent
}
