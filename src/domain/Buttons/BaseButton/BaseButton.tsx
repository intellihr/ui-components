import React, { Fragment, ReactNode } from 'react'
import uuid from 'uuid'
import classNames from 'classnames'
import { IBaseButtonProps } from '../services/buttonHelper'

class BaseButton extends React.PureComponent<IBaseButtonProps> {
  public static defaultProps: Partial<IBaseButtonProps> = {
    type: 'neutral',
    iconAlignment: 'left'
  }

  get buttonContent (): ReactNode {
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
        return <React.Fragment>
          {children}
          {iconComponent}
        </React.Fragment>
      }

      return <React.Fragment>
        {iconComponent}
        {children}
      </React.Fragment>
    }

    return children
  }

  public render (): JSX.Element {
    return this.props.render(this.buttonContent)
  }
}

export {
  BaseButton
}
