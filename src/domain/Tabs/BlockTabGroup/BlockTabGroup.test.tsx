import { mount, shallow } from 'enzyme'
import React from 'react'

import { BlockTabGroup } from './BlockTabGroup'

describe('<BlockTabGroup />', () => {
  const tabDefinitions = [
    {
      title: 'Tab 1'
    },
    {
      title: 'Tab 2'
    },
    {
      title: 'Tab 3'
    }
  ]

  describe('Standard tabs with current index', () => {
    const wrapper = shallow(
      <BlockTabGroup
        tabs={tabDefinitions}
        currentTab={1}
      />
    )

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should select the correct tab', () => {
      expect(
        wrapper
          .find('active')
      ).toBeTruthy()
    })
  })

  describe('Clicking tabs', () => {
    const onTabChange = jest.fn()

    const wrapper = mount(
      <BlockTabGroup
        tabs={tabDefinitions}
        currentTab={1}
        onTabChange={onTabChange}
      />
    )

    it('should call the callback', () => {
      const tabButton = wrapper.find({'data-tabindex': 2}).at(0)

      tabButton.simulate('click')

      expect(onTabChange).toBeCalledWith(tabDefinitions[2], 2)
    })

    it('should not call the callback if the same tab is clicked', () => {
      const tabButton = wrapper.find({'data-tabindex': 1}).at(0)

      tabButton.simulate('click')

      expect(onTabChange).not.toBeCalledWith(tabDefinitions[1], 1)
    })
  })
})
