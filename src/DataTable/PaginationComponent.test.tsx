import React from 'react'
import { mount } from 'enzyme'
import PaginationComponent from './PaginationComponent'

describe('<PaginationComponent />', () => {
  it('Renders a basic DataTable', () => {
    const wrapper = mount(
      <PaginationComponent
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

  it('Renders an empty DataTable', () => {
    const wrapper = mount(
      <PaginationComponent
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
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('Renders a sortable DataTable', () => {
    const wrapper = mount(
      <PaginationComponent
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
        sortable={true}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('Renders a custom component in a DataTable', () => {
    const wrapper = mount(
      <PaginationComponent
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
            accessor: 'name',
            Cell: data => (
              <div>
                {data.row.name} testing
              </div>
            )
          },
          {
            Header: 'Age',
            accessor: 'age'
          }
        ]}
        sortable={true}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('Renders a sorted DataTable', () => {
    const wrapper = mount(
      <PaginationComponent
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
        defaultSorted={[
          {
            id: 'age',
            desc: true
          }
        ]}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('Renders a filterable DataTable', () => {
    const wrapper = mount(
      <PaginationComponent
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
        filterable={true}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('Renders a paginated DataTable', () => {
    const wrapper = mount(
      <PaginationComponent
        data={[{
          "name": "Doe Giacomelli",
          "age": "85"
        }, {
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
        showPagination
        showPageSizeOptions
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
