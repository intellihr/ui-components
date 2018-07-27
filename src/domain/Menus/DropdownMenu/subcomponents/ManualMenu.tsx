import React, { RefObject } from 'react'
import { map } from 'lodash'
import { StyledDropdownAnimation, StyledMenu, StyledMenuContainer } from './style'
import { Section, IDropdownMenuSectionProps } from './Section'
import { Portal } from './Portal'

type DropdownPosition = 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight'

interface IDropdownManualMenuProps {
  /** What position on the parent to anchor relative to */
  parentAnchorPosition?: DropdownPosition,
  /** What position on the dropdown itself to place at the anchor position */
  dropdownAnchorPosition?: DropdownPosition,
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
    parentAnchorPosition: 'bottomLeft',
    dropdownAnchorPosition: 'topLeft'
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
      top: boundingRect.top + boundingRect.height,
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

  private get portalContent () {
    const {
      className,
      isMenuOpen,
      onDropdownClose
    } = this.props

    if (!isMenuOpen) {
      return <div/>
    }

    return (
      <Portal
        onOutsideClick={onDropdownClose}
      >
        <StyledMenuContainer
          className={className}
          style={this.dropdownPosition}
        >
          <StyledMenu>
            {this.dropdownSections}
          </StyledMenu>
        </StyledMenuContainer>
      </Portal>
    )
  }

  public render (): JSX.Element | null {
    const {
      isMenuOpen
    } = this.props

    return (
      <StyledDropdownAnimation
        in={isMenuOpen}
        onEnter={() => console.log('lol')}
        timeout={1500}
        onEntered={() => console.log('lolwaw')}
        onExiting={() => console.log('wah')}
      >
        {this.portalContent}
      </StyledDropdownAnimation>
    )
  }
}

export {
  DropdownPosition,
  ManualMenu
}
