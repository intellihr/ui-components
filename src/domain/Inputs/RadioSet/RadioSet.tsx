import classNames from 'classnames'
import React, { ChangeEventHandler } from 'react'

import { Props, Variables } from '../../../common'
import { RadioSetWrapper, StyledRadioInput, StyledRadioInputWrapper } from './style'

const style = require('../RadioSet/style.scss')

export interface IRadioSetOptionProps {
  /** Custom classname to use */
  className?: string
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
  /** The component context */
  componentContext?: string
  /** Label to display next to the radio */
  label: JSX.Element | string
  /** If true, the radio input is wrapped with a button */
  isButton?: boolean
}

export interface IRadioSetProps {
  /** Array of options to display in the list */
  options: IRadioSetOptionProps[]
  /** action when option is clicked */
  handleChange?: ChangeEventHandler<HTMLInputElement>
  /** Called when the input is changed */
  onChange?: (value: string | number) => void
  /** Specify the orientation of the radio set */
  orientation?: Props.Orientation
  /** If true, all radio inputs are wrapped with a button */
  useButtonStyle?: boolean
  /** The currently selected value */
  value?: string | number
  /** The name property of the radio inputs */
  name: string
  /** the spacing of radio set */
  spacing?: 'normal' | 'tight'
  /** The margins around the component */
  margins?: Props.IMargins
}

export class RadioSet extends React.PureComponent<IRadioSetProps> {
  public static defaultProps: Partial<IRadioSetProps> = {
    orientation: Props.Orientation.Vertical,
    useButtonStyle: false,
    value: undefined,
    spacing: 'normal'
  }

  public render (): JSX.Element {
    const {
      orientation,
      margins
    } = this.props

    return (
      <RadioSetWrapper
        orientation={orientation!}
        margins={margins}
      >
        {this.options}
      </RadioSetWrapper>
    )
  }

  private get options (): JSX.Element[] {
    const {
      options,
      value,
      name
    } = this.props

    return options.map((option, idx) => {
      const {
        handleKeyDown,
        handleBlur,
        isDisabled,
        isHTML5Required,
        autoFocus,
        componentContext,
        className
      } = option

      return (
        <StyledRadioInputWrapper
          margins={this.inputMargins}
          key={`${name}-${idx}`}
        >
          <div
            className={classNames( style.radioInput, className)}
          >
            <StyledRadioInput
              id={`${name}-${idx}`}
              name={name}
              type='radio'
              value={option.value}
              onChange={this.handleChange}
              onKeyDown={handleKeyDown}
              onBlur={handleBlur ? (e) => handleBlur(e, option.value) : undefined}
              className={this.classNames(className)}
              disabled={isDisabled}
              required={isHTML5Required}
              autoFocus={autoFocus}
              data-component-type={Props.ComponentType.RadioInput}
              data-component-context={componentContext}
              checked={value === option.value}
            />
            {this.infoLabel(option.label, `${name}-${idx}`)}
          </div>
        </StyledRadioInputWrapper>
      )
    })
  }

  private infoLabel  = (label: string|JSX.Element, id: string) =>  {
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
        className={classNames('radio', { 'radio-button': useButtonStyle })}
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

  private get inputMargins (): Props.IMargins | undefined {
    const {
      spacing
    } = this.props

    if (spacing === 'normal') {
      return { bottom: Variables.Spacing.sXSmall }
    }

    return undefined
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
