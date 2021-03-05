import {mount, shallow} from 'enzyme'
import React from 'react'

import {FontAwesomeIconButton} from './FontAwesomeIconButton'

describe('<FontAwesomeIconButton />', () => {
  it('should render an icon button', () => {
    const wrapper = mount(
      <FontAwesomeIconButton
        icon='check'
        type='solid'
        tooltipText='tooltip text'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a selected icon button', () => {
    const wrapper = mount(
      <FontAwesomeIconButton
        icon='check'
        type='solid'
        isSelected
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a variant icon button', () => {
    const wrapper = mount(
      <FontAwesomeIconButton
        icon='check'
        type='solid'
        variant={FontAwesomeIconButton.IconButtonVariants.Red}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render an icon button with an onClick`, () => {
    const mockHandleClick = jest.fn()

    const wrapper = shallow(
      <FontAwesomeIconButton
        icon='check'
        type='solid'
        onClick={mockHandleClick}
      />
    )
    expect(mockHandleClick.mock.calls.length).toBe(0)
    wrapper.simulate('click')
    expect(mockHandleClick.mock.calls.length).toBe(1)
  })

  it('should render a variant icon button size', () => {
    const wrapper = mount(
      <FontAwesomeIconButton
        size={FontAwesomeIconButton.Size.Large}
        icon='check'
        type='solid'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a variant icon button icon size', () => {
    const wrapper = mount(
      <FontAwesomeIconButton
        iconSize={FontAwesomeIconButton.IconSize.Large}
        size={FontAwesomeIconButton.Size.Medium}
        icon='check'
        type='solid'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a variant icon button with status dot', () => {
    const wrapper = mount(
      <FontAwesomeIconButton
        iconSize={FontAwesomeIconButton.IconSize.Large}
        size={FontAwesomeIconButton.Size.Medium}
        icon='check'
        type='solid'
        statusDotVariant={FontAwesomeIconButton.StatusDotVariants.Info}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
