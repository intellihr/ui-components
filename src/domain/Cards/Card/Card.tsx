import React from 'react'

import { Props } from '../../../common'
import { FontAwesomeIcon } from '../../Icons/FontAwesomeIcon'
import { DropdownMenu, IDropdownMenuToggleComponentProps } from '../../Popovers/DropdownMenu'
import { ISectionProps } from '../../Popovers/DropdownMenu/subcomponents/Section'
import {
  ChevronIconWrapper,
  StyledPrimaryContent
} from '../services/style'
import {
  StyledActionButton,
  StyledBodyContents,
  StyledCard,
  StyledCardHeader,
  StyledCardToggleButton,
  StyledExtraContent
} from './style'

type CardColors = 'neutral' | 'orange' | 'red' | 'grey'

interface ICardProps {
  /** the component that shows even in collapse mode */
  mainContent: JSX.Element
  /** the component that shows in expand mode only */
  extraContent?: JSX.Element
  /** If true, the card is in expand style */
  isExpanded?: boolean
  /** dropwon sections to show in the cards action button dropdown */
  dropdownSections?: ISectionProps[]
  /** callback when user toggle card */
  onCardToggle?: () => void
  /** The margins around the component */
  margins?: Props.IMargins
  /** The data-component-context */
  componentContext?: string
  /** If the card should have a hover style */
  isHoverable?: boolean
  /** Background color of the card */
  color?: CardColors
}

interface ICardState {
  isActionButtonHover: boolean
  isExpanded: boolean
}

class Card extends React.PureComponent<ICardProps, ICardState> {
  public static defaultProps: Partial<ICardProps> = {
    isHoverable: false,
    color: 'neutral'
  }

  public state: ICardState = {
    isActionButtonHover: false,
    isExpanded: false
  }

  public render (): JSX.Element {
    const {
      mainContent,
      extraContent,
      componentContext,
      margins,
      onCardToggle,
      isHoverable,
      color
    } = this.props

    return (
      <StyledCard
        margins={margins}
        color={color!}
        data-component-type={Props.ComponentType.Card}
        data-component-context={componentContext}
      >
        <StyledCardHeader
          onClick={this.handleCardToggle}
          isExpanded={this.isExpanded && !!extraContent}
          hasHoverStyle={!this.state.isActionButtonHover && (!!extraContent || !!onCardToggle || isHoverable!)}
          color={color!}
        >
          <StyledPrimaryContent>{mainContent}</StyledPrimaryContent>
          {this.actionButtonDropdownMenu}
          {this.toggleButton}
        </StyledCardHeader>
        {extraContent && (
          <StyledExtraContent isExpanded={this.isExpanded} color={color!}>
            <StyledBodyContents>
              {extraContent}
            </StyledBodyContents>
          </StyledExtraContent>
        )}
      </StyledCard>
    )
  }

  private handleCardToggle = () => {
    this.setState((state) => ({ isExpanded: !state.isExpanded }))

    if (this.props.onCardToggle) {
      this.props.onCardToggle()
    }
  }

  private get isExpanded () {
    if (this.props.isExpanded === undefined) {
      return this.state.isExpanded
    }

    return this.props.isExpanded
  }

  private get actionButtonDropdownMenu (): JSX.Element | null {
    const {
      dropdownSections
    } = this.props

    if (dropdownSections) {
      return (
        <DropdownMenu
          sections={dropdownSections}
          toggleComponent={this.actionButton}
        />
      )
    }

    return null
  }

  private actionButton = ({ toggleMenu, toggleComponentRef, ariaProps }: IDropdownMenuToggleComponentProps) => (
    <StyledActionButton
      onClick={this.handleActionButtonClick(toggleMenu)}
      onMouseOver={this.handleActionButtonMouseOver}
      onMouseOut={this.handleActionButtonMouseOut}
      ref={toggleComponentRef}
      hasRightMargin={!!this.props.extraContent}
      color={this.props.color!}
      {...ariaProps}
    >
      <FontAwesomeIcon type='solid' icon='ellipsis-v' />
    </StyledActionButton>
  )

  private get toggleButton (): JSX.Element | undefined {
    const {
      extraContent,
      color
    } = this.props

    if (extraContent) {
      return (
        <StyledCardToggleButton isExpanded={this.isExpanded} hasParentHoverStyle={!this.state.isActionButtonHover} color={color!}>
          <ChevronIconWrapper>
            <FontAwesomeIcon type='solid' icon='chevron-down' />
          </ChevronIconWrapper>
        </StyledCardToggleButton>
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

export {
  Card,
  CardColors
}
