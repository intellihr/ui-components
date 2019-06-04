import React from 'react'

import { Props } from '../../../common'
import { InputGroupWrapper } from './style'
import { Button } from './subcomponents/Button'

type InputGroupPosition = 'left' | 'middle' | 'right'

interface IInputGroupProps {
  margins?: Props.IMargins
}

export class InputGroup extends React.PureComponent<IInputGroupProps> {
  public static Button = Button

  public render (): JSX.Element {
    const {
      children,
      margins
    } = this.props

    return (
      <InputGroupWrapper
        margins={margins}
      >
        {children}
      </InputGroupWrapper>
    )
  }
}

export {
  Button,
  InputGroupPosition
}
