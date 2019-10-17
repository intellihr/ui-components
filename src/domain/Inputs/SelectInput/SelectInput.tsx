import classNames from 'classnames'
import { debounce, isEmpty, isEqual, get } from 'lodash'
import React from 'react'
import Select, {
  Creatable,
  OnChangeHandler,
  OnInputChangeHandler,
  OnOpenHandler,
  Option,
  ReactSelectProps
} from 'react-select'
const style = require('./style.scss')

type ISelectInputOptionValue = string | boolean | number | undefined

interface ISelectInputOption {
  label?: string
  value?: ISelectInputOptionValue

  /** Use for passing around other metadata for an option not contained in the label/value */
  metadata?: unknown
}

export interface ISelectInputProps {
  /** ID of the input */
  id?: string
  /** Input name */
  name: string
  /** Input value */
  value: ISelectInputOptionValue | ISelectInputOptionValue[]

  /** Placeholder label when no option is selected */
  placeholder?: string
  /** Value when no option is selected */
  emptyValue: ISelectInputOptionValue
  /** Text to display when no results found */
  noResultsText?: string
  /** Array of options to display. */
  options: ISelectInputOption[]

  /** Should an 'x' be shown which clears select inputs? */
  isClearable?: boolean
  /** If true, sets input to disabled state */
  isDisabled?: boolean
  /** Pending state for async loading options */
  isFetching?: boolean
  /** If true, adds invalid input class to component */
  isInvalid?: boolean
  /** If true, allows selecting multiple options */
  isMultiSelect?: boolean

  /** Should the input autoselect an option when there is only one provided? */
  shouldAutoSelectWhenSingleOption?: boolean
  /** Should close the menu when an item is selected? */
  shouldCloseOnSelect?: boolean
  /** Should filtering be performed within the component? Disable for async usage. */
  shouldFilteringBePerformed?: boolean
  /** For multiselects; should items be removed once selected? */
  shouldRemoveElementsFromMultiSelect?: boolean

  /**
   * DEPRECATED: component to render for options.
   * Should not be used - please create a separate component if you need this functionality.
   */
  optionComponent?: ReactSelectProps<ISelectInputOptionValue>['optionComponent']
  /** Handler for selecting an option */
  handleChange?: OnChangeHandler<ISelectInputOptionValue>
  /** Handler for selecting an option */
  onChange?: (value: any) => void
  /** Handler for opening the select menu */
  onOpen?: OnOpenHandler
  /** Handler for creating new options */
  onNewOptionCreated?: (option: ISelectInputOption) => void
  /** Handler for input being updated */
  onInputChange?: (input: string) => void
}

export class SelectInput extends React.PureComponent<ISelectInputProps> {
  public static defaultProps: Partial<ISelectInputProps> = {
    placeholder: 'Please Select',
    emptyValue: '',
    isClearable: true,
    isDisabled: false,
    isFetching: false,
    isInvalid: false,
    isMultiSelect: false,
    shouldAutoSelectWhenSingleOption: false,
    shouldCloseOnSelect: true,
    shouldFilteringBePerformed: true,
    shouldRemoveElementsFromMultiSelect: true
  }

  public UNSAFE_componentWillMount () {
    this.autoSelectValue()
  }

  public componentDidUpdate (prevProps: ISelectInputProps) {
    if (!isEqual(prevProps.options, this.props.options)) {
      this.autoSelectValue()
    }
  }

  public render (): JSX.Element {
    const {
      onNewOptionCreated
    } = this.props

    if (onNewOptionCreated) {
      return (
        <Creatable<ISelectInputOptionValue>
          {...this.reactSelectProps}
          onNewOptionClick={onNewOptionCreated}
        />
      )
    }

    return (
      <Select<ISelectInputOptionValue>
        {...this.reactSelectProps}
      />
    )
  }

  private get reactSelectProps () {
    const {
      id,
      name,
      value,
      placeholder,
      emptyValue,
      noResultsText,
      options,
      isClearable,
      isDisabled,
      isFetching,
      isInvalid,
      isMultiSelect,
      shouldCloseOnSelect,
      shouldFilteringBePerformed,
      shouldRemoveElementsFromMultiSelect,
      onOpen,
      optionComponent
    } = this.props

    return {
      autoFocus: false,
      className: classNames({'is-invalid-input': isInvalid}, `react-select-${name}`, style.selectInput),
      clearable: isClearable,
      closeOnSelect: shouldCloseOnSelect,
      disabled: isDisabled,
      id: id || name,
      isLoading: isFetching,
      filterOption: shouldFilteringBePerformed ? undefined : this.disableFiltering,
      multi: isMultiSelect,
      name: isMultiSelect ? `${name}[]` : name,
      noResultsText,
      onBlurResetsInput: true,
      onChange: this.handleChange,
      onCloseResetsInput: true,
      onInputChange: this.onInputChange,
      onOpen,
      onSelectResetsInput: true,
      openOnFocus: false,
      optionComponent,
      options,
      placeholder,
      removeSelected: shouldRemoveElementsFromMultiSelect,
      resetValue: emptyValue,
      value
    }
  }

  private handleChange = (newValue: Option<ISelectInputOptionValue> | null) => {
    const {
      onChange,
      handleChange
    } = this.props

    if (onChange) {
      onChange(get(newValue, 'value', newValue))
    } else if (handleChange) {
      return handleChange(newValue)
    }
  }

  private autoSelectValue = (): void => {
    const {
      handleChange,
      isMultiSelect,
      shouldAutoSelectWhenSingleOption,
      options,
      value
    } = this.props

    if (shouldAutoSelectWhenSingleOption && isEmpty(value) && options.length === 1) {
      let changeValue: ISelectInputOption | ISelectInputOption[] = options[0]

      if (isMultiSelect) {
        changeValue = [changeValue]
      }

      if (handleChange) {
        handleChange(changeValue)
      }
    }
  }

  private disableFiltering = () => true

  // tslint:disable-next-line:member-ordering
  private debounceOnInputChangeCallback = debounce((input: string): void => {
    const {
      onInputChange
    } = this.props

    if (onInputChange) {
      onInputChange(input)
    }
  }, 500, {maxWait: 1000})

  // We debounce the callback but onInputChange must always return the current input text to work correctly
  private onInputChange = (input: string): string => {
    this.debounceOnInputChangeCallback(input)

    return input
  }
}
