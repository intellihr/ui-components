import React from 'react'

import { Props } from '../../../common'
import { IGenericInputProps, Input } from '../Input'

export class TextInput extends React.PureComponent<IGenericInputProps> {
  public render (): JSX.Element {
    return (
      <Input
        {...this.props}
        type='text'
        data-component-type={Props.ComponentType.TextInput}
      />
    )
  }
}
