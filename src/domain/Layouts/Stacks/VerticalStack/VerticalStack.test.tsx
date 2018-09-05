import { mount } from 'enzyme'
import React from 'react'

import { VerticalStack } from './VerticalStack'

describe('<Vertical Stack />', () => {
  it('should render a vertical stack', () => {
    const wrapper = mount(
      <VerticalStack>
        <div>1</div>
        <div>3</div>
        <div>2</div>
      </VerticalStack>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a vertical stack with a custom padding', () => {
    const wrapper = mount(
      <VerticalStack
        mobilePadding={30}
        desktopPadding={60}
      >
        <div>1</div>
        <div>3</div>
        <div>2</div>
      </VerticalStack>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a vertical stack with one item', () => {
    const wrapper = mount(
      <VerticalStack>
        <div>1</div>
      </VerticalStack>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a vertical stack with no items', () => {
    const wrapper = mount(
      <VerticalStack />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
