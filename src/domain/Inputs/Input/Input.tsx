import classNames from 'classnames'
import { get, isNil } from 'lodash'
import React, { ChangeEventHandler, RefObject } from 'react'

import { Props } from '../../../common'
import { DisabledTextWrapper, InputWrapper, PrefixWrapper, StyledInput } from '../services/style'
import { InputGroupPosition } from '../InputGroup'

const style = require('./style.scss')

interface IGenericInputProps {
  /** ID of the input */
  id?: string
  /** Name of the input */
  name: string
  /** Custom classname to use */
  className?: string
  /** If true, adds invalid input class to component */
  isInvalid?: boolean
  /** Function passed to `onChange` prop */
  handleChange?: ChangeEventHandler<HTMLInputElement>
  /** Value of the input */
  value?: string | number
  /** [Number only] Minimum value allowed */
  min?: number
  /** [Number only] Maximum value allowed */
  max?: number
  /** If true, sets input to disabled state */
  isDisabled?: boolean
  /** Icon to display in the input box */
  icon?: JSX.Element
  /** Highlight input value on focus */
  highlightOnFocus?: boolean
  /** Handle blur event */
  handleBlur?: (e: React.FocusEvent<HTMLInputElement>, value?: string | number) => void
  /** Handle key down events */
  handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  /** Max length of string for text input */
  maxLength?: number
  /** Placeholder text to display when input is empty */
  placeholder?: string
  /** If true, use HTML5 required attribute */
  isHTML5Required?: boolean
  /** Add autofocus attribute to input */
  autoFocus?: boolean
  /** Specify if input is checked */
  isChecked?: boolean
  /** Specify where a input is in an InputGroup */
  groupPosition?: InputGroupPosition
  /** Specify width of the input */
  width?: string
  /** Disable Prefix to display in the input box */
  disabledPrefix?: string
}

interface InputProps extends IGenericInputProps {
  /** Type of input to display */
  type: string
}

export class Input extends React.PureComponent<InputProps> {
  get classNames (): string {
    const {
      className,
      isInvalid,
      groupPosition
    } = this.props

    return classNames(
      style.input,
      [
        className,
        {
          'is-invalid-input': isInvalid,
          [`input-group-${groupPosition}`]: !isNil(groupPosition)
        }
      ]
    )
  }

  private prefixWrapperRef: RefObject<HTMLDivElement> = React.createRef()

  public componentDidMount () {
    const {
      icon,
      disabledPrefix
    } = this.props

    if (icon || disabledPrefix) {
      // forceUpdate is required to for the ref to work
      this.forceUpdate()
    }
  }

  public componentDidUpdate (prevProps: InputProps) {
    const {
      icon,
      disabledPrefix
    } = this.props

    if (
      (icon || disabledPrefix) &&
      (!prevProps.icon && !prevProps.disabledPrefix) ||
      disabledPrefix !== prevProps.disabledPrefix
    ) {
      // forceUpdate is required to for the ref to work
      this.forceUpdate()
    }
  }

  public onFocus = (e: React.FocusEvent<HTMLInputElement>): void => {
    const {
      highlightOnFocus
    } = this.props

    if (highlightOnFocus) {
      const input = e.target as HTMLInputElement
      input.select()
    }
  }

  public input (): JSX.Element {
    const {
      id,
      name,
      type,
      handleChange,
      isDisabled,
      value,
      handleBlur,
      min,
      max,
      maxLength,
      placeholder,
      isHTML5Required,
      autoFocus,
      handleKeyDown,
      isChecked,
      width
    } = this.props

    return (
      <StyledInput
        id={id || name}
        name={name}
        type={type}
        value={value}
        checked={isChecked}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur ? (e) => handleBlur(e, value) : undefined}
        onFocus={this.onFocus}
        className={this.classNames}
        disabled={isDisabled}
        placeholder={placeholder}
        min={min}
        max={max}
        maxLength={maxLength}
        required={isHTML5Required}
        autoFocus={autoFocus}
        style={width ? { width } : undefined}
        data-component-type={Props.ComponentType.TextInput}
      />
    )
  }

  public render (): JSX.Element {
    const {
      icon,
      disabledPrefix
    } = this.props

    if (icon || disabledPrefix) {
      return (
        <InputWrapper
          disabledPrefix={disabledPrefix}
          hasIcon={!!icon}
          prefixWrapperWidth={get(this.prefixWrapperRef, 'current.clientWidth', 0)}
        >
          <PrefixWrapper
            innerRef={this.prefixWrapperRef}
          >
            {icon}
            <DisabledTextWrapper> {disabledPrefix} </DisabledTextWrapper>
          </PrefixWrapper>
          {this.input()}
        </InputWrapper>
      )
    }

    return this.input()
  }
}

export {
  IGenericInputProps,
  InputProps
}
