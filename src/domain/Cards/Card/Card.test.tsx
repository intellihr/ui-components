import { mount } from 'enzyme'
import React from 'react'

import { DropdownMenu } from '../../Popovers/DropdownMenu'
import { StyledCardHeader } from './style'
import { Card } from './Card'

describe('<Card />', () => {
  it('should render a card with main content, extra content, and a dropdown menu', () => {
    const toggleFunction = jest.fn()

    const wrapper = mount(
      <Card
        mainContent={<div>mainContent</div>}
        extraContent={<div>extraContent</div>}
        onCardToggle={toggleFunction}
        isExpanded={false}
        dropdownSections={[
          {
            text: 'action1',
            href: 'https://www.google.com.au'
          },
          {
            text: 'action2',
            href: 'https://www.google.com.au'
          }
        ]}
      />
    )

    expect(wrapper.contains('mainContent')).toBeTruthy()
    expect(wrapper.contains('extraContent')).toBeTruthy()

    expect(wrapper.find(DropdownMenu).length).toEqual(1)

    wrapper.find(StyledCardHeader).simulate('click')
    expect(toggleFunction).toHaveBeenCalled()
  })

  it('should render a card with only main content', () => {
    const wrapper = mount(
      <Card
        mainContent={<div>mainContent</div>}
        onCardToggle={jest.fn()}
        isExpanded={false}
      />
    )

    expect(wrapper.contains('mainContent')).toBeTruthy()

    expect(wrapper.find(DropdownMenu).length).toEqual(0)
  })

  it('should render a card with a href', () => {
    const toggleFunction = jest.fn()

    const wrapper = mount(
      <Card
        mainContent={<div>mainContent</div>}
        extraContent={<div>extraContent</div>}
        onCardToggle={toggleFunction}
        isExpanded={false}
        href='#'
      />
    )

    expect(wrapper.contains('mainContent')).toBeTruthy()
    expect(wrapper.contains('extraContent')).toBeTruthy()

    expect(wrapper.find('a').length).toEqual(1)

    wrapper.find(StyledCardHeader).simulate('click')
    expect(toggleFunction).not.toHaveBeenCalled()
  })

  it('should render a card with a handleClick function', () => {
    const toggleFunction = jest.fn()
    const clickFunction = jest.fn()

    const wrapper = mount(
      <Card
        mainContent={<div>mainContent</div>}
        extraContent={<div>extraContent</div>}
        onCardToggle={toggleFunction}
        isExpanded={false}
        handleClick={clickFunction}
      />
    )

    expect(wrapper.contains('mainContent')).toBeTruthy()
    expect(wrapper.contains('extraContent')).toBeTruthy()

    expect(wrapper.find('a').length).toEqual(0)

    wrapper.find(StyledCardHeader).simulate('click')
    expect(clickFunction).toHaveBeenCalled()
    expect(toggleFunction).not.toHaveBeenCalled()
  })
})
