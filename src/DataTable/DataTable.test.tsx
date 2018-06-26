import React from 'react'
import { mount } from 'enzyme'
import { DataTable } from './DataTable'

describe('<DataTable />', () => {
  it('Renders a basic DataTable', () => {
    const wrapper = mount(
      <DataTable
        data={[
          {
            name: 'Tanner Linsley',
            age: 26
          },
          {
            name: 'Jason Maurer',
            age: 23
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
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('Renders a paginated DataTable', () => {
    const wrapper = mount(
      <DataTable
        data={[{
          "name": "Frederigo Mallebone",
          "age": "15"
        },
        {
          "name": "Sutherlan Caulfield",
          "age": "35"
        }]}
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
        reactTableProps={{
          showPagination: true,
          showPageSizeOptions: true
        }}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
