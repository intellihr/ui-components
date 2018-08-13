import React, { Fragment } from 'react'
import classNames from 'classnames'
import { IBaseButtonProps } from '../services/buttonHelper'

class BaseButton<T extends IBaseButtonProps> extends React.PureComponent<T> {
  public static defaultProps: Partial<IBaseButtonProps> = {
    type: 'neutral',
    iconAlignment: 'left'
  }

  get buttonContent (): JSX.Element {
    const {
      children,
      icon,
      iconAlignment
    } = this.props

    if (icon) {
      const iconComponent = (
        <span
          className={classNames('button-icon', iconAlignment)}
        >
          {icon}
        </span>
      )

      if (iconAlignment === 'right') {
        return <Fragment>
          {children}
          {iconComponent}
        </Fragment>
      }

      return <Fragment>
        {iconComponent}
        {children}
      </Fragment>
    }

    return <Fragment>{children}</Fragment>
  }
}

export {
  BaseButton
}
