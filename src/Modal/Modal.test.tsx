import React from 'react'
import { shallow, mount } from 'enzyme'
import { Modal } from './Modal'

describe('<Modal />', () => {
  it('should render a hidden modal', () => {
    const wrapper = mount(
      <Modal
        isOpen={false}
        handleClose={() => {}}
      >
        This text is hidden
      </Modal>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a shown modal with no close button', () => {
    const wrapper = shallow(
      <Modal
        isOpen
        handleClose={() => {}}
        showCloseButton={false}
      >
        This text is shown
      </Modal>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
