import { shallow } from 'enzyme'
import React from 'react'

import { HierarchicalSelectInput } from './HierarchicalSelectInput'

describe('<HierarchicalSelectInput />', () => {
  it('should render a select box with options', () => {
    const wrapper = shallow(
      <HierarchicalSelectInput
        name='test'
        value=''
        hierarchicalOptions={[
          {
            label: 'Parent Option 1',
            value: 10
          },
          {
            label: 'Child Option 1',
            value: 11,
            parentValue: 10
          },
          {
            label: 'Child Option 2',
            value: 12,
            parentValue: 10
          }
        ]}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a multi select box with options', () => {
    const wrapper = shallow(
      <HierarchicalSelectInput
        name='test'
        value={[]}
        hierarchicalOptions={[
          {
            label: 'Parent Option 1',
            value: 10
          },
          {
            label: 'Child Option 1',
            value: 11,
            parentValue: 10
          },
          {
            label: 'Child Option 2',
            value: 12,
            parentValue: 10
          }
        ]}
        isMultiSelect
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
