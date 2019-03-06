import { mount, shallow } from 'enzyme'
import React from 'react'

import { TextLink } from './TextLink'

describe('<TextLink />', () => {
  it(`should render a text link`, () => {
    const wrapper = mount(
      <TextLink href='/lol'>
        Text link me
      </TextLink>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a text link button`, () => {
    const wrapper = mount(
      <TextLink type='button' >
        Text link me
      </TextLink>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a text link button with an onClick`, () => {
    const mockHandleClick = jest.fn()

    const wrapper = shallow(
      <TextLink
        type='button'
        onClick={mockHandleClick}
      >
        Text link me
      </TextLink>
    )
    expect(mockHandleClick.mock.calls.length).toBe(0)
    wrapper.simulate('click')
    expect(mockHandleClick.mock.calls.length).toBe(1)
  })

  it('should render a text link with display block', () => {
    const wrapper = mount(
      <TextLink
        href='#'
        isInline={false}
      >
        Block text link
      </TextLink>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a text link with underline on hover', () => {
    const wrapper = mount(
      <TextLink
        href='#'
        underlineOnHover
      >
        Underline text link on hover
      </TextLink>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
