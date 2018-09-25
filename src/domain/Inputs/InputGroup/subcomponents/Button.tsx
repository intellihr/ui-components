import React from 'react'
import { buttonClass, IBaseButtonProps } from '../../../Buttons/services/buttonHelper'
import { BaseButton } from '../../../Buttons/BaseButton'
import { InputGroupButton } from './style'
import { InputGroupPosition } from '../InputGroup'
import { FontAwesomeIcon } from '../../../Icons/FontAwesomeIcon'

interface IInputGroupButtonProps extends React.HTMLProps<HTMLButtonElement> {
  /** Where the button is in the input group */
  groupPosition: InputGroupPosition
}

class Button extends React.PureComponent<IInputGroupButtonProps> {
  public static defaultProps: Partial<IInputGroupButtonProps> = {
    groupPosition: 'left'
  }

  public render (): JSX.Element {
    const {
      onClick,
      disabled,
      groupPosition,
      children
    } = this.props

    return (
      <InputGroupButton
        onClick={onClick}
        disabled={disabled}
        groupPosition={groupPosition}
        type='button'
      >
        <>
          {children}
          <FontAwesomeIcon type='caret-down' />
        </>
      </InputGroupButton>
    )
  }
}

export {
  IInputGroupButtonProps,
  Button
}
