import { shallow } from 'enzyme'
import moment, { Moment } from 'moment'
import React from 'react'

import { DateRangeInput } from './DateRangeInput'

const dummyClick = (dates: {startDate: Moment | null, endDate: Moment | null}) => console.log(dates)

describe('<DateRangeInput />', () => {
  it('should render a date range input', () => {
    const wrapper = shallow(
      <DateRangeInput
        name='test-date-picker1'
        startDate={moment('2018-12-31T14:00:00+00:00')}
        endDate={moment('2019-12-31T14:00:00+00:00')}
        startDatePlaceholder='Start Date'
        endDatePlaceholder='End Date'
        onChange={dummyClick}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a date range input with date format', () => {
    const wrapper = shallow(
      <DateRangeInput
        name='test-date-picker1'
        startDate={moment('2018-12-31T14:00:00+00:00')}
        endDate={moment('2019-12-31T14:00:00+00:00')}
        startDatePlaceholder='Start Date'
        endDatePlaceholder='End Date'
        dateFormat='DD MMM YYYY'
        onChange={dummyClick}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a date range input with disable date choices', () => {
    const handleDisabledDateRange = (day: Moment) => day.isBefore(moment('2018-12-31T14:00:00+00:00'))

    const wrapper = shallow(
      <DateRangeInput
        name='test-date-picker1'
        startDate={moment('2018-12-31T14:00:00+00:00')}
        endDate={moment('2019-12-31T14:00:00+00:00')}
        startDatePlaceholder='Start Date'
        endDatePlaceholder='End Date'
        onChange={dummyClick}
        isDisabledForDate={handleDisabledDateRange}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a disabled date range input', () => {
    const wrapper = shallow(
      <DateRangeInput
        name='test-date-picker1'
        startDate={moment('2018-12-31T14:00:00+00:00')}
        endDate={moment('2019-12-31T14:00:00+00:00')}
        startDatePlaceholder='Start Date'
        endDatePlaceholder='End Date'
        isDisabled
        onChange={dummyClick}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render an invalid date range input', () => {
    const wrapper = shallow(
      <DateRangeInput
        name='test-date-picker1'
        startDate={moment('2018-12-31T14:00:00+00:00')}
        endDate={moment('2019-12-31T14:00:00+00:00')}
        startDatePlaceholder='Start Date'
        endDatePlaceholder='End Date'
        isInvalid
        onChange={dummyClick}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a mobile date range input', () => {
    const wrapper = shallow(
      <DateRangeInput
        name='test-date-picker1'
        startDate={moment('2018-12-31T14:00:00+00:00')}
        endDate={moment('2019-12-31T14:00:00+00:00')}
        startDatePlaceholder='Start Date'
        endDatePlaceholder='End Date'
        isMobile
        onChange={dummyClick}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
