import { shallow } from 'enzyme'
import React from 'react'

import { FilteredList } from './FilteredList'

const exampleData = [
  {
    value: 'Australia'
  },
  {
    value: 'New Zealand'
  },
  {
    value: 'United States'
  },
  {
    value: 'united states'
  },
  {
    value: 'Europe'
  }
]

describe('<FilteredList />', () => {
  it('should render a filtered list with no filters', () => {
    const row = jest.fn((value: any) => <div>{value.row.value}</div>)

    const wrapper = shallow(
      <FilteredList
        rowData={exampleData}
        rowCallback={row}
      />
    )

    expect(wrapper).toMatchSnapshot()
    expect(row).toBeCalled()
  })

  it('should render a basic filtered list', () => {
    const row = jest.fn((value: any) => <div>{value.row.value}</div>)

    const wrapper = shallow(
      <FilteredList
        filters={[
          {
            kind: 'valueFilter',
            paths: ['value'],
            caseSensitive: false,
            filterValue: 'uni'
          }
        ]}
        rowCallback={row}
        rowData={exampleData}
      />
    )

    expect(wrapper).toMatchSnapshot()
    expect(row).toBeCalled()
  })

  it('should render a case sensitive filtered list', () => {
    const row = jest.fn((value: any) => <div>{value.row.value}</div>)

    const wrapper = shallow(
      <FilteredList
        filters={[
          {
            kind: 'valueFilter',
            paths: ['value'],
            caseSensitive: true,
            filterValue: 'uni'
          }
        ]}
        rowCallback={row}
        rowData={exampleData}
      />
    )

    expect(wrapper).toMatchSnapshot()
    expect(row).toBeCalled()
  })

  it('should render an async filtered list', async () => {
    const row = jest.fn((value: any) => <div>{value.row.value}</div>)
    const promise = new Promise<any[]>((resolve) => {
      resolve(exampleData)
    })
    const query = jest.fn(() => promise)

    const wrapper = shallow(
      <FilteredList
        filters={[
          {
            kind: 'valueFilter',
            paths: ['value'],
            caseSensitive: false,
            filterValue: ''
          }
        ]}
        rowCallback={row}
        rowData={query}
      />
    )
    await expect(promise).resolves.toBe(exampleData)
    expect(wrapper).toMatchSnapshot()
    expect(query).toBeCalled()
    expect(row).toBeCalled()
  })

  it('should render an async filtered list with error and errorComponent being a function', async () => {
    const row = jest.fn((value: any) => <div>{value.row.value}</div>)
    const promise = new Promise<any[]>((resolve, reject) => {
      reject('rejected')
    })
    const query = jest.fn(() => promise)
    const errorRow = jest.fn((error: any) => <div>{error}</div>)

    const wrapper = shallow(
      <FilteredList
        filters={[
          {
            kind: 'valueFilter',
            paths: ['value'],
            caseSensitive: false,
            filterValue: ''
          }
        ]}
        errorComponent={errorRow}
        rowCallback={row}
        rowData={query}
      />
    )
    await expect(promise).rejects.toBe('rejected')
    expect(wrapper).toMatchSnapshot()
    expect(query).toBeCalled()
    expect(row).not.toBeCalled()
    expect(errorRow).toBeCalledWith('rejected')
  })

  it('should render an async filtered list with error and errorComponent being a string', async () => {
    const row = jest.fn((value: any) => <div>{value.row.value}</div>)
    const promise = new Promise<any[]>((resolve, reject) => {
      reject('rejected')
    })
    const query = jest.fn(() => promise)

    const wrapper = shallow(
      <FilteredList
        filters={[
          {
            kind: 'valueFilter',
            paths: ['value'],
            caseSensitive: false,
            filterValue: ''
          }
        ]}
        errorComponent={'blah'}
        rowCallback={row}
        rowData={query}
      />
    )
    await expect(promise).rejects.toBe('rejected')
    expect(wrapper).toMatchSnapshot()
    expect(query).toBeCalled()
    expect(row).not.toBeCalled()
  })

  it('should render a filtered list with no results', () => {
    const row = jest.fn((value: any) => <div>{value.row.value}</div>)

    const wrapper = shallow(
      <FilteredList
        filters={[
          {
            kind: 'valueFilter',
            paths: ['value'],
            caseSensitive: true,
            filterValue: 'sdafgsadgfs'
          }
        ]}
        rowCallback={row}
        rowData={exampleData}
      />
    )

    expect(wrapper).toMatchSnapshot()
    expect(row).not.toBeCalled()
  })

  it('should render a filtered list with no results and a no data callout string', () => {
    const row = jest.fn((value: any) => <div>{value.row.value}</div>)

    const wrapper = shallow(
      <FilteredList
        filters={[
          {
            kind: 'valueFilter',
            paths: ['value'],
            caseSensitive: true,
            filterValue: 'awsegsrgsgr'
          }
        ]}
        rowCallback={row}
        noDataComponent='could not find any results for your query'
        rowData={exampleData}
      />
    )

    expect(wrapper).toMatchSnapshot()
    expect(row).not.toBeCalled()
  })
})
