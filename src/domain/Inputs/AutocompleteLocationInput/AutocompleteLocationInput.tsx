import React from 'react'
import Geosuggest, { QueryType, Suggest } from 'react-geosuggest'
import { Text } from '../../Typographies'
import { Props, Variables} from '../../../common'

const style = require('./style.scss')

export interface IAutocompleteLocationInputProps {
  /** the address types of return value. Types can be added to the array. 'geocode' for address, 'regions' for state,  'cities' for  suburb. If it is null, it will return all the value */
  addressTypesIncluded?: QueryType[] | null
  /** Placeholder text to display when input is empty */
  placeholder?: string
  /** event for selected suggestion */
  onSuggestSelect?: (suggest: Suggest) => void
  /** onClick event for clinking the manual Option Button */
  onClickManualOptionButton: (event: React.MouseEvent<HTMLElement>) => void,
  /** event for no result for the suggestion */
  onSuggestNoResults?:(userInput: string) => void
}

export class AutocompleteLocationInput extends React.PureComponent<IAutocompleteLocationInputProps> {
  public static defaultProps: Partial<IAutocompleteLocationInputProps> = {
    addressTypesIncluded: null,
    placeholder:''
  }

  public render (): JSX.Element {
    const {
      addressTypesIncluded,
      placeholder,
      onSuggestSelect,
      onClickManualOptionButton,
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
        <span>
          <Text isInline type={Props.TypographyType.Small}>
            {`Can't find your address? `}
          </Text>
          <button
            onClick={onClickManualOptionButton}
            type='button'
          >
            <Text color={Variables.Color.b400} type={Props.TypographyType.Small}>
            Click here to add it
            </Text>
          </button>
        </span>
      </div>
    )
  }
}
