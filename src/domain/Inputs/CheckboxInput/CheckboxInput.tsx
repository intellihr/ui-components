import React from 'react'
import { IGenericInputProps, Input } from '../Input'
import classNames from 'classnames'

const style = require('./style.scss')

export interface ICheckboxProps extends IGenericInputProps {
  /** Label to display next to the checkbox */
  label: JSX.Element | string
}

export class CheckboxInput extends React.PureComponent<ICheckboxProps> {
  get infoLabel (): JSX.Element | null {
    const {
      name,
      label
    } = this.props

    if (!label) {
      return null
    }

    return (
      <label
        htmlFor={name}
        className={classNames('checkbox-button')}
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
