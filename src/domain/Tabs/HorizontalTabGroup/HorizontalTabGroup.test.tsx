import { shallow, mount } from 'enzyme'
import React from 'react'
import { IHorizontalTabDefinition, HorizontalTabGroup } from './HorizontalTabGroup'

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
})
