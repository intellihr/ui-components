import { mount, shallow } from 'enzyme'
import React from 'react'

import { Button } from '../../Buttons'
import { ToggleModal } from './ToggleModal'

describe('<ToggleModal />', () => {
  const trigger = ({toggle}: any) => (
    <Button
      type='primary'
      onClick={toggle}
    >
      Click Me
    </Button>
  )

  it('should render a modal with a button', () => {
    const wrapper = shallow(
      <ToggleModal
        trigger={trigger}
      >
        Hello this is a Modal
      </ToggleModal>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should open a modal after click', () => {
    const wrapper = mount(
      <ToggleModal
        trigger={trigger}
      >
        <div>hello this is a modal</div>
      </ToggleModal>
    )

    wrapper.find('button').simulate('click')

    expect(wrapper.find('div[children="hello this is a modal"]').exists()).toBeTruthy()
  })
})
