import React from 'react'

import { Variables } from '../../../common'
import { Button } from '../../Buttons/Button'
import { FontAwesomeIcon } from '../../Icons/FontAwesomeIcon'
import { GridLayout } from '../../Layouts/GridLayout'
import { DropdownMenu, IDropdownMenuToggleComponentProps } from '../../Popovers/DropdownMenu'
import { ISectionProps } from '../../Popovers/DropdownMenu/subcomponents/Section'
import { CardWrapper, ExpandComponentWrapper } from './style'

interface ICardProps {
  /** the component that shows even in collapse mode */
  collapseComponent: JSX.Element
  /** the component that shows in expand mode only */
  expandComponent: JSX.Element
  /** If true, the card is in expand style */
  isExpanded?: boolean
  name: string
}

interface ICardListProps {
  /** Array of actions to display in all the cards action button popover */
  actions: ISectionProps[]
  /** Array of cards to display in the list */
  cards: ICardProps[]
  /** callback when user toggle card */
  onCardToggle: (card: ICardProps) => void
}

export class CardList extends React.PureComponent<ICardListProps> {
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
              displayType: 'flex',
              flexHorizontalAlignment: GridLayout.HorizontalAlignment.Right
            }
          ]}
        />
        <ExpandComponentWrapper isExpanded={!!isExpanded}>
          {expandComponent}
        </ExpandComponentWrapper>
      </CardWrapper>
    )
  }

  private onToggleCard = (card: ICardProps) => (event: React.MouseEvent<HTMLDivElement>) => {
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
            size: 5,
            content: this.actionButtonDropdownMenu(card),
            displayType: 'flex',
            flexHorizontalAlignment: GridLayout.HorizontalAlignment.Right
          },
          {
            size: 5,
            content: this.toggleButton,
            displayType: 'flex',
            flexHorizontalAlignment: GridLayout.HorizontalAlignment.Right
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

  private actionButton = ({ toggleMenu, toggleComponentRef, ariaProps }: IDropdownMenuToggleComponentProps) => (
    <Button
      onClick={toggleMenu}
      innerRef={toggleComponentRef}
      buttonOverrides={{...ariaProps}}
    >
      <FontAwesomeIcon color={Variables.Color.n800} type='ellipsis-v'/>
    </Button>
  )

  private get toggleButton (): JSX.Element {
    return(
      <Button >
        <FontAwesomeIcon color={Variables.Color.n800} type='chevron-down'/>
      </Button>
    )
  }
}
