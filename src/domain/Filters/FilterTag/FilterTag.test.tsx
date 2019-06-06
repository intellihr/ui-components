import { shallow } from 'enzyme'
import React from 'react'

import { FilterTag } from './FilterTag'

const dummyHandleDelete = () => alert('dummy')

const tags = [
  {
    fieldName: 'Type',
    operator: 'is',
    value: 'Product Training'
  },
  {
    fieldName: 'Training Provider',
    operator: 'is',
    value: 'AWS'
  }
]

describe('<FilterTag />', () => {

  it(`should render the filter tag`, () => {
    const wrapper = shallow(
      <FilterTag
        tags={tags}
        onTagDeleted={dummyHandleDelete}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
