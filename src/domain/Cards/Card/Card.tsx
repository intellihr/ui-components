import React from 'react'

import { Props } from '../../../common'
import { FontAwesomeIcon } from '../../Icons/FontAwesomeIcon'
import { DropdownMenu, IDropdownMenuToggleComponentProps } from '../../Popovers/DropdownMenu'
import { ISectionProps } from '../../Popovers/DropdownMenu/subcomponents/Section'
import {
  CardWrapper, ChevronIconWrapper,
  ContentWrapper,
  ExtraComponentWrapper,
  MainContentWrapper,
  StyleActionButton,
  StyleToggleButton
} from './style'

interface IExpandedCardProps {
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
      mainContent,
      extraContent,
      isExpanded,
      onCardToggle,
      componentContext,
      margins
    } = this.props

    return(
      <CardWrapper
        margins={margins}
        onClick={onCardToggle}
        isExpanded={!!isExpanded}
        hasHoverStyle={!this.state.isActionButtonHover && !!extraContent}
        data-component-type={Props.ComponentType.Card}
        data-component-context={componentContext}
      >
        <ContentWrapper>
          <MainContentWrapper>{mainContent}</MainContentWrapper>
          {this.actionButtonDropdownMenu}
          {this.toggleButton}
        </ContentWrapper>
        <ExtraComponentWrapper isExpanded={!!isExpanded}>
          {extraContent}
        </ExtraComponentWrapper>
      </CardWrapper>
    )
  }

  private get actionButtonDropdownMenu (): JSX.Element | null {
    const {
      dropdownSections
    } = this.props

    if (dropdownSections) {
      return(
        <DropdownMenu
          sections={dropdownSections}
          toggleComponent={this.actionButton}
        />
      )
    }

    return null
  }

  private actionButton = ({ toggleMenu, toggleComponentRef }: IDropdownMenuToggleComponentProps) => (
    <StyleActionButton
      onClick={this.handleActionButtonClick(toggleMenu)}
      onMouseOver={this.handleActionButtonMouseOver}
      onMouseOut={this.handleActionButtonMouseOut}
      innerRef={toggleComponentRef}
      hasRightMargin={!!this.props.extraContent}
    >
      <FontAwesomeIcon type='ellipsis-v'/>
    </StyleActionButton>
  )

  private get toggleButton (): JSX.Element | undefined {
    const {
      extraContent,
      isExpanded
    } = this.props

    if (extraContent) {
      return(
        <StyleToggleButton isExpanded={!!isExpanded} hasParentHoverStyle={!this.state.isActionButtonHover}>
          <ChevronIconWrapper>
            <FontAwesomeIcon type='chevron-down'/>
          </ChevronIconWrapper>
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
