import { shallow } from 'enzyme'
import React from 'react'

import { IAddFilterDropdownMenuFilter } from '../AddFilterDropdownMenu/AddFilterDropdownMenu'
import { FilterController } from './FilterController'

const dummyFunction = () => alert('dummy')

const filters: IAddFilterDropdownMenuFilter[] = [
  {
    fieldName: 'type',
    label: 'Type',
    selectOptions: [
      {
        label: 'Product Training',
        value: 'Product Training'
      },
      {
        label: 'Personal Development',
        value: 'Personal Development'
      },
      {
        label: 'Soft Skill',
        value: 'Soft Skill'
      }
    ]
  },
  {
    fieldName: 'training_provider',
    label: 'Training Provider',
    selectOptions: [
      {
        label: 'Internal',
        value: 'Internal'
      },
      {
        label: 'External',
        value: 'External'
      },
      {
        label: 'Others',
        value: 'Others'
      }
    ]
  }
]

describe('<FilterController />', () => {

  it(`should render the filter controller`, () => {
    const wrapper = shallow(
      <FilterController
        margins={{
          top: 20,
          left: 20,
          right: 20,
          bottom: 20
        }}
        filterMessage='dummy filter message:'
        searchPlaceholder='dummy search placeholder'
        filters={filters}
        tags={[]}
        searchValue='dummy search value'
        onFilterAdded={dummyFunction}
        onTagDeleted={dummyFunction}
        onSearchUpdated={dummyFunction}
        onSearchCleared={dummyFunction}
        rightComponent={<div>RightComponent</div>}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
