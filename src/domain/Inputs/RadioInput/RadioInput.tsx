import React from 'react'
import { IGenericInputProps, Input } from '../Input'
import classNames from 'classnames'

const style = require('./style.scss')

export interface ICheckboxProps extends IGenericInputProps {
  /** Label to display next to the radio */
  label: JSX.Element | string
  /** If true, the radio input would wrapped by an outside button */
  isButton?: boolean
}

export class RadioInput extends React.PureComponent<ICheckboxProps> {
  public static defaultProps: Partial<ICheckboxProps> = {
    isButton: false,
    isDisabled: false
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
        className={classNames('radio', { 'radio-button': isButton })}
      >
        {label}
      </label>
    )
  }

  public render (): JSX.Element {
    const {
      className,
      ...props
    } = this.props

    return (
      <div
        className={classNames( style.radioInput, className)}
      >
        <Input
          {...props}
          type='radio'
        />
        {this.infoLabel}
      </div>
    )
  }
}
