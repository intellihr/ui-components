import { shallow } from 'enzyme'
import moment, { Moment } from 'moment'
import React from 'react'

import { SingleDateInput } from './SingleDateInput'

describe('<SingleDateInput />', () => {
  it('should render a single date input', () => {
    const wrapper = shallow(
      <SingleDateInput
        value={moment('2018-12-31T14:00:00+00:00')}
        handleChange={jest.fn()}
        name='test-date-input'
        dateFormat='DD/MM/YYYY'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a single date input with onChange', () => {
    const wrapper = shallow(
      <SingleDateInput
        value={moment('2018-12-31T14:00:00+00:00')}
        onChange={jest.fn()}
        name='test-date-input'
        dateFormat='DD/MM/YYYY'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a single date input with disable date choices', () => {
    const handleDisabledDateRange = (day: Moment) => day.isAfter(moment('2018-12-31T14:00:00+00:00'))

    const wrapper = shallow(
      <SingleDateInput
        value={moment('2018-12-31T14:00:00+00:00')}
        handleChange={jest.fn()}
        name='test-date-input'
        dateFormat='DD/MM/YYYY'
        isDisabledForDate={handleDisabledDateRange}

      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a disabled single date input', () => {
    const wrapper = shallow(
      <SingleDateInput
        isDisabled
        value={moment('2018-12-31T14:00:00+00:00')}
        handleChange={jest.fn()}
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
        value={moment('2018-12-31T14:00:00+00:00')}
        handleChange={jest.fn()}
        name='test-date-input'
        dateFormat='DD/MM/YYYY'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
