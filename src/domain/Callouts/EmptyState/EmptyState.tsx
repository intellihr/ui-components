import React from 'react'
import { isNil } from 'lodash'
import { Props } from '../../../common/types/props'

const style = require('./style.scss')

export interface IEmptyStateProps {
  /** The message to be shown in the first line as a title/heading */
  primaryMessage?: string
  /** The message to be shown in the second line as a sub title */
  secondaryMessage?: string
  /** This will accept the button component */
  buttonComponent?: JSX.Element
  /** The data-component-context */
  componentContext?: string
}

export class EmptyState extends React.Component<IEmptyStateProps> {
  public static defaultProps: Partial<IEmptyStateProps> = {
    primaryMessage: `Opps... We couldn't find anything for this section.`,
    secondaryMessage: `Please speak to your system admin or add information.`
  }

  get primaryMessage () : JSX.Element | null {
    const {
      primaryMessage
    } = this.props

    if (!isNil(primaryMessage)) {
      return (
        <div className={style.ihrPrimaryMessage}>
          {primaryMessage}
        </div>
      )
    }
    return null
  }

  get secondaryMessage () : JSX.Element | null {
    const {
      secondaryMessage
    } = this.props

    if (!isNil(secondaryMessage)) {
      return (
        <div className={style.ihrSecondaryMessage}>
          {secondaryMessage}
        </div>
      )
    }
    return null
  }

  public render (): JSX.Element {
    const { componentContext, buttonComponent } = this.props

    return (
        <div
          className={style.ihrEmptyState}
          data-component-type={Props.ComponentType.EmptyState}
          data-component-context={componentContext}
        >
          {this.primaryMessage}
          {this.secondaryMessage}
          {buttonComponent}
        </div>
      )
    }
}
