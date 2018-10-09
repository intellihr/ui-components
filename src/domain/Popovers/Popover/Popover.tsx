import React, { RefObject } from 'react'
import ReactDOM from 'react-dom'
import { debounce } from 'lodash'
import { Transition } from 'react-transition-group'
import { Props } from '../../../common'
import { StyledPopover } from './style'

interface IPopoverPosition {
  xPos: Props.Position.Left | Props.Position.Right,
  yPos: Props.Position.Top | Props.Position.Bottom
}

interface IPopoverProps {
  /**
   * id to use for the popover to identify it on the page.
   *
   * This is required for accessibility - if triggered by a button, this id
   * should match some other element on the page with role="button" and
   * aria-owns="{id}". This ensures that screen readers and other devices
   * can use the popover.
   *
   * Do NOT auto-generate this id unless it matches another element on the page.
   */
  id: string,
  /**
   * What position on the parent to anchor relative to; 'auto' will find
   * a best position automatically.
   */
  parentAnchorPosition?: IPopoverPosition | 'auto',
  /**
   * What position on the popover itself to place at the anchor position;
   * 'auto' will find a best position automatically.
   */
  popoverAnchorPosition?: IPopoverPosition | 'auto',
  /** Whether the popover is showing currently or not */
  isOpen: boolean,
  /** Parent ref to anchor this to on the page */
  parentRef: RefObject<HTMLSpanElement>
}

class Popover extends React.Component<IPopoverProps, never> {
  public static AUTO_FLIP_CUTOFF = 2 / 3

  public static defaultProps: Partial<IPopoverProps> = {
    parentAnchorPosition: 'auto',
    popoverAnchorPosition: 'auto'
  }

  private currentlyMounted: boolean = false

  public componentDidMount () {
    this.currentlyMounted = true

    window.addEventListener('resize', this.onWindowUpdate)
    window.addEventListener('scroll', this.debounceOnWindowUpdate)
  }

  public componentWillUnmount () {
    this.currentlyMounted = false

    window.removeEventListener('resize', this.onWindowUpdate)
    window.removeEventListener('scroll', this.debounceOnWindowUpdate)
  }

  public render (): React.ReactPortal {
    return ReactDOM.createPortal(
      this.transition,
      document.body
    )
  }

  private onWindowUpdate = () => {
    // This allows the menu to reposition correctly when the window changes
    if (this.currentlyMounted) {
      this.forceUpdate()
    }
  }

  // tslint:disable-next-line:member-ordering
  private debounceOnWindowUpdate = debounce(this.onWindowUpdate, 100)

  private get transition (): JSX.Element {
    const {
      isOpen
    } = this.props

    return (
      <Transition
        in={isOpen}
        timeout={100}
        mountOnEnter
        unmountOnExit
      >
        {this.animatedPopoverContent}
      </Transition>
    )
  }

  private animatedPopoverContent = (animationState: string) => {
    const {
      id,
      children
    } = this.props

    return (
      <StyledPopover
        id={id}
        className={animationState}
        transformOrigin={this.popoverAnchorPosition}
        style={{
          ...this.popoverXOffset,
          ...this.popoverYOffset
        }}
      >
        {children}
      </StyledPopover>
    )
  }

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

    return parentXCenter < window.innerWidth * Popover.AUTO_FLIP_CUTOFF
  }

  private get parentInTopSideOfWindow (): boolean {
    const boundingRect = this.parentBoundingRect
    const parentYCenter = boundingRect.top + boundingRect.height / 2

    return parentYCenter < window.innerHeight * Popover.AUTO_FLIP_CUTOFF
  }

  private get parentAnchorPosition (): IPopoverPosition {
    const {
      parentAnchorPosition
    } = this.props

    if (parentAnchorPosition !== 'auto') {
      return parentAnchorPosition!
    }

    return {
      xPos: this.parentInLeftSideOfWindow ? Props.Position.Left : Props.Position.Right,
      yPos: this.parentInTopSideOfWindow ? Props.Position.Bottom : Props.Position.Top
    }
  }

  private get popoverAnchorPosition (): IPopoverPosition {
    const {
      popoverAnchorPosition
    } = this.props

    if (popoverAnchorPosition !== 'auto') {
      return popoverAnchorPosition!
    }

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

  private get popoverXOffset () {
    switch (this.popoverAnchorPosition.xPos) {
      case Props.Position.Left:
        return { left: this.parentAnchorOffset.x }
      case Props.Position.Right:
        return { right: document.documentElement.clientWidth - this.parentAnchorOffset.x }
      default:
        console.warn('Popover only supports Left and Right x positioning currently')
    }
  }

  private get popoverYOffset () {
    switch (this.popoverAnchorPosition.yPos) {
      case Props.Position.Top:
        return { top: this.parentAnchorOffset.y }
      case Props.Position.Bottom:
        return { bottom: document.documentElement.clientHeight - this.parentAnchorOffset.y }
      default:
        console.warn('Popover only supports Top and Bottom y positioning currently')
    }
  }
}

export {
  IPopoverPosition,
  Popover
}
