import React from 'react'
import { Field } from './subcomponents/Field'

class VerticalForm extends React.PureComponent<React.HTMLAttributes<HTMLFormElement>> {
  public static Field = Field

  public render (): JSX.Element {
    const {
      onSubmit,
      onChange,
      children
    } = this.props

    return (
      <form
        onSubmit={onSubmit}
        onChange={onChange}
      >
        {children}
      </form>
    )
  }
}

export {
  VerticalForm
}
