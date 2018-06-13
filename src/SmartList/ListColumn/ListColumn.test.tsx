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
        size={{
          sm: 6
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

  it('should render a list column with the right header', () => {
    const wrapper = mount(
      <ListColumn
        data={testData}
        rowIndex={0}
        size={{
          sm: 6
        }}
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
})
