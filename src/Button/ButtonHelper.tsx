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

export type ButtonSizes = 'small' | 'medium' | 'large' | undefined

export interface ButtonProps {
  /** Size of the button */
  size: ButtonSizes
  /** What type of button to display */
  type: ButtonTypes
  /** Any extra classes */
  className?: string
}

export function buttonClass (size: ButtonSizes, type: ButtonTypes, className?: string, extras?: any): string {
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
