import { shallow, mount } from 'enzyme'
import React from 'react'
import { HorizontalTabGroup } from './HorizontalTabGroup'

describe('<HorizontalTabGroup />', () => {
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
      leftComponent: <div id='tab3left'>Test me</div>,
      anchorId: '#third'
    },
    {
      titleComponent: <div id='tab4'>Tab 4</div>
    }
  ]

  describe('Standard tabs with current index', () => {
    const wrapper = shallow(
      <HorizontalTabGroup
        tabs={tabDefinitions}
        currentTab={1}
      />
    )

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should render the left component', () => {
      expect(
        wrapper
          .find('#tab3left')
          .contains('Test me')
      ).toBeTruthy()

      expect(wrapper.contains('Tab 3')).toBeTruthy()
    })

    it('should select the correct tab', () => {
      expect(
        wrapper
          .find({ href: '#second' })
          .prop('active')
      ).toBeTruthy()
    })
  })

  describe('Clicking tabs', () => {
    const onTabChange = jest.fn()

    const wrapper = mount(
      <HorizontalTabGroup
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

  describe('Scrolling', () => {
    const onScrollUpdate = jest.fn()
    const wrapper = mount(
      <HorizontalTabGroup
        tabs={tabDefinitions}
        currentTab={1}
        onScrollUpdate={onScrollUpdate}
      />
    )

    afterEach(() => jest.restoreAllMocks())

    it('should scroll the tabs when current tab changes', async () => {
      const instance = wrapper.instance() as HorizontalTabGroup

      // hack to simulate the props updating (can't await on wrapper.setProps)
      await instance.componentDidUpdate({
        ...wrapper.props(),
        currentTab: 2
      })

      expect(onScrollUpdate).toBeCalled()
    })

    it('should scroll left', async () => {
      const instance = wrapper.instance() as HorizontalTabGroup
      await instance.scrollLeft()

      expect(onScrollUpdate).toBeCalled()
    })

    it('should scroll right', async () => {
      const instance = wrapper.instance() as HorizontalTabGroup
      await instance.scrollRight()

      expect(onScrollUpdate).toBeCalled()
    })
  })
})
