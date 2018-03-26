import classNames from 'classnames'
import { isEmpty } from 'lodash'
import React from 'react'

export interface CalloutProps {
  type: 'info' | 'success' | 'error' | 'warning' | 'preview';
  children?: any;
  className?: string;
  message?: string;
  messages?: string[];
  justifyCenter?: boolean;
}

export class Callout extends React.Component<CalloutProps, any> {
  get messages () {
    const { message } = this.props
    let { messages } = this.props

    if (!Array.isArray(messages)) {
      messages = []
    }

    if (message) {
      messages = [message, ...messages]
    }

    return messages
  }

  get messagesList () {
    const messages = this.messages

    if (isEmpty(messages)) {
      return null
    }

    if (messages.length === 1) {
      return messages[0]
    }

    return (
      <ul>
        {messages.map((message, msgKey) => (<li key={`callout_message_${msgKey + 1}`}>{message}</li>))}
      </ul>
    )
  }

  get classNames (): string[] {
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

  public render (): JSX.Element | null {
    const { children } = this.props

    if (isEmpty(this.messages) && !children) {
      return null
    }

    return (
      <div
        className={classNames(this.classNames)}
      >
        <div className='content'>
          {this.messagesList}
          {children}
        </div>
      </div>
    )
  }
}
