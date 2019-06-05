import { debounce } from 'lodash'
import React, { RefObject } from 'react'
import ReactDOM from 'react-dom'
import { Transition } from 'react-transition-group'

import { Props } from '../../../common'
import { StyledPopover } from './style'

interface IPopoverPosition {
  xPos: Props.Position.Left | Props.Position.Right | Props.Position.Auto,
  yPos: Props.Position.Top | Props.Position.Bottom | Props.Position.Auto
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

  animationType?: 'dropdown' | 'tooltip'
  /** The data-component-context */
  componentContext?: string
}

class Popover extends React.Component<IPopoverProps, never> {
  public static AUTO_FLIP_CUTOFF = 2 / 3

  public static defaultProps: Partial<IPopoverProps> = {
    parentAnchorPosition: 'auto',
    popoverAnchorPosition: 'auto',
    animationType: 'dropdown'
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

  public render () {
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

  private get animationTimeout (): number {
    const {
      animationType
    } = this.props

    switch (animationType) {
      case 'dropdown':
        return 100
      case 'tooltip':
        return 300
      default:
        return 0
    }
  }

  private get transition (): JSX.Element {
    const {
      isOpen
    } = this.props

    return (
      <Transition
        in={isOpen}
        timeout={this.animationTimeout}
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
      children,
      animationType,
      componentContext
    } = this.props

    return (
      <StyledPopover
        data-component-type={Props.ComponentType.Popover}
        data-component-context={componentContext}
        id={id}
        animationType={animationType!}
        className={animationState}
        transformOrigin={{ xPos: this.popoverAnchorXPosition, yPos: this.popoverAnchorYPosition }}
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

    if (!parentRef.current.getBoundingClientRect) {
      throw new Error(`
        Unable to getBoundingClientRect for the ref passed to Popover.
        This means that your ref was not for a dom node but instead for a react
        element. Popover is only able to anchor correctly to dom nodes.
      `)
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

  private get popoverAnchorXPosition (): Props.Position {
    const {
      popoverAnchorPosition
    } = this.props

    if (!popoverAnchorPosition || popoverAnchorPosition === 'auto' || popoverAnchorPosition.xPos === 'auto') {
      return this.parentInLeftSideOfWindow ? Props.Position.Left : Props.Position.Right
    }

    return popoverAnchorPosition.xPos
  }

  private get popoverAnchorYPosition (): Props.Position {
    const {
      popoverAnchorPosition
    } = this.props

    if (!popoverAnchorPosition || popoverAnchorPosition === 'auto' || popoverAnchorPosition.yPos === 'auto') {
      return this.parentInTopSideOfWindow ? Props.Position.Top : Props.Position.Bottom
    }

    return popoverAnchorPosition.yPos
  }

  private get parentAnchorXPosition (): Props.Position {
    const {
      parentAnchorPosition
    } = this.props

    if (!parentAnchorPosition || parentAnchorPosition === 'auto' || parentAnchorPosition.xPos === 'auto') {
      return this.parentInLeftSideOfWindow ? Props.Position.Left : Props.Position.Right
    }

    return parentAnchorPosition.xPos
  }

  private get parentAnchorYPosition (): Props.Position {
    const {
      parentAnchorPosition
    } = this.props

    if (!parentAnchorPosition || parentAnchorPosition === 'auto' || parentAnchorPosition.yPos === 'auto') {
      return this.parentInTopSideOfWindow ? Props.Position.Bottom : Props.Position.Top
    }

    return parentAnchorPosition.yPos
  }

  private get parentAnchorOffset () {
    const boundingRect = this.parentBoundingRect

    const x = (this.parentAnchorXPosition === Props.Position.Left) ? boundingRect.left : boundingRect.right
    const y = (this.parentAnchorYPosition === Props.Position.Top) ? boundingRect.top : boundingRect.bottom

    return {
      x: x + window.pageXOffset,
      y: y + window.pageYOffset
    }
  }

  private get popoverXOffset () {
    switch (this.popoverAnchorXPosition) {
      case Props.Position.Left:
        return { left: this.parentAnchorOffset.x }
      case Props.Position.Right:
        return { right: document.documentElement.clientWidth - this.parentAnchorOffset.x }
      default:
        console.warn('Popover only supports Left and Right x positioning currently')
    }
  }

  private get popoverYOffset () {
    switch (this.popoverAnchorYPosition) {
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
