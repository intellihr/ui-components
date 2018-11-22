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
