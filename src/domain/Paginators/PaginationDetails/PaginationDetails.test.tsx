import { shallow } from 'enzyme'
import React from 'react'

import { PaginationDetails } from './PaginationDetails'

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

  it(`should render a pagination details with margin`, () => {
    const wrapper = shallow(
      <PaginationDetails
        margins={{
          top: 20,
          left: 20,
          right: 20,
          bottom: 20
        }}
        currentPage={1}
        totalPages={10}
        totalCount={10}
        pageSize={100}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
