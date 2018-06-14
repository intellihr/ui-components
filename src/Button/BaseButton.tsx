import React from 'react'
import uuid from 'uuid'
import classNames from 'classnames'
import { ButtonTypes, ButtonSizes, ButtonProps } from './ButtonHelper'

export interface IBaseButton extends ButtonProps {
  /** Children components passed to the button */
  render: (content: any) => JSX.Element
}

export class BaseButton extends React.PureComponent<IBaseButton> {
  public static defaultProps: Partial<IBaseButton> = {
    type: 'neutral',
    iconAlignment: 'left'
  }

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

  public render (): JSX.Element {
    return this.props.render(this.buttonContent)
  }
}
