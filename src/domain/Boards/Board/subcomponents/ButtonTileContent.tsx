import React from 'react'

import { Variables } from '../../../../common'
import { FontAwesomeIcon, FontAwesomeIconValue, IconValue, IntelliIcon, IntelliIconValue } from '../../../Icons'
import {
  ButtonDescriptionLabel,
  ButtonTextContentWrapper,
  ButtonWrapper,
  StyledIconWrapper,
  StyledTileLabel,
  TileContentWrapper
} from './style'

interface IBoardButtonTileContentProps {
  /** Text displayed above the content of tile */
  label?: string
  /**
   * Intelli icon type displayed in the tile. If `fontAwesomeIcon` is
   * provided as well `intelliIcon` will take precedence
   */
  intelliIcon?: IntelliIconValue
  /**
   * FontAwesome icon type displayed in the tile. Will not display if an `intelliIcon`
   * is provided
   */
  fontAwesomeIcon?: {
    type: 'solid' | 'light' | 'regular'
    icon: FontAwesomeIconValue
  }
  /** button description displayed after button title */
  buttonDescription?: string
}

class ButtonTileContent extends React.PureComponent<IBoardButtonTileContentProps, never> {

  private get icon (): JSX.Element | null {
    const {
      intelliIcon,
      fontAwesomeIcon
    } = this.props

    const color = Variables.Color.i300
    const size = 'xlarge'

    if (intelliIcon) {
      return (
        <StyledIconWrapper>
          <IntelliIcon
            icon={intelliIcon}
            color={color}
            size={size}
          />
        </StyledIconWrapper>
      )
    }

    if (fontAwesomeIcon) {
      const { type, icon } = fontAwesomeIcon
      return (
        <StyledIconWrapper>
          <FontAwesomeIcon
            type={type}
            icon={icon}
            color={color}
            size={size}
          />
        </StyledIconWrapper>
      )
    }

    return null
  }

  private get buttonTitle (): JSX.Element | null {
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

  private get buttonDescription (): JSX.Element | null {
    const {
      buttonDescription
    } = this.props

    if (buttonDescription) {
      return (
        <ButtonDescriptionLabel>
          {buttonDescription}
        </ButtonDescriptionLabel>
      )
    }

    return null
  }

  private get content (): JSX.Element | null {
    return (
      <ButtonWrapper>
        {this.icon}
        <ButtonTextContentWrapper>
          {this.buttonTitle}
          {this.buttonDescription}
        </ButtonTextContentWrapper>
      </ButtonWrapper>
    )
  }

  public render (): JSX.Element {
    const {
      label
    } = this.props

    return (
      <TileContentWrapper
        title={label}
      >
        {this.content}
      </TileContentWrapper>
    )
  }
}

export {
  ButtonTileContent
}
