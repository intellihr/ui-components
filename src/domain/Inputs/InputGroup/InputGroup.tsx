import React from 'react'
import { Button } from './subcomponents/Button'
import { InputGroupWrapper } from './style'

// tslint:disable-next-line:no-empty-interface
interface IInputGroupProps {}

type InputGroupPosition = 'left' | 'middle' | 'right'

export class InputGroup extends React.PureComponent<IInputGroupProps> {
  public static Button = Button

  public render () {
    const {
      children
    } = this.props

    return (
      <InputGroupWrapper>
        {children}
      </InputGroupWrapper>
    )
  }
}

export {
  Button,
  IInputGroupProps,
  InputGroupPosition
}
