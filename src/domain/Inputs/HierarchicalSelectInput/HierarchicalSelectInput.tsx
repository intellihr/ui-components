import classNames from 'classnames'
import React, { useCallback, useMemo } from 'react'
import Select, {
  OnOpenHandler,
  Option,
  OptionValues
} from 'react-select'

import { useTranslateFunction } from '../../Defaults/Defaults/Defaults'
import { IHierarchicalOption, convertHierarchicalOptionsToFlattenedOptions } from './helpers'
import { HierarchicalSelectInputOption } from './HierarchicalSelectInputOption'

import style from './style.scss'

interface IHierarchicalSelectInputProps {
  /** ID of the input */
  id?: string
  /** Input name */
  name?: string
  /** Input value */
  value?: OptionValues | OptionValues[]

  /** Placeholder label when no option is selected */
  placeholder?: string | JSX.Element
  /** Value when no option is selected */
  emptyValue?: OptionValues | null
  /** Text to display when no results found */
  noResultsText?: string | JSX.Element
  /**
   * Array of hierarchical options to display.
   * These options must have a property called parentValue to allow for creating a hierarchy of options.
   * The hierarchy itself will be generated on the component, preserving the order of options given
   * but grouping items as expected under their parents.
   *
   * Note that values of null/undefined are not supported.
   */
  hierarchicalOptions: readonly IHierarchicalOption[]

  /** Should an 'x' be shown which clears select inputs? */
  isClearable?: boolean
  /** If true, sets input to disabled state */
  isDisabled?: boolean
  /** If true, adds invalid input class to component */
  isInvalid?: boolean
  /** If true, allows selecting multiple options */
  isMultiSelect?: boolean

  /** Should the input autoselect an option when there is only one provided? */
  shouldAutoSelectWhenSingleOption?: boolean

  /** Called when the input is changed */
  onChange?: (value?: OptionValues | OptionValues[] | null) => void
  /** Handler for opening the select menu */
  onOpen?: OnOpenHandler
  /** Handler for input being updated when user type to search */
  onInputChange?: (input: string) => void
}

const HierarchicalSelectInput: React.FC<IHierarchicalSelectInputProps> = (props) => {
  const {
    id,
    name,
    value,
    placeholder,
    emptyValue,
    hierarchicalOptions,
    noResultsText,
    isClearable,
    isDisabled,
    isInvalid,
    isMultiSelect,
    onChange,
    onOpen
  } = props

  const t = useTranslateFunction()

  const options = useMemo(() => convertHierarchicalOptionsToFlattenedOptions(hierarchicalOptions), [hierarchicalOptions])

  const handleChange = useCallback((newValue: Option | null) => {
    if (newValue && Array.isArray(newValue)) {
      if (onChange) {
        onChange(
          newValue.reduce((result: OptionValues[], currentOption: Option) => {
            if (currentOption.value) {
              result.push(currentOption.value)
            }
            return result
          }, [])
        )
      }
    } else {
      if (onChange) {
        onChange(newValue ? newValue.value : null)
      }
    }
  }, [onChange])

  const filterOption = useCallback((option: Option, filter: string) => {
    if (filter === '') {
      return true
    }

    const filterLowercase = filter.toLowerCase()
    const label = (option.label && option.label.toLowerCase()) || ''

    return label.includes(filterLowercase)
  }, [])

  return (
    <Select<OptionValues>
      autoFocus={false}
      className={classNames({ 'is-invalid-input': isInvalid }, `react-select-${name}`, style.selectInput)}
      clearable={isClearable}
      closeOnSelect
      disabled={isDisabled}
      id={id || name}
      filterOption={(filterOption)}
      multi={isMultiSelect}
      name={isMultiSelect ? `${name}[]` : name}
      noResultsText={noResultsText || t('selectNoResultsFound', {defaultValue: 'No results found'})}
      onBlurResetsInput
      onChange={handleChange}
      onCloseResetsInput
      onSelectResetsInput
      openOnFocus={false}
      onOpen={onOpen}
      optionComponent={HierarchicalSelectInputOption}
      options={options}
      placeholder={placeholder || t('selectPlaceholder', {defaultValue: 'Please Select'})}
      removeSelected
      resetValue={emptyValue}
      value={value}
    />
  )
}

export {
  HierarchicalSelectInput,
  IHierarchicalSelectInputProps
}
