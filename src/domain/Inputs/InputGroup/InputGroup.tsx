import React from 'react'

import { InputGroupWrapper } from './style'
import { Button } from './subcomponents/Button'

type InputGroupPosition = 'left' | 'middle' | 'right'

export class InputGroup extends React.PureComponent<{}> {
  public static Button = Button

  public render (): JSX.Element {
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
  InputGroupPosition
}
