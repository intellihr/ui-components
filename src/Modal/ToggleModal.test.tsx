import React from 'react'
import { shallow, mount } from 'enzyme'
import { ToggleModal } from './ToggleModal'
import { Button } from '../Button'

describe('<Modal />', () => {
  it('should render a modal with a button', () => {
    const wrapper = shallow(
      <ToggleModal
        trigger={({toggle}) => (
          <Button
            type='primary'
            onClick={toggle}
          >
            Click Me
          </Button>
        )}
      >
        Hello this is a Modal
      </ToggleModal>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should open a modal after click', () => {
    const wrapper = mount(
      <ToggleModal
        trigger={({toggle}) => (
          <Button
            type='primary'
            onClick={toggle}
          >
            Click Me
          </Button>
        )}
      >
        Hello this is a Modal
      </ToggleModal>
    )

    wrapper.find('button').simulate('click')

    expect(wrapper).toMatchSnapshot()
  })
})
