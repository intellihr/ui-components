import React from 'react'

import { Props } from '../../../common'
import { BoardTilesWrapper, BoardWrapper, StyledBoardLabel } from './style'
import { Tile } from './subcomponents/Tile'

interface IBoardProps {
  /** Text displayed above the board */
  label?: string
  /** The data-component-context */
  componentContext?: string
}
export class Board extends React.PureComponent<IBoardProps> {
  public static Tile = Tile

  private get label (): JSX.Element | null {
    const {
      label
    } = this.props

    if (label) {
      return (
        <StyledBoardLabel> {label} </StyledBoardLabel>
      )
    }

    return null
  }

  public render (): JSX.Element {
    const {
      children,
      componentContext
    } = this.props

    return (
      <BoardWrapper
        data-component-type={Props.ComponentType.Board}
        data-component-context={componentContext}
      >
        {this.label}
        <BoardTilesWrapper> {children} </BoardTilesWrapper>
      </BoardWrapper>
    )
  }
}
