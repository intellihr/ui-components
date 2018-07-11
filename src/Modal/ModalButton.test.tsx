import React from 'react'
import { shallow, mount } from 'enzyme'
import { ModalButton } from './ModalButton'

describe('<Modal />', () => {
  it(`should render a modal button`, () => {
    const wrapper = shallow(
      <ModalButton
        buttonContent='Click Me'
      >
        Hello this is a Modal
      </ModalButton>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should open a modal after click`, () => {
    const wrapper = mount(
      <ModalButton
        buttonContent='Click Me'
      >
        Hello this is a Modal
      </ModalButton>
    )

    wrapper.find('button').simulate('click')

    expect(wrapper).toMatchSnapshot()
  })
})
