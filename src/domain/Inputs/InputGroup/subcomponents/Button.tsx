import React, { RefObject } from 'react'

import { FontAwesomeIcon } from '../../../Icons/FontAwesomeIcon'
import { InputGroupPosition } from '../InputGroup'
import { InputGroupButton } from './style'

interface IInputGroupButtonProps extends React.HTMLProps<HTMLButtonElement> {
  /** Where the button is in the input group */
  groupPosition: InputGroupPosition
  /** A component that is shown to the left of the text */
  leftComponent?: JSX.Element
  /** A component that is shown to the right of the text */
  rightComponent?: JSX.Element
  /** Ref to the internal button object */
  innerRef?: RefObject<any>
  /** If true, displays a caret on the right of the button */
  showCaret?: boolean
}

class Button extends React.PureComponent<IInputGroupButtonProps> {
  public static defaultProps: Partial<IInputGroupButtonProps> = {
    groupPosition: 'left',
    showCaret: true
  }

  public render(): JSX.Element {
    const {
      onClick,
      disabled,
      groupPosition,
      children,
      leftComponent,
      rightComponent,
      ref, // Ref is incompatible
      innerRef,
      ...props
    } = this.props

    return (
      <InputGroupButton
        {...props}
        ref={innerRef}
        onClick={onClick}
        disabled={disabled}
        groupPosition={groupPosition}
        type='button'
        as={undefined}
      >
        {leftComponent && <span className='left-component'>{leftComponent}</span>}
        {children}
        {rightComponent && <span className='right-component'>{rightComponent}</span>}
        {this.caret}
      </InputGroupButton>
    )
  }

  get caret() {
    const {
      showCaret
    } = this.props

    if (showCaret) {
      return <FontAwesomeIcon className='right-component' type='solid' icon='caret-down' />
    }

    return null
  }
}

export {
  IInputGroupButtonProps,
  Button
}
