import { shallow, mount } from 'enzyme'
import React from 'react'
import { BlockTabGroup } from './BlockTabGroup'

describe('<BlockTabGroup />', () => {
  const tabDefinitions = [
    {
      title: 'Tab 1'
    },
    {
      title: 'Tab 2',
      anchorId: '#second'
    },
    {
      title: 'Tab 3',
      anchorId: '#third'
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
          .find({ href: '#second' })
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
      const tabAnchor = wrapper.find({'data-tabindex': 2}).at(0)

      tabAnchor.simulate('click')

      expect(onTabChange).toBeCalledWith(tabDefinitions[2], 2)
    })

    it('should not call the callback if the same tab is clicked', () => {
      const tabAnchor = wrapper.find({'data-tabindex': 1}).at(0)

      tabAnchor.simulate('click')

      expect(onTabChange).not.toBeCalledWith(tabDefinitions[1], 1)
    })
  })
})
