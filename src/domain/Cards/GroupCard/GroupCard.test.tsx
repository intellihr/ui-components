import { mount } from 'enzyme'
import React from 'react'

import { DropdownMenu } from '../../Popovers/DropdownMenu'
import { StyledGroupMainCard } from './style'
import { BodyCard, GroupCard } from './GroupCard'

describe('<GroupCard />', () => {
  it('should render a group card with body contents and their dropdown menus', () => {
    const toggleFunction = jest.fn()

    const wrapper = mount(
      <GroupCard
        isExpanded={false}
        onCardToggle={toggleFunction}
        headingContent={<div>headingContent</div>}
        bodyContents={[
          {
            mainContent: <div>mainContent1</div>,
            extraContent: <div>extraContent1</div>,
            dropdownSections: [
                {
                  text: 'action1',
                  href: 'https://www.google.com.au'
                },
                {
                  text: 'action2',
                  href: 'https://www.google.com.au'
                }
              ]
          },
          {
            mainContent: <div>mainContent2</div>,
            extraContent: <div>extraContent2</div>
          }
        ]}
      />
    )

    expect(wrapper.contains('headingContent')).toBeTruthy()

    expect(wrapper.find(BodyCard).length).toEqual(2)
    expect(wrapper.find(DropdownMenu).length).toEqual(1)

    expect(wrapper.find(BodyCard).contains('mainContent1')).toBeTruthy()
    expect(wrapper.find(BodyCard).contains('extraContent1')).toBeTruthy()
    expect(wrapper.find(BodyCard).contains('mainContent2')).toBeTruthy()
    expect(wrapper.find(BodyCard).contains('mainContent2')).toBeTruthy()

    wrapper.find(StyledGroupMainCard).simulate('click')
    expect(toggleFunction).toHaveBeenCalled()
  })

  it('should render a group card without body contents', () => {
    const wrapper = mount(
      <GroupCard
        isExpanded={false}
        onCardToggle={jest.fn()}
        headingContent={<div>headingContent</div>}
      />
    )

    expect(wrapper.contains('headingContent')).toBeTruthy()

    expect(wrapper.find(BodyCard).length).toEqual(0)
  })

  it('should render a group card with a href', () => {
    const toggleFunction = jest.fn()

    const wrapper = mount(
      <GroupCard
        isExpanded={false}
        onCardToggle={toggleFunction}
        headingContent={<div>headingContent</div>}
        href='#'
      />
    )

    expect(wrapper.contains('headingContent')).toBeTruthy()

    expect(wrapper.find('a').length).toEqual(1)

    wrapper.find(StyledGroupMainCard).simulate('click')
    expect(toggleFunction).not.toHaveBeenCalled()
  })

  it('should render a group card with a handleClick function', () => {
    const toggleFunction = jest.fn()
    const clickFunction = jest.fn()

    const wrapper = mount(
      <GroupCard
        isExpanded={false}
        onCardToggle={toggleFunction}
        headingContent={<div>headingContent</div>}
        handleClick={clickFunction}
      />
    )

    expect(wrapper.contains('headingContent')).toBeTruthy()

    expect(wrapper.find('a').length).toEqual(0)

    wrapper.find(StyledGroupMainCard).simulate('click')
    expect(clickFunction).toHaveBeenCalled()
    expect(toggleFunction).not.toHaveBeenCalled()
  })
})
