import React from 'react'
import { shallow } from 'enzyme'
import { TimeInput } from './TimeInput'

const dummyClick = () => console.log('hey')

describe('<TimeInput />', () => {
  it('should render the 24 hour Time Input', () => {
    const wrapper = shallow(
      <TimeInput
        value='15:55'
        handleChange={dummyClick}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render the am / pm Time Input', () => {
    const wrapper = shallow(
      <TimeInput
        isTimeRange
        value='15:55'
        handleChange={dummyClick}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
