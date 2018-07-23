import React from 'react'
import { Input, GenericInputProps } from '../Input'

export class NumberInput extends React.PureComponent<GenericInputProps> {
  public render (): JSX.Element {
    return (
      <Input
        {...this.props}
        type='number'
      />
    )
  }
}
