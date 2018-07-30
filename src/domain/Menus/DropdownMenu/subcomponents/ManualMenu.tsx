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
  /** Any custom class names */
  className?: string,
  /** What position on the parent to anchor relative to */
  parentAnchorPosition?: IPositionXY,
  /** What position on the dropdown itself to place at the anchor position */
  dropdownAnchorPosition?: IPositionXY,
  /** The sections to render in the dropdown */
  sections: IDropdownMenuSectionProps[],
  /** Whether the dropdown is showing currently or not */
  isDropdownOpen: boolean,
  /** Callback when the modal is attempted to be closed */
  onDropdownClose: () => void,
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

  componentDidMount () {
    window.addEventListener("resize", this.onWindowSizeUpdate);
  }

  componentWillUnmount () {
    window.removeEventListener("resize", this.onWindowSizeUpdate);
  }

  private onWindowSizeUpdate = () => {
    // This allows the menu to reposition correctly when the window changes
    this.forceUpdate()
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
      sections,
      onDropdownClose
    } = this.props

    return map(sections, (section, index) => {
      return (
        <Section
          key={index}
          __closeMenuCallback={onDropdownClose}
          {...section}
        />
      )
    })
  }

  private animatedMenu = (animationState: string) => {
    const {
      className,
      isDropdownOpen,
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
          active={isDropdownOpen}
          focusTrapOptions={{
            onDeactivate: onDropdownClose,
            initialFocus: document.body,
            clickOutsideDeactivates: true,
            returnFocusOnDeactivate: false
          }}
          tag='span'
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
      isDropdownOpen
    } = this.props

    return (
      <Transition
        in={isDropdownOpen}
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
