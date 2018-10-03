import React from 'react'
import { InputGroupPosition } from '../InputGroup'
import { FontAwesomeIcon } from '../../../Icons/FontAwesomeIcon'
import { InputGroupButton } from './style'

interface IInputGroupButtonProps extends React.HTMLProps<HTMLButtonElement> {
  /** Where the button is in the input group */
  groupPosition: InputGroupPosition
  /** A component that is shown to the left of the text */
  leftComponent?: JSX.Element
  /** A component that is shown to the right of the text */
  rightComponent?: JSX.Element
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
      children,
      leftComponent,
      rightComponent
    } = this.props

    return (
      <InputGroupButton
        onClick={onClick}
        disabled={disabled}
        groupPosition={groupPosition}
        type='button'
      >
        {leftComponent && <span className='left-component'>{leftComponent}</span>}
        {children}
        {rightComponent && <span className='right-component'>{rightComponent}</span>}
        <FontAwesomeIcon className='right-component' type='caret-down' />
      </InputGroupButton>
    )
  }
}

export {
  IInputGroupButtonProps,
  Button
}
