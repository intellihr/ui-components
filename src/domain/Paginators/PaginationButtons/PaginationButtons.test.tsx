import { shallow } from 'enzyme'
import React from 'react'

import { PaginationButtons } from './PaginationButtons'

const dummyHandlePageChange = (page: number) => console.log(page)

describe('<PaginationButtons />', () => {

  it(`should render the pagination buttons`, () => {
    const wrapper = shallow(
      <PaginationButtons
        currentPage={1}
        totalPages={10}
        handlePageChange={dummyHandlePageChange}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render the pagination buttons with margin`, () => {
    const wrapper = shallow(
      <PaginationButtons
        margins={{
          top: 20,
          left: 20,
          right: 20,
          bottom: 20
        }}
        currentPage={1}
        totalPages={10}
        handlePageChange={dummyHandlePageChange}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
