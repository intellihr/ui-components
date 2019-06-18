import { shallow } from 'enzyme'
import React from 'react'

import { SelectInput } from './SelectInput'

describe('<SelectInput />', () => {
  it('should render a select box with options', () => {
    const wrapper = shallow(
      <SelectInput
        name='test'
        value=''
        options={[
          {
            label: 'option1',
            value: 'value1'
          },
          {
            label: 'option2',
            value: 'value2'
          }
        ]}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a multi select box with options', () => {
    const wrapper = shallow(
      <SelectInput
        name='test'
        value=''
        options={[
          {
            label: 'option1',
            value: 'value1'
          },
          {
            label: 'option2',
            value: 'value2'
          }
        ]}
        isMultiSelect
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a creatable select box', () => {
    const wrapper = shallow(
      <SelectInput
        name='test'
        value=''
        options={[
          {
            label: 'option1',
            value: 'value1'
          },
          {
            label: 'option2',
            value: 'value2'
          }
        ]}
        onNewOptionCreated={console.log}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
