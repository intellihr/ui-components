import React, { Fragment, RefObject } from 'react'
import classNames from 'classnames'
import { Props } from '../../../common'

const style = require('./style.scss')

type ButtonType =
  'primary' | 'secondary' | 'success' | 'warning' | 'alert' | 'neutral' | 'highlight' |
  'light' | 'dark' |

  'primary-borderless' | 'secondary-borderless' | 'success-borderless' | 'warning-borderless' |
  'alert-borderless' | 'neutral-borderless' | 'highlight-borderless' | 'light-borderless' |
  'dark-borderless' |

  'primary-hollow' | 'secondary-hollow' | 'success-hollow' | 'warning-hollow' | 'alert-hollow' |
  'neutral-hollow' | 'highlight-hollow' | 'light-hollow' | 'dark-hollow' |

  'add' |'add-subtle' | 'delete-subtle' | 'delete' | 'resolve' | 'skip' | 'cancel' | 'menu-action'

type ButtonSize = 'small' | 'medium' | 'large'

interface IBaseButtonProps {
  /** Unique id of the button */
  id?: string
  /** Ref to the base element of the button */
  innerRef?: RefObject<any>
  /** Size of the button */
  size?: ButtonSize
  /** If the button should be 100% width */
  fullWidth?: boolean
  /**
   * Adds a 1rem bottom margin and slight side margins to the button.
   * For backwards compatibility only; please use layouts instead to achieve this effect if needed.
   * @deprecated
   */
  hasLegacyMargins?: boolean
  /** What type of button to display */
  type?: ButtonType
  /** Alignment of the button icon */
  iconAlignment?: 'left' | 'right'
  /** Icon component passed to Button */
  icon?: JSX.Element
  /** Any extra classes */
  className?: string
  /** Disable the button or not */
  disabled?: boolean
  /** onClick event */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void,
  /** The data-component-context */
  componentContext?: string
}

class BaseButton<T extends IBaseButtonProps> extends React.PureComponent<T> {
  public static defaultProps: Partial<IBaseButtonProps> = {
    hasLegacyMargins: false,
    type: 'neutral',
    iconAlignment: 'left'
  }

  get buttonClass (): string {
    const {
      size,
      type,
      className,
      fullWidth,
      hasLegacyMargins
    } = this.props

    return classNames(
      style.button,
      [
        className,
        size,
        type
      ],
      {
        'full-width': fullWidth,
        'legacy-margins': hasLegacyMargins
      }
    )
  }

  get buttonContent (): JSX.Element {
    const {
      children,
      icon,
      iconAlignment,
      componentContext
    } = this.props

    if (icon) {
      const iconComponent = (
        <span
          data-component-type={Props.ComponentType.ButtonIcon}
          data-component-context={componentContext}
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
  IBaseButtonProps,
  BaseButton
}
