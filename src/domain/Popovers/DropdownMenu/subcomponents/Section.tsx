import React from 'react'

import { Props, Variables } from '../../../../common'
import { FontAwesomeIcon } from '../../../Icons/FontAwesomeIcon'
import { FontAwesomeIconValue } from '../../../Icons/Icon/FontAwesomeIconTypes'
import { Anchor } from '../../../Internals'
import { Margin } from '../../../Spacers/Margin'
import { Text } from '../../../Typographies'
import { ITooltipPopoverProps, ITooltipPopoverToggleComponentProps, TooltipPopover } from '../../TooltipPopover'
import {FontAwesomeIconWrapper, StyledSection, StyledSectionContent, StyledSectionContentWithTooltip} from './style'

type SectionType =
  'default'
  | 'alert'
  | 'stripAlert'
  | 'stripSuccess'
  | 'stripWarning'
  | 'stripPrimary'
  | 'stripSecondary'
  | 'stripNeutral'

interface ISectionProps {
  /** What text to show in a section. Will only be used if no component is provided. */
  text?: string,
  /** A component that is shown to the left of the text */
  leftComponent?: JSX.Element,
  /** A component that is shown to the right of the text */
  rightComponent?: JSX.Element,
  /** Determines how to style this section, allowing for different styles for alerts and so on */
  sectionType?: SectionType,
  /** A link that will be navigated to on click */
  href?: string,
  /** Event handler when the section is clicked */
  onClick?: (event: React.SyntheticEvent<HTMLLIElement>) => void
  /**
   * Should this section close the menu when clicked?
   * Defaults to closing when onClick or href is provided; can overwrite with this prop
   */
  closeDropdownBehaviour?: 'always' | 'never' | 'whenActionProvided',
  /** An override component that will render instead of the inbuilt components */
  component?: JSX.Element,
  /** Any extra props to pass to the component */
  componentProps?: any,
  /** Internal prop used for closing the section */
  __closeMenuCallback?: (event: React.SyntheticEvent<HTMLLIElement>, section: ISectionProps) => void
  /** Use the hover style without using href or onClick */
  styleOnHover?: boolean
  /** Stop propagation of click event */
  stopPropagation?: boolean
  /** Message of tooltip to show */
  tooltipMessage?: JSX.Element | string
  /** any extra tooltip props */
  tooltipProps?: ITooltipPopoverProps
  /** props of the icon to display */
  iconProps?: {
    icon: FontAwesomeIconValue
    iconType: 'solid' | 'regular' | 'light' | 'duotone'
  }
  secondaryText?: string
}

class Section extends React.PureComponent<ISectionProps, never> {
  private get component () {
    const {
      onClick,
      href
    } = this.props

    if (href) {
      return Anchor
    }

    if (onClick) {
      return 'button'
    }

    return 'span'
  }

  private get styleProps () {
    const {
      onClick,
      href,
      styleOnHover,
      sectionType
    } = this.props

    return {
      clickable: styleOnHover || !!href || !!onClick,
      sectionType: sectionType || 'default',
      onClick: this.handleCloseMenuClick,
      role: 'menuitem'
    }
  }

  private get content () {
    const {
      leftComponent,
      rightComponent,
      text,
      iconProps,
      secondaryText
    } = this.props

    return (
      <StyledSectionContent>
        {
          iconProps && (
            <FontAwesomeIconWrapper>
              <FontAwesomeIcon
                icon={iconProps.icon}
                type={iconProps.iconType}
              />
            </FontAwesomeIconWrapper>
          )
        }
        <Margin margins={iconProps ? { left: Variables.Spacing.sSmall } : undefined}>
          {leftComponent && <span className='left-component'>{leftComponent}</span>}
          {text}
          {rightComponent && <span className='right-component'>{rightComponent}</span>}
          <Text
            type={Props.TypographyType.XSmall}
            color={Variables.Color.n600}
            isInline={false}
            margins={{ top: Variables.Spacing.s2XSmall }}
          >
            {secondaryText}
          </Text>
        </Margin>
      </StyledSectionContent>
    )
  }

  private get section () {
    const {
      component,
      componentProps,
      onClick,
      href,
      tooltipMessage,
      secondaryText
    } = this.props

    if (component) {
      return (
        <StyledSection {...this.styleProps}>
          {component}
        </StyledSection>
      )
    }

    const Component = this.component
    return (
      <StyledSection {...this.styleProps} hasSecondaryText={secondaryText}>
        <Component
          {...componentProps}
          onClick={onClick}
          href={href}
        >
        {
          tooltipMessage ? (
            <StyledSectionContentWithTooltip>
              <Margin margins={{ right: Variables.Spacing.sXSmall }}>
                {this.content}
              </Margin>
              <FontAwesomeIcon icon='info-circle' type='solid' color={Variables.Color.n400}/>
            </StyledSectionContentWithTooltip>
          ) : this.content
        }
        </Component>
      </StyledSection>
    )
  }

  public static defaultProps: Partial<ISectionProps> = {
    sectionType: 'default',
    closeDropdownBehaviour: 'whenActionProvided'
  }

  public render (): JSX.Element {
    const {
      tooltipMessage,
      tooltipProps
    } = this.props

    if (tooltipMessage) {
      return (
        <TooltipPopover
          toggleComponent={this.toggleComponent(this.section)}
          width={300}
          parentAnchorPosition={{
            xPos: Props.Position.Left,
            yPos: Props.Position.Top
          }}
          popoverAnchorPosition={{
            xPos: Props.Position.Right,
            yPos: Props.Position.Top
          }}
          {...tooltipProps}
        >
          {tooltipMessage}
        </TooltipPopover>
      )
    }

    return this.section
  }

  private toggleComponent = (content: JSX.Element) => ({ openMenu, closeMenu, toggleComponentRef, ariaProps }: ITooltipPopoverToggleComponentProps) => (
    <span
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
      ref={toggleComponentRef}
      {...ariaProps}
    >
      {content}
    </span>
  )

  private handleCloseMenuClick = (event: React.SyntheticEvent<HTMLLIElement>) => {
    const {
      href,
      onClick,
      closeDropdownBehaviour,
      __closeMenuCallback,
      stopPropagation
    } = this.props

    if (stopPropagation) {
      event.stopPropagation()
    }

    if (closeDropdownBehaviour === 'always') {
      __closeMenuCallback!(event, this.props)
    }

    if (closeDropdownBehaviour === 'whenActionProvided' && (!!href || !!onClick)) {
      __closeMenuCallback!(event, this.props)
    }
  }
}

export {
  Section,
  ISectionProps,
  SectionType
}
