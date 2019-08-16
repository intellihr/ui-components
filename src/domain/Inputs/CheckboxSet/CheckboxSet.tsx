import classNames from 'classnames'
import { get, map } from 'lodash'
import React, {ChangeEventHandler} from 'react'

import { Props, Variables } from '../../../common'
import { StyledCheckboxInput, StyledCheckboxInputWrapper } from '../CheckboxInput/style'
import { CheckboxSetWrapper } from './style'

const style = require('../CheckboxInput/style.scss')

interface ICheckboxSetOptionProps {
  /** Custom classname to use */
  className?: string
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
  /** Label to display next to the checkbox */
  label: JSX.Element | string
  /** If true, the checkbox is wrapped by a button */
  isButton?: boolean
  /** Identifier of the input */
  identifier: string
}

export interface ICheckboxSetProps {
  /** The margins around the component */
  margins?: Props.IMargins
  /** Array of options to display in the list */
  options: ICheckboxSetOptionProps[]
  /** Function passed to `onChange` prop */
  handleChange?: ChangeEventHandler<HTMLInputElement>
  /** Called when the input is changed */
  onChange?: (value: { [i: string]: boolean }) => void
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
  /** The id of the option */
  id?: string
}

export class CheckboxSet extends React.PureComponent<ICheckboxSetProps> {
  public static defaultProps: Partial<ICheckboxSetProps> = {
    orientation: Props.Orientation.Vertical,
    spacing: 'normal'
  }

  public render (): JSX.Element {
    const {
      orientation,
      margins
    } = this.props

    return (
      <CheckboxSetWrapper
        orientation={orientation!}
        margins={margins}
      >
        {this.options}
      </CheckboxSetWrapper>
    )
  }

  private get options (): Array<JSX.Element|null> {
    const {
      options,
      name,
      value,
      id
    } = this.props

    return map(options, (option) => {
        const {
          handleKeyDown,
          handleBlur,
          isDisabled,
          isHTML5Required,
          autoFocus,
          componentContext,
          className,
          identifier
        } = option

        return (
          <StyledCheckboxInputWrapper
            margins={this.inputMargins}
            key={`${name}-${identifier}`}
          >
            <div
              className={classNames('checkbox-input', style.checkboxInput, className)}
            >
              <StyledCheckboxInput
                id={`${id ? id : name}-${identifier}`}
                name={name}
                type='checkbox'
                onChange={this.handleChange}
                onKeyDown={handleKeyDown}
                onBlur={handleBlur ? (e) => handleBlur(e, get(value, identifier) ? 'true' : 'false') : undefined}
                className={this.classNames(className)}
                disabled={isDisabled}
                required={isHTML5Required}
                autoFocus={autoFocus}
                data-component-type={Props.ComponentType.CheckboxInput}
                data-component-context={componentContext}
                checked={get(value, identifier)}
              />
              {this.infoLabel(option.label, `${id ? id : name}-${option.identifier}`)}
            </div>
          </StyledCheckboxInputWrapper>
        )}
      )
  }

  private get inputMargins (): Props.IMargins | undefined {
    const {
      spacing
    } = this.props

    if (spacing === 'normal') {
      return { bottom: Variables.Spacing.sXSmall }
    }

    return undefined
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

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      onChange,
      handleChange,
      value,
      name
    } = this.props

    if (onChange) {
        const  [ _, identifier] = event.target.id.split(`${name}-`)
        const newValue: { [i: string]: boolean } = {
            ... value,
          [identifier]: event.target.checked
        }
          onChange(newValue)
    } else if (handleChange) {
      handleChange(event)
    }
  }
}
