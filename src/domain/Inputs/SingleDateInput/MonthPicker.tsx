import moment, { Moment } from 'moment'
import React, { useState } from 'react'

import { Variables } from '../../../common'
import { GridLayout } from '../../Layouts/GridLayout'
import { HorizontalAlignment, VerticalAlignment } from '../../Layouts/GridLayout/style'
import { Text } from '../../Typographies'

interface IMonthPickerProps {
  date?: Moment | null
  handleDateChange: (date: Moment | null) => void
  monthPickerView: 'text' | 'dropdown'
  setMonthPickerView: () => void
}

const monthPickerYears = () => {
  const years = []
  for (let i = moment().year() - 100; i <= moment().year() + 100; i++) {
    years.push(<option value={i}>{i}</option>)
  }
  return years
}

const MonthPicker = ({date, handleDateChange, setMonthPickerView, monthPickerView}: IMonthPickerProps) => {
  const value = date ?? moment()
  const selectYear = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = value.clone().set('year', parseInt(event.target.value, 10))
    handleDateChange(newValue)
  }
  const selectMonth = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = value.clone().set('month', parseInt(event.target.value, 10))
    handleDateChange(newValue)
  }

  if (monthPickerView === 'text') {
    return (
      <GridLayout
        horizontalAlignment={HorizontalAlignment.Center}
        verticalAlignment={VerticalAlignment.Middle}
        gutterMarginX={Variables.Spacing.sMedium}
      >
        <GridLayout.Cell size='shrink'>
          <Text margins={{top: Variables.Spacing.sMedium}} isInline={false}>
            <Text.Link onClick={setMonthPickerView}>
              Jump to...
            </Text.Link>
          </Text>
        </GridLayout.Cell>
      </GridLayout>
    )
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
    prevProps.handleDateChange === nextProps.handleDateChange &&
    prevProps.monthPickerView === nextProps.monthPickerView &&
    prevProps.setMonthPickerView === nextProps.setMonthPickerView
})

export {
  MemoMonthPicker as MonthPicker
}
