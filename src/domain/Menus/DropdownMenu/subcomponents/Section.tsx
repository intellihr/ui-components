import React from 'react'
import { Anchor } from '@Domain/Anchors'
import { StyledSection } from './style'

type DropdownMenuSectionType =
  'default'
  | 'nonClickable'
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
  onClick?: (event: React.SyntheticEvent<any>) => void
  /** An override component that will render instead of the inbuilt components */
  component?: JSX.Element,
  /** any extra props to pass to the component */
  componentProps?: any
}

class Section extends React.PureComponent<IDropdownMenuSectionProps, never> {
  public static defaultProps: Partial<IDropdownMenuSectionProps> = {
    sectionType: 'default'
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
      sectionType: sectionType || 'default'
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
