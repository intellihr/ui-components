import React from 'react'

import { Field } from './subcomponents/Field'
import { LeftAlignControls } from './subcomponents/LeftAlignControls'
import { RightAlignControls } from './subcomponents/RightAlignControls'

class VerticalForm extends React.PureComponent<React.FormHTMLAttributes<HTMLFormElement>> {
  public static Field = Field
  public static LeftAlignControls = LeftAlignControls
  public static RightAlignControls = RightAlignControls
  public static defaultProps: Partial<HTMLFormElement> = {
    autoComplete: 'off'
  }

  public render (): JSX.Element {
    const {
      onSubmit,
      onChange,
      autoComplete,
      children
    } = this.props

    return (
      <form
        onSubmit={onSubmit}
        onChange={onChange}
        autoComplete={autoComplete}
      >
        {children}
      </form>
    )
  }
}

export {
  VerticalForm
}
