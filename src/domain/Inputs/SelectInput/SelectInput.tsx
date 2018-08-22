import React from 'react'
import classNames from 'classnames'
import capitalize from 'capitalize'
import Select, { Async, Creatable, OnChangeHandler, ReactSelectProps } from 'react-select'
import { isEmpty, cloneDeep } from 'lodash'
const style = require('./style.scss')

export interface ISelectInputOptions {
  label: string
  value: string | boolean | number
}

export interface ISelectInputProps extends ReactSelectProps {
  /** Label describing what the select options are for */
  label?: string
  /** Placeholder when no option is selected */
  placeholder?: string
  /** Array of options to display */
  options?: ISelectInputOptions[]
  /** Promise to use as options when it resolves */
  promiseOptions?: () => Promise<ISelectInputOptions[]>
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

export class SelectInput extends React.PureComponent<ISelectInputProps, ISelectInputState> {

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

    const value = this.props.value

    const base:any = {
      name: multi ? `${name}[]` : name,
      resetValue,
      clearable,
      multi,
      onChange: handleChange,
      value: !isFetching ? value || this.state.preselectValue : '',
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

  public static defaultProps: Partial<ISelectInputProps> = {
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
  private cachedOptions: any

  constructor (props: ISelectInputProps) {
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

  public componentWillMount () {
    this.initialPreselectValue()
  }

  public componentDidUpdate () {
    // There is no onClear event for the dropdown
    // This is a workaround
    // see: https://github.com/JedWatson/react-select/issues/1309
    this.setState({preselectValue: ''})
  }

  public componentWillReceiveProps (nextProps: ISelectInputProps) {
    if (nextProps.value === '' && !isEmpty(nextProps.preselectDefaultValue)) {
      this.handleChange(nextProps.preselectDefaultValue)
    }
  }

  public async cachedOptionsPromise () {
    return this.cachedOptions
  }

  public handleChange (newValue: any): void {
    const {
      handleChange
    } = this.props

    if (handleChange) {
      return handleChange(newValue)
    }
  }

  public preselectValue (options: any): void {
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

  public promiseOptions () {
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

  public prepareOptions (options?: ISelectInputOptions[]): ISelectInputOptions[] | undefined {
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

  public initialPreselectValue () {
    if (!this.props.promiseOptions) {
      this.preselectValue(this.selectProps.options)
    }
  }

  public render (): JSX.Element {
    const {
      promiseOptions,
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
