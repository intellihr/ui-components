import React from 'react'

import { StyleTileButton, StyledAnchorTile, StyledHoverLabel } from './style'
import { ButtonTileContent } from './ButtonTileContent'
import { CenteredTileContent } from './CenteredTileContent'
import { FigureTileContent } from './FigureTileContent'

interface IBoardTileProps {
  /** tile displayed in the size style */
  size?: 'small'|'medium'|'large'
  /** If yes the color of the tile will change when it is hovered */
  isHoverable?: boolean
  /** If yes the tile would in button style */
  isButton?: boolean
  /** the style of tile */
  type?: 'default'|'hollow'
  /** onClick event */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  /** Anchor href used when clicking between tabs */
  anchorHref?: string
  /** Text displayed in the right bottom corner when it is hovered */
  hoverLabel?: string
  /** Any extra link props */
  anchorComponentProps?: {
    [i: string]: any
  }
}

class Tile extends React.PureComponent<IBoardTileProps, never> {
  public static CenteredTileContent = CenteredTileContent
  public static FigureTileContent = FigureTileContent
  public static ButtonTileContent = ButtonTileContent

  public static defaultProps: Partial<IBoardTileProps> = {
    size: 'medium',
    isHoverable: true,
    isButton: false,
    type: 'default'
  }

  private get hoverLabel (): JSX.Element | null {
    const {
      hoverLabel,
      isHoverable
    } = this.props

    if (hoverLabel && isHoverable) {
      return (
        <StyledHoverLabel>
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
      anchorComponentProps,
      isButton,
      type,
      onClick,
      hoverLabel
    } = this.props

    if (anchorHref) {
      return (
        <StyledAnchorTile
          tileSize={size!}
          isHoverable={isHoverable!}
          onClick={onClick}
          tabIndex={0}
          isButton={isButton!}
          type={type!}
          hasHoverLabel={!!hoverLabel}
          href={anchorHref}
          anchorComponentProps={anchorComponentProps}
        >
          {children}
          {this.hoverLabel}
        </StyledAnchorTile>
      )
    }

    return (
      <StyleTileButton
        tileSize={size!}
        isHoverable={isHoverable!}
        onClick={onClick}
        tabIndex={0}
        isButton={isButton!}
        type={type!}
        hasHoverLabel={!!hoverLabel}
      >
        {children}
        {this.hoverLabel}
      </StyleTileButton>
    )
  }
}

export {
  Tile
}
