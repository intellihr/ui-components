import { shallow } from 'enzyme'
import React from 'react'

import { FilterTag, IFilterTagDetail } from './FilterTag'

const dummyHandleDelete = () => alert('dummy')

const tags: IFilterTagDetail[] = [
  {
    field: 'type',
    label: 'Type',
    operator: 'is',
    fieldValues:[{
      label: 'Product Training',
      value: 'product_training_id'
    }, {
      label: 'IT Training',
      value: 'it_training_id'
    }]
  },
  {
    field: 'complete_at',
    label: 'Complete date',
    operator: 'from',
    fieldValues:'01/01/2019,31/05/2019'
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
