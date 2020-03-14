import React from 'react'

import { Props } from '../../../common'
import { FontAwesomeIcon } from '../../Icons/FontAwesomeIcon'
import { DropdownMenu, IDropdownMenuToggleComponentProps } from '../../Popovers/DropdownMenu'
import { ISectionProps } from '../../Popovers/DropdownMenu/subcomponents/Section'
import {
  ChevronIconWrapper,
  StyledAnchor,
  StyledPrimaryContent
} from '../services/style'
import {
  StyledActionButton,
  StyledBodyContents,
  StyledCard,
  StyledCardHeader,
  StyledCardToggleButton,
  StyledExtraContent,
  StyledHeaderContainer,
  StyledToggleButtonSection
} from './style'

type CardColors = 'neutral' | 'orange' | 'red' | 'grey'

interface ICardBasicProps {
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

interface ICardWithHrefProps extends ICardBasicProps {
  /** The url to navigate to when you click on the card header - not to be used with handleClick */
  href: string
}

interface ICardWithHrefAndAnchorPropsProps extends ICardWithHrefProps {
  /** Props for the external anchor component */
  anchorComponentProps: {
    [i: string]: any
  }
}

interface ICardWithHandleClickProps extends ICardBasicProps {
  /** A click handler that will be called when you click on the card header - not to be used with href */
  handleClick: () => void
}

type ICardProps = ICardBasicProps | ICardWithHrefProps | ICardWithHrefAndAnchorPropsProps | ICardWithHandleClickProps

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
        <StyledHeaderContainer>
          <StyledCardHeader
            hasHrefOrHandleClick={this.hasHrefOrHandleClick}
            onClick={this.headerOnClick}
            isExpanded={this.isExpanded && !!extraContent}
            hasHoverStyle={!this.state.isActionButtonHover && (!!extraContent || !!onCardToggle || isHoverable! || this.hasHrefOrHandleClick)}
            canExpand={!!extraContent}
            color={color!}
          >
            {!!this.href && (
              <StyledAnchor
                href={this.href}
                anchorComponentProps={this.anchorComponentProps}
              />
            )}
            <StyledPrimaryContent>{mainContent}</StyledPrimaryContent>
            {this.actionButtonDropdownMenu}
            {!this.hasHrefOrHandleClick && this.toggleButton()}
          </StyledCardHeader>

          {this.hasHrefOrHandleClick && !!extraContent && (
            <StyledToggleButtonSection
              isExpanded={this.isExpanded && !!extraContent}
              onClick={this.handleCardToggle}
              color={color!}
            >
              {this.toggleButton()}
            </StyledToggleButtonSection>
          )}

        </StyledHeaderContainer>
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

  private get anchorComponentProps () {
    if ('anchorComponentProps' in this.props) {
      return this.props.anchorComponentProps
    }

    return undefined
  }

  private get href (): string | undefined {
    if ('href' in this.props) {
      return this.props.href
    }

    return undefined
  }

  private get handleClick (): (() => void) | undefined {
    if ('handleClick' in this.props) {
      return this.props.handleClick
    }

    return undefined
  }

  private get hasHrefOrHandleClick (): boolean {
    return !!this.handleClick || !!this.href
  }

  private get headerOnClick (): any {
    if (!!this.handleClick) {
      return this.handleClick
    }

    if (!!this.href) {
      return undefined
    }

    return this.handleCardToggle
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
      hasRightMargin={!!this.props.extraContent && !this.hasHrefOrHandleClick}
      color={this.props.color!}
      {...ariaProps}
    >
      <FontAwesomeIcon type='solid' icon='ellipsis-v' />
    </StyledActionButton>
  )

  private toggleButton (): JSX.Element | undefined {
    const {
      extraContent,
      color,
      isHoverable
    } = this.props

    if (extraContent) {
      return (
        <StyledCardToggleButton
          isExpanded={this.isExpanded}
          color={color!}
          hasHrefOrHandleClick={this.hasHrefOrHandleClick}
          hasParentHoverStyle={!this.state.isActionButtonHover && (isHoverable! || !this.hasHrefOrHandleClick)}
        >
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
