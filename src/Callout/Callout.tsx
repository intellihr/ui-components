import classNames from 'classnames';
import React from 'react'
import './styles'

export interface CalloutProps {
  type: 'info' | 'success' | 'error' | 'warning' | 'preview';
  children?: any;
  className?: string;
  message? : string;
  messages?: string[];
  justifyCenter?: boolean;
}

export class Callout extends React.Component<CalloutProps, any> {
  get messages() {
    const { message } = this.props
    let { messages } = this.props

    if (!Array.isArray(messages)) {
      messages = []
    }

    if (message) {
      messages = [message, ...messages];
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

  public render() {
    const { children, messages } = this.props

    if (!Array.isArray(messages) && !children) {
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
