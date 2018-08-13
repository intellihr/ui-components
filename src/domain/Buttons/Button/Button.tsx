import React from 'react'
import { buttonClass, IBaseButtonProps } from '../services/buttonHelper'
import { BaseButton } from '../BaseButton'

export interface IButtonProps extends IBaseButtonProps {
  /** Button props passthrough */
  buttonComponentProps?: {
    [i: string]: any
  }
}

export class Button extends React.PureComponent<IButtonProps> {
  public static defaultProps: Partial<IButtonProps> = {
    type: 'neutral',
    iconAlignment: 'left'
  }

  public render (): JSX.Element | null {
    const {
      size,
      type,
      className,
      buttonComponentProps
    } = this.props

    return (
      <BaseButton
        {...this.props}
        render={(content) => (
          <button className={buttonClass(type!, size, className)} {...buttonComponentProps}>
            {content}
          </button>
        )}
      />
    )
  }
}
