import { shallow } from 'enzyme'
import React from 'react'

import { DataTablePagination } from './DataTablePagination'

describe('<DataTablePagination />', () => {
  describe('Pagination with few pages', () => {
    const onPageChange = jest.fn()
    const onPageSizeChange = jest.fn()
    const data = Array(70)

    const wrapper = shallow(
      <DataTablePagination
        totalCount={70}
        data={data}
        pages={3}
        page={2}
        pageSize={25}
        pageSizeOptions={[5, 10, 20, 100]}
        showPageSizeOptions={false}
        canNext={false}
        canPrevious
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
      />
    )

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should not use ellipses for navigation', () => {
      expect(wrapper.find('.ellipsis').exists()).toBeFalsy()
    })

    it('should call the appropriate callbacks', () => {
      wrapper.find('.previous').simulate('click')

      expect(onPageChange).toBeCalledWith(1)
    })
  })

  describe('Pagination with many pages', () => {
    const onPageChange = jest.fn()
    const onPageSizeChange = jest.fn()
    const data = Array(295)

    const wrapper = shallow(
      <DataTablePagination
        data={data}
        totalCount={295}
        pages={30}
        page={3}
        pageSize={10}
        pageSizeOptions={[5, 10, 20, 100]}
        showPageSizeOptions={false}
        canNext
        canPrevious
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
      />
    )

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should collapse using ellipses for navigation', () => {
      expect(wrapper.find('.ellipsis').exists()).toBeTruthy()
    })
  })
})
