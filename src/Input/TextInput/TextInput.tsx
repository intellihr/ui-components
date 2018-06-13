import React from 'react'
import { Input, InputProps } from '../Input'

export class TextInput extends React.PureComponent<InputProps> {
  public render (): JSX.Element {
    return (
      <Input
        {...this.props}
        type='text'
      />
    )
  }
}
