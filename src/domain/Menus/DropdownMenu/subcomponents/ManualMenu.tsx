import React, { RefObject } from 'react'
import ReactDOM from 'react-dom'
import { debounce, map } from 'lodash'
import { Transition } from 'react-transition-group'
import FocusTrap from 'focus-trap-react'
import { Props } from '@Common/types'
import { StyledDropdownMenu, StyledSectionList } from './style'
import { Section, ISectionProps } from './Section'

interface IManualMenuProps {
  /** Any custom class names */
  className?: string,
  /** What position on the parent to anchor relative to; 'auto' will find best position automatically */
  parentAnchorPosition?: Props.IPositionXY | 'auto',
  /** What position on the dropdown itself to place at the anchor position; 'auto' will find best position automatically */
  dropdownAnchorPosition?: Props.IPositionXY | 'auto',
  /** The sections to render in the dropdown */
  sections: ISectionProps[],
  /** Whether the dropdown is showing currently or not */
  isDropdownOpen: boolean,
  /** Callback when the modal is attempted to be closed */
  onDropdownClose: () => void,
  /** Parent ref to anchor this to on the page */
  parentRef: RefObject<HTMLSpanElement>
}

class ManualMenu extends React.PureComponent<IManualMenuProps, never> {
  public static defaultProps: Partial<IManualMenuProps> = {
    parentAnchorPosition: 'auto',
    dropdownAnchorPosition: 'auto'
  }

  public static AUTO_FLIP_CUTOFF = 2 / 3

  private currentlyMounted: boolean = false

  componentDidMount () {
    this.currentlyMounted = true

    window.addEventListener('resize', this.onWindowUpdate)
    window.addEventListener('scroll', this.debounceOnWindowUpdate)
  }

  componentWillUnmount () {
    this.currentlyMounted = false

    window.removeEventListener('scroll', this.onWindowUpdate)
    window.removeEventListener('resize', this.debounceOnWindowUpdate)
  }

  private onWindowUpdate = () => {
    // This allows the menu to reposition correctly when the window changes
    if (this.currentlyMounted) {
      this.forceUpdate()
    }
  }

  private debounceOnWindowUpdate = debounce(this.onWindowUpdate, 100)

  private get parentBoundingRect (): ClientRect | DOMRect {
    const {
      parentRef
    } = this.props

    // For the first render, the parent ref will be undefined, so we let the dropdown have (0, 0) position on the page
    if (!parentRef.current) {
      return new DOMRect()
    }

    return parentRef.current.getBoundingClientRect()
  }

  private get parentInLeftSideOfWindow (): boolean {
    const boundingRect = this.parentBoundingRect
    const parentXCenter = boundingRect.left + boundingRect.width / 2

    return parentXCenter < window.innerWidth * ManualMenu.AUTO_FLIP_CUTOFF
  }

  private get parentInTopSideOfWindow (): boolean {
    const boundingRect = this.parentBoundingRect
    const parentYCenter = boundingRect.top + boundingRect.height / 2

    return parentYCenter < window.innerHeight * ManualMenu.AUTO_FLIP_CUTOFF
  }

  private get parentAnchorPosition (): Props.IPositionXY {
    const {
      parentAnchorPosition
    } = this.props

    if (parentAnchorPosition !== 'auto') return parentAnchorPosition!

    return {
      xPos: this.parentInLeftSideOfWindow ? Props.Position.Left : Props.Position.Right,
      yPos: this.parentInTopSideOfWindow ? Props.Position.Bottom : Props.Position.Top
    }
  }

  private get dropdownAnchorPosition (): Props.IPositionXY {
    const {
      dropdownAnchorPosition
    } = this.props

    if (dropdownAnchorPosition !== 'auto') return dropdownAnchorPosition!

    return {
      xPos: this.parentInLeftSideOfWindow ? Props.Position.Left : Props.Position.Right,
      yPos: this.parentInTopSideOfWindow ? Props.Position.Top : Props.Position.Bottom
    }
  }

  private get parentAnchorOffset () {
    const boundingRect = this.parentBoundingRect
    const position = this.parentAnchorPosition

    const x = (position.xPos === Props.Position.Left) ? boundingRect.left : boundingRect.right
    const y = (position.yPos === Props.Position.Top) ? boundingRect.top : boundingRect.bottom

    return {
      x: x + window.pageXOffset,
      y: y + window.pageYOffset
    }
  }

  private get dropdownXOffset () {
    switch (this.dropdownAnchorPosition.xPos) {
      case Props.Position.Left:
        return { left: this.parentAnchorOffset.x }
      case Props.Position.Right:
        return { right: document.documentElement.clientWidth - this.parentAnchorOffset.x }
      default:
        console.warn('DropdownMenu only supports Left and Right x positioning currently')
    }
  }

  private get dropdownYOffset () {
    switch (this.dropdownAnchorPosition.yPos) {
      case Props.Position.Top:
        return { top: this.parentAnchorOffset.y }
      case Props.Position.Bottom:
        return { bottom: document.documentElement.clientHeight - this.parentAnchorOffset.y }
      default:
        console.warn('DropdownMenu only supports Top and Bottom y positioning currently')
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
      onDropdownClose
    } = this.props

    return (
      <StyledDropdownMenu
        className={animationState}
        transformOrigin={this.dropdownAnchorPosition}
        style={{
          ...this.dropdownXOffset,
          ...this.dropdownYOffset
        }}
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

  private get transition () {
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

  public render () {
    return ReactDOM.createPortal(
      this.transition,
      document.body
    )
  }
}

export {
  IManualMenuProps,
  ManualMenu
}
