import React from 'react'
import { Button, LinkButton } from 'src/domain/Buttons'
import { Props } from '../../../common/types/props'
import { StyledButtonGroup } from './style'

export interface IButtonGroupProps {
  /** The Buttons/LinkButtons to render in the group */
  buttons: Array<Button|LinkButton>
  /** Extra classes to apply */
  className?: string
  /** Component context */
  componentContext?: string
}

class ButtonGroup extends React.PureComponent<IButtonGroupProps> {
  public render (): JSX.Element | null {
    const {
      buttons,
      className,
      componentContext
    } = this.props

    return (
      <StyledButtonGroup
        data-component-type={Props.ComponentType.ButtonGroup}
        data-component-context={componentContext}
        className={className}
      >
        {buttons}
      </StyledButtonGroup>
    )
  }
}

export {
  ButtonGroup
}
