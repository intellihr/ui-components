import { shallow } from 'enzyme'
import React from 'react'

import { DropdownMenu } from './DropdownMenu'

describe('<DropdownMenu />', () => {
  describe('Simple dropdown behaviour', () => {
    const wrapper = shallow(
      <DropdownMenu
        sections={[
          {
            text: 'Item 1'
          },
          {
            text: 'Item 2',
            href: 'https://www.intellihr.com.au'
          }
        ]}
      />
    )

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should open the menu', () => {
      // @ts-ignore TS2339
      wrapper.instance().openMenu()

      expect(
        wrapper
          .update()
          .find('Popover')
          .prop('isOpen')
      ).toBeTruthy()
    })
  })

  describe('Render a dropdown with secondary text', () => {
    const wrapper = shallow(
      <DropdownMenu
        sections={[
          {
            text: 'Section with Secondary Text',
            secondaryText: 'add a secondary text'
          }
        ]}
      />
    )

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should open the menu', () => {
      // @ts-ignore TS2339
      wrapper.instance().openMenu()

      expect(
        wrapper
          .update()
          .find('Popover')
          .prop('isOpen')
      ).toBeTruthy()
    })
  })

  describe('Render a dropdown with icon', () => {
    const wrapper = shallow(
      <DropdownMenu
        sections={[
          {
            text: 'Section with icon',
            iconProps: {
              icon: 'sticky-note',
              iconType: 'solid'
            }
          }
        ]}
      />
    )

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should open the menu', () => {
      // @ts-ignore TS2339
      wrapper.instance().openMenu()

      expect(
        wrapper
          .update()
          .find('Popover')
          .prop('isOpen')
      ).toBeTruthy()
    })
  })

  describe('Render a dropdown with tooltip', () => {
    const wrapper = shallow(
      <DropdownMenu
        sections={[
          {
            text: 'Item 1',
            tooltipMessage: 'I am a tooltip for item 1'
          },
          {
            text: 'Item 2',
            href: 'https://www.intellihr.com.au',
            tooltipMessage: 'I am a tooltip for item 2',
            tooltipProps: { width: 300 }
          }
        ]}
      />
    )

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should open the menu', () => {
      // @ts-ignore TS2339
      wrapper.instance().openMenu()

      expect(
        wrapper
          .update()
          .find('Popover')
          .prop('isOpen')
      ).toBeTruthy()
    })
  })

  describe('Render a dropdown using custom content', () => {
    const wrapper = shallow(
      <DropdownMenu>
        {() =>
          <>
            I am custom dropdown content!!
          </>
        }
      </DropdownMenu>
    )

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should open the menu', () => {
      // @ts-ignore TS2339
      wrapper.instance().openMenu()

      expect(
        wrapper
          .update()
          .find('Popover')
          .prop('isOpen')
      ).toBeTruthy()
    })
  })
})
