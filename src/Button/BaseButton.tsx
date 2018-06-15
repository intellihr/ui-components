import React from 'react'
import uuid from 'uuid'
import classNames from 'classnames'
import { IBaseButtonProps } from './ButtonHelper'

export class BaseButton extends React.PureComponent<IBaseButtonProps> {
  public static defaultProps: Partial<IBaseButtonProps> = {
    type: 'neutral',
    iconAlignment: 'left'
  }

  get buttonContent (): React.ReactNode {
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
        return <>'         '{children}'         '{iconComponent}'       '</>
      }

      return <>'       '{iconComponent}'       '{children}'     '</>
    }

    return children
  }

  public render (): JSX.Element {
    return this.props.render(this.buttonContent)
  }
}
