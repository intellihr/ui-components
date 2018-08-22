import React from 'react'
import { InfoLabel } from './style'
import { IGenericInputProps, Input } from '../Input'
import classNames from 'classnames'

export interface ICheckboxProps extends IGenericInputProps {
  /** Label to display next to the checkbox */
  label?: JSX.Element | string
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
      <InfoLabel
        htmlFor={name}
      >
        {label}
      </InfoLabel>
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
        className={classNames('checkbox-input', className)}
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
