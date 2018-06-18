import React from 'react'
import classNames from 'classnames'
import capitalize from 'capitalize'
import Select, { Async, OnChangeHandler, ReactSelectProps } from 'react-select'
import { isEmpty, cloneDeep } from 'lodash'

export interface SelectInputOptions {
  label: string
  value: string | boolean | number
}

export interface SelectInputProps extends ReactSelectProps {
  /** Label describing what the select options are for */
  label?: string
  /** Placeholder when no option is selected */
  placeholder?: string
  /** Array of options to display */
  options?: SelectInputOptions[]
  /** Promise to use as options when it resolves */
  promiseOptions?: Function
  /** Custom function passed to the `onChange` handler */
  handleChange?: OnChangeHandler
  /** If true, adds invalid input class to component */
  isInvalid?: boolean
  /** If true, sets input to disabled state */
  isDisabled?: boolean
  /** Pending state for promised options */
  isFetching?: boolean
  /** Is Required */
  isRequired?: boolean
  /** If true, displays a message in the select box when there are no available options */
  generateNoneValue?: boolean
  /** Custom value used if there are no available options */
  noneValue?: string
  /** Custom label used if there are no available options */
  noneLabel?: string
  /** Specifies a default value to use */
  preselectDefaultValue?: SelectInputOptions[]
}

export interface SelectInputState {
  preselectValue: string
}

export class SelectInput extends React.PureComponent<SelectInputProps, SelectInputState> {
  private cachedOptions: any

  public static defaultProps: Partial<SelectInputProps> = {
    placeholder: 'Please Select',
    isInvalid: false,
    isDisabled: false,
    isFetching: false,
    generateNoneValue: false,
    clearable: true,
    noneValue: '',
    resetValue: '',
    multi: false,
    onBlurResetsInput: true,
    onSelectResetsInput: true,
    onCloseResetsInput: true,
    autofocus: false,
    openOnFocus: false
  }

  constructor (props: SelectInputProps) {
    super(props)
    this.cachedOptions = null
    this.state = {
      preselectValue: ''
    }

    this.initialPreselectValue = this.initialPreselectValue.bind(this)
    this.promiseOptions = this.promiseOptions.bind(this)
    this.prepareOptions = this.prepareOptions.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount () {
    this.initialPreselectValue()
  }

  componentDidUpdate () {
    // There is no onClear event for the dropdown
    // This is a workaround
    // see: https://github.com/JedWatson/react-select/issues/1309
    this.setState({preselectValue: ''})
  }

  componentWillReceiveProps (nextProps: SelectInputProps) {
    if (nextProps.value === '' && !isEmpty(nextProps.preselectDefaultValue)) {
      this.handleChange(nextProps.preselectDefaultValue)
    }
  }

  async cachedOptionsPromise () {
    return this.cachedOptions
  }

  handleChange (newValue: any): void {
    const {
      handleChange
    } = this.props

    if (handleChange) {
      return handleChange(newValue)
    }
  }

  preselectValue (options: any): void {
    const {
      isRequired,
      value,
      multi
    } = this.props

    if (isRequired && isEmpty(value) && options.length === 1) {
      let changeValue = options[0].value

      if (multi) {
        changeValue = [
          {
            label: options[0].label,
            value: options[0].value
          }
        ]
      }

      this.handleChange(changeValue)
      this.setState({preselectValue: options[0].value})
    }
  }

  promiseOptions () {
    const {
      promiseOptions
    } = this.props

    if (promiseOptions) {
      if (!this.cachedOptions) {
        return Promise
          .resolve(promiseOptions())
          .then(options => {
            this.cachedOptions = {
              options: this.prepareOptions(options)
              // Complete options is not working: https://github.com/JedWatson/react-select/issues/1514
              // complete: true
            }

            return this.cachedOptions
          })
          .then(cachedOptions => {
            this.preselectValue(cachedOptions.options)

            return cachedOptions
          })
      }

      return this.cachedOptionsPromise()
    }

    return undefined
  }

  prepareOptions (options: any): SelectInputOptions {
    const {
      label,
      generateNoneValue,
      noneLabel,
      noneValue
    } = this.props

    // React-select default value for option is undefined
    let returnOptions

    if (options) {
      returnOptions = cloneDeep(options)
    }

    if (generateNoneValue) {
      returnOptions = returnOptions || []
      returnOptions.unshift({
        value: noneValue,
        label: noneLabel || (label ? `No ${capitalize.words(label)}` : 'None')
      })
    }

    return returnOptions
  }

  initialPreselectValue () {
    if (!this.props.promiseOptions) {
      this.preselectValue(this.selectProps.options)
    }
  }

  get selectProps (): any {
    const {
      name,
      resetValue,
      clearable,
      isInvalid,
      isDisabled,
      isFetching,
      placeholder,
      promiseOptions,
      options,
      optionComponent,
      multi,
      onBlurResetsInput,
      onSelectResetsInput,
      onCloseResetsInput,
      autoFocus,
      openOnFocus,
      onOpen,
      filterOptions,
      noResultsText,
      handleChange
    } = this.props

    let value = this.props.value

    const base:any = {
      name: multi ? `${name}[]` : name,
      resetValue,
      clearable,
      multi,
      onChange: handleChange,
      value: !isFetching ? value || this.state.preselectValue : '',
      className: classNames({'is-invalid-input': isInvalid}, `react-select-${name}`),
      disabled: isDisabled,
      isLoading: isFetching,
      placeholder,
      onBlurResetsInput,
      onSelectResetsInput,
      onCloseResetsInput,
      optionComponent,
      autoFocus,
      openOnFocus,
      onOpen,
      filterOptions,
      noResultsText
    }

    if (promiseOptions) {
      base.loadOptions = this.promiseOptions
    } else {
      base.options = this.prepareOptions(options)
    }

    if (optionComponent) {
      base.options = options
      base.optionComponent = optionComponent
    }

    return base
  }

  public render (): JSX.Element {
    const {
      promiseOptions
    } = this.props

    if (promiseOptions) {
      return (
        <Async
          {...this.selectProps}
        />
      )
    }

    return (
      <Select
        {...this.selectProps}
      />
    )
  }
}
