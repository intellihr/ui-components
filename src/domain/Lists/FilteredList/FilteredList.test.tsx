import React from 'react'
import { shallow } from 'enzyme'
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
        data={exampleData}
        row={row}
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
        row={row}
        data={exampleData}
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
        row={row}
        data={exampleData}
      />
    )

    expect(wrapper).toMatchSnapshot()
    expect(row).toBeCalled()
  })

  it('should render an async filtered list', () => {
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
            filterValue: 'un'
          }
        ]}
        row={row}
        data={query}
      />
    )
    expect(promise).resolves.toBe(exampleData)
    expect(wrapper).toMatchSnapshot()
    expect(query).toBeCalled()
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
        row={row}
        data={exampleData}
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
        row={row}
        noDataCallout='could not find any results for your query'
        data={exampleData}
      />
    )

    expect(wrapper).toMatchSnapshot()
    expect(row).not.toBeCalled()
  })
})
