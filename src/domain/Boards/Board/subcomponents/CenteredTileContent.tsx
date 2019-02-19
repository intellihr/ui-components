import React from 'react'

import {
  CenteredContentWrapper,
  StyledTileLabel,
  TileContentWrapper
} from './style'

interface IBoardCenteredTileContentProps {
  /** Text displayed above the content of tile */
  label?: string
  /** If yes the tile content would has a margin to ensure the hover label does not overlap with the content */
  hasHoverMargin?: boolean
}

class CenteredTileContent extends React.PureComponent<IBoardCenteredTileContentProps, never> {

  private get content (): JSX.Element | null {
    const {
      children,
      label,
      hasHoverMargin
    } = this.props

    return (
      <CenteredContentWrapper
        hasTitleLabel={!!label}
        hasHoverMargin={hasHoverMargin}
      >
        <div>
          {children}
        </div>
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
  CenteredTileContent
}
