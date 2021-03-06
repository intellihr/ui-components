import { mount } from 'enzyme'
import React from 'react'

import { Props } from '../../../../common'
import { LegacyDataTable } from './LegacyDataTable'

describe('<LegacyDataTable />', () => {
  describe('Basic DataTable', () => {
    const wrapper = mount(
      <LegacyDataTable
        data={[
          {
            name: 'Tanner Linsley',
            age: 26
          },
          {
            name: 'Jason Maurer',
            age: 23
          }
        ] as readonly any[]}
        columns={[
          {
            Header: 'Name',
            accessor: 'name'
          },
          {
            Header: 'Age',
            accessor: 'age'
          }
        ]}
      />
    )

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should contain the data', () => {
      expect(wrapper.contains('Tanner Linsley')).toBeTruthy()
      expect(wrapper.contains('Jason Maurer')).toBeTruthy()
    })

    it('should not be paginated', () => {
      expect(wrapper.find('.-pagination').exists()).toBeFalsy()
    })
  })

  describe('Aligned DataTable', () => {
    const wrapper = mount(
      <LegacyDataTable
        data={[
          {
            name: 'Tanner Linsley',
            age: 26
          },
          {
            name: 'Jason Maurer',
            age: 23
          }
        ] as readonly any[]}
        columns={[
          {
            Header: 'Name',
            accessor: 'name',
            headerAlignment: Props.Position.Right,
            columnAlignment: Props.Position.Right
          },
          {
            Header: 'Age',
            accessor: 'age',
            headerAlignment: Props.Position.Center,
            columnAlignment: Props.Position.Center
          }
        ]}
      />
    )

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should contain the data', () => {
      expect(wrapper.contains('Tanner Linsley')).toBeTruthy()
      expect(wrapper.contains('Jason Maurer')).toBeTruthy()
    })
  })

  describe('Paginated DataTable', () => {
    const wrapper = mount(
      <LegacyDataTable
        data={[
          {
            name: 'Frederigo Mallebone',
            age: '15'
          },
          {
            name: 'Sutherlan Caulfield',
            age: '35'
          }
        ] as readonly any[]}
        columns={[
          {
            Header: 'Name',
            accessor: 'name'
          },
          {
            Header: 'Age',
            accessor: 'age'
          }
        ]}
        showPagination
      />
    )

    it('should contain the data', () => {
      expect(wrapper.contains('Frederigo Mallebone')).toBeTruthy()
      expect(wrapper.contains('Sutherlan Caulfield')).toBeTruthy()
    })

    it('should be paginated', () => {
      expect(wrapper.find('.-pagination').exists()).toBeTruthy()
    })
  })

  describe('Filtered DataTable', () => {
    const wrapper = mount(
      <LegacyDataTable
        tableId='test-table'
        data={[
          {
            name: 'Frederigo Mallebone',
            age: '15'
          },
          {
            name: 'Sutherlan Caulfield',
            age: '35'
          }
        ] as readonly any[]}
        columns={[
          {
            Header: 'Name',
            accessor: 'name'
          },
          {
            Header: 'Age',
            accessor: 'age'
          }
        ]}
        showPagination
        showSearchFilter
      />
    )

    const mockedEvent = {
      target: {
        value: 'caul'
      }
    }

    wrapper
      .find({ name: 'test-table-search-filter' })
      .at(0)
      .simulate('change', mockedEvent)

    it('should have the search filter', () => {
      expect(wrapper.find({ name: 'test-table-search-filter' }).exists()).toBeTruthy()
    })

    it('should contain the filtered data', () => {
      expect(wrapper.contains('Sutherlan Caulfield')).toBeTruthy()
      expect(wrapper.contains('Frederigo Mallebone')).toBeFalsy()
    })

    it('should be paginated', () => {
      expect(wrapper.find('.-pagination').exists()).toBeTruthy()
    })
  })

  describe('Filtered DataTable - custom filter function', () => {
    const filterToSam = jest.fn((_: any, row: any) => row.name === 'Sam')

    const wrapper = mount(
      <LegacyDataTable
        tableId='test-table'
        data={[
          {
            name: 'Sam',
            age: '15'
          },
          {
            name: 'Some other guy',
            age: '35'
          }
        ] as readonly any[]}
        columns={[
          {
            Header: 'Name',
            accessor: 'name',
            filterMethod: filterToSam
          },
          {
            Header: 'Age',
            accessor: 'age'
          }
        ]}
        showPagination
        showSearchFilter
      />
    )

    const mockedEvent = {
      target: {
        value: 'filterinput'
      }
    }

    wrapper
      .find({ name: 'test-table-search-filter' })
      .at(0)
      .simulate('change', mockedEvent)

    it('should have the search filter', () => {
      expect(wrapper.find({ name: 'test-table-search-filter' }).exists()).toBeTruthy()
    })

    it('should contain correctly filtered data', () => {
      expect(wrapper.contains('Sam')).toBeTruthy()
      expect(wrapper.contains('Some other guy')).toBeFalsy()
    })

    it('should call the filter correctly', () => {
      expect(filterToSam).toBeCalledWith(
        {
          id: '',
          value: 'filterinput'
        },
        {
          name: 'Sam',
          age: '15'
        },
        {
          Header: 'Name',
          accessor: 'name',
          filterMethod: filterToSam
        }
      )
    })
  })
})
