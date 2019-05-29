import { shallow } from 'enzyme'
import React from 'react'

import { FilterController } from './FilterController'

const dummyHandleFilter = (filter) => console.log(filter)
const handleTagDelete = (selectedTag) => console.log(selectedTag)
const handleSearchChange = (event) => console.log(event)

const filters = [
  {
    field: 'Type',
    type: 'select',
    selectOptions: [
      'Product Training',
      'Personal Development',
      'Soft Skill'
    ]
  },
  {
    field: 'Training Provider',
    type: 'select',
    selectOptions: [
      'Internal',
      'External',
      'Others'
    ]
  }
]

describe('<FilterController />', () => {

  it(`should render the filter controller`, () => {
    const wrapper = shallow(
      <FilterController
        tableName='training'
        filters = {filters}
        tags = {[]}
        searchValue = 'val'
        handleFilter = {dummyHandleFilter}
        handleTagDelete = {handleTagDelete}
        handleSearchChange = {handleSearchChange}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
