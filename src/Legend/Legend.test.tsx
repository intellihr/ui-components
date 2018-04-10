import { mount } from 'enzyme'
import React from 'react'

import { Legend } from '../Legend'

describe('<Legend />', () => {
  it(`should render a legend`, () => {
    const wrapper = mount(
      <Legend
        datasets={[
          {
            colour: 'rgb(0,255,0)',
            label: 'I am the green dataset'
          },
          {
            colour: 'rgb(0,0,255)',
            label: 'I am BLUE!'
          }
        ]}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render null if there is no data provided`, () => {
    const wrapper = mount(
      <Legend
        datasets={[]}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
