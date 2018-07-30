import React from 'react'
import { Anchor } from '@Domain/Anchors'
import { StyledSection } from './style'

type DropdownMenuSectionType =
  'default'
  | 'alert'
  | 'stripAlert'
  | 'stripSuccess'
  | 'stripWarning'
  | 'stripPrimary'
  | 'stripSecondary'
  | 'stripNeutral'

interface IDropdownMenuSectionProps {
  /** What text to show in a section. Will only be used if no component is provided. */
  text?: string,
  /** A component that is shown to the left of the text */
  leftComponent?: JSX.Element,
  /** A component that is shown to the right of the text */
  rightComponent?: JSX.Element,
  /** Determines how to style this section, allowing for different styles for alerts and so on */
  sectionType?: DropdownMenuSectionType,
  /** A link that will be navigated to on click */
  href?: string,
  /** Event handler when the section is clicked */
  onClick?: (event: React.SyntheticEvent<HTMLLIElement>) => void
  /** Should this section close the menu when clicked?
   *  Defaults to closing when onClick or href is provided; can overwrite with this prop */
  closeDropdownBehaviour?:  'always' | 'never' | 'whenActionProvided',
  /** An override component that will render instead of the inbuilt components */
  component?: JSX.Element,
  /** Any extra props to pass to the component */
  componentProps?: any,
  /** Internal prop used for closing the section */
  __closeMenuCallback?: (event: React.SyntheticEvent<HTMLLIElement>, section: IDropdownMenuSectionProps) => void
}

class Section extends React.PureComponent<IDropdownMenuSectionProps, never> {
  public static defaultProps: Partial<IDropdownMenuSectionProps> = {
    sectionType: 'default',
    closeDropdownBehaviour: 'whenActionProvided'
  }

  private handleCloseMenuClick = (event: React.SyntheticEvent<HTMLLIElement>) => {
    const {
      href,
      onClick,
      closeDropdownBehaviour,
      __closeMenuCallback
    } = this.props

    if (closeDropdownBehaviour === 'always') {
      __closeMenuCallback!(event, this.props)
    }

    if (closeDropdownBehaviour === 'whenActionProvided' && (!!href || !!onClick)) {
      __closeMenuCallback!(event, this.props)
    }
  }

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
      sectionType
    } = this.props

    return {
      clickable: !!href || !!onClick,
      sectionType: sectionType || 'default',
      onClick: this.handleCloseMenuClick
    }
  }

  public render (): JSX.Element {
    const {
      component,
      componentProps,
      leftComponent,
      rightComponent,
      text,
      onClick,
      href
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
      <StyledSection {...this.styleProps}>
        <Component
          {...componentProps}
          onClick={onClick}
          href={href}
        >
          {leftComponent && <span className='left-component'>{leftComponent}</span>}
          {text}
          {rightComponent && <span className='left-component'>{rightComponent}</span>}
        </Component>
      </StyledSection>
    )
  }
}

export {
  DropdownMenuSectionType,
  IDropdownMenuSectionProps,
  Section
}
