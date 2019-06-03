import capitalize from 'capitalize'
import classNames from 'classnames'
import { cloneDeep, debounce, every, isEmpty, isEqual } from 'lodash'
import React from 'react'
import Select, { Async, Creatable, OnChangeHandler, ReactSelectProps } from 'react-select'
const style = require('./style.scss')

export interface ISelectInputOptions {
  label: string
  value: string | boolean | number
}

export interface ISelectInputProps<O=ISelectInputOptions> extends ReactSelectProps {
  /** Label describing what the select options are for */
  label?: string
  /** Placeholder when no option is selected */
  placeholder?: string
  /** Array of options to display. Use this when you pre-fetched all options upfront. */
  options?: O[]
  /** Promise to use as options when it resolves. Use this when your promise will fetch all options. */
  promiseOptions?: () => Promise<ISelectInputOptions[]>
  /** Promise that takes an input for user typing. Use this when you do server-side filtering. */
  asyncOptions?: (input: string) => Promise<ISelectInputOptions[]>
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
  preselectDefaultValue?: ISelectInputOptions[]
  /** Handler for creating new options */
  handleNewOption?: (option: ISelectInputOptions) => void
}

export interface ISelectInputState {
  preselectValue: string
}

export class SelectInput<O=ISelectInputOptions> extends React.PureComponent<ISelectInputProps<O>, ISelectInputState> {
  public static defaultProps = {
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

  get value (): ReactSelectProps['value'] {
    const {
      asyncOptions,
      isFetching,
      value
    } = this.props

    // Simple value won't work for async options
    // see: https://github.com/JedWatson/react-select/issues/2233
    if (!isFetching && asyncOptions) {
      for (const option of this.asyncFetchedOptions) {
        if (option.value === value) {
          return option
        }
      }
    }

    return !isFetching ? value || this.state.preselectValue : ''
  }

  get selectProps (): any {
    const {
      id,
      name,
      resetValue,
      clearable,
      isInvalid,
      isDisabled,
      isFetching,
      placeholder,
      promiseOptions,
      asyncOptions,
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
      handleChange,
      closeOnSelect,
      removeSelected
    } = this.props

    const base: any = {
      id: id || name,
      name: multi ? `${name}[]` : name,
      resetValue,
      clearable,
      multi,
      onChange: handleChange,
      value: this.value,
      className: classNames({'is-invalid-input': isInvalid}, `react-select-${name}`, style.selectInput),
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
      noResultsText,
      closeOnSelect,
      removeSelected
    }

    if (promiseOptions) {
      base.loadOptions = this.promiseOptions
    } else if (asyncOptions) {
      base.loadOptions = this.fetchAsyncOptions
      // The default filter does not work well with async
      if (!base.filterOptions) {
        base.filterOptions = (fetchedOptions: any[]) => fetchedOptions
      }
    } else if (optionComponent) {
      base.options = options
      base.optionComponent = optionComponent
    } else if (options && this.isISelectInputOptions(options)) {
      base.options = this.prepareOptions(options)
    }

    return base
  }

  public readonly state = {
    preselectValue: ''
  }

  private asyncFetchedOptions: ISelectInputOptions[] = []

  private cachedOptions?: { options: ISelectInputOptions[] }

  private fetchAsyncOptions = debounce(
    (input: string, callback: (err: any, result?: { options: ISelectInputOptions[] }) => void) => {
      const {
        asyncOptions
      } = this.props

      if (asyncOptions) {
        asyncOptions(input)
          .then(this.prepareOptions)
          .then((options) => {
            this.asyncFetchedOptions = this.asyncFetchedOptions.concat(options || [])
            this.preselectValue(options)
            callback(null, { options: options || [] })
          })
          .catch((error) => callback(error))
      }
    },
    500
  )

  public componentWillMount () {
    this.initialPreselectValue()
  }

  public componentDidUpdate (prevProps: ISelectInputProps<O>) {
    // There is no onClear event for the dropdown
    // This is a workaround
    // see: https://github.com/JedWatson/react-select/issues/1309
    this.setState({preselectValue: ''})

    if (!isEqual(prevProps.options, this.props.options)) {
      this.initialPreselectValue()
    }
  }

  public componentWillReceiveProps (nextProps: ISelectInputProps<O>) {
    if (nextProps.value === '' && !isEmpty(nextProps.preselectDefaultValue)) {
      this.handleChange(nextProps.preselectDefaultValue)
    }
  }

  public render (): JSX.Element {
    const {
      promiseOptions,
      asyncOptions,
      handleNewOption
    } = this.props

    if (handleNewOption) {
      return (
        <Creatable
          {...this.selectProps}
          onNewOptionClick={handleNewOption}
        />
      )
    }

    if (promiseOptions || asyncOptions) {
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

  private isISelectInputOptions = (options: any[]): options is ISelectInputOptions[] => {
    return every(
      options,
      (option) => {
        const matched = option.value !== undefined && option.label !== undefined

        if (!matched) {
          console.warn('One of your options does not match the interface ISelectInputOptions')
        }

        return matched
      }
    )
  }

  private async cachedOptionsPromise () {
    return this.cachedOptions
  }

  private handleChange = (newValue: any): void => {
    const {
      handleChange
    } = this.props

    if (handleChange) {
      return handleChange(newValue)
    }
  }

  private preselectValue = (options?: any[]): void => {
    const {
      isRequired,
      value,
      multi
    } = this.props

    if (isRequired && isEmpty(value) && options && options.length === 1) {
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

  private promiseOptions = () => {
    const {
      promiseOptions
    } = this.props

    if (promiseOptions) {
      if (!this.cachedOptions) {
        return Promise
          .resolve(promiseOptions())
          .then((options) => {
            this.cachedOptions = {
              options: this.prepareOptions(options) || []
              // Complete options is not working: https://github.com/JedWatson/react-select/issues/1514
              // complete: true
            }

            return this.cachedOptions
          })
          .then((cachedOptions) => {
            this.preselectValue(cachedOptions.options)

            return cachedOptions
          })
      }

      return this.cachedOptionsPromise()
    }

    return undefined
  }

  private prepareOptions = (options?: ISelectInputOptions[]): ISelectInputOptions[] | undefined => {
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
        value: noneValue!,
        label: noneLabel || (label ? `No ${capitalize.words(label)}` : 'None')
      })
    }

    return returnOptions
  }

  private initialPreselectValue = () => {
    if (!this.props.promiseOptions) {
      this.preselectValue(this.selectProps.options)
    }
  }
}
