import classNames from 'classnames'
import React, { RefObject } from 'react'

import { Props } from '../../../common'
import { FontAwesomeIcon } from '../../Icons/FontAwesomeIcon'
import { Spinner } from '../../Spinners/Spinner'
import { spinnerColour } from './style'

const style = require('./style.scss')

type ButtonType =
  'primary' | 'secondary' | 'success' | 'warning' | 'alert' | 'neutral' | 'highlight' |
  'light' | 'dark' |

  'primary-borderless' | 'secondary-borderless' | 'success-borderless' | 'warning-borderless' |
  'alert-borderless' | 'neutral-borderless' | 'highlight-borderless' | 'light-borderless' |
  'dark-borderless' |

  'primary-hollow' | 'secondary-hollow' | 'success-hollow' | 'warning-hollow' | 'alert-hollow' |
  'neutral-hollow' | 'highlight-hollow' | 'light-hollow' | 'dark-hollow' |

  'add' |'add-subtle' | 'delete-subtle' | 'delete' | 'resolve' | 'skip' | 'cancel' | 'menu-action' | 'back'

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
  /** If true, shows a spinner instead of the regular button content */
  showSpinner?: boolean
}

class BaseButton<T extends IBaseButtonProps> extends React.PureComponent<T> {
  public static defaultProps: Partial<IBaseButtonProps> = {
    hasLegacyMargins: false,
    type: 'neutral',
    iconAlignment: 'left',
    showSpinner: false
  }

  get buttonClass (): string {
    const {
      size,
      type,
      className,
      fullWidth,
      hasLegacyMargins,
      showSpinner
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
        'legacy-margins': hasLegacyMargins,
        'show-spinner': showSpinner
      }
    )
  }

  get buttonContent (): JSX.Element {
    const {
      children,
      icon,
      iconAlignment,
      componentContext,
      showSpinner,
      type
    } = this.props

    if (showSpinner) {
      return (
        <Spinner
          type='three-bounce'
          size={10}
          color={spinnerColour[type!]}
        />
      )
    }

    if (icon || type === 'back') {
      const buttonIcon = icon || <FontAwesomeIcon type='arrow-left' />

      const iconComponent = (
        <span
          data-component-type={Props.ComponentType.ButtonIcon}
          data-component-context={componentContext}
          className={classNames('button-icon', iconAlignment)}
        >
          {buttonIcon}
        </span>
      )

      if (iconAlignment === 'right') {
        return (
          <>
            {children}
            {iconComponent}
          </>
        )
      }

      return (
        <>
          {iconComponent}
          {children}
        </>
      )
    }

    return <>{children}</>
  }
}

export {
  IBaseButtonProps,
  BaseButton
}
