import { shallow } from 'enzyme'
import React from 'react'

import { PaginationDetails } from './PaginationDetails'

const dummyHandlePageChange = (page: number) => console.log(page)

describe('<PaginationDetails />', () => {

  it(`should render a pagination details`, () => {
    const wrapper = shallow(
      <PaginationDetails
        currentPage={1}
        totalPages={10}
        totalCount={10}
        pageSize={100}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
