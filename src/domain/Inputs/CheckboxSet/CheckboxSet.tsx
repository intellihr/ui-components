import classNames from 'classnames'
import get from 'lodash/get'
import React from 'react'

import { Props, Variables } from '../../../common'
import { StyledCheckboxInput, StyledCheckboxInputWrapper } from '../CheckboxInput/style'
import { CheckboxSetWrapper, FamilyCheckboxSetWrapper } from './style'

import style from '../CheckboxInput/style.scss'

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
  /** Identifier of the input */
  identifier: string
}

interface ICheckboxSetParentProps {
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
}

export interface ICheckboxSetProps {
  /** The margins around the component */
  margins?: Props.IMargins
  /** Array of options to display in the list */
  options: ICheckboxSetOptionProps[]
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
  /** The parent checkbox input to display and handle select all */
  parentOption?: ICheckboxSetParentProps
}

const getInputMargins = (spacing: 'normal' | 'tight') => {
  if (spacing === 'normal') {
    return { bottom: Variables.Spacing.sXSmall }
  }

  return undefined
}

const getInfoLabel = (label: string|JSX.Element, id: string, name: string, useButtonStyle: boolean) =>  {
  return (
    <label
      htmlFor={id || name}
      className={classNames('checkbox', { 'checkbox-button': useButtonStyle })}
    >
      {label}
    </label>
  )
}

const getClassNames = (className?: string) => {
  return classNames(
    style.input,
    [
      className
    ]
  )
}

const handleOptionsChange = (
  value: { [i: string]: boolean },
  name: string,
  onChange?: (value: { [i: string]: boolean }) => void
  ) => (event: React.ChangeEvent<HTMLInputElement>) => {
  const  [ _, identifier] = event.target.id.split(`${name}-`)
  const newValue: { [i: string]: boolean } = {
    ... value,
    [identifier]: event.target.checked
  }
  if (onChange) {
    onChange(newValue)
  }
}

const handleParentChange = (
  selectAll: boolean,
  value: { [i: string]: boolean },
  options: ICheckboxSetOptionProps[],
  onChange?: (value: { [i: string]: boolean }) => void
) => () => {
  if (!options.some((option) => option.isDisabled || false)) {
    const newValue = Object.keys(value).reduce((result: { [i: string]: boolean }, key) => {
      result[key] = !selectAll
      return result
    }, {})
    if (onChange) {
      onChange(newValue)
    }
  }
}

const getOption = (
  value: { [i: string]: boolean },
  option: ICheckboxSetOptionProps,
  name: string,
  spacing: 'normal' | 'tight',
  useButtonStyle: boolean,
  id?: string,
  onChange?: (value: { [i: string]: boolean }) => void
) => {
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
      margins={getInputMargins(spacing)}
      key={`${name}-${identifier}`}
    >
      <div
        className={classNames('checkbox-input', style.checkboxInput, className)}
      >
        <StyledCheckboxInput
          id={`${id ? id : name}-${identifier}`}
          name={name}
          type='checkbox'
          onChange={handleOptionsChange(value, name, onChange)}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur ? (e: React.FocusEvent<HTMLInputElement>) => handleBlur(e, get(value, identifier) ? 'true' : 'false') : undefined}
          className={getClassNames(className)}
          disabled={isDisabled}
          required={isHTML5Required}
          autoFocus={autoFocus}
          data-component-type={Props.ComponentType.CheckboxInput}
          data-component-context={componentContext}
          checked={get(value, identifier, false)}
        />
        {getInfoLabel(option.label, `${id ? id : name}-${option.identifier}`, name, useButtonStyle)}
      </div>
    </StyledCheckboxInputWrapper>
  )
}

const CheckboxSet: React.FC<ICheckboxSetProps> = (props) => {
  const {
    orientation = Props.Orientation.Vertical,
    margins,
    parentOption,
    name,
    id,
    value,
    options,
    spacing = 'normal',
    useButtonStyle = false,
    onChange
  } = props

  const selectAll = Object.values(value).every((optionValue) => optionValue)
  if (parentOption) {
    return (
      <FamilyCheckboxSetWrapper
        margins={margins}
      >
        <StyledCheckboxInputWrapper
          margins={getInputMargins(spacing)}
          key={`${name}-all`}
        >
          <div
            className={classNames('checkbox-input', style.checkboxInput, parentOption.className)}
          >
            <StyledCheckboxInput
              id={`${id ? id : name}-all`}
              name={name}
              type='checkbox'
              onChange={handleParentChange(selectAll, value, options, onChange)}
              onKeyDown={parentOption.handleKeyDown}
              className={getClassNames(parentOption.className)}
              disabled={options.some((option) => option.isDisabled ? option.isDisabled : false) || parentOption.isDisabled}
              required={parentOption.isHTML5Required}
              autoFocus={parentOption.autoFocus}
              data-component-type={Props.ComponentType.CheckboxInput}
              data-component-context={parentOption.componentContext}
              checked={selectAll}
              onBlur={parentOption.handleBlur ? (e: React.FocusEvent<HTMLInputElement>) => parentOption.handleBlur!(e, selectAll ? 'true' : 'false') : undefined}
            />
            {getInfoLabel(parentOption.label, `${id ? id : name}-all`, name, false)}
          </div>
        </StyledCheckboxInputWrapper>
        <CheckboxSetWrapper
          orientation={orientation!}
          margins={{ left: Variables.Spacing.sXLarge }}
        >
          {options.map((option) => getOption(value, option, name, spacing, useButtonStyle, id, onChange))}
        </CheckboxSetWrapper>
      </FamilyCheckboxSetWrapper>
    )
  }

  return (
    <CheckboxSetWrapper
      orientation={orientation!}
      margins={margins}
    >
      {options.map((option) => getOption(value, option, name, spacing, useButtonStyle, id, onChange))}
    </CheckboxSetWrapper>
  )
}

export {
  CheckboxSet
}
