import { FocusTarget } from 'focus-trap'
import FocusTrap from 'focus-trap-react'
import { map } from 'lodash'
import moment, { Moment } from 'moment'
import React, { RefObject } from 'react'
import { Props } from 'src/common'
import uuid from 'uuid'

import { FontAwesomeIcon } from '../../Icons'
import { IPopoverPosition, Popover } from '../../Popovers'
import {
  DefaultDropdownButton,
  StyledContentWrapper,
  StyledDropdownCustomContent,
  StyledDropdownSectionList
} from './subcomponents/style'
import { ISectionProps, Section } from './subcomponents/Section'

interface IDropdownMenuState {
  isDropdownOpen: boolean
  dropdownId?: string
  lastClosedTime?: Moment
}

interface IDropdownMenuProps {
  /** What position on the parent to anchor relative to; 'auto' will find best position automatically */
  parentAnchorPosition?: IPopoverPosition | 'auto',
  /** What position on the dropdown itself to place at the anchor position; 'auto' will find best position automatically */
  dropdownAnchorPosition?: IPopoverPosition | 'auto',
  /** Any custom class names */
  className?: string,
  /** The sections to render in the dropdown */
  sections?: ISectionProps[],
  /**
   * The parent component that opens the dropdown and positions it on the page.
   * The callback is given a toggle menu prop which can be used to toggle the menu as needed.
   */
  toggleComponent?: (props: IDropdownMenuToggleComponentProps) => React.ReactElement<any>,
  /** Whether to auto focus on an element when this menu is opened */
  hasInitialFocus?: boolean
  /**
   * The element to focus on when hasInitialFocus is true; if not provided then the first dom element will be chosen.
   * See focus-trap-react for details
   */
  initialFocusElement?: FocusTarget
  /** Children to display as custom content instead of sections */
  children?: (props: IDropdownMenuChildrenProps) => React.ReactElement<any>
  /** Margins around the component */
  margins: Props.IMargins
  /** The data-component-context */
  componentContext?: string
}

interface IDropdownMenuToggleComponentProps {
  /** Callback to toggle opening/closing menu */
  toggleMenu: () => void,
  /** Ref for the toggle component, to anchor on the page */
  toggleComponentRef: RefObject<any>,
  /** Aria props for opening the menu */
  ariaProps: {
    role: 'button',
    'aria-expanded': boolean,
    'aria-owns'?: string,
    'aria-haspopup': boolean
  }
}

interface IDropdownMenuChildrenProps {
  /** Callback to close the menu */
  closeMenu: () => void
}

class DropdownMenu extends React.Component<IDropdownMenuProps, IDropdownMenuState> {
  public static Section = Section
  public static DefaultDropdownButton = DefaultDropdownButton

  public static defaultProps: Partial<IDropdownMenuProps> = {
    hasInitialFocus: false,
    toggleComponent: ({ toggleMenu, toggleComponentRef, ariaProps }) => {
      const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        event.stopPropagation()
        toggleMenu()
      }

      return (
        <DefaultDropdownButton
          type='button'
          ref={toggleComponentRef}
          onClick={handleClick}
          {...ariaProps}
        >
          <FontAwesomeIcon type='solid' icon='ellipsis-v' />
        </DefaultDropdownButton>
      )
    }
  }

  public state: IDropdownMenuState = {
    isDropdownOpen: false
  }

  private toggleComponentRef: RefObject<any> = React.createRef()

  public render (): JSX.Element {

    return (
      <React.Fragment>
        {this.toggleComponent}
        {this.dropdownPopover}
      </React.Fragment>
    )
  }

  private openMenu = () => {
    const {
      isDropdownOpen,
      lastClosedTime
    } = this.state

    if (isDropdownOpen) {
      return
    }

    // Hack to prevent reopening the menu on the same click as closing it
    if (!lastClosedTime || (moment().diff(lastClosedTime) > 300)) {
      this.setState({
        isDropdownOpen: true,
        dropdownId: uuid.v4()
      })
    }
  }

  private close = () => {
    const {
      isDropdownOpen
    } = this.state

    if (isDropdownOpen) {
      this.setState({
        isDropdownOpen: false,
        dropdownId: undefined,
        lastClosedTime: moment()
      })
    }
  }

  private get toggleComponent () {
    const {
      isDropdownOpen,
      dropdownId
    } = this.state
    const { toggleComponent } = this.props

    return toggleComponent && toggleComponent({
      toggleMenu: this.openMenu,
      toggleComponentRef: this.toggleComponentRef,
      ariaProps: {
        'role': 'button',
        'aria-expanded': isDropdownOpen,
        'aria-owns': dropdownId,
        'aria-haspopup': true
      }
    })
  }

  private get initialFocusProp (): FocusTarget | undefined {
    const {
      hasInitialFocus,
      initialFocusElement
    } = this.props

    if (!hasInitialFocus) {
      return document.body
    }

    return initialFocusElement
  }

  private get dropdownPopover (): JSX.Element | null {
    const {
      isDropdownOpen,
      dropdownId
    } = this.state

    const {
      className,
      parentAnchorPosition,
      dropdownAnchorPosition,
      componentContext
    } = this.props

    return (
      <Popover
        componentContext={componentContext}
        id={dropdownId || ''}
        isOpen={isDropdownOpen}
        parentAnchorPosition={parentAnchorPosition}
        popoverAnchorPosition={dropdownAnchorPosition}
        parentRef={this.toggleComponentRef}
      >
        <FocusTrap
          active={isDropdownOpen}
          focusTrapOptions={{
            onDeactivate: this.close,
            initialFocus: this.initialFocusProp,
            fallbackFocus: document.body,
            clickOutsideDeactivates: true,
            returnFocusOnDeactivate: false
          }}
          tag='span'
        >
          <StyledContentWrapper
            className={className}
            role='menu'
          >
            {this.dropdownContent}
          </StyledContentWrapper>
        </FocusTrap>
      </Popover>
    )
  }

  private get dropdownContent (): JSX.Element | JSX.Element[] {
    const {
      sections,
      children
    } = this.props

    if (!sections && children) {
      return (
        <StyledDropdownCustomContent>
          {children({ closeMenu: this.close })}
        </StyledDropdownCustomContent>
      )
    }

    return (
      <StyledDropdownSectionList>
        {this.dropdownSections}
      </StyledDropdownSectionList>
    )
  }

  private get dropdownSections (): JSX.Element[] {
    const {
      sections
    } = this.props

    return map(sections, (section, index) => {
      return (
        <Section
          key={index}
          __closeMenuCallback={this.close}
          {...section}
        />
      )
    })
  }
}

export {
  IDropdownMenuProps,
  IDropdownMenuToggleComponentProps,
  DropdownMenu
}
