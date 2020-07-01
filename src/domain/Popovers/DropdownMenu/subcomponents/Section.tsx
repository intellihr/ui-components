import React from 'react'

import {Props, Variables} from '../../../../common'
import {StyledIconButton} from '../../../Buttons/FontAwesomeIconButton/style'
import {StyledInputLabel} from '../../../Forms/VerticalForm/subcomponents/style'
import {FontAwesomeIcon} from '../../../Icons/FontAwesomeIcon'
import { Anchor } from '../../../Internals'
import {GridLayout} from '../../../Layouts/GridLayout'
import {Margin} from '../../../Spacers/Margin'
import {ITooltipPopoverProps, ITooltipPopoverToggleComponentProps, TooltipPopover} from '../../TooltipPopover'
import {TooltipPopoverVariant} from '../../TooltipPopover/TooltipPopover'
import {StyledSection, StyledSectionContent} from './style'

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
      component,
      componentProps,
      leftComponent,
      rightComponent,
      text,
      onClick,
      href,
      tooltipMessage
    } = this.props

    if (component) {
      return (
        <StyledSection {...this.styleProps}>
          {component}
        </StyledSection>
      )
    }

    const Component = this.component
    if (tooltipMessage) {
      return (
        <StyledSection {...this.styleProps}>
          <Component
            {...componentProps}
            onClick={onClick}
            href={href}
          >
            <StyledSectionContent>
              <Margin margins={{ right: Variables.Spacing.sXSmall }}>
                {leftComponent && <span className='left-component'>{leftComponent}</span>}
                {text}
                {rightComponent && <span className='right-component'>{rightComponent}</span>}
              </Margin>
              <FontAwesomeIcon icon='info-circle' type='solid' color={Variables.Color.n400}/>
            </StyledSectionContent>
          </Component>
        </StyledSection>
      )
    }

    return (
      <StyledSection {...this.styleProps}>
        <Component
          {...componentProps}
          onClick={onClick}
          href={href}
        >
          {leftComponent && <span className='left-component'>{leftComponent}</span>}
          {text}
          {rightComponent && <span className='right-component'>{rightComponent}</span>}
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
          toggleComponent={this.toggleComponent(this.content)}
          {...tooltipProps}
        >
          {tooltipMessage}
        </TooltipPopover>
      )
    }

    return this.content
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
