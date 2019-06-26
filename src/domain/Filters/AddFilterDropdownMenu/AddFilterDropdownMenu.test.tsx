import { shallow } from 'enzyme'
import React from 'react'

import { IDropdownMenuToggleComponentProps } from '../../Popovers/DropdownMenu'
import { AddFilterDropdownMenu, IAddFilterDropdownMenuFilter } from './AddFilterDropdownMenu'

const dummyHandleFilter = () => alert('dummy')

const filters: IAddFilterDropdownMenuFilter[] = [
  {
    field: 'type',
    label: 'Type',
    type: 'SINGLE_SELECT',
    selectOptions: [
      {
        label: 'Product Training',
        value: 'product_training'
      },
      {
        label: 'Personal Development',
        value: 'personal_development'
      },
      {
        label: 'Soft Skill',
        value: 'soft_skill'
      }
    ]
  },
  {
    field: 'training_provider',
    label: 'Training Provider',
    type: 'SINGLE_SELECT',
    selectOptions: [
      {
        label: 'Internal',
        value: 'internal'
      },
      {
        label: 'External',
        value: 'external'
      },
      {
        label: 'Others',
        value: 'others'
      }
    ]
  }
]

const toggleComponent = ({ toggleMenu, toggleComponentRef, ariaProps }: IDropdownMenuToggleComponentProps) => <button onClick={toggleMenu}>dropdown </button>

describe('<FilterDropdown />', () => {

  it(`should render the filter dropdown`, () => {
    const wrapper = shallow(
      <AddFilterDropdownMenu
        filterMessage='filter msg:'
        toggleComponent={toggleComponent}
        filters={filters}
        onFilterAdded={dummyHandleFilter}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
