import { shallow } from 'enzyme'
import React from 'react'

import { FilterTag } from './FilterTag'

const dummyHandleDelete = (selectedTag) => console.log(selectedTag)

const tags = [
  {
    field: 'Type',
    operator: 'is',
    value: 'Product Training'
  },
  {
    field: 'Training Provider',
    operator: 'is',
    value: 'AWS'
  }
]

describe('<FilterTag />', () => {

  it(`should render the filter tag`, () => {
    const wrapper = shallow(
      <FilterTag
        tags={tags}
        handleDelete={dummyHandleDelete}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
