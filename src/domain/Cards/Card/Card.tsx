import React from 'react'

import { Props } from '../../../common'
import { FontAwesomeIcon } from '../../Icons/FontAwesomeIcon'
import { DropdownMenu, IDropdownMenuToggleComponentProps } from '../../Popovers/DropdownMenu'
import { ISectionProps } from '../../Popovers/DropdownMenu/subcomponents/Section'
import {
  CardWrapper,
  CollapsedComponentWrapper,
  ContentWrapper,
  ExpandComponentWrapper,
  StyleActionButton,
  StyleToggleButton
} from './style'

interface IExpandedCardProps {
  name: string
  /** the component that shows even in collapse mode */
  collapsedComponent: JSX.Element
  /** the component that shows in expand mode only */
  expandedComponent?: JSX.Element
  /** If true, the card is in expand style */
  isExpanded?: boolean
  /** Array of actions to display in all the cards action button popover */
  actions?: ISectionProps[]
  /** callback when user toggle card */
  onCardToggle?: () => void
  /** The margins around the component */
  margins?: Props.IMargins
  /** The data-component-context */
  componentContext?: string
}

interface IExpandedCardState {
  isActionButtonHover: boolean
}

export class Card extends React.PureComponent<IExpandedCardProps,IExpandedCardState> {
  public state: IExpandedCardState = {
    isActionButtonHover: false
  }

  public render (): JSX.Element {
    const {
      collapsedComponent,
      expandedComponent,
      isExpanded,
      name,
      onCardToggle,
      componentContext,
      margins
    } = this.props

    return(
      <CardWrapper
        margins={margins}
        onClick={onCardToggle}
        key={`${name}`}
        isExpanded={!!isExpanded}
        hasHoverStyle={!this.state.isActionButtonHover && !!expandedComponent}
        data-component-type={Props.ComponentType.Card}
        data-component-context={componentContext}
      >
        <ContentWrapper>
          <CollapsedComponentWrapper>{collapsedComponent}</CollapsedComponentWrapper>
          {this.actionButtonDropdownMenu}
          {this.toggleButton}
        </ContentWrapper>
        <ExpandComponentWrapper isExpanded={!!isExpanded}>
          {expandedComponent}
        </ExpandComponentWrapper>
      </CardWrapper>
    )
  }

  private get actionButtonDropdownMenu (): JSX.Element | null {
    const {
      actions
    } = this.props

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
    <StyleActionButton
      onClick={this.handleActionButtonClick(toggleMenu)}
      onMouseOver={this.handleActionButtonMouseOver}
      onMouseOut={this.handleActionButtonMouseOut}
      innerRef={toggleComponentRef}
      hasRightMargin={!!this.props.expandedComponent}
    >
      <FontAwesomeIcon type='ellipsis-v'/>
    </StyleActionButton>
  )

  private get toggleButton (): JSX.Element | undefined {
    const {
      expandedComponent,
      isExpanded
    } = this.props

    if (expandedComponent) {
      return(
        <StyleToggleButton isExpanded={!!isExpanded} hasParentHoverStyle={!this.state.isActionButtonHover}>
          <FontAwesomeIcon type='chevron-down'/>
        </StyleToggleButton>
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
