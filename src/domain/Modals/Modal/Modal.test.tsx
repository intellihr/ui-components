import React from 'react'
import { shallow } from 'enzyme'
import { Modal } from './Modal'

describe('<Modal />', () => {
  it('should render a hidden modal', () => {
    const wrapper = shallow(
      <Modal
        isOpen={false}
      >
        This text is hidden
      </Modal>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a shown modal with no close button', () => {
    const wrapper = shallow(
      <Modal
        isOpen={true}
        showCloseButton={false}
      >
        This text is shown
      </Modal>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
