import { shallow } from 'enzyme'
import React from 'react'
import { SingleDateInput } from './SingleDateInput'

describe('<SingleDateInput />', () => {
  it('should render a single date input', () => {
    const wrapper = shallow(
      <SingleDateInput
        name='test-date-input'
        dateFormat='DD/MM/YYYY'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a disabled single date input', () => {
    const wrapper = shallow(
      <SingleDateInput
        isDisabled
        name='test-date-input'
        dateFormat='DD/MM/YYYY'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render an invalid single date input', () => {
    const wrapper = shallow(
      <SingleDateInput
        isInvalid
        name='test-date-input'
        dateFormat='DD/MM/YYYY'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
