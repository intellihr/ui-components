import React from 'react'
import { mount } from 'enzyme'
import { ListColumn } from './ListColumn'

export interface ITestListColumnItem {
  name: string
}

const testData = [
  {
    name: 'Test Name'
  }
]

describe('<ListColumn />', () => {
  it('should render a list column with the right non-header cell content', () => {
    const wrapper = mount(
      <ListColumn
        data={testData}
        rowIndex={0}
        size={6}
        cell={(row: ITestListColumnItem) =>
          <div>
            {row.name}
          </div>
        }
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a list column with the right header', () => {
    const wrapper = mount(
      <ListColumn
        data={testData}
        rowIndex={0}
        size={6}
        isHeader
        header='Test'
        cell={(row: ITestListColumnItem) =>
          <div>
            {row.name}
          </div>
        }
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a list column with custom column orders', () => {
    let wrapper = mount(
      <ListColumn
        data={testData}
        rowIndex={0}
        size={6}
        isHeader
        header='Test'
        order='large-order-2'
        cell={(row: ITestListColumnItem) =>
          <div>
            {row.name}
          </div>
        }
      />
    )

    expect(wrapper).toMatchSnapshot()

    wrapper = mount(
      <ListColumn
        data={testData}
        rowIndex={0}
        size={6}
        isHeader
        header='Test'
        order={2}
        cell={(row: ITestListColumnItem) =>
          <div>
            {row.name}
          </div>
        }
      />
    )

    expect(wrapper).toMatchSnapshot()

    wrapper = mount(
      <ListColumn
        data={testData}
        rowIndex={0}
        size={6}
        isHeader
        header='Test'
        order={{
          large: 2,
          small: 6
        }}
        cell={(row: ITestListColumnItem) =>
          <div>
            {row.name}
          </div>
        }
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
