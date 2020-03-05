import React from 'react'

import { Props } from '../../../common'
import { AvatarBoardWrapper } from './style'
import { AvatarTile, AvatarTileSkeleton } from './subcomponents'

interface IAvatarBoardProps {
  /** The data-component-context */
  componentContext?: string
  /** Margins around the component */
  margins?: Props.IMargins
  /** The children to render */
  children?: React.ReactNode
  /** The empty state component to render if no children are provided */
  emptyStateComponent: JSX.Element
  /** If the AvatarBoard is in a loading state, and should show skeletons */
  loading?: boolean
  /** Number of tiles to render for the skeleton */
  skeletonTilesNum?: number
}

interface ISubComponents {
  AvatarTile: typeof AvatarTile
}

export const AvatarBoard: React.FC<IAvatarBoardProps> & ISubComponents = ({ componentContext, children, margins, emptyStateComponent, loading, skeletonTilesNum }) => {
  if (loading) {
    const count = skeletonTilesNum ? skeletonTilesNum : 15
    const skeletonTiles: JSX.Element[] = []
    for (let i = 0; i < count; i++) {
      skeletonTiles.push(<AvatarTileSkeleton key={`avatar-tile-skeleton-${i}`} />)
    }

    return (
      <AvatarBoardWrapper
        margins={margins}
        data-component-type={Props.ComponentType.AvatarBoard}
        data-component-context={componentContext}
      >
        {...skeletonTiles}
      </AvatarBoardWrapper>
    )
  }
  return (
    <AvatarBoardWrapper
      margins={margins}
      data-component-type={Props.ComponentType.AvatarBoard}
      data-component-context={componentContext}
    >
        {children && (!Array.isArray(children) || children.length > 0) ? children : emptyStateComponent}
    </AvatarBoardWrapper>
  )
}

AvatarBoard.AvatarTile = AvatarTile
