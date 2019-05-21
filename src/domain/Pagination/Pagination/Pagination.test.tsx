import { shallow } from 'enzyme'
import React from 'react'

import { Pagination } from './Pagination'

const dummyHandlePageChange = (page) => console.log(page)

describe('<Pagination />', () => {
  it(`should render a pagination with details`, () => {
    const wrapper = shallow(
      <Pagination
        currentPage={1}
        totalCount={105}
        pageSize={10}
        totalPages={11}
        handlePageChange={dummyHandlePageChange}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a pagination without details`, () => {
    const wrapper = shallow(
      <Pagination
        currentPage={1}
        totalPages={10}
        handlePageChange={dummyHandlePageChange}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a pagination without details`, () => {
    const wrapper = shallow(
      <Pagination
        hasPageDetails={false}
        currentPage={1}
        totalCount={105}
        pageSize={10}
        totalPages={11}
        handlePageChange={dummyHandlePageChange}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
