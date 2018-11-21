import React from 'react'
import Geosuggest, { QueryType, Suggest } from 'react-geosuggest'
import { Text } from '../../Typographies'
import { TextLink } from '../../Links'
import { Props } from '../../../common'

const style = require('./style.scss')

export interface IAutocompleteLocationInputProps {
  /** the address types of return value. Types can be added to the array. 'geocode' for address, 'regions' for state,  'cities' for  suburb. If it is null, it will return all the value */
  addressTypesIncluded?: QueryType[]
  /** Placeholder text to display when input is empty */
  placeholder?: string
  /** event for selected suggestion */
  onSuggestSelect?: (suggest: Suggest) => void
  /** onClick event for clinking the manual Option Button */
  onClickManualOptionButton: (event: React.MouseEvent<HTMLElement>) => void
  /** event for no result for the suggestion */
  onSuggestNoResults?:(userInput: string) => void
}

export class AutocompleteLocationInput extends React.PureComponent<IAutocompleteLocationInputProps> {
  get cannotFindAddressText (): JSX.Element{
    return (
      <Text isInline type={Props.TypographyType.Small}>
        {`Can't find your address? `}
      </Text>
    )
  }

  get addLink (): JSX.Element{
    const {
      onClickManualOptionButton
    } = this.props

    return (
      <TextLink
        onClick={onClickManualOptionButton}
        textType={Props.TypographyType.Small}
      >
        Click here to add it
      </TextLink>
    )
  }

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
        {this.cannotFindAddressText}
        {this.addLink}
      </div>
    )
  }
}
