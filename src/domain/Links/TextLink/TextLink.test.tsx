import { mount } from 'enzyme'
import React from 'react'

import { Anchor } from '../../Internals/Anchor'
import { TextLink } from './TextLink'

describe('<TextLink />', () => {
  it(`should render a text link`, () => {
    const wrapper = mount(
      <TextLink href='/lol'>
        Text link me
      </TextLink>
    )

    expect(wrapper.find(Anchor)).toBeTruthy()
    expect(wrapper.find(Anchor).contains('Text link me')).toBeTruthy()

  })

  it(`should render a text link button`, () => {
    const wrapper = mount(
      <TextLink type='button' >
        Text link me
      </TextLink>
    )

    expect(wrapper.find('button')).toBeTruthy()
    expect(wrapper.find('button').contains('Text link me')).toBeTruthy()
  })

  it(`should render a text link button with an onClick`, () => {
    const mockHandleClick = jest.fn()

    const wrapper = mount(
      <TextLink
        type='button'
        onClick={mockHandleClick}
      >
        Text link me
      </TextLink>
    )

    expect(wrapper.find('button')).toBeTruthy()
    expect(wrapper.find('button').contains('Text link me')).toBeTruthy()

    expect(mockHandleClick.mock.calls.length).toBe(0)
    wrapper.simulate('click')
    expect(mockHandleClick.mock.calls.length).toBe(1)
  })
})
