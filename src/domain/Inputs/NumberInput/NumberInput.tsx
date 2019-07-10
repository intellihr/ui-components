import classNames from 'classnames'
import { get, isNil } from 'lodash'
import React, { ChangeEventHandler, RefObject } from 'react'

import { Props } from '../../../common'
import { InputGroupPosition } from '../InputGroup'
import { DisabledTextWrapper, InputWrapper, PrefixWrapper, StyledNumberInput } from './style'

const style = require('../style.scss')

interface INumberInputProps {
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
  /** Called when the input is changed */
  onChange?: (value: string) => void
  /** Value of the input */
  value?: string | number
  /** Minimum value allowed */
  min?: number
  /** Maximum value allowed */
  max?: number
  /** step value */
  step?: number
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
  /** Placeholder text to display when input is empty */
  placeholder?: string
  /** If true, use HTML5 required attribute */
  isHTML5Required?: boolean
  /** Add autofocus attribute to input */
  autoFocus?: boolean
  /** Specify where a input is in an InputGroup */
  groupPosition?: InputGroupPosition
  /** Specify width of the input */
  width?: string
  /** Disable Prefix to display in the input box */
  disabledPrefix?: string
  /** The component context */
  componentContext?: string
  /** The margins around the component */
  margins?: Props.IMargins
}

export class NumberInput extends React.PureComponent<INumberInputProps> {
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

  public componentDidUpdate (prevProps: INumberInputProps) {
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
          hasTextIndent={!!(icon || disabledPrefix)}
          prefixWrapperWidth={get(this.prefixWrapperRef, 'current.clientWidth', 0)}
        >
          {this.prefix}
          {this.input}
        </InputWrapper>
      )
    }

    return this.input
  }

  private get input (): JSX.Element {
    const {
      id,
      name,
      isDisabled,
      value,
      handleBlur,
      min,
      max,
      placeholder,
      isHTML5Required,
      autoFocus,
      handleKeyDown,
      width,
      componentContext,
      margins,
      step
    } = this.props

    return (
      <StyledNumberInput
        id={id || name}
        name={name}
        type='number'
        value={value}
        onChange={this.handleChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur ? (e) => handleBlur(e, value) : undefined}
        onFocus={this.onFocus}
        className={this.classNames}
        disabled={isDisabled}
        placeholder={placeholder}
        min={min}
        max={max}
        step={step}
        required={isHTML5Required}
        autoFocus={autoFocus}
        width={width}
        data-component-type={Props.ComponentType.NumberInput}
        data-component-context={componentContext}
        margins={margins}
      />
    )
  }

  private get classNames (): string {
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

  private onFocus = (e: React.FocusEvent<HTMLInputElement>): void => {
    const {
      highlightOnFocus
    } = this.props

    if (highlightOnFocus) {
      const input = e.target as HTMLInputElement
      input.select()
    }
  }

  private get prefix (): JSX.Element | null {
    const {
      icon,
      disabledPrefix
    } = this.props

    if (icon || disabledPrefix) {
      return (
        <PrefixWrapper
          ref={this.prefixWrapperRef}
        >
          {icon}
          <DisabledTextWrapper> {disabledPrefix} </DisabledTextWrapper>
        </PrefixWrapper>
      )
    }

    return null
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
