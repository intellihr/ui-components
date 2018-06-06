import { shallow } from 'enzyme'
import React from 'react'

import { Spinner } from './Spinner'

describe('<Spinner />', () => {
  it(`should render a spinner`, () => {
    const wrapper = shallow(
      <Spinner
        size={50}
        position='center'
        color='red'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a fading circle spinner`, () => {
    const wrapper = shallow(
      <Spinner
        type='fading-circle'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
