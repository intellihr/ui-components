import React from 'react'
import classNames from 'classnames'
import jQuery from 'jquery'
import { Foundation } from 'foundation-sites/js/foundation.core'
import { AccordionMenu } from 'foundation-sites/js/foundation.accordionMenu'

Foundation.plugin(AccordionMenu, 'AccordionMenu')

export interface MenuProps {
  /** HTML id to use for the menu */
  id?: string
  /** Classname to apply to the menu */
  className?: string
  /** Allows child MenuItems to be accordions */
  isAccordion?: boolean
  /** Apply nested class */
  isNested?: boolean
}

export class Menu extends React.PureComponent<MenuProps> {
  public _menu: any;

  public static defaultProps: Partial<MenuProps> = {
    isAccordion: false,
    isNested: false
  }

  componentDidMount () {
    const {
      id,
      isAccordion
    } = this.props

    if (isAccordion && id) {
      this._menu = new Foundation.AccordionMenu(jQuery(`#${id}`))
    }
  }

  componentWillUnmount () {
    const {
      id
    } = this.props

    if (this._menu) {
      jQuery(`#${id}`).remove()
    }
  }

  public render (): JSX.Element {
    const {
      id,
      className,
      isNested,
      children
    } = this.props

    return (
      <ul
        id={id}
        className={classNames(
          'vertical',
          'menu',
          className,
          {
            'nested': isNested
          }
        )}
      >
        {children}
      </ul>
    )
  }
}
