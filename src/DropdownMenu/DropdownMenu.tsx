import React from 'react'
import DropdownPane from 'react-dd-menu'
import { map, get } from 'lodash'
import classNames from 'classnames'
import { Anchor } from '../Anchor'
import uuid from 'uuid'
const style = require('./style.scss')

export interface CalloutState {
  isMenuOpen: boolean
}

export class DropdownMenu extends React.PureComponent<any, CalloutState> {
  public state: CalloutState = { isMenuOpen: false }

  toggle = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen })
  }

  close = () => {
    this.setState({ isMenuOpen: false })
  }

  toggleComponent = () => {
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

  getIcon = (component: any, alignment: 'left' | 'right') => {
    return (
      <span className={`${alignment}-icon`}>
        {component}
      </span>
    )
  }

  renderOptions = () => {
    const {
      options
    } = this.props

    return map(options, (option) => {
      const {
        component,
        text,
        nonClickable,
        color,
        hoverAlert,
        leftIcon,
        rightIcon,
        ...props
      } = option

      let Component = component
      if(!Component && nonClickable ) {
        Component = 'span'
      } if (!Component) {
        Component = get(option, 'href') ? Anchor : 'button'
      }

      const classes = classNames({'non-clickable': nonClickable, 'alert-on-hover': hoverAlert}, color)
      if(leftIcon || text || rightIcon) {
        return (
          <li key={props.id || uuid.v4()} className={classes}>
            <Component {...props}>
              {this.getIcon(leftIcon, 'left')}
              {text}
              {this.getIcon(rightIcon, 'right')}
            </Component>
          </li>
        )
      }

      return (
        <li key={props.id || uuid.v4()} className={classes}>
          <Component {...props} />
        </li>
      )
    })
  }

  public render (): JSX.Element | null {
    const {
      isMenuOpen
    } = this.state

    const {
      toggleComponent,
      options,
      className,
      ...props
    } = this.props

    return (
      <DropdownPane
        isOpen={isMenuOpen}
        close={this.close}
        toggle={this.toggleComponent()}
        className={classNames(style.dropdownMenu, className)}
        {...props}
      >
        {this.renderOptions()}
      </DropdownPane>
    )
  }
}
