import React from 'react'
import { StyledBoardLabel, BoardWrapper} from './style'
import { Tile } from './subcomponents/Tile'

interface IBoardProps {
  /** Text displayed above the board */
  label?: string
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
      children
    } = this.props

    return (
      <>
        {this.label}
        <BoardWrapper> {children} </BoardWrapper>
      </>
    )
  }
}
