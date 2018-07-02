import { shallow } from 'enzyme'
import React from 'react'
import { HorizontalTabs } from './HorizontalTabs'

describe('<HorizontalTabs />', () => {
  describe('Standard tabs with default index', () => {
    const wrapper = shallow(
      <HorizontalTabs
        tabs={[
          {
            title: 'Tab 1',
            content: 'Some cool content'
          },
          {
            title: 'Tab 2',
            content: 'Some more cool content'
          },
          {
            title: 'Tab 3',
            leftComponent: <div>Test me</div>,
            content: <h2>BOO</h2>
          },
          {
            titleComponent: <div>Tab 4</div>,
            content: 'Last content'
          }
        ]}
        defaultTab={2}
      />
    )

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()

    })

  })
})
