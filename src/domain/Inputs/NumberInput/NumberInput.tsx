import React from 'react'
import { Input, IGenericInputProps } from '../Input'

export class NumberInput extends React.PureComponent<IGenericInputProps> {
  public render (): JSX.Element {
    return (
      <Input
        {...this.props}
        type='number'
      />
    )
  }
}
