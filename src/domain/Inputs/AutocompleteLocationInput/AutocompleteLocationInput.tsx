import React, { RefObject } from 'react'
import Geosuggest, { QueryType, Suggest } from 'react-geosuggest'

const style = require('./style.scss')

export interface IAutocompleteLocationInputProps {
  /** the address types of suggestion option values. Types can be added to the array. 'geocode' for address, '(regions)' for state,  '(cities)' for  suburb. If it is null, it will return all the value */
  addressTypesIncluded?: QueryType[]
  /** Placeholder text to display when input is empty */
  placeholder?: string
  /** event for selected suggestion */
  onSuggestSelect?: (suggest: Suggest) => void
  /** onClick event for clicking the manual Option Button */
  onClickManualOptionButton: (event: React.MouseEvent<HTMLElement>) => void
  /** event for no result for the suggestion */
  onSuggestNoResults?:(userInput: string) => void
  /** If true, sets input to disabled state */
  isDisabled?: boolean
  /** If true, displays reset button and fires callback when clicked */
  onResetClick?: () => void
  /** value used as the initial value to start */
  initialValue?: string
}

export class AutocompleteLocationInput extends React.PureComponent<IAutocompleteLocationInputProps> {
  private geosuggestRef: RefObject<any> = React.createRef()

  public componentDidMount () {
    const {
      onResetClick
    } = this.props

    if (onResetClick) {
      // forceUpdate is required to for the ref to work
      this.forceUpdate()
    }
  }

  public componentDidUpdate (prevProps: IAutocompleteLocationInputProps) {
    const {
      onResetClick
    } = this.props

    if (onResetClick && (onResetClick !== prevProps.onResetClick)) {
      // forceUpdate is required to for the ref to work
      this.forceUpdate()
    }
  }

  get resetButton(): JSX.Element | null{
    const {
      onResetClick
    } = this.props

    if (onResetClick) {
      return <span onClick={this.handleReset} className='autocomplete-reset'>×</span>
    }

    return null
  }

  public render (): JSX.Element {
    const {
      addressTypesIncluded,
      placeholder,
      onSuggestSelect,
      onSuggestNoResults,
      isDisabled,
      initialValue
    } = this.props

    return (
      <div className={style.autocompleteLocationInput}>
        {this.resetButton}
        <Geosuggest
          ref={this.geosuggestRef}
          initialValue={initialValue}
          placeholder={placeholder}
          types={addressTypesIncluded!}
          onSuggestSelect={onSuggestSelect}
          onSuggestNoResults={onSuggestNoResults}
          disabled={isDisabled}
        />
      </div>
    )
  }

  private handleReset = () => {
    const {
      onResetClick
    } = this.props

    if (onResetClick) {
      onResetClick()
    }

    this.geosuggestRef.current.clear()
  }
}
