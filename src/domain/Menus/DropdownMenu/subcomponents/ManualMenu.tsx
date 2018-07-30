import React, { RefObject } from 'react'
import { map } from 'lodash'
import { Transition } from 'react-transition-group'
import { StyledDropdownMenu, StyledSectionList } from './style'
import { Section, IDropdownMenuSectionProps } from './Section'
import FocusTrap from 'focus-trap-react'

interface IPositionXY {
  xPos: 'left' | 'center' | 'right',
  yPos: 'top' | 'center' | 'bottom'
}

interface IDropdownManualMenuProps {
  /** What position on the parent to anchor relative to */
  parentAnchorPosition?: IPositionXY,
  /** What position on the dropdown itself to place at the anchor position */
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

  private get dropdownPosition () {
    const {
      parentRef
    } = this.props

    if (!parentRef.current) {
      return {}
    }

    const boundingRect = parentRef.current.getBoundingClientRect()

    return {
      top: boundingRect.top + boundingRect.height + window.pageYOffset,
      left: boundingRect.left
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
      onDropdownClose
    } = this.props

    return (
      <StyledDropdownMenu
        style={this.dropdownPosition}
        className={animationState}
        transformOrigin={{
          xPos: 'left',
          yPos: 'top'
        }}
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
