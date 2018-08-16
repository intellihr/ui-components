import React from 'react'
import { mount } from 'enzyme'
import { ListClickableColumn } from './ListClickableColumn'

const testData = [
  {
    name: 'Test Name'
  }
]

describe('<ListClickableColumn />', () => {
  it('should render a list row wrapped and clickable', () => {
    const wrapper = mount(
      <ListClickableColumn
        data={testData}
        rowIndex={0}
      >
        <div>This is my column content</div>
      </ListClickableColumn>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a list row wrapped and clickable with url to redirect', () => {
    const urlForRow = row => 'test-url.test'

    const wrapper = mount(
      <ListClickableColumn
        data={testData}
        rowIndex={0}
        urlForRow={urlForRow}
      >
        <div>This is my column content</div>
      </ListClickableColumn>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a list row wrapped and clickable with click events', () => {
    const handleClick = row => console.log('I clicked this row')

    let wrapper = mount(
      <ListClickableColumn
        data={testData}
        rowIndex={0}
        handleClick={handleClick}
      >
        <div>This is my column content</div>
      </ListClickableColumn>
    )

    expect(wrapper).toMatchSnapshot()

    const handleLeftClick = row => console.log('I left clicked this row')

    wrapper = mount(
      <ListClickableColumn
        data={testData}
        rowIndex={0}
        handleLeftClick={handleLeftClick}
      >
        <div>This is my column content</div>
      </ListClickableColumn>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a simple list row if is header', () => {
    const wrapper = mount(
      <ListClickableColumn
        data={testData}
        rowIndex={0}
        isHeader={true}
      >
        <div>This is my column content</div>
      </ListClickableColumn>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a simple list row with a simple redirect', () => {
    const urlForRow = row => 'test-url.test'

    const wrapper = mount(
      <ListClickableColumn
        data={testData}
        rowIndex={0}
        urlForRow={urlForRow}
        anchorComponentProps={{
          someProp: false
        }}
      >
        <div>This is my column content</div>
      </ListClickableColumn>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
