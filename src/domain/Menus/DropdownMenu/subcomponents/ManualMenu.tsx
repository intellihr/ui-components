import React, { RefObject } from 'react'
import { map } from 'lodash'
import { Transition } from 'react-transition-group'
import { StyledDropdownMenu, StyledSectionList } from './style'
import { Section, IDropdownMenuSectionProps } from './Section'
import FocusTrap from 'focus-trap-react'

interface IPositionXY {
  xPos: 'left' | 'right',
  yPos: 'top' | 'bottom'
}

interface IDropdownManualMenuProps {
  /** What position on the parent to anchor relative to */
  parentAnchorPosition?: IPositionXY,
  /** What position on the dropdown itself to place at the anchor position*/
  dropdownAnchorPosition?: IPositionXY,
  /** Any custom class names */
  className?: string,
  /** Whether the dropdown is showing currently or not */
  isMenuOpen: boolean,
  /** Callback when the modal is attempted to be closed */
  onDropdownClose: () => void,
  /** The sections to render in the dropdown */
  sections: IDropdownMenuSectionProps[],
  /** Parent ref to anchor this to on the page */
  parentRef: RefObject<HTMLSpanElement>
}

class ManualMenu extends React.PureComponent<IDropdownManualMenuProps, never> {
  public static defaultProps: Partial<IDropdownManualMenuProps> = {
    parentAnchorPosition: {
      xPos: 'left',
      yPos: 'bottom'
    },
    dropdownAnchorPosition: {
      xPos: 'left',
      yPos: 'top'
    }
  }

  private get parentAnchorXPos () {
    const {
      parentAnchorPosition,
      parentRef
    } = this.props

    if (!parentRef.current) {
      return window.pageXOffset
    }

    const boundingRect = parentRef.current.getBoundingClientRect()
    const xPos = (parentAnchorPosition!.xPos === 'left') ? boundingRect.left : boundingRect.right

    return xPos + window.pageXOffset
  }

  private get parentAnchorYPos () {
    const {
      parentAnchorPosition,
      parentRef
    } = this.props

    if (!parentRef.current) {
      return window.pageYOffset
    }

    const boundingRect = parentRef.current.getBoundingClientRect()
    const yPos = (parentAnchorPosition!.yPos === 'top') ? boundingRect.top : boundingRect.bottom

    return yPos + window.pageYOffset
  }

  private dropdownXOffset = (parentXPos: number) => {
    const {
      dropdownAnchorPosition
    } = this.props

    switch (dropdownAnchorPosition!.xPos) {
      case 'left':
        return { left: parentXPos }
      case 'right':
        return { right: document.documentElement.clientWidth - parentXPos }
    }
  }

  private dropdownYOffset = (parentYPos: number) => {
    const {
      dropdownAnchorPosition
    } = this.props

    switch (dropdownAnchorPosition!.yPos) {
      case 'top':
        return { top: parentYPos }
      case 'bottom':
        return { bottom: document.documentElement.clientHeight - parentYPos }
    }
  }

  private get dropdownPosition () {
    const {
      parentRef
    } = this.props

    if (!parentRef.current) {
      return {}
    }

    // Get the x/y position we care about on the parent
    const parentXPos = this.parentAnchorXPos
    const parentYPos = this.parentAnchorYPos

    // Position the dropdown correctly in relation to this parent point
    return {
      ...this.dropdownXOffset(parentXPos),
      ...this.dropdownYOffset(parentYPos)
    }
  }

  private get dropdownSections () {
    const {
      sections
    } = this.props

    return map(sections, (section, index) => {
      return (
        <Section
          key={index}
          {...section}
        />
      )
    })
  }

  private animatedMenu = (animationState: string) => {
    const {
      className,
      isMenuOpen,
      onDropdownClose,
      dropdownAnchorPosition
    } = this.props

    return (
      <StyledDropdownMenu
        className={animationState}
        transformOrigin={dropdownAnchorPosition!}
        style={this.dropdownPosition}
      >
        <FocusTrap
          active={isMenuOpen}
          focusTrapOptions={{
            onDeactivate: onDropdownClose,
            initialFocus: document.body,
            clickOutsideDeactivates: true,
            returnFocusOnDeactivate: false
          }}
        >
          <StyledSectionList
            className={className}
          >
            {this.dropdownSections}
          </StyledSectionList>
        </FocusTrap>
      </StyledDropdownMenu>
    )
  }

  public render () {
    const {
      isMenuOpen
    } = this.props

    return (
      <Transition
        in={isMenuOpen}
        timeout={100}
        mountOnEnter
        unmountOnExit
      >
        {this.animatedMenu}
      </Transition>
    )
  }
}

export {
  IPositionXY,
  ManualMenu
}
