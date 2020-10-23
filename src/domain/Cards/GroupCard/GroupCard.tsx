import React, { useState } from 'react'

import { Props } from '../../../common'
import { FontAwesomeIcon } from '../../Icons/FontAwesomeIcon'
import { DropdownMenu, IDropdownMenuToggleComponentProps } from '../../Popovers/DropdownMenu'
import { ISectionProps } from '../../Popovers/DropdownMenu/subcomponents/Section'
import {
  ChevronIconWrapper,
  StyledAnchor,
  StyledFlexContent,
  StyledPrimaryContent
} from '../services/style'
import { CardColors } from '../Card/Card'
import {
  StyledBodyActionButton,
  StyledBodyContent,
  StyledDropdownPlaceholder,
  StyledGroupCard,
  StyledGroupCardToggleButton,
  StyledGroupExtraCard,
  StyledGroupMainCard,
  StyledHeaderContainer,
  StyledToggleButtonSection
} from './style'

interface IGroupCardExtraContentProps {
  mainContent: JSX.Element
  extraContent?: JSX.Element
  dropdownSections?: ISectionProps[]
  color?: CardColors
  handleClick?: () => void
}

interface IGroupCardBasicProps {
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
  /** dropdown sections to show in the cards action button dropdown */
  dropdownSections?: ISectionProps[]
  /** Background color of the card */
  color?: CardColors
}

interface IGroupCardWithHrefProps extends IGroupCardBasicProps {
  /** The url to navigate to when you click on the card header - not to be used with handleClick */
  href: string
  /** @deprecated Use `openInNewTab` instead. Where to open the href link */
  target?: string
  /** Open href in new tab */
  openInNewTab?: boolean
}

interface IGroupCardWithHrefAndAnchorPropsProps extends IGroupCardWithHrefProps {
  /** Props for the external anchor component */
  anchorComponentProps: {
    [i: string]: any
  }
}

interface IGroupCardWithHandleClickProps extends IGroupCardBasicProps {
  /** A click handler that will be called when you click on the card header - not to be used with href */
  handleClick: () => void
}

type IGroupCardProps = IGroupCardBasicProps | IGroupCardWithHrefProps | IGroupCardWithHrefAndAnchorPropsProps | IGroupCardWithHandleClickProps

interface IGroupCardState {
  isActionButtonHover: boolean
  isExpanded: boolean
}

class GroupCard extends React.PureComponent<IGroupCardProps, IGroupCardState> {
  public static defaultProps: Partial<IGroupCardProps> = {
    color: 'neutral'
  }

  public state: IGroupCardState = {
    isActionButtonHover: false,
    isExpanded: false
  }

