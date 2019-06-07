import React from 'react'

import { Variables } from '../../../common'
import { FontAwesomeIcon } from '../../Icons/FontAwesomeIcon'
import { GridLayout } from '../../Layouts/GridLayout'
import { DropdownMenu, IDropdownMenuToggleComponentProps } from '../../Popovers/DropdownMenu'
import { ISectionProps } from '../../Popovers/DropdownMenu/subcomponents/Section'
import { BlockSkeleton } from '../../Skeletons/BlockSkeleton'
import { CardWrapper, ExpandComponentWrapper, StyleActionButton, StyleToggleButton } from './style'

interface ICardProps {
  name: string
  /** the component that shows even in collapse mode */
  collapseComponent: JSX.Element
  /** the component that shows in expand mode only */
  expandComponent?: JSX.Element
  /** If true, the card is in expand style */
  isExpanded?: boolean
  /** Array of actions to display in all the cards action button popover */
  actions?: ISectionProps[]
}

interface ICardListProps {
  /** Array of cards to display in the list */
  cards: ICardProps[]
  /** callback when user toggle card */
  onCardToggle?: (card: ICardProps) => void
  /** If true, the card list shows its skeleton */
  showSkeleton?: boolean
}

interface ICardListState {
  isActionButtonHover: boolean
}

export class CardList extends React.PureComponent<ICardListProps,ICardListState> {
  public static defaultProps: Partial<ICardListProps> = {
    showSkeleton: false
  }

  public state: ICardListState = {
    isActionButtonHover: false
  }

  public render (): JSX.Element {
    const {
      cards,
      showSkeleton
    } = this.props

    if (showSkeleton) {
      return (
        <>
          <BlockSkeleton
            showSkeleton
            height={100}
          />
          <BlockSkeleton
            showSkeleton
            height={100}
          />
          <BlockSkeleton
            showSkeleton
            height={100}
          />
        </>
      )
    }

    return (
      <>
        {cards.map((card, index) => this.cardContent(card, index))}
      </>
    )
  }

  private cardContent = (card: ICardProps, index: number) => {
    const {
      collapseComponent,
      expandComponent,
      isExpanded,
      name
    } = card

    return(
      <CardWrapper
        onClick={this.onToggleCard(card)}
        key={`${name}-${index}`}
        isExpanded={!!isExpanded}
        hasHoverStyle={!this.state.isActionButtonHover && !!card.expandComponent}
      >
        <GridLayout
          gutterPaddingX={Variables.Spacing.sSmall}
          cells={[
            {
              size: 'auto',
              content: collapseComponent
            },
            {
              size: 'shrink',
              content: this.cardRightComponent(card),
              displayType: 'flex'
            }
          ]}
        />
        <ExpandComponentWrapper isExpanded={!!isExpanded}>
          {expandComponent}
        </ExpandComponentWrapper>
      </CardWrapper>
    )
  }

  private onToggleCard = (card: ICardProps) => () => {
    const {
      onCardToggle
    } = this.props

    if (onCardToggle) {
      onCardToggle(card)
    }
  }

  private cardRightComponent = (card: ICardProps) => {
    const gridToggleButtonCell = {
      size: 'shrink' as 'shrink',
      content: this.toggleButton(card),
      displayType: 'flex' as 'flex'
    }

    const gridActionButtonDropdownMenuCell = {
      size: 'shrink'as 'shrink',
      content: this.actionButtonDropdownMenu(card),
      displayType: 'flex' as 'flex'
    }

    const cardRightComponentCells = []

    if (this.actionButtonDropdownMenu(card)) {
      cardRightComponentCells.push(gridActionButtonDropdownMenuCell)
    }

    if (this.toggleButton(card)) {
      cardRightComponentCells.push(gridToggleButtonCell)
    }

    if (cardRightComponentCells.length > 0) {
      return(
        <GridLayout
          horizontalAlignment={GridLayout.HorizontalAlignment.Justify}
          gutterPaddingX={Variables.Spacing.sSmall}
          cells={cardRightComponentCells}
        />
      )
    }

    return null
  }

  private actionButtonDropdownMenu = (card: ICardProps) => {
    const {
      actions
    } = card

    if (actions) {
      return(
        <DropdownMenu
          sections={actions}
          toggleComponent={this.actionButton}
        />
      )
    }

    return null
  }

  private actionButton = ({ toggleMenu, toggleComponentRef}: IDropdownMenuToggleComponentProps) => (
    <div>
      <StyleActionButton
        onClick={this.handleActionButtonClick(toggleMenu)}
        onMouseOver={this.handleActionButtonMouseOver}
        onMouseOut={this.handleActionButtonMouseOut}
        innerRef={toggleComponentRef}
      >
        <FontAwesomeIcon type='ellipsis-v'/>
      </StyleActionButton>
    </div>
  )

  private toggleButton = (card: ICardProps) => {
    if (card.expandComponent) {
      return(
        <div>
          <StyleToggleButton isExpanded={!!card.isExpanded} hasParentHoverStyle={!this.state.isActionButtonHover}>
            <FontAwesomeIcon type='chevron-down'/>
          </StyleToggleButton>
        </div>
      )
    }
  }

  private handleActionButtonClick = (toggleMenu: () => void) => (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    toggleMenu()
  }

  private handleActionButtonMouseOver = () => {
    this.setState({ isActionButtonHover: true })
  }

  private handleActionButtonMouseOut = () => {
    this.setState({ isActionButtonHover: false })
  }
}
