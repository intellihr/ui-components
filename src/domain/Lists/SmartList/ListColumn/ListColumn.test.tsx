import { mount } from 'enzyme'
import React from 'react'

import { ListColumn } from './ListColumn'

export interface ITestListColumnItem {
  name: string
  number: number
}

const testData = [
  {
    name: 'Test Name',
    number: 100
  }
]

describe('<ListColumn />', () => {
  it('should render a list column with the right non-header cell content', () => {
    const cell = (row: ITestListColumnItem) => (
      <div>
        {row.name}
      </div>
    )

    const wrapper = mount(
      <ListColumn
        data={testData}
        rowIndex={0}
        size={{
          sm: 6
        }}
        cell={cell}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a list column with the right header', () => {
    const cell = (row: ITestListColumnItem) => (
      <div>
        {row.name}
      </div>
    )

    const wrapper = mount(
      <ListColumn
        data={testData}
        rowIndex={0}
        size={{
          sm: 6
        }}
        isHeader
        header='Test'
        cell={cell}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a list column with number content', () => {
    const cell = (row: ITestListColumnItem) => row.number

    const wrapper = mount(
      <ListColumn
        data={testData}
        rowIndex={0}
        size={{
          sm: 6
        }}
        cell={cell}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
