import React from 'react'
import { shallow } from 'enzyme'
import { DropdownMenu } from './DropdownMenu'

describe('<DropdownMenu />', () => {
  describe('Simple dropdown', () => {
    const clickEvent = jest.fn()

    const wrapper = shallow(
      <DropdownMenu
        toggleComponent={<button>test</button>}
        sections={[
          {
            text: 'Item 1',
            id: 'testing',
            onClick: clickEvent
          },
          {
            text: 'Item 2',
            id: 'testing2',
            href: 'https://www.intellihr.com.au'
          }
        ]}
      />
    )

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should call the appropriate callbacks', () => {
      wrapper.find('#testing').simulate('click')

      expect(clickEvent).toBeCalled()
    })
  })

  describe('Custom Components', () => {
    const wrapper = shallow(
      <DropdownMenu
        toggleComponent={<button>Custom</button>}
        sections={[
          {
            text: 'Item 1',
            id: 'testing1',
            href: 'test'
          },
          {
            text: 'Item 2',
            component: <div>asdf</div>,
            id: 'testing2',
            href: 'test'
          }
        ]}
      />
    )

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should contain a custom element', () => {
      expect(
        wrapper
          .find('li')
          .find('div')
          .filterWhere(element => element.text() === 'asdf')
          .exists()
      ).toBeTruthy()
    })
  })

  describe('Left and Right Components', () => {
    const clickEvent = jest.fn()

    const wrapper = shallow(
      <DropdownMenu
        toggleComponent={<button>Icons</button>}
        sections={[
          {
            leftComponent: <div >left</div>,
            rightComponent: <div >right</div>,
            text: 'Surrounded by components',
            id: 'testing1'
          }
        ]}
      />
    )

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should render the left and right components', () => {
      const parent = wrapper
        .find('span')
        .findWhere(element => element.html().includes('Surrounded by components'))

      expect(
        parent
          .find('span.left-component')
          .filterWhere(element => element.text() === 'left')
          .exists()
      ).toBeTruthy()

      expect(
        parent
          .find('span.right-component')
          .filterWhere(element => element.text() === 'right')
          .exists()
      ).toBeTruthy()
    })
  })
})
