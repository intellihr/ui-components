import React from 'react'
import uuid from 'uuid'
import classNames from 'classnames'

export type ButtonTypes =
  'primary' | 'secondary' | 'success' | 'warning' | 'alert' | 'neutral' | 'highlight' |
  'light' | 'dark' |

  'primary-borderless' | 'secondary-borderless' | 'success-borderless' | 'warning-borderless' |
  'alert-borderless' | 'neutral-borderless' | 'highlight-borderless' | 'light-borderless' |
  'dark-borderless' |

  'primary-hollow' | 'secondary-hollow' | 'success-hollow' | 'warning-hollow' | 'alert-hollow' |
  'neutral-hollow' | 'highlight-hollow' | 'light-hollow' | 'dark-hollow' |

  'add' |'add-subtle' | 'delete-subtle' | 'delete' | 'resolve' | 'skip' | 'cancel'

export type ButtonSizes = 'small' | 'medium' | 'large'

export interface IBaseButton {
  /** Unique id of the button */
  id?: string
  /** Size of the button */
  size?: ButtonSizes
  /** What type of button to display */
  type?: ButtonTypes
  /** Any extra classes */
  className?: string
  /** Icon component passed to Button */
  icon?: JSX.Element
  /** Alignment of the button icon */
  iconAlignment?: 'left' | 'right'
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
