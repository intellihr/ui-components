import React from 'react'

import { Props } from '../../../common'
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
}

export class GroupCard extends React.PureComponent<IGroupCardProps> {
  public static defaultProps: Partial<IGroupCardProps> = {
    isExpanded: false
  }

  public render (): JSX.Element {
    const {
      headingContent,
      bodyContents,
      isExpanded,
      onCardToggle,
      componentContext,
      margins
    } = this.props

    return(
      <StyledGroupCard
        margins={margins}
        data-component-type={Props.ComponentType.GroupCard}
        data-component-context={componentContext}
      >
        <StyledGroupMainCard
          onClick={onCardToggle}
          isExpanded={!!isExpanded && !!bodyContents}
          hasHoverStyle={!!bodyContents}
        >
          <StyledFlexContent>
            <StyledPrimaryContent>{headingContent}</StyledPrimaryContent>
            {this.toggleButton}
          </StyledFlexContent>
        </StyledGroupMainCard>
        {this.bodyContentCards}
      </StyledGroupCard>
    )
  }

  private get bodyContentCards (): JSX.Element | undefined {
    const {
      bodyContents,
      isExpanded
    } = this.props

    if (bodyContents) {
      return (
        <StyledGroupExtraCard isExpanded={!!isExpanded}>
          <StyledBodyContents>
            {bodyContents.map(this.bodyContent)}
          </StyledBodyContents>
        </StyledGroupExtraCard>
      )
    }
  }

  private get toggleButton (): JSX.Element | undefined {
    const {
      bodyContents,
      isExpanded
    } = this.props

    if (bodyContents) {
      return(
        <StyledGroupCardToggleButton isExpanded={!!isExpanded}>
          <ChevronIconWrapper>
            <FontAwesomeIcon type='chevron-down'/>
          </ChevronIconWrapper>
        </StyledGroupCardToggleButton>
      )
    }
  }

  private bodyContent = (bodyContent: IGroupCardExtraContentProps) => {
    const {
      mainContent,
      extraContent,
      dropdownSections
    } = bodyContent

    if (mainContent) {
      return(
        <StyledBodyContent>
          <StyledFlexContent>
            <StyledPrimaryContent>{mainContent}</StyledPrimaryContent>
            {this.actionButtonDropdownMenu(dropdownSections)}
          </StyledFlexContent>
          {extraContent}
        </StyledBodyContent>
      )
    }
  }

  private actionButtonDropdownMenu = (dropdownSections: ISectionProps[]|undefined) =>  {
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

  private actionButton = ({ toggleMenu, toggleComponentRef, ariaProps }: IDropdownMenuToggleComponentProps) => (
    <StyledBodyActionButton
      onClick={this.handleActionButtonClick(toggleMenu)}
      innerRef={toggleComponentRef}
      {...ariaProps}
    >
      <FontAwesomeIcon type='ellipsis-v'/>
    </StyledBodyActionButton>
  )

  private handleActionButtonClick = (toggleMenu: () => void) => (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    toggleMenu()
  }
}
