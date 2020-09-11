import { shallow } from 'enzyme'
import React from 'react'

import { TextInput } from '../TextInput'
import { InputGroup } from './InputGroup'

describe('<InputGroup />', () => {
  it('should render a simple input group', () => {
    const wrapper = shallow(
      <InputGroup>
        <TextInput name='test-input' groupPosition='left' />
        <TextInput name='test-input' groupPosition='middle' />
        <TextInput name='test-input' groupPosition='right' />
      </InputGroup>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
