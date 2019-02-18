import { isNil } from 'lodash'
import React from 'react'

import { Props, Variables } from '../../../../common'
import { StyleTileButton, StyledAnchorTile, StyledHoverLabel } from './style'
import { TileContent } from './TileContent'

interface IBoardTileProps {
  /** tile displayed in the size style */
  size?: Props.TileSize
  /** If yes the color of the tile will change when it is hovered */
  isHoverable?: boolean
  /** If yes the tile would in button style */
  isButton?: boolean
  /** If yes the tile would in admin style */
  isAdmin?: boolean
  /** onClick event */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  /** Anchor href used when clicking between tabs */
  anchorHref?: string
  /** Text displayed in the right bottom corner when it is hovered */
  hoverLabel?: string
  /** Any extra link props */
  linkProps?: {
    [i: string]: any
  }
  /** children of this tile */
  children?: React.ReactElement<any>
}

class Tile extends React.PureComponent<IBoardTileProps, never> {
  public static TileContent = TileContent

  public static defaultProps: Partial<IBoardTileProps> = {
    size: Props.TileSize.Medium,
    isHoverable: true,
    isButton: false,
    isAdmin: false
  }

  private get hoverLabel (): JSX.Element | null {
    const {
      hoverLabel,
      isHoverable
    } = this.props

    if (hoverLabel && isHoverable) {
      return (
        <StyledHoverLabel
          type={Props.TypographyType.Small}
          isUpper
          color={Variables.Color.i400}
        >
          {hoverLabel}
        </StyledHoverLabel>
      )
    }

    return null
  }

  public render (): JSX.Element {
    const {
      children,
      size,
      isHoverable,
      anchorHref,
      linkProps,
      isButton,
      isAdmin
    } = this.props

    const TileTag = anchorHref ? StyledAnchorTile : StyleTileButton

    const tile = (
      <TileTag
        tileSize={size}
        isHoverable={isHoverable}
        onClick={this.onClick}
        href={anchorHref}
        anchorComponentProps={linkProps}
        tabIndex={0}
        isButton={isButton}
        isAdmin={isAdmin}
      >
        {children && React.cloneElement(children, {isButton, isAdmin})}
        {this.hoverLabel}
      </TileTag>
    )

    return tile
  }

  private onClick = (event: React.MouseEvent<HTMLElement>) => {
    const {
      onClick
    } = this.props

    if (!isNil(onClick)) {
      onClick(event)
    }
  }
}

export {
  Tile
}