  public render (): JSX.Element {
    const {
      headingContent,
      bodyContents,
      componentContext,
      dropdownSections,
      margins,
      color
    } = this.props

    return (
      <StyledGroupCard
        margins={margins}
        color={color!}
        data-component-type={Props.ComponentType.GroupCard}
        data-component-context={componentContext}
      >
        <StyledHeaderContainer>
          <StyledGroupMainCard
            hasHrefOrHandleClick={this.hasHrefOrHandleClick}
            onClick={this.headerOnClick}
            isExpanded={this.isExpanded && !!bodyContents}
            hasHoverStyle={!this.state.isActionButtonHover && !!bodyContents}
            color={color!}
          >
            <StyledFlexContent>
              {!!this.href && (
                <StyledAnchor
                  href={this.href}
                  target={this.target}
                  openInNewTab={this.openInNewTab}
                  anchorComponentProps={this.anchorComponentProps}
                />
              )}
              <StyledPrimaryContent>{headingContent}</StyledPrimaryContent>
              {this.actionButtonDropdownMenu(dropdownSections)}
              {!this.hasHrefOrHandleClick && this.toggleButton()}
            </StyledFlexContent>
          </StyledGroupMainCard>
          {this.hasHrefOrHandleClick && (
            <StyledToggleButtonSection
              isExpanded={this.isExpanded}
              onClick={this.handleCardToggle}
              color={color!}
            >
              {this.toggleButton()}
            </StyledToggleButtonSection>
          )}
        </StyledHeaderContainer>
        {this.bodyContentCards}
      </StyledGroupCard>
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

  private get target (): string | undefined {
    if ('target' in this.props) {
      return this.props.target
    }

    return undefined
  }

  private get openInNewTab (): boolean | undefined {
    if ('openInNewTab' in this.props) {
      return this.props.openInNewTab
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

  private get bodyContentCards (): JSX.Element | undefined {
    const {
      bodyContents,
      color
    } = this.props

    if (bodyContents) {
      return (
        <StyledGroupExtraCard isExpanded={this.isExpanded} color={color!}>
          {bodyContents.map(this.bodyContent)}
        </StyledGroupExtraCard>
      )
    }
  }

  private toggleButton (): JSX.Element | undefined {
    const {
      bodyContents,
      color
    } = this.props

    if (bodyContents) {
      return (
        <StyledGroupCardToggleButton
          isExpanded={this.isExpanded}
          color={color!}
          hasHrefOrHandleClick={this.hasHrefOrHandleClick}
          hasParentHoverStyle={!this.state.isActionButtonHover && !this.hasHrefOrHandleClick}
        >
          <ChevronIconWrapper>
            <FontAwesomeIcon type='solid' icon='chevron-down' />
          </ChevronIconWrapper>
        </StyledGroupCardToggleButton>
      )
    }
  }

  private bodyContent = (bodyContent: IGroupCardExtraContentProps, index: number) => {
    const {
      color,
      mainContent,
      extraContent,
      dropdownSections,
      handleClick
    } = bodyContent

    const cardColor = color || this.props.color!
    const actionDropdownMenu = (onMouseOver: () => void, onMouseOut: () => void) =>
      this.actionButtonDropdownMenu(dropdownSections, cardColor, onMouseOver, onMouseOut)

    if (mainContent) {
      return (
        <BodyCard
          key={index}
          color={cardColor}
          mainContent={mainContent}
          extraContent={extraContent}
          handleClick={handleClick}
          actionButtonDropdownMenu={actionDropdownMenu}
        />
      )
    }
  }

  private actionButtonDropdownMenu = (
    dropdownSections: ISectionProps[] | undefined,
    color?: CardColors,
    onMouseOver?: () => void,
    onMouseOut?: () => void
  ) => {
    if (dropdownSections) {
      if (dropdownSections.length === 0) {
        return <StyledDropdownPlaceholder />
      }

      return (
        <DropdownMenu
          sections={dropdownSections}
          toggleComponent={this.actionButton(color, onMouseOver, onMouseOut)}
        />
      )
    }

    return null
  }

  private actionButton = (
    color?: CardColors,
    onMouseOver?: () => void,
    onMouseOut?: () => void
  ) =>
    ({ toggleMenu, toggleComponentRef, ariaProps }: IDropdownMenuToggleComponentProps) => (
      <StyledBodyActionButton
        onClick={this.handleActionButtonClick(toggleMenu)}
        onMouseOver={onMouseOver || this.handleActionButtonMouseOver}
        onMouseOut={onMouseOut || this.handleActionButtonMouseOut}
        ref={toggleComponentRef}
        hasRightMargin={!!this.props.bodyContents && !this.hasHrefOrHandleClick}
        color={color || this.props.color!}
        {...ariaProps}
      >
        <FontAwesomeIcon type='solid' icon='ellipsis-v' />
      </StyledBodyActionButton>
    )

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

interface IBodyCardProps {
  mainContent: JSX.Element
  color: CardColors
  extraContent?: JSX.Element
  dropdownSections?: ISectionProps[]
  handleClick?: () => void
  actionButtonDropdownMenu: (onMouseOver: () => void, onMouseOut: () => void) => JSX.Element | null
}

const BodyCard: React.FC<IBodyCardProps> = ({
  mainContent,
  color,
  extraContent,
  handleClick,
  actionButtonDropdownMenu
}) => {
  const [actionButtonHovered, setActionButtonHovered] = useState(false)

  return (
    <StyledBodyContent
      color={color}
      onClick={handleClick ? () => handleClick() : undefined}
      hasHoverStyle={!actionButtonHovered && handleClick ? true : false}
    >
      <StyledFlexContent>
        <StyledPrimaryContent>{mainContent}</StyledPrimaryContent>
        {actionButtonDropdownMenu(() => setActionButtonHovered(true), () => setActionButtonHovered(false))}
      </StyledFlexContent>
      {extraContent}
    </StyledBodyContent>
  )
}

export {
  BodyCard,
  GroupCard,
  IGroupCardExtraContentProps
}
