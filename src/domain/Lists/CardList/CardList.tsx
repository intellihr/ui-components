import React from 'react'

import { Variables } from '../../../common'
import { FontAwesomeIcon } from '../../Icons/FontAwesomeIcon'
import { GridLayout } from '../../Layouts/GridLayout'
import { DropdownMenu, IDropdownMenuToggleComponentProps } from '../../Popovers/DropdownMenu'
import { ISectionProps } from '../../Popovers/DropdownMenu/subcomponents/Section'
import { CardWrapper, ExpandComponentWrapper, StyleActionButton, StyleToggleButton } from './style'

interface ICardProps {
  name: string
  /** the component that shows even in collapse mode */
  collapseComponent: JSX.Element
  /** the component that shows in expand mode only */
  expandComponent: JSX.Element
  /** If true, the card is in expand style */
  isExpanded?: boolean
}

interface ICardListProps {
  /** Array of actions to display in all the cards action button popover */
  actions: ISectionProps[]
  /** Array of cards to display in the list */
  cards: ICardProps[]
  /** callback when user toggle card */
  onCardToggle: (card: ICardProps) => void
}

interface ICardListState {
  isActionButtonHover: boolean
}

export class CardList extends React.PureComponent<ICardListProps,ICardListState> {
  public state: ICardListState = {
    isActionButtonHover: false
  }

  public render (): JSX.Element {
    const {
      cards
    } = this.props

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
        hasHoverStyle={!this.state.isActionButtonHover}
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

    onCardToggle(card)
  }

  private cardRightComponent = (card: ICardProps) => {
    return(
      <GridLayout
        gutterPaddingX={Variables.Spacing.sSmall}
        cells={[
          {
            size: 6,
            content: this.actionButtonDropdownMenu(card),
            displayType: 'flex'
          },
          {
            size: 6,
            content: this.toggleButton(card),
            displayType: 'flex'
          }
        ]}
      />
    )
  }

  private actionButtonDropdownMenu = (card: ICardProps) => {
    const {
      actions
    } = this.props

    return(
      <DropdownMenu
        sections={actions}
        toggleComponent={this.actionButton}
      />
    )
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
    return(
      <div>
        <StyleToggleButton isExpanded={!!card.isExpanded} hasParentHoverStyle={!this.state.isActionButtonHover}>
          <FontAwesomeIcon type='chevron-down'/>
        </StyleToggleButton>
      </div>
    )
  }

  private handleActionButtonClick = (toggleMenu: () => void) => (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    event.preventDefault()
    toggleMenu()
  }

  private handleActionButtonMouseOver = () => {
    this.setState({ isActionButtonHover: true })
  }

  private handleActionButtonMouseOut = () => {
    this.setState({ isActionButtonHover: false })
  }
}
