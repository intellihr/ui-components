import classNames from 'classnames'
import React, { ChangeEventHandler } from 'react'

import { Props } from '../../../common'
import { StyledCheckboxInput, StyledCheckboxInputWrapper } from './style'

const style = require('./style.scss')

export interface ICheckboxInputProps {
  /** ID of the input */
  id?: string
  /** Name of the input */
  name: string
  /** Custom classname to use */
  className?: string
  /** Function passed to `onChange` prop */
  handleChange?: ChangeEventHandler<HTMLInputElement>
  /** Called when the input is changed */
  onChange?: (value: boolean) => void
  /** Value of the input */
  value?: string | number | boolean
  /** If true, sets input to disabled state */
  isDisabled?: boolean
  /** Handle blur event */
  handleBlur?: (e: React.FocusEvent<HTMLInputElement>, value?: string | number) => void
  /** Handle key down events */
  handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  /** If true, use HTML5 required attribute */
  isHTML5Required?: boolean
  /** Add autofocus attribute to input */
  autoFocus?: boolean
  /** The component context */
  componentContext?: string
  /** The margins around the component */
  margins?: Props.IMargins
  /** Label to display next to the checkbox */
  label?: JSX.Element | string
  /** If true, the checkbox is wrapped by a button */
  isButton?: boolean
}

export class CheckboxInput extends React.PureComponent<ICheckboxInputProps> {
  public static defaultProps: Partial<ICheckboxInputProps> = {
    isButton: false,
    isDisabled: false
  }

  public render (): JSX.Element {
    const {
      id,
      handleKeyDown,
      handleBlur,
      isDisabled,
      isHTML5Required,
      autoFocus,
      componentContext,
      className,
      margins,
      name
    } = this.props

    return (
      <StyledCheckboxInputWrapper
        margins={margins}
      >
        <div
          className={classNames('checkbox-input', style.checkboxInput, className)}
        >
          <StyledCheckboxInput
            id={id || name}
            name={name}
            type='checkbox'
            value={this.value}
            onChange={this.handleChange}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur ? (e) => handleBlur(e, this.value) : undefined}
            className={this.classNames}
            disabled={isDisabled}
            required={isHTML5Required}
            autoFocus={autoFocus}
            data-component-type={Props.ComponentType.CheckboxInput}
            data-component-context={componentContext}
            checked={this.isChecked}
          />
          {this.infoLabel}
        </div>
      </StyledCheckboxInputWrapper>
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

    if (typeof value === 'string') {
      return value === 'true' ? 1 : 0
    }

    return value
  }

  private get infoLabel (): JSX.Element | null {
    const {
      name,
      label,
      isButton,
      id
    } = this.props

    if (!label) {
      return null
    }

    return (
      <label
        htmlFor={id || name}
        className={classNames('checkbox', { 'checkbox-button': isButton })}
      >
        {label}
      </label>
    )
  }

  private get classNames (): string {
    const {
      className
    } = this.props

    return classNames(
      style.input,
      [
        className
      ]
    )
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
