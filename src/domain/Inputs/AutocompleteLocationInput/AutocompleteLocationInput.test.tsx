import React from 'react'
import { shallow } from 'enzyme'
import { AutocompleteLocationInput } from './AutocompleteLocationInput'

const dummyClick = () => console.log('hey')

describe('<AutocompleteLocationInput />', () => {
  it('should render the autocomplete location input', () => {
    const wrapper = shallow(
      <AutocompleteLocationInput
        placeholder='dummy placeholder'
        onClickManualOptionButton={dummyClick}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})

describe('<AutocompleteLocationInput />', () => {
  it('should render the disabled autocomplete location input', () => {
    const wrapper = shallow(
      <AutocompleteLocationInput
        initialValue='dummy value'
        onClickManualOptionButton={dummyClick}
        isDisabled
        onResetClick={dummyClick}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
