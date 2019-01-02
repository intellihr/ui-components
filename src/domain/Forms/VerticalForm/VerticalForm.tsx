import React from 'react'
import { Field } from './subcomponents/Field'
import { LeftAlignControls } from './subcomponents/LeftAlignControls'
import { RightAlignControls } from './subcomponents/RightAlignControls'

class VerticalForm extends React.PureComponent<React.HTMLAttributes<HTMLFormElement>> {
  public static Field = Field
  public static LeftAlignControls = LeftAlignControls
  public static RightAlignControls = RightAlignControls

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
