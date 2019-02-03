import React from 'react'
import { isNil } from 'lodash'
import { StyledAnchorTile, StyledHoverLabel, StyleTileButton } from './style'
import { TileContent } from './TileContent'
import { Props, Variables } from '../../../../common'

interface IBoardTileProps {
  /** tile displayed in the size style */
  size?: Props.TileSize
  /** If yes the color of the tile will change when it is hovered */
  isHoverable?: boolean
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
}

class Tile extends React.PureComponent<IBoardTileProps, never> {
  public static TileContent = TileContent

  public static defaultProps: Partial<IBoardTileProps> = {
    size: Props.TileSize.Medium,
    isHoverable: false
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
      linkProps
    } = this.props

    const TileTag = anchorHref ? StyledAnchorTile : StyleTileButton

    const tile = (
      <TileTag
        tileSize={size}
        isHoverable={isHoverable}
        onClick={this.onClick}
        href={anchorHref}
        anchorComponentProps={linkProps}
        tabIndex={ 0 }
      >
        {children}
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
