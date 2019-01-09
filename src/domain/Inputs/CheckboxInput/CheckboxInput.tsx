import React from 'react'
import { IGenericInputProps, Input } from '../Input'
import classNames from 'classnames'

const style = require('./style.scss')

export interface ICheckboxInputProps extends IGenericInputProps {
  /** Label to display next to the checkbox */
  label: JSX.Element | string
  /** If true, the checkbox is wrapped by a button */
  isButton?: boolean
}

export class CheckboxInput extends React.PureComponent<ICheckboxInputProps> {
  public static defaultProps: Partial<ICheckboxInputProps> = {
    isButton: false
  }

  get infoLabel (): JSX.Element | null {
    const {
      name,
      label,
      isButton
    } = this.props

    if (!label) {
      return null
    }

    return (
      <label
        htmlFor={name}
        className={classNames('checkbox', { 'checkbox-button': isButton })}
      >
        {label}
      </label>
    )
  }

  public render (): JSX.Element {
    const {
      value,
      className,
      ...props
    } = this.props

    return (
      <div
        className={classNames('checkbox-input', style.checkboxInput, className)}
      >
        <Input
          {...props}
          isChecked={Boolean(value)}
          type='checkbox'
        />
        {this.infoLabel}
      </div>
    )
  }
}
