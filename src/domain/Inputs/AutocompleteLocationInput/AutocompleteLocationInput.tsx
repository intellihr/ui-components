import React from 'react'
import Geosuggest, { QueryType, Suggest } from 'react-geosuggest'

const style = require('./style.scss')

export interface IAutocompleteLocationInputProps {
  /** the address types of return value. Types can be added to the array. 'geocode' for address, 'regions' for state,  'cities' for  suburb. If it is null, it will return all the value */
  addressTypesIncluded?: QueryType[]
  /** Placeholder text to display when input is empty */
  placeholder?: string
  /** event for selected suggestion */
  onSuggestSelect?: (suggest: Suggest) => void
  /** onClick event for clicking the manual Option Button */
  onClickManualOptionButton: (event: React.MouseEvent<HTMLElement>) => void
  /** event for no result for the suggestion */
  onSuggestNoResults?:(userInput: string) => void
}

export class AutocompleteLocationInput extends React.PureComponent<IAutocompleteLocationInputProps> {
  public render (): JSX.Element {
    const {
      addressTypesIncluded,
      placeholder,
      onSuggestSelect,
      onSuggestNoResults
    } = this.props

    return (
      <div className={style.autocompleteLocationInput}>
        <Geosuggest
          placeholder={placeholder}
          types={addressTypesIncluded!}
          onSuggestSelect={onSuggestSelect}
          onSuggestNoResults={onSuggestNoResults}
        />
      </div>
    )
  }
}
