/* eslint no-undef: 0 */
import classNames from 'classnames'
import 'foundation-sites'
import { default as jQuery } from 'jquery'
import _ from 'lodash'
import React from 'react'
const style = require('./style.scss')

export interface ModalProps {
  children: React.ReactElement<any>[];
  id: string;
  size: 'tiny' | 'small' | 'large' | 'full' | 'fixed-medium-up' | 'fixed-large-up' | 'fixed-xxlarge-up',
  className?: string;
  showCloseButton?: boolean;
}

export class Modal extends React.Component<ModalProps, any> {
  public _modal: any

  constructor (props: any) {
    super(props)

    this._modal = {}
  }
  public componentDidMount () {
    const { id } = this.props
    this._modal = new Foundation.Reveal(jQuery(`#${id}`))
  }

  public componentWillUnmount () {
    const { id } = this.props

    this._modal.close()
    jQuery(`#${id}`).parent().remove()
  }

  get children () {
    const {
      children
    } = this.props

    return React.Children.map(
      children,
      (child: any) => {
        if (!_.isNil(child)) {
          // For React HTML element, it's tstyleype is a string
          // Don't pass closeModal in this case to suppress the warnings
          if (_.isString(child.type)) {
            return child
          }

          return React.cloneElement(child, {
            closeModal: () => {
              this._modal.close()
            }
          })
        }
      }
    )
  }

  get size () {
    const { size } = this.props

    if (size) {
      return size
    }

    return null
  }

  public closeModal = () => this._modal.close()

  get closeButton () {
    const {
      showCloseButton
    } = this.props

    if (showCloseButton) {
      return (
        <button
          className='close-button'
          type='button'
          onClick={this.closeModal}
        >
          <span aria-hidden='true'>&times;</span>
        </button>
      )
    }
  }

  public render () {
    const {
      id,
      className
    } = this.props

    return (
      <div>
        <div className={classNames(style.modalClass, this.size, 'reveal', className)} id={id} data-reveal>
          {this.children}
          {this.closeButton}
        </div>
      </div>
    )
  }
}
