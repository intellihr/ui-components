import React from 'react'

import { Props } from '../../../../common'
import {StyledAnchorTile, StyledHoverLabel, StyledTile } from './style'
import { ButtonTileContent } from './ButtonTileContent'
import { CenteredTileContent } from './CenteredTileContent'
import { FigureTileContent } from './FigureTileContent'

interface IBoardTileProps {
  /** tile displayed in the size style */
  size?: 'small'|'medium'|'fullWidth'
  /** If yes the color of the tile will change when it is hovered */
  isHoverable?: boolean
  /** If yes the tile will use the minimum size of a button */
  isButton?: boolean
  /** the style of tile */
  type?: 'default'|'hollow'|'card'
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
  /** Open anchor href in new tab */
  anchorOpenInNewTab?: boolean
  /** The data-component-context */
  componentContext?: string
}

class Tile extends React.PureComponent<IBoardTileProps, never> {
  public static CenteredTileContent = CenteredTileContent
  public static FigureTileContent = FigureTileContent
  public static ButtonTileContent = ButtonTileContent

  public static defaultProps: Partial<IBoardTileProps> = {
    size: 'medium',
    isHoverable: false,
    isButton: false,
    type: 'default',
    anchorOpenInNewTab: false
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
      anchorOpenInNewTab,
      anchorComponentProps,
      isButton,
      type,
      onClick,
      hoverLabel,
      componentContext
    } = this.props

    const commonProps = {
      'tileSize': size!,
      'isHoverable': isHoverable!,
      'isButton': isButton!,
      'type': type!,
      'hasHoverLabel': !!hoverLabel,
      'data-component-type': Props.ComponentType.Tile,
      'data-component-context': componentContext
    }

    const target = anchorOpenInNewTab ? '_blank' : ''

    if (anchorHref) {
      return (
        <StyledAnchorTile
          {...commonProps}
          href={anchorHref}
          target={target}
          anchorComponentProps={anchorComponentProps}
        >
          {children}
          {this.hoverLabel}
        </StyledAnchorTile>
      )
    }

    if (!anchorHref && onClick) {
      return (
        <StyledTile
          {...commonProps}
          onClick={onClick}
          tabIndex={0}
        >
          {children}
          {this.hoverLabel}
        </StyledTile>
      )
    }

    return (
      <StyledTile
        {...commonProps}
      >
        {children}
        {this.hoverLabel}
      </StyledTile>
    )
  }
}

export {
  Tile
}
