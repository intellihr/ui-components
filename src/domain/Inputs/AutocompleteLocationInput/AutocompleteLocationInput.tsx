import React, { RefObject } from 'react'
import Geosuggest, { QueryType, Suggest } from 'react-geosuggest'

const style = require('./style.scss')

export interface IAutocompleteLocationInputProps {
  /** The address types of suggestion option values. Types can be added to the array. 'geocode' for address, '(regions)' for state,  '(cities)' for  suburb. If it is null, it will return all the value */
  addressTypesIncluded?: QueryType[]
  /** Placeholder text to display when input is empty */
  placeholder?: string
  /** Event for selected suggestion */
  onSuggestSelect?: (suggest: Suggest) => void
  /** onClick event for clicking the manual Option Button */
  onClickManualOptionButton: (event: React.MouseEvent<HTMLElement>) => void
  /** Event for no result for the suggestion */
  onSuggestNoResults?: (userInput: string) => void
  /** If true, sets input to disabled state */
  isDisabled?: boolean
  /** If true, displays reset button and fires callback when clicked */
  onResetClick?: () => void
  /** Value used as the initial value to start */
  initialValue?: string
  /** The country to bias the search results around */
  biasCountry?: string
  /** the bias radius, defaults to 1000m */
  radius?: number
}

export interface IAutocompleteLocationInputState {
  isDisabled: boolean,
  location: google.maps.LatLng | null
}

export class AutocompleteLocationInput extends React.PureComponent<IAutocompleteLocationInputProps, IAutocompleteLocationInputState> {
  get resetButton (): JSX.Element | null {
    const {
      onResetClick
    } = this.props

    if (onResetClick) {
      return <span onClick={this.handleReset} className='autocomplete-reset'>×</span>
    }

    return null
  }

  public static defaultProps: Partial<IAutocompleteLocationInputProps> = {
    radius: 1000
  }

  public state: IAutocompleteLocationInputState = {
    isDisabled: false,
    location: null
  }

  private geosuggestRef: RefObject<any> = React.createRef()

  constructor (props: IAutocompleteLocationInputProps) {
    super(props)

    this.state = {
      isDisabled: !!props.isDisabled,
      location: null
    }
  }

  public componentDidMount () {
    const {
      onResetClick
    } = this.props

    this.generateBiasLocation()

    if (onResetClick) {
      // forceUpdate is required to for the ref to work
      this.forceUpdate()
    }
  }

  public componentDidUpdate (prevProps: IAutocompleteLocationInputProps) {
    const {
      onResetClick,
      isDisabled,
      biasCountry
    } = this.props

    if (biasCountry !== prevProps.biasCountry) {
      this.generateBiasLocation()
    }

    if (onResetClick && (onResetClick !== prevProps.onResetClick)) {
      // forceUpdate is required to for the ref to work
      this.forceUpdate()
    }

    if (this.state.isDisabled !== isDisabled) {
      this.setState({
        isDisabled: !!isDisabled
      })
    }
  }

  public render (): JSX.Element {
    const {
      addressTypesIncluded,
      placeholder,
      onSuggestSelect,
      onSuggestNoResults,
      initialValue,
      radius
    } = this.props

    const {
      location
    } = this.state

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
          location={location ? location : undefined}
          radius={location ? radius : undefined}
          disabled={this.state.isDisabled}
        />
      </div>
    )
  }

  private generateBiasLocation = () => {
    const {
      biasCountry
    } = this.props

    const googleMaps = ((window as any).google && (window as any).google.maps)
    if (biasCountry && googleMaps) {
      const geocoder = new googleMaps.Geocoder()
      const options: google.maps.GeocoderRequest = {
        address: biasCountry
      }

      geocoder.geocode(options, (results: any, status: any) => {
        if (status === googleMaps.GeocoderStatus.OK) {
          const gmaps = results[0]
          const location = gmaps.geometry.location
          this.setState({location})
        }
      })
    }
  }

  private handleReset = () => {
    const {
      onResetClick
    } = this.props

    if (onResetClick) {
      onResetClick()
    }

    this.geosuggestRef.current.clear()

    this.setState({
      isDisabled: false
    }, () => {
      this.geosuggestRef.current.input.focus()
    })
  }
}
