import React from 'react'

import { Props, Variables } from '../../../../common'
import { Icon, IconType } from '../../../Icons'
import { Text } from '../../../Typographies'
import { StyledTileLabel, TileContentWrapper } from './style'
import {
  CenteredContentDescription,
  CenteredContentHeading,
  CenteredContentImage,
  CenteredContentImageWrapper,
  CenteredContentSubheading,
  CenteredContentWrapper
} from './styles/centeredTileContent'

interface IBoardCenteredTileContentProps {
  /** Text displayed above the content of tile */
  label?: string,
  iconType?: IconType,
  imageSrc?: string,
  heading?: string,
  subheading?: string,
  description?: string
}

class CenteredTileContent extends React.PureComponent<IBoardCenteredTileContentProps, never> {
  private get content (): JSX.Element | null {
    const {
      children,
      label
    } = this.props

    return (
      <CenteredContentWrapper
        hasTitleLabel={!!label}
      >
        {children}
        {this.icon}
        {this.heading}
        {this.subheading}
        {this.description}
      </CenteredContentWrapper>
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
      iconType,
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

    if (iconType) {
      return (
        <CenteredContentImageWrapper>
          <Icon type={iconType} customSize={5} />
        </CenteredContentImageWrapper>
      )
    }

    return null
  }

  private get heading (): JSX.Element | null {
    const {
      heading
    } = this.props

    if (heading === undefined) {
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

    if (subheading === undefined) {
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

    if (description === undefined || description === '') {
      return null
    }

    return (
      <CenteredContentDescription>
        {description}
      </CenteredContentDescription>
    )
  }

  public render (): JSX.Element {
    return (
      <TileContentWrapper>
        {this.tileLabel}
        {this.content}
      </TileContentWrapper>
    )
  }
}

export {
  CenteredTileContent
}
