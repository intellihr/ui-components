import { shallow } from 'enzyme'
import React from 'react'

import { IDropdownMenuToggleComponentProps } from '../../Popovers/DropdownMenu'
import { FilterDropdown, IFilterDropdownFilter } from './FilterDropdown'

const dummyHandleFilter = () => alert('dummy')

const filters: IFilterDropdownFilter[] = [
  {
    fieldName: 'Type',
    type: 'SINGLE_SELECT',
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
    fieldName: 'Training Provider',
    type: 'SINGLE_SELECT',
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

const toggleComponent = ({ toggleMenu, toggleComponentRef, ariaProps }: IDropdownMenuToggleComponentProps) => <button onClick={toggleMenu}>dropdown </button>

describe('<FilterDropdown />', () => {

  it(`should render the filter dropdown`, () => {
    const wrapper = shallow(
      <FilterDropdown
        filterMessage='filter msg:'
        toggleComponent={toggleComponent}
        filters={filters}
        onFilterAdded={dummyHandleFilter}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
