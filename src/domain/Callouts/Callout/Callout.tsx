import classNames from 'classnames'
import { isEmpty } from 'lodash'
import React from 'react'
const style = require('./style.scss')

export interface ICalloutProps {
  type: 'info' | 'success' | 'error' | 'warning' | 'preview-mode' | 'edit-mode' | 'no-data' | ''
  children?: any
  className?: string
  message?: string
  messages?: string[]
  justifyCenter?: boolean
  shouldFocus?: boolean
}

export interface ICalloutState {
  willFocus: boolean
}

export class Callout extends React.Component<ICalloutProps, ICalloutState> {

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
        {messages.map((message, msgKey) => (<li key={`callout_message_${msgKey}`}>{message}</li>))}
      </ul>
    )
  }

  get classNames (): string[] {
    const {
      justifyCenter,
      type
    } = this.props

    const cNames = [
      style.callout,
      type
    ]

    if (justifyCenter) {
      cNames.push('justify-center')
    }

    return cNames
  }

  public static defaultProps: ICalloutProps = {
    messages: [],
    type: '',
    shouldFocus: false,
    justifyCenter: false
  }

  public state: ICalloutState = { willFocus: true }
  private node: HTMLDivElement | null = null

  public handleFocus = () => {
    const { shouldFocus } = this.props
    const { willFocus } = this.state

    if (shouldFocus && willFocus && this.node && this.node.scrollIntoView) {
      this.node.scrollIntoView()
      this.setState({
        willFocus: false
      })
    }
  }

  public componentDidMount () {
    this.handleFocus()
  }

  public componentDidUpdate () {
    this.handleFocus()
  }

  public render (): JSX.Element | null {
    const { children } = this.props

    if (isEmpty(this.messages) && !children) {
      return null
    }

    return (
      <div
        className={classNames(this.classNames)}
        ref={node => { this.node = node }}
      >
        <div className={style.content}>
          {this.messagesList}
          {children}
        </div>
      </div>
    )
  }
}
