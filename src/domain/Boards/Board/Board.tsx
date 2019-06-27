import React from 'react'

import { Props } from '../../../common'
import { BoardTilesWrapper, BoardWrapper, StyledBoardLabel, StyledHeadingWrapper } from './style'
import { Tile } from './subcomponents/Tile'

interface IBoardProps {
  /** Text displayed above the board */
  label?: string
  /** Message displayed after the label */
  rightComponent?: JSX.Element | JSX.Element[] | string
  /** The data-component-context */
  componentContext?: string
  /** Margins around the component */
  margins?: Props.IMargins
}

interface ISubComponents {
  Tile: typeof Tile
}

export const Board: React.FC<IBoardProps> & ISubComponents = ({ componentContext, children, label, rightComponent, margins }) => {
  return (
    <BoardWrapper
      margins={margins}
      data-component-type={Props.ComponentType.Board}
      data-component-context={componentContext}
    >
      <StyledHeadingWrapper>
        {label && <StyledBoardLabel>
          {label}
        </StyledBoardLabel>}
        {rightComponent}
      </StyledHeadingWrapper>
      <BoardTilesWrapper> {children} </BoardTilesWrapper>
    </BoardWrapper>
  )
}

Board.Tile = Tile
