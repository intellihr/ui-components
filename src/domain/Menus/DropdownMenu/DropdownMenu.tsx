import uuid from 'uuid'
import React from 'react'
import { map, get } from 'lodash'
import classNames from 'classnames'
import DropdownPane from 'react-dd-menu'
import { Anchor } from '../../Anchors'
import { DefaultDropdownButton } from './style'
import { FontAwesomeIcon } from '../../Icons'
const style = require('./style.scss')

export interface CalloutState {
  isMenuOpen: boolean
}

export type dropdownMenuAlignments = 'left' | 'right' | 'center'
export type sectionColors = 'alert' | 'success' | 'warning' | 'primary' | 'secondary' | 'neutral'

export interface iSectionProps {
  /** what text to show in a section */
  text?: string,
  /** a component that is shown to the left of the text */
  leftComponent?: JSX.Element,
  /** a component that is shown to the right of the text */
  rightComponent?: JSX.Element,
  /** a link that will be navigated to on click */
  href?: string,
  /** onClick event */
  onClick?: (event: React.SyntheticEvent<any>) => void
  /** an override component that will render instead of the inbuilt components */
  component?: JSX.Element,
  /** makes the text red on hover instead of blue */
  hoverAlert?: boolean,
  /** shows the section as the desired colored section */
  color?: sectionColors,
  /** an optional section ID */
  id?: string
  /** any extra props to pass to the component */
  componentProps?: any
}

export interface DropdownMenuProps {
  dropdownOverrides?: {
    /** What direction in respect to the parent to open and animate the dropdown */
    align?: dropdownMenuAlignments,
    /** Which direction to animate from the parent */
    animAlign?: dropdownMenuAlignments,
    /** Which direction to open from the parent */
    menuAlign?: dropdownMenuAlignments,
    /** Open the dropdown upwards if true */
    upwards?: boolean,
    /** If opening and closing should be animated */
    animate?: boolean,
    /** The amount of time in ms to end the CSSTransitionGroup */
    enterTimeout?: number,
    /** The amount of time in ms to end the CSSTransitionGroup */
    leaveTimeout?: number,
    /** If the menu should close when you click inside the menu */
    closeOnInsideClick?: boolean,
    /** If the menu should close when you outside inside the menu */
    closeOnOutsideClick?: boolean
  },
  /** Any custom classNames */
  className?: string,
  /** The parent component that opens the dropdown */
  toggleComponent?: JSX.Element,
  /** The sections to render */
  sections: iSectionProps[]
}

export class DropdownMenu extends React.PureComponent<DropdownMenuProps, CalloutState> {
  public state: CalloutState = { isMenuOpen: false }
  public static defaultProps: Partial<DropdownMenuProps> = {
    toggleComponent: (
      <DefaultDropdownButton>
        <FontAwesomeIcon type='ellipsis-v' />
      </DefaultDropdownButton>
    )
  }

  toggle = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen })
  }

  close = () => {
    this.setState({ isMenuOpen: false })
  }

  get toggleComponent () {
    const {
      toggleComponent
    } = this.props

    return (
      <div
        className='toggle-component'
        onClick={this.toggle}
      >
        {toggleComponent}
      </div>
    )
  }

  getComponent = (section: iSectionProps) => {
    const {
      onClick,
      href
    } = section

    if (href || onClick) {
      return get(section, 'href') ? Anchor : 'button'
    }
    return 'span'
  }

  getSideComponent = (component: JSX.Element | undefined, alignment: 'left' | 'right') => {
    if (component) {
      return (
        <span className={`${alignment}-component`}>
          {component}
        </span>
      )
    }
  }

  renderSections = () => {
    const {
      sections
    } = this.props

    return map(sections, (section) => {
      const {
        component,
        text,
        color,
        hoverAlert,
        leftComponent,
        rightComponent,
        componentProps,
        id,
        onClick,
        href
      } = section

      const classes = classNames({'non-clickable': !href && !onClick, 'alert-on-hover': hoverAlert}, color)
      if (component) {
        return (
          <li key={id || uuid.v4()} className={classes}>
            {component}
          </li>
        )
      }

      const Component = this.getComponent(section)
      return (
        <li key={id || uuid.v4()} className={classes}>
          <Component
            {...componentProps}
            onClick={onClick}
            href={href}
            id={id}
          >
            {this.getSideComponent(leftComponent, 'left')}
            {text}
            {this.getSideComponent(rightComponent, 'right')}
          </Component>
        </li>
      )
    })
  }

  public render (): JSX.Element | null {
    const {
      isMenuOpen
    } = this.state

    const {
      className,
      dropdownOverrides
    } = this.props

    return (
      <DropdownPane
        {...dropdownOverrides}
        isOpen={isMenuOpen}
        close={this.close}
        toggle={this.toggleComponent}
        className={classNames(style.dropdownMenu, className)}
        inverse={false}
      >
        {this.renderSections()}
      </DropdownPane>
    )
  }
}
