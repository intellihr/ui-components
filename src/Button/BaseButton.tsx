import React from 'react'
import uuid from 'uuid'
import classNames from 'classnames'

export interface IBaseButton {
  /** Unique id of the button */
  id?: string
  /** Icon component passed to Button */
  icon?: JSX.Element
  /** Alignment of the button icon */
  iconAlignment?: 'left' | 'right'
  /** Children components passed to the button */
  children: JSX.Element | string
}

export abstract class BaseButton<P> extends React.Component<P & IBaseButton, void> {
  get buttonContent (): any {
    const {
      id,
      children,
      icon,
      iconAlignment
    } = this.props

    if (icon) {
      const iconComponent = (
        <span
          key={id || uuid.v4()}
          className={classNames('button-icon', iconAlignment)}
        >
          {icon}
        </span>
      )

      if (iconAlignment === 'right') {
        return [
          children,
          iconComponent
        ]
      }

      return [
        iconComponent,
        children
      ]
    }

    return children
  }
}
