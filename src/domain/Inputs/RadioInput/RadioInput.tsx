import classNames from 'classnames'
import React, { ChangeEventHandler } from 'react'

import { Props } from '../../../common'
import { StyledRadioInput, StyledRadioInputWrapper } from './style'

const style = require('./style.scss')

export interface IRadioInputProps {
  /** ID of the input */
  id?: string
  /** Name of the input */
  name: string
  /** Custom classname to use */
  className?: string
  /** Function passed to `onChange` prop */
  handleChange?: ChangeEventHandler<HTMLInputElement>
  /** Called when the input is changed */
  onChange?: (value: string | number) => void
  /** Value of the input */
  value?: string | number
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
  /** Specify if input is checked */
  isChecked?: boolean
  /** The component context */
  componentContext?: string
  /** Label to display next to the radio */
  label: JSX.Element | string
  /** If true, the radio input is wrapped with a button */
  isButton?: boolean
  /** The margins around the component */
  margins?: Props.IMargins
}

export class RadioInput extends React.PureComponent<IRadioInputProps> {
  public static defaultProps: Partial<IRadioInputProps> = {
    isButton: false,
    isDisabled: false
  }

  public render (): JSX.Element {
    const {
      id,
      value,
      handleKeyDown,
      handleBlur,
      isDisabled,
      isHTML5Required,
      autoFocus,
      componentContext,
      className,
      margins,
      isChecked,
      name
    } = this.props

    return (
      <StyledRadioInputWrapper
        margins={margins}
      >
        <div
          className={classNames( style.radioInput, className)}
        >
          <StyledRadioInput
            id={id || name}
            name={name}
            type='radio'
            value={value}
            onChange={this.handleChange}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur ? (e) => handleBlur(e, value) : undefined}
            className={this.classNames}
            disabled={isDisabled}
            required={isHTML5Required}
            autoFocus={autoFocus}
            data-component-type={Props.ComponentType.RadioInput}
            data-component-context={componentContext}
            checked={isChecked}
          />
          {this.infoLabel}
        </div>
      </StyledRadioInputWrapper>
    )
  }

  private get infoLabel (): JSX.Element | null {
    const {
      id,
      name,
      label,
      isButton
    } = this.props

    if (!label) {
      return null
    }

    return (
      <label
        htmlFor={id || name}
        className={classNames('radio', { 'radio-button': isButton })}
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
      onChange(event.target.value)
    } else if (handleChange) {
      handleChange(event)
    }
  }
}
