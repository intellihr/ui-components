import React from 'react'

import { Props } from '../../../common'
import { StyledButtonGroup } from './style'

export interface IButtonGroupProps {
  /** Extra classes to apply */
  className?: string
  /** Component context */
  componentContext?: string
}

class ButtonGroup extends React.PureComponent<IButtonGroupProps> {
  public render (): JSX.Element {
    const {
      children,
      className,
      componentContext
    } = this.props

    return (
      <StyledButtonGroup
        data-component-type={Props.ComponentType.ButtonGroup}
        data-component-context={componentContext}
        className={className}
      >
        {children}
      </StyledButtonGroup>
    )
  }
}

export {
  ButtonGroup
}
