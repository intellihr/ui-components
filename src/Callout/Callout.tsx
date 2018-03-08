import classNames from 'classnames';
import { isEmpty } from 'lodash'
import React from 'react'

export class Callout extends React.Component<any, any> {
  get messages() {
    const { message } = this.props
    let { messages } = this.props

    if (isEmpty(messages)) {
      messages = []
    }

    if (message) {
      messages.push(message)
    }

    return messages
  }

  get classNames(): string[] {
    const {
      justifyCenter,
      type
    } = this.props

    const cNames = [
      'callout',
      type
    ]

    if (justifyCenter) {
      cNames.push('justify-center')
    }

    return cNames
  }

  render() {
    const { children } = this.props

    if (isEmpty(this.messages) && !children) {
      return null
    }

    return (
      <div
        className={classNames(this.classNames)}
        ref="callout"
      >
        <div className="content">
          {children}
        </div>
      </div>
    )
  }
}
