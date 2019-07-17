import React from 'react'

import { FontAwesomeIcon, FontAwesomeIconValue, IntelliIcon, IntelliIconValue } from '../../../Icons'
import { StyledTileLabel, TileContentWrapper } from './style'
import {
  CenteredContentChildrenWrapper,
  CenteredContentDescription,
  CenteredContentHeading,
  CenteredContentImage,
  CenteredContentImageWrapper,
  CenteredContentSubheading,
  CenteredContentTopRightComponentWrapper,
  CenteredContentWrapper
} from './styles/centeredTileContent'

interface IBoardCenteredTileContentProps {
  /** Text displayed above the content of tile */
  label?: string,
  topRightComponent?: JSX.Element,
  intelliIcon?: IntelliIconValue
  fontAwesomeIcon?: {
    type: 'solid' | 'light' | 'regular'
    icon: FontAwesomeIconValue
  }
  imageSrc?: string,
  heading?: string,
  subheading?: string,
  description?: string,
  limitedContentWidth?: 'none' | 'small' | 'medium'
}

class CenteredTileContent extends React.PureComponent<IBoardCenteredTileContentProps, never> {
  public static defaultProps: Partial<IBoardCenteredTileContentProps> = {
    limitedContentWidth: 'none'
  }

  private get content (): JSX.Element | null {
    const {
      children,
      label,
      limitedContentWidth
    } = this.props

    return (
      <CenteredContentWrapper
        hasTitleLabel={!!label}
        limitedContentWidth={limitedContentWidth!}
      >
        {children && <CenteredContentChildrenWrapper>{children}</CenteredContentChildrenWrapper>}
        {this.topRightComponent}
        {this.icon}
        {this.heading}
        {this.subheading}
        {this.description}
      </CenteredContentWrapper>
    )
  }

  private get topRightComponent (): JSX.Element | null {
    const {
      topRightComponent
    } = this.props

    if (!topRightComponent) {
      return null
    }

    return (
      <CenteredContentTopRightComponentWrapper>
        {topRightComponent}
      </CenteredContentTopRightComponentWrapper>
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

  private get icon (): JSX.Element | null {
    const {
      intelliIcon,
      fontAwesomeIcon,
      imageSrc,
      heading
    } = this.props

    if (imageSrc) {
      return (
        <CenteredContentImageWrapper>
          <CenteredContentImage
            src={imageSrc}
            alt={heading}
          />
        </CenteredContentImageWrapper>
      )
    }

    const customSize = 5
    if (intelliIcon) {
      return (
        <CenteredContentImageWrapper>
          <IntelliIcon
            icon={intelliIcon}
            customSize={customSize}
          />
        </CenteredContentImageWrapper>
      )
    }

    if (fontAwesomeIcon) {
      const { type, icon } = fontAwesomeIcon
      return (
        <CenteredContentImageWrapper>
          <FontAwesomeIcon
            type={type}
            icon={icon}
            customSize={customSize}
          />
        </CenteredContentImageWrapper>
      )
    }

    return null
  }

  private get heading (): JSX.Element | null {
    const {
      heading
    } = this.props

    if (!heading || heading === '') {
      return null
    }

    return (
      <CenteredContentHeading>
        {heading}
      </CenteredContentHeading>
    )
  }

  private get subheading (): JSX.Element | null {
    const {
      subheading
    } = this.props

    if (!subheading || subheading === '') {
      return null
    }

    return (
      <CenteredContentSubheading>
        {subheading}
      </CenteredContentSubheading>
    )
  }

  private get description (): JSX.Element | null {
    const {
      description
    } = this.props

    if (!description || description === '') {
      return null
    }

    return (
      <CenteredContentDescription>
        {description}
      </CenteredContentDescription>
    )
  }

  public render (): JSX.Element {
    const {
      limitedContentWidth
    } = this.props

    return (
      <TileContentWrapper
        limitedContentWidth={limitedContentWidth!}
      >
        {this.tileLabel}
        {this.content}
      </TileContentWrapper>
    )
  }
}

export {
  CenteredTileContent
}
