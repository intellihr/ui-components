import React from 'react'
import classNames from 'classnames'
const style = require('./style.scss')

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
  /** Alignment of the button icon */
  iconAlignment?: 'left' | 'right'
  /** Icon component passed to Button */
  icon?: JSX.Element
}

export interface IBaseButtonProps extends IBaseButton {
    /** function to get the content */
    render: (content: React.ReactNode) => JSX.Element
}

export interface IButtonProps extends IBaseButton {
  /** Any extra classes */
  className?: string
  /** Disable the button or not */
  disabled?: boolean
  /** onClick event */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

export function buttonClass (type: ButtonTypes, size?: ButtonSizes, className?: string, extras?: any): string {
  return classNames(
    style.button,
    [
      className,
      size,
      type
    ],
    extras
  )
}
