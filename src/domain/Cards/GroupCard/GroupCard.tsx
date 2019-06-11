import React from 'react'

import { Props } from '../../../common'
import { FontAwesomeIcon } from '../../Icons/FontAwesomeIcon'
import { DropdownMenu, IDropdownMenuToggleComponentProps } from '../../Popovers/DropdownMenu'
import { ISectionProps } from '../../Popovers/DropdownMenu/subcomponents/Section'
import {
  BodyContentWrapper,
  BodyContentsDetailsWrapper,
  BodyContentsWrapper,
  ChevronIconWrapper,
  ContentWrapper,
  GroupCardWrapper,
  GroupWrapper,
  HeadingContentWrapper, MainContentWrapper, StyleActionButton, StyleToggleButton
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
      <GroupCardWrapper
        margins={margins}
        data-component-type={Props.ComponentType.GroupCard}
        data-component-context={componentContext}
      >
        <GroupWrapper
          onClick={onCardToggle}
          isExpanded={!!isExpanded && !!bodyContents}
          hasHoverStyle={!!bodyContents}
        >
          <ContentWrapper>
            <HeadingContentWrapper>{headingContent}</HeadingContentWrapper>
            {this.toggleButton}
          </ContentWrapper>
        </GroupWrapper>
        {this.bodyContentCards}
      </GroupCardWrapper>
    )
  }

  private get bodyContentCards (): JSX.Element | undefined {
    const {
      bodyContents,
      isExpanded
    } = this.props

    if (bodyContents) {
      return (
        <BodyContentsWrapper isExpanded={!!isExpanded}>
          <BodyContentsDetailsWrapper>
            {bodyContents.map(this.bodyContent)}
          </BodyContentsDetailsWrapper>
        </BodyContentsWrapper>
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
        <StyleToggleButton isExpanded={!!isExpanded}>
          <ChevronIconWrapper>
            <FontAwesomeIcon type='chevron-down'/>
          </ChevronIconWrapper>
        </StyleToggleButton>
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
        <BodyContentWrapper>
          <ContentWrapper>
            <MainContentWrapper>{mainContent}</MainContentWrapper>
            {this.actionButtonDropdownMenu(dropdownSections)}
          </ContentWrapper>
          {extraContent}
        </BodyContentWrapper>
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

  private actionButton = ({ toggleMenu, toggleComponentRef }: IDropdownMenuToggleComponentProps) => (
    <StyleActionButton
      onClick={this.handleActionButtonClick(toggleMenu)}
      innerRef={toggleComponentRef}
    >
      <FontAwesomeIcon type='ellipsis-v'/>
    </StyleActionButton>
  )

  private handleActionButtonClick = (toggleMenu: () => void) => (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    toggleMenu()
  }
}
