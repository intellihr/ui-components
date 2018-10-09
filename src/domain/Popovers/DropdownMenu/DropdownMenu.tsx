import React, { RefObject } from 'react'
import { map } from 'lodash'
import moment, { Moment } from 'moment'
import uuid from 'uuid'
import { FontAwesomeIcon } from '../../Icons'
import {
  DefaultDropdownButton,
  StyledContentWrapper,
  StyledDropdownCustomContent, StyledDropdownSectionList,
  StyledToggleContainer
} from './subcomponents/style'
import { ISectionProps, Section } from './subcomponents/Section'
import { Popover, IPopoverPosition } from '../../Popovers'
import FocusTrap from 'focus-trap-react'

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
   * This component will be wrapped in a span which will determine the onclick properties.
   * Note: all margins will be removed.
   */
  toggleComponent?: JSX.Element
  /** Children to display as custom content instead of sections */
  children?: (props: IDropdownMenuChildrenProps) => React.ReactElement<any>
}

interface IDropdownMenuChildrenProps {
  /** Callback to close the menu */
  closeMenu: () => void
}

class DropdownMenu extends React.PureComponent<IDropdownMenuProps, IDropdownMenuState> {
  public static Section = Section
  public static DefaultDropdownButton = DefaultDropdownButton
  public static defaultProps = {
    toggleComponent: (
      <DefaultDropdownButton>
        <FontAwesomeIcon type='ellipsis-v' />
      </DefaultDropdownButton>
    )
  }

  public state: IDropdownMenuState = {
    isDropdownOpen: false
  }

  private toggleComponentRef: RefObject<HTMLSpanElement> = React.createRef()

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
    this.setState({
      isDropdownOpen: false,
      dropdownId: undefined,
      lastClosedTime: moment()
    })
  }

  private get toggleComponent () {
    const {
      isDropdownOpen,
      dropdownId
    } = this.state
    const { toggleComponent } = this.props

    return (
      <span>
        <StyledToggleContainer
          onClick={this.openMenu}
          innerRef={this.toggleComponentRef}
          role='button'
          aria-expanded={isDropdownOpen}
          aria-owns={dropdownId}
          aria-haspopup
        >
          {toggleComponent}
        </StyledToggleContainer>
      </span>
    )
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
      children
    } = this.props

    return (
      <Popover
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
            initialFocus: document.body,
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
        {children}
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
  DropdownMenu
}
