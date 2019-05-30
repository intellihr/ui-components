import { shallow } from 'enzyme'
import React from 'react'

import { FilterDropdown } from './FilterDropdown'

const dummyHandleFilter = (filter) => console.log(filter)

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

const toggleComponent = ({ toggleMenu, toggleComponentRef, ariaProps }) => <button onClick={toggleMenu}>dropdown </button>

describe('<FilterDropdown />', () => {

  it(`should render the filter dropdown`, () => {
    const wrapper = shallow(
      <FilterDropdown
        tableName='training'
        toggleComponent={toggleComponent}
        filters={filters}
        handleFilter={dummyHandleFilter}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
