import React, { Fragment, RefObject } from 'react'
import { FocusTarget } from 'focus-trap'
import { StyledTooltipContent } from './style'
import { IPopoverPosition, Popover } from '../Popover'
import { FontAwesomeIcon } from '../../Icons/FontAwesomeIcon'
import uuid from 'uuid'

interface ITooltipPopoverMenuState {
  isPopoverOpen: boolean
  popoverId?: string
}

interface ITooltipPopoverToggleComponentProps {
  /** Callback to toggle opening/closing popover */
  openMenu: () => void,
  /** Callback to toggle opening/closing popover */
  closeMenu: () => void,
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

interface ITooltipPopoverProps {
  /** What position on the parent to anchor relative to; 'auto' will find best position automatically */
  parentAnchorPosition?: IPopoverPosition | 'auto',
  /** What position on the popover itself to place at the anchor position; 'auto' will find best position automatically */
  popoverAnchorPosition?: IPopoverPosition | 'auto',
  /** Any custom class names */
  className?: string,
  /**
   * The parent component that opens the popover and positions it on the page.
   * The callback is given open and close props which can be used to toggle the menu as needed.
   */
  toggleComponent?: (props: ITooltipPopoverToggleComponentProps) => React.ReactElement<any>,
  /** Children to display in the tooltip */
  children?: React.ReactElement<any>
  /** The width of the popover */
  width?: number
}

class HoverablePopover extends React.Component<ITooltipPopoverProps, ITooltipPopoverMenuState> {
  public static defaultProps: Partial<ITooltipPopoverProps> = {
    toggleComponent: ({ openMenu, closeMenu, toggleComponentRef, ariaProps }) => (
      <span
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
        ref={toggleComponentRef}
        {...ariaProps}
      >
        <FontAwesomeIcon type='question-circle-o' />
      </span>
    )
  }

  public state: ITooltipPopoverMenuState = {
    isPopoverOpen: false
  }

  private toggleComponentRef: RefObject<any> = React.createRef()

  public render (): JSX.Element {
    const {
      isPopoverOpen,
      popoverId
    } = this.state

    const {
      children,
      toggleComponent,
      className,
      parentAnchorPosition,
      popoverAnchorPosition,
      width
    } = this.props

    return (
      <Fragment>
        {toggleComponent && toggleComponent({
          openMenu: this.openMenu,
          closeMenu: this.closeMenu,
          toggleComponentRef: this.toggleComponentRef,
          ariaProps: {
            role: 'button',
            'aria-expanded': isPopoverOpen,
            'aria-owns': popoverId,
            'aria-haspopup': true
          }
        })}
        <Popover
          isOpen={isPopoverOpen}
          id={popoverId || ''}
          parentRef={this.toggleComponentRef}
          parentAnchorPosition={parentAnchorPosition}
          popoverAnchorPosition={popoverAnchorPosition}
        >
          <StyledTooltipContent
            className={className}
            width={width}
          >
            {children}
          </StyledTooltipContent>
        </Popover>
      </Fragment>
    )
  }


  private openMenu = () => {
    const {
      isPopoverOpen
    } = this.state

    if (isPopoverOpen) {
      return
    }


    this.setState({
      isPopoverOpen: true,
      popoverId: uuid.v4()
    })

  }

  private closeMenu = () => {
    const {
      isPopoverOpen
    } = this.state

    if (!isPopoverOpen) {
      return
    }

    this.setState({
      isPopoverOpen: false,
      popoverId: undefined
    })
  }
}

export {
  HoverablePopover,
  ITooltipPopoverProps,
  ITooltipPopoverToggleComponentProps
}
