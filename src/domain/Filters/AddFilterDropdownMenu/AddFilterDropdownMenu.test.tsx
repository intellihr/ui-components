import { shallow } from 'enzyme'
import React from 'react'

import { IDropdownMenuToggleComponentProps } from '../../Popovers/DropdownMenu'
import { AddFilterDropdownMenu, IAddFilterDropdownMenuFilter } from './AddFilterDropdownMenu'

const dummyHandleFilter = () => alert('dummy')

const filters: IAddFilterDropdownMenuFilter[] = [
  {
    fieldName: 'type_id',
    label: 'Type',
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
    fieldName: 'training_provider_id',
    label: 'Training Provider',
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
