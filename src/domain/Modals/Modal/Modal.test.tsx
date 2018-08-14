import React from 'react'
import { shallow } from 'enzyme'
import { Modal } from './Modal'

class MockedModal extends Modal {
  get baseZIndex (): number {
    return 1000
  }
}

describe('<MockedModal />', () => {
  it('should render a hidden modal', () => {
    const wrapper = shallow(
      <MockedModal
        isOpen={false}
      >
        This text is hidden
      </MockedModal>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a shown modal with no close button', () => {
    const wrapper = shallow(
      <MockedModal
        isOpen={true}
        showCloseButton={false}
      >
        This text is shown
      </MockedModal>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
