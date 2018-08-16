import { shallow } from 'enzyme'
import React from 'react'

import { Toast } from './Toast'

describe('<Toast />', () => {
  const closeHandler = () => { console.log('Closing this toast.') }

  it(`should render a toast of a default type, which is success`, () => {
    const wrapper = shallow(
      <Toast
        handleClose={closeHandler}
      >
        Yo ... whaazzzaaaap!!!
      </Toast>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render an alert toast`, () => {
    const wrapper = shallow(
      <Toast
        type='alert'
        handleClose={closeHandler}
      >
        Surprise @#$%^&*!!!
      </Toast>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should call the onMount function if given one`, () => {
    const mockOnMountFn = jest.fn()

    const wrapper = shallow(
      <Toast
        type='alert'
        onMount={mockOnMountFn}
        handleClose={closeHandler}
      >
        Yahallo!
      </Toast>
    )

    expect(mockOnMountFn.mock.calls.length).toBe(1)
    expect(wrapper).toMatchSnapshot()
  })
})
