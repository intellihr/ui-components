import React from 'react'

import { Props, Variables } from '../../../../common'
import {
  FontAwesomeIcon,
  Icon,
  IntelliIcon
} from '../../../Icons'
import {
  Text
 } from '../../../Typographies'
import {
  StyledTileLabel,
  TileContentWrapper
} from './style'
import {
  CenteredContentHeading,
  CenteredContentImage,
  CenteredContentImageWrapper,
  CenteredContentSubheading,
  CenteredContentText,
  CenteredContentWrapper
} from './styles/centeredTileContent'

interface IBoardCenteredTileContentProps {
  /** Text displayed above the content of tile */
  label?: string,
  icon?: FontAwesomeIcon | Icon | IntelliIcon,
  image?: string,
  heading?: string,
  subheading?: string,
  text?: string
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
        {this.text}
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
      icon,
      image,
      heading
    } = this.props

    console.log(icon, image)
    console.log(icon && image)
    console.log(!icon && !image)

    if (!icon && !image) {
      return null
    }

    if (image) {
      return (
        <CenteredContentImageWrapper>
          <CenteredContentImage
            src={image}
            alt={heading}
          />
        </CenteredContentImageWrapper>
      )
    }

    return (
      <CenteredContentImageWrapper>
        {icon}
      </CenteredContentImageWrapper>
    )
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
        <Text
          isInline={false}
          type={Props.TypographyType.DisplayLarge}
          color={Variables.Color.inherit}
        >
          {heading}
        </Text>
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
        <Text
          isInline={false}
          type={Props.TypographyType.Body}
          color={Variables.Color.inherit}
          isUpper
        >
          {subheading}
        </Text>
      </CenteredContentSubheading>
    )
  }

  private get text (): JSX.Element | null {
    const {
      text
    } = this.props

    if (text === undefined || text === '') {
      return null
    }

    return (
      <CenteredContentText>
        <Text isInline={false} type={Props.TypographyType.Small}>
          {text}
        </Text>
      </CenteredContentText>
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
