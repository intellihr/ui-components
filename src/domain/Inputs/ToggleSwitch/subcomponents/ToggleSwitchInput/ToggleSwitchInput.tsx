import { ChangeEventHandler } from 'react'
import React from 'react'

import { Props } from '../../../../../common'
import { StyledFocus, StyledSwitch, StyledToggleInput, StyledToggler } from './style'

interface IToggleSwitchInputState {
  focused: boolean
}

interface IToggleSwitchInputProps {
  /** Called when the checkbox is toggled */
  handleChange?: ChangeEventHandler<HTMLInputElement>
  /** Called when the input is changed */
  onChange?: (value: boolean) => void
  /** The form name of the input */
  name: string
  /** Value of the input */
  value?: string | number | boolean
  /** If the input is disabled */
  isDisabled?: boolean

  /** The data-component-context */
  componentContext?: string
}

class ToggleSwitchInput extends React.PureComponent<IToggleSwitchInputProps, IToggleSwitchInputState> {
  public readonly state = {
    focused: false
  }

  public render (): JSX.Element {
    const {
      name,
      isDisabled,
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
          checked={this.isChecked}
          disabled={isDisabled}
        >
          <StyledToggler checked={this.isChecked}/>
          <StyledToggleInput
            disabled={isDisabled}
            name={name}
            id={name}
            value={this.value}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            checked={this.isChecked}
            data-component-context={componentContext}
            data-component-type={Props.ComponentType.ToggleSwitchInput}
            type='checkbox'
          />
        </StyledSwitch>
      </StyledFocus>
    )
  }

  private get isChecked (): boolean {
    const {
      value
    } = this.props

    return Boolean(value)
  }

  private get value (): string | number | undefined {
    const {
      value
    } = this.props

    if (typeof value === 'boolean') {
      return value ? 1 : 0
    }

    return value
  }

  private handleBlur = () => {
    this.setState({focused: false})
  }

  private handleFocus = () => {
    this.setState({focused: true})
  }

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      onChange,
      handleChange
    } = this.props

    if (onChange) {
      onChange(event.target.checked)
    } else if (handleChange) {
      handleChange(event)
    }
  }
}

export {
  IToggleSwitchInputProps,
  IToggleSwitchInputState,
  ToggleSwitchInput
}
