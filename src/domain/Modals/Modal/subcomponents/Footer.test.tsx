import React from 'react'
import { mount } from 'enzyme'
import { Footer } from './Footer'

describe('<Footer />', () => {
  it('should render modal footer', () => {
    const wrapper = mount(
      <Footer
        leftControls={
          <>
            Left Controls
          </>
        }
        rightControls={
          <>
            Right Controls
          </>
        }
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
