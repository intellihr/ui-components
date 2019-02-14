import { shallow } from 'enzyme'
import React from 'react'

import { List } from './List'

describe('<List />', () => {
  it('should render an unordered list by default', () => {
    const wrapper = shallow(
      <List>
        <span>This</span>
        <span>Is</span>
        <span>A</span>
        <span>Test</span>
      </List>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render an unordered list', () => {
    const wrapper = shallow(
      <List type='unordered'>
        <span>This</span>
        <span>Is</span>
        <span>A</span>
        <span>Test</span>
      </List>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
