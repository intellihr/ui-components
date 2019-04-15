import { ChangeEventHandler } from 'react'
import React from 'react'

import { Props } from '../../../../../common'
import { StyledFocus, StyledSwitch, StyledToggleInput, StyledToggler } from './style'

export interface IToggleSwitchInputState {
  focused: boolean
}

export interface IToggleSwitchInputProps {
  /** Called when the checkbox is toggled */
  onChange?: ChangeEventHandler<HTMLInputElement>
  /** The form name of the input */
  name: string
  /** If the input is checked */
  checked: boolean
  /** If the input is disabled */
  disabled?: boolean

  /** The data-component-context */
  componentContext?: string
}

export class ToggleSwitchInput extends React.PureComponent<IToggleSwitchInputProps, IToggleSwitchInputState> {
  public readonly state = {
    focused: false
  }

  public render (): JSX.Element {
    const {
      name,
      checked,
      onChange,
      disabled,
      componentContext
    } = this.props

    const {
      focused
    } = this.state

    return (
      <StyledFocus
        focused={focused}
      >
        <StyledSwitch
          htmlFor={name}
          checked={checked}
          disabled={disabled}
        >
          <StyledToggler checked={checked}/>
          <StyledToggleInput
            disabled={disabled}
            name={name}
            id={name}
            onChange={onChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            checked={checked}
            data-component-context={componentContext}
            data-component-type={Props.ComponentType.ToggleSwitchInput}
            type='checkbox'
          />
        </StyledSwitch>
      </StyledFocus>
    )
  }

  private handleBlur = () => {
    this.setState({focused: false})
  }

  private handleFocus = () => {
    this.setState({focused: true})
  }
}
