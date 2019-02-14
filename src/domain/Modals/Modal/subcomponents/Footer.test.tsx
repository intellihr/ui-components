import { mount } from 'enzyme'
import React from 'react'

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
