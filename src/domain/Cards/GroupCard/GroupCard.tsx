import React from 'react'

import { Props, Variables } from '../../../common'
import { FontAwesomeIcon } from '../../Icons/FontAwesomeIcon'
import { DropdownMenu, IDropdownMenuToggleComponentProps } from '../../Popovers/DropdownMenu'
import { ISectionProps } from '../../Popovers/DropdownMenu/subcomponents/Section'
import {
  ChevronIconWrapper,
  StyledFlexContent,
  StyledPrimaryContent
} from '../services/style'
import {
  StyledBodyActionButton,
  StyledBodyContent,
  StyledBodyContents,
  StyledGroupCard,
  StyledGroupCardToggleButton,
  StyledGroupExtraCard,
  StyledGroupMainCard
} from './style'

interface IGroupCardExtraContentProps {
  mainContent: JSX.Element
  extraContent?: JSX.Element
  dropdownSections?: ISectionProps[]
}

interface IGroupCardProps {
  /** the component that shows even in collapse mode */
  headingContent: JSX.Element
  /** the components that shows in expand mode only */
  bodyContents?: IGroupCardExtraContentProps[]
  /** If true, the card is in expand style */
  isExpanded?: boolean
  /** callback when user toggle card */
  onCardToggle?: () => void
  /** The margins around the component */
  margins?: Props.IMargins
  /** The data-component-context */
  componentContext?: string
  /** dropwon sections to show in the cards action button dropdown */
  dropdownSections?: ISectionProps[]
}

interface IGroupCardState {
  isExpanded: boolean
}

class GroupCard extends React.PureComponent<IGroupCardProps, IGroupCardState> {
  public state: IGroupCardState = {
    isExpanded: false
  }

  public render (): JSX.Element {
    const {
      headingContent,
      bodyContents,
      componentContext,
      dropdownSections,
      margins
    } = this.props

    return (
      <StyledGroupCard
        margins={margins}
        data-component-type={Props.ComponentType.GroupCard}
        data-component-context={componentContext}
      >
        <StyledGroupMainCard
          onClick={this.handleCardToggle}
          isExpanded={this.isExpanded && !!bodyContents}
          hasHoverStyle={!!bodyContents}
        >
          <StyledFlexContent>
            <StyledPrimaryContent>{headingContent}</StyledPrimaryContent>
            {this.actionButtonDropdownMenu(dropdownSections)}
            {this.toggleButton}
          </StyledFlexContent>
        </StyledGroupMainCard>
        {this.bodyContentCards}
      </StyledGroupCard>
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

  private get bodyContentCards (): JSX.Element | undefined {
    const {
      bodyContents
    } = this.props

    if (bodyContents) {
      return (
        <StyledGroupExtraCard isExpanded={this.isExpanded}>
          <StyledBodyContents>
            {bodyContents.map(this.bodyContent)}
          </StyledBodyContents>
        </StyledGroupExtraCard>
      )
    }
  }

  private get toggleButton (): JSX.Element | undefined {
    const {
      bodyContents
    } = this.props

    if (bodyContents) {
      return (
        <StyledGroupCardToggleButton isExpanded={this.isExpanded}>
          <ChevronIconWrapper>
            <FontAwesomeIcon type='solid' icon='chevron-down' />
          </ChevronIconWrapper>
        </StyledGroupCardToggleButton>
      )
    }
  }

  private bodyContent = (bodyContent: IGroupCardExtraContentProps, idx: number) => {
    const {
      mainContent,
      extraContent,
      dropdownSections
    } = bodyContent

    if (mainContent) {
      return (
        <StyledBodyContent
          key={idx}
        >
          <StyledFlexContent>
            <StyledPrimaryContent>{mainContent}</StyledPrimaryContent>
            {this.actionButtonDropdownMenu(dropdownSections)}
          </StyledFlexContent>
          {extraContent}
        </StyledBodyContent>
      )
    }
  }

  private actionButtonDropdownMenu = (dropdownSections: ISectionProps[] | undefined) => {
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
    <StyledBodyActionButton
      onClick={this.handleActionButtonClick(toggleMenu)}
      ref={toggleComponentRef}
      hasRightMargin={!!this.props.bodyContents}
      {...ariaProps}
    >
      <FontAwesomeIcon type='solid' icon='ellipsis-v' />
    </StyledBodyActionButton>
  )

  private handleActionButtonClick = (toggleMenu: () => void) => (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    toggleMenu()
  }
}

export {
  GroupCard,
  IGroupCardExtraContentProps
}
