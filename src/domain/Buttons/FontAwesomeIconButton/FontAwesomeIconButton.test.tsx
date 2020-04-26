import {mount, shallow} from 'enzyme'
import React from 'react'

import {IconButtonVariants} from './colors'
import {FontAwesomeIconButton} from './FontAwesomeIconButton'

describe('<FontAwesomeIconButton />', () => {
  it('should render an icon button', () => {
    const wrapper = mount(
      <FontAwesomeIconButton
        icon='check'
        type='duotone'
        tooltipText='tooltip text'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a selected icon button', () => {
    const wrapper = mount(
      <FontAwesomeIconButton
        icon='check'
        type='duotone'
        isSelected
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a variant icon button', () => {
    const wrapper = mount(
      <FontAwesomeIconButton
        icon='check'
        type='duotone'
        variant={IconButtonVariants.Red}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render an icon button with an onClick`, () => {
    const mockHandleClick = jest.fn()

    const wrapper = shallow(
      <FontAwesomeIconButton
        icon='check'
        type='duotone'
        onClick={mockHandleClick}
      />
    )
    expect(mockHandleClick.mock.calls.length).toBe(0)
    wrapper.simulate('click')
    expect(mockHandleClick.mock.calls.length).toBe(1)
  })
})
