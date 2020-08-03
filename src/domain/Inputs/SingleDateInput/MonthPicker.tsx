import moment, { Moment } from 'moment'
import React from 'react'

import { Variables } from '../../../common'
import { GridLayout } from '../../Layouts/GridLayout'
import { HorizontalAlignment } from '../../Layouts/GridLayout/style'

const monthPickerYears = () => {
  const years = []
  for (let i = moment().year() - 100; i <= moment().year() + 100; i++) {
    years.push(<option value={i}>{i}</option>)
  }
  return years
}

const MonthPicker = ({date, handleDateChange}: {date?: Moment | null, handleDateChange: (date: Moment | null) => void}) => {
  const value = date ?? moment()
  const selectYear = (event: React.ChangeEvent<HTMLSelectElement>) => {
    value.set('year', parseInt(event.target.value, 10))
    handleDateChange(value)
  }
  const selectMonth = (event: React.ChangeEvent<HTMLSelectElement>) => {
    value.set('month', parseInt(event.target.value, 10))
    handleDateChange(value)
  }

  return (
    <GridLayout
      horizontalAlignment={HorizontalAlignment.Center}
      gutterMarginX={Variables.Spacing.sMedium}
    >
      <GridLayout.Cell size='shrink'>
        <select
          className='MonthPicker_input'
          value={value.month()}
          onChange={selectMonth}
        >
          {moment.months().map((label, monthNumber) => (
            <option value={monthNumber}>{label}</option>
          ))}
        </select>
      </GridLayout.Cell>
      <GridLayout.Cell size='shrink'>
        <select
          className='MonthPicker_input'
          value={value.year()}
          onChange={selectYear}
        >
          {monthPickerYears()}
        </select>
      </GridLayout.Cell>
    </GridLayout>
  )
}

const MemoMonthPicker = React.memo(MonthPicker, (prevProps, nextProps) => {
  return prevProps.date === nextProps.date &&
    prevProps.handleDateChange === nextProps.handleDateChange
})

export {
  MemoMonthPicker as MonthPicker
}
