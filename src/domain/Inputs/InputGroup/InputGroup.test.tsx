import React from 'react'
import { shallow } from 'enzyme'
import { InputGroup } from './InputGroup'
import { TextInput } from '../TextInput'

describe('<InputGroup />', () => {
  it('should render a simple input group', () => {
    const wrapper = shallow(
      <InputGroup>
        <TextInput name='test-input' groupPosition='left' />
        <TextInput name='test-input' groupPosition='right' />
      </InputGroup>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
