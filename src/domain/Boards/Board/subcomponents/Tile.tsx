import React from 'react'
import { StyledTileLabel, TileWrapper } from './style'

interface IBoardTileProps {
  /** Text displayed above the content of tile */
  label?: string
  /** If true, displays tile in a compact view */
  isCompact?: boolean
}

class Tile extends React.PureComponent<IBoardTileProps, never> {
  public static defaultProps: Partial<IBoardTileProps> = {
    isCompact: true
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
    const {
      children,
      isCompact
    } = this.props

    return (
      <TileWrapper
        isCompact={isCompact}
      >
        {this.tileLabel}
        {children}
      </TileWrapper>
    )
  }
}

export {
  Tile
}
