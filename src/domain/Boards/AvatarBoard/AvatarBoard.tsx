import React from 'react'

import { Props } from '../../../common'
import { AvatarBoardWrapper } from './style'
import { AvatarTile } from './subcomponents/AvatarTile'

interface IAvatarBoardProps {
  /** The data-component-context */
  componentContext?: string
  /** Margins around the component */
  margins?: Props.IMargins
  /** The children to render */
  children?: React.ReactNode
  /** The empty state component to render if no children are provided */
  emptyStateComponent: JSX.Element
}

interface ISubComponents {
  AvatarTile: typeof AvatarTile
}

export const AvatarBoard: React.FC<IAvatarBoardProps> & ISubComponents = ({ componentContext, children, margins, emptyStateComponent }) => {
  return (
    <AvatarBoardWrapper
      margins={margins}
      data-component-type={Props.ComponentType.AvatarBoard}
      data-component-context={componentContext}
    >
        {children ? children : emptyStateComponent}
    </AvatarBoardWrapper>
  )
}

AvatarBoard.AvatarTile = AvatarTile
