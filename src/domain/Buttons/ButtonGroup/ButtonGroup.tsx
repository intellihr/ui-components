import React from 'react'
import { Button, LinkButton } from 'src/domain/Buttons'
import { Props } from '../../../common/types/props'
import { StyledButtonGroup } from './style'

export interface IButtonGroupProps {
  /** Extra classes to apply */
  className?: string
  /** Component context */
  componentContext?: string
  /** The buttons nested inside the group */
  children: Button | LinkButton
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
