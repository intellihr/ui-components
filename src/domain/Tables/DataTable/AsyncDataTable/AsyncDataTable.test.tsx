import { mount } from 'enzyme'
import React from 'react'

import { AsyncDataTable } from './AsyncDataTable'

describe('AsyncDataTable', () => {
    const mockOnPageChange = jest.fn()
    const wrapper = mount(
        <AsyncDataTable
            data={[
                {
                    name: 'Frederigo Mallebone',
                    age: '15'
                },
                {
                    name: 'Sutherlan Caulfield',
                    age: '35'
                }
            ]}
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
            pageSize={1}
            totalCount={2}
            loading={false}
            onPageChange={mockOnPageChange}
        />
    )

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should contain the data', () => {
        expect(wrapper.contains('Frederigo Mallebone')).toBeTruthy()
        expect(wrapper.contains('Sutherlan Caulfield')).toBeTruthy()
    })

    it('should be paginated', () => {
        expect(wrapper.find('.-pagination').exists()).toBeTruthy()
    })
})

describe('onPageChange changes page', () => {
    const mockOnPageChange = jest.fn()
    const wrapper = mount(
        <AsyncDataTable
            data={[
                {
                    name: 'Frederigo Mallebone',
                    age: '15'
                },
                {
                    name: 'Sutherlan Caulfield',
                    age: '35'
                }
            ]}
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
            pageSize={1}
            totalCount={2}
            loading={false}
            onPageChange={mockOnPageChange}
        />
    )

    it('should change page', () => {
        const nextButton = wrapper.find('.next.-btn')
        expect(nextButton.exists()).toBeTruthy()

        expect(mockOnPageChange.mock.calls.length).toEqual(0)
        nextButton.simulate('click')
        expect(mockOnPageChange.mock.calls.length).toEqual(1)
    })

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should be paginated', () => {
        expect(wrapper.find('.-pagination').exists()).toBeTruthy()
    })
})

describe('Empty AsyncDataTable', () => {
    const mockOnPageChange = jest.fn()
    const wrapper = mount(
        <AsyncDataTable
            data={[]}
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
            pageSize={1}
            totalCount={0}
            loading={false}
            onPageChange={mockOnPageChange}
        />
    )

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should be not paginated', () => {
        expect(wrapper.find('.-pagination').exists()).toBeFalsy()
    })
})

describe('Loading AsyncDataTable', () => {
    const mockOnPageChange = jest.fn()
    const wrapper = mount(
        <AsyncDataTable
            data={[]}
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
            pageSize={1}
            totalCount={2}
            loading
            onPageChange={mockOnPageChange}
        />
    )

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })
})

describe('Set noDataComponent on AsyncDataTable', () => {
    const mockOnPageChange = jest.fn()
    const wrapper = mount(
        <AsyncDataTable
            data={[]}
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
            pageSize={1}
            totalCount={2}
            loading={false}
            onPageChange={mockOnPageChange}
            noDataComponent={<div>hello</div>}
        />
    )

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })
})
