import { shallow, mount } from 'enzyme'
import React from 'react'
import { HorizontalTabs } from './HorizontalTabs'

describe('<HorizontalTabs />', () => {
  const tabDefinitions = [
    {
      title: 'Tab 1',
      content: 'Some cool content'
    },
    {
      title: 'Tab 2',
      content: 'Some more cool content',
      anchorId: '#second'
    },
    {
      title: 'Tab 3',
      leftComponent: <div id='tab3left'>Test me</div>,
      content: <h2 id='tab3content'>BOO</h2>
    },
    {
      titleComponent: <div id='tab4'>Tab 4</div>,
      content: 'Last content'
    }
  ]

  describe('Standard tabs with default index', () => {
    const wrapper = shallow(
      <HorizontalTabs
        tabs={tabDefinitions}
        defaultTab={2}
      />
    )

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should render the correct title', () => {
      expect(
        wrapper
          .find('#tab3left')
          .contains('Test me')
      ).toBeTruthy()

      expect(wrapper.contains('Tab 3')).toBeTruthy()
    })

    it('should render the correct content', () => {
      expect(
        wrapper
          .find('#tab3content')
          .contains('BOO')
      ).toBeTruthy()
    })
  })

  describe('Standard tabs with default anchor', () => {
    const wrapper = shallow(
      <HorizontalTabs
        tabs={tabDefinitions}
        defaultTab='#second'
        useAnchors
      />
    )

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should render the tab anchor', () => {
      expect(wrapper.find({ 'href': '#second' }).exists()).toBeTruthy()
    })

    it('should render the correct content', () => {
      expect(wrapper.contains('Some more cool content')).toBeTruthy()
    })
  })

  describe('Clicking a tab', () => {
    const wrapper = mount(
      <HorizontalTabs
        tabs={tabDefinitions}
      />
    )

    const tabAnchor = wrapper.find({'data-tabindex': 1}).at(0)

    tabAnchor.simulate('click')

    it('should render the correct content', () => {
      expect(wrapper.contains('Some more cool content')).toBeTruthy()
    })
  })

  describe('Clicking a tab with a callback function', () => {
    const callbackMock = jest.fn()
    const callbackNotCalledMock = jest.fn()

    const wrapper = mount(
      <HorizontalTabs
        tabs={[
          {
            title: 'Tab 1',
            content: 'Some cool content'
          },
          {
            title: 'Tab 2',
            content: 'Some more cool content',
            anchorId: '#second',
            callback: callbackMock
          },
          {
            title: 'Tab 3',
            content: 'Some other content',
            anchorId: '#third',
            callback: callbackNotCalledMock
          }
        ]}
      />
    )

    const tabAnchor = wrapper.find({'data-tabindex': 1}).at(0)

    tabAnchor.simulate('click')

    it('should render the correct content', () => {
      expect(wrapper.contains('Some more cool content')).toBeTruthy()
    })

    it('should call the callback function on the tab opened', () => {
      expect(callbackMock).toBeCalled()
    })

    it('should not call the callback function on tab not opened', () => {
      expect(callbackNotCalledMock).not.toHaveBeenCalled()
    })
  })
})
