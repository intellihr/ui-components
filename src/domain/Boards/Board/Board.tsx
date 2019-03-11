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
}
export class Board extends React.PureComponent<IBoardProps> {
  public static Tile = Tile

  get heading (): JSX.Element {
    return(
      <StyledHeadingWrapper>
        {this.label}
        {this.message}
      </StyledHeadingWrapper>
    )
  }

  get label (): JSX.Element | null {
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

  get message (): JSX.Element | null {
    const {
      rightComponent
    } = this.props

    if (rightComponent) {
      return <> {rightComponent} </>
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
        {this.heading}
        <BoardTilesWrapper> {children} </BoardTilesWrapper>
      </BoardWrapper>
    )
  }
}
