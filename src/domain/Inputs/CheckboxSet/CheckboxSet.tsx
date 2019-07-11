import { map, get } from 'lodash'
import React, {ChangeEventHandler} from 'react'

import {Props, Variables} from '../../../common'
import { ICheckboxInputProps } from '../CheckboxInput'
import { StyledCheckboxInput, StyledCheckboxInputWrapper} from '../CheckboxInput/style'
import classNames from 'classnames'
import {CheckboxSetWrapper} from './style'

const style = require('../CheckboxInput/style.scss')

export interface ICheckboxSetProps {
  /** Array of options to display in the list */
  options: Array<ICheckboxInputProps & {identifier: string}>
  /** Function passed to `onChange` prop */
  handleChange?: ChangeEventHandler<HTMLInputElement>
  /** Called when the input is changed */
  onChange?: (checkedOptionIdentifier: string) => void
  /** Specify the orientation of the checkbox group */
  orientation?: Props.Orientation
  /** If true, all checkbox inputs are wrapped with a button */
  useButtonStyle?: boolean
  /** the spacing of checkbox set */
  spacing?: 'normal' | 'tight'
  /** The name property of the checkbox inputs */
  name: string
  /** The currently checked value */
  value: {
    [i: string]: boolean
  }
}

export class CheckboxSet extends React.PureComponent<ICheckboxSetProps> {
  public static defaultProps: Partial<ICheckboxSetProps> = {
    orientation: Props.Orientation.Vertical,
    spacing: 'normal'
  }

  public render (): JSX.Element {
    const {
      orientation
    } = this.props

    return (
      <CheckboxSetWrapper orientation={orientation!}>
        {this.options}
      </CheckboxSetWrapper>
    )
  }

  private get options (): Array<JSX.Element|null> {
    const {
      options,
      name
    } = this.props

    return map(options, (option) => {
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
          identifier
        } = option

        return (
          <StyledCheckboxInputWrapper
            margins={this.margins(margins)}
            key={`${name}-${identifier}`}
          >
            <div
              className={classNames('checkbox-input', style.checkboxInput, className)}
            >
              <StyledCheckboxInput
                id={`${name}-${identifier}`}
                name={name}
                type='checkbox'
                value={get(value, identifier) ? 'true' : 'false'}
                onChange={this.handleChange(option)}
                onKeyDown={handleKeyDown}
                onBlur={handleBlur ? (e) => handleBlur(e, value) : undefined}
                className={this.classNames(className)}
                disabled={isDisabled}
                required={isHTML5Required}
                autoFocus={autoFocus}
                data-component-type={Props.ComponentType.CheckboxInput}
                data-component-context={componentContext}
                checked={get(value, identifier)}
              />
              {this.infoLabel(option.label, `${name}-${option.identifier}`)}
            </div>
          </StyledCheckboxInputWrapper>
        )}
      )
  }

  private margins = (margins?: Props.IMargins) => {
    const {
      spacing
    } = this.props

    if (margins) {
      return margins
    } else {
      if (spacing === 'normal') {
        return { bottom: Variables.Spacing.sXSmall }
      }

      if (spacing === 'tight') {
        return {}
      }
    }
  }

  private infoLabel = (label: string|JSX.Element, id: string) =>  {
    const {
      name,
      useButtonStyle
    } = this.props

    if (!label) {
      return null
    }

    return (
      <label
        htmlFor={id || name}
        className={classNames('checkbox', { 'checkbox-button': useButtonStyle })}
      >
        {label}
      </label>
    )
  }

  private classNames = (className?: string) => {
    return classNames(
      style.input,
      [
        className
      ]
    )
  }

  private handleChange = (option: ICheckboxInputProps & {identifier: string}) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      onChange,
      handleChange
    } = this.props

    if (onChange) {
      onChange(event.target.id)
    } else if (handleChange) {
      handleChange(event)
    }

    this.optionHandleChange(option)
  }

  private optionHandleChange = (option: ICheckboxInputProps & {identifier: string}) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      onChange,
      handleChange
    } = option

    if (onChange) {
      onChange(event.target.value === 'true' ? true : false)
    } else if (handleChange) {
      handleChange(event)
    }
  }
}
