import { shallow } from 'enzyme'
import React from 'react'

import { FilterTag, IFilterTagDetail } from './FilterTag'

const dummyHandleDelete = () => alert('dummy')

const tags: IFilterTagDetail[] = [
  {
    fieldName: 'type',
    label: 'Type',
    type: 'equality',
    fieldValues:[{
      label: 'Product Training',
      value: 'product_training_id'
    }, {
      label: 'IT Training',
      value: 'it_training_id'
    }]
  },
  {
    fieldName: 'complete_at',
    label: 'Complete date',
    type: 'range',
    fieldValues:[{
      label: '01/01/2019',
      value: '01/01/2019'
    }, {
      label: '31/05/2019',
      value: '31/05/2019'
    }]
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
