/* eslint no-undef: 0 */
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
  shouldFocus: boolean;
  handleFocus?: () => void;
}

export interface CalloutState {
  willFocus: boolean
}

export class Callout extends React.Component<CalloutProps, CalloutState> {

  private node: HTMLDivElement | null = null

  public state: CalloutState = { willFocus: true }

  handleFocus = () => {
    const { shouldFocus, handleFocus } = this.props
    debugger
    if (shouldFocus && this.state.willFocus && this.node) {
      this.node.scrollIntoView()
      this.setState({
        willFocus: false
      })
    }
  }

  componentDidMount () {
    this.handleFocus()
  }

  componentDidUpdate () {
    this.handleFocus()
  }

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
        ref={node => this.node = node}
      >
        <div className='content'>
          {this.messagesList}
          {children}
        </div>
      </div>
    )
  }
}
