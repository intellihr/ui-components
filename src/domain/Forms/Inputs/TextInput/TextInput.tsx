import React from 'react'
import { Input, GenericInputProps } from '../Input'

export class TextInput extends React.PureComponent<GenericInputProps> {
  public render (): JSX.Element {
    return (
      <Input
        {...this.props}
        type='text'
      />
    )
  }
}
