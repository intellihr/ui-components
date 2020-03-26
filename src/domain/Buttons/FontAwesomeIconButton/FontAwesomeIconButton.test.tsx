import { mount } from 'enzyme'
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
      >
        test
      </FontAwesomeIconButton>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a selected icon button', () => {
    const wrapper = mount(
      <FontAwesomeIconButton
        icon='check'
        type='duotone'
        isSelected
      >
        test
      </FontAwesomeIconButton>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a variant icon button', () => {
    const wrapper = mount(
      <FontAwesomeIconButton
        icon='check'
        type='duotone'
        variant={IconButtonVariants.RED}
      >
        test
      </FontAwesomeIconButton>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
