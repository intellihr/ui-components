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
    const wrapper = mount(
      <ListClickableColumn
        data={testData}
        rowIndex={0}
        urlForRow={row => 'test-url.test'}
      >
        <div>This is my column content</div>
      </ListClickableColumn>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a list row wrapped and clickable with click events', () => {
    let wrapper = mount(
      <ListClickableColumn
        data={testData}
        rowIndex={0}
        handleClick={row => console.log('I clicked this row')}
      >
        <div>This is my column content</div>
      </ListClickableColumn>
    )

    expect(wrapper).toMatchSnapshot()

    wrapper = mount(
      <ListClickableColumn
        data={testData}
        rowIndex={0}
        handleLeftClick={row => console.log('I left clicked this row')}
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
        isHeader
      >
        <div>This is my column content</div>
      </ListClickableColumn>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a simple list row with a simple redirect', () => {
    const wrapper = mount(
      <ListClickableColumn
        data={testData}
        rowIndex={0}
        urlForRow={row => 'test-url.test'}
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
