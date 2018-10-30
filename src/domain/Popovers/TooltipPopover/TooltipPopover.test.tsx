import React from 'react'
import { shallow } from 'enzyme'
import { TooltipPopover, ITooltipPopoverToggleComponentProps } from './TooltipPopover'

describe('<TooltipPopover />', () => {
  describe('Simple popover behaviour', () => {
    const wrapper = shallow(
      <TooltipPopover>
        Simple Popover
      </TooltipPopover>
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

  describe('Render a popover using a custom trigger', () => {
    const triggerComponent = ({ openMenu, closeMenu, toggleComponentRef, ariaProps }: ITooltipPopoverToggleComponentProps) =>
      <span
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
        ref={toggleComponentRef}
        {...ariaProps}
      >
        Custom trigger component
      </span>

    const wrapper = shallow(
      <TooltipPopover
        toggleComponent={triggerComponent}
      >
        Triggered Customly
      </TooltipPopover>
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
