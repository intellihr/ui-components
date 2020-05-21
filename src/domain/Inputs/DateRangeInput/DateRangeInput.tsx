import classNames from 'classnames'
import moment, { Moment } from 'moment'
import React from 'react'
import { DateRangePicker, FocusedInputShape } from 'react-dates'
import 'react-dates/initialize'

import { Variables } from '../../../common'
import { FontAwesomeIcon } from '../../Icons/FontAwesomeIcon'
import { Text } from '../../Typographies/Text'

import style from './style.scss'

interface IDateRangeInputProps {
  /** Name of the HTML input */
  name: string
  /** Value of the input */
  value?: { startDate: Moment | null, endDate: Moment | null }
  /** Start Date of the input */
  startDate?: Moment | null
  /** End Date of the input */
  endDate?: Moment | null
  /** Placeholder of the start Date */
  startDatePlaceholder?: string
  /** Placeholder of the end Date */
  endDatePlaceholder?: string
  /** Moment format to display the date in */
  dateFormat: string
  /** If true, adds invalid styles to the input */
  isInvalid?: boolean
  /** If true, adds disabled attribute to the input */
  isDisabled?: boolean
  /** Applies recommended settings for mobile and tablet viewports */
  isMobile?: boolean
  /** Called when the input is changed */
  onChange?: (dates: { startDate: Moment | null, endDate: Moment | null }) => void
  /** Disable for the calender (Return true for disabled date) */
  isDisabledForDate?: (day: Moment) => boolean
}

interface IDateRangeInputState {
  focusedInput: FocusedInputShape | null
}

class DateRangeInput extends React.PureComponent<IDateRangeInputProps, IDateRangeInputState> {
  public static defaultProps = {
    dateFormat: 'DD/MM/YYYY',
    isInvalid: false,
    isDisabled: false,
    isMobile: false
  }

  public state: IDateRangeInputState = {
    focusedInput: null
  }

  public render (): JSX.Element {
    const {
      name,
      value,
      isDisabled,
      isMobile,
      startDate,
      endDate,
      startDatePlaceholder,
      endDatePlaceholder,
      dateFormat,
      isDisabledForDate
    } = this.props

    return (
      <div
        className={this.classNames}
      >
        <DateRangePicker
          block
          startDateId={`${name}-start`}
          startDate={value ? value.startDate : (startDate ? startDate : null)}
          endDateId={`${name}-end`}
          endDate={value ? value.endDate : (endDate ? endDate : null)}
          startDatePlaceholderText={startDatePlaceholder || dateFormat}
          endDatePlaceholderText={endDatePlaceholder || dateFormat}
          displayFormat={dateFormat}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.focusedInput}
          onFocusChange={this.onFocusChange}
          disabled={isDisabled}
          numberOfMonths={isMobile ? 1 : 2}
          showClearDates
          customArrowIcon={<Text color={Variables.Color.n600} weight={Variables.FontWeight.fwSemiBold}>→</Text>}
          customCloseIcon={<span>×</span>}
          isOutsideRange={isDisabledForDate ? isDisabledForDate : this.handleDisabledDateRange}
          hideKeyboardShortcutsPanel
          renderMonthText={this.renderMonthText}
          navPrev={(
            <div className={this.navigationButtonClassNames('left')}>
              <FontAwesomeIcon type='solid' icon='arrow-left' />
            </div>
          )}
          navNext={(
            <div className={this.navigationButtonClassNames('right')}>
              <FontAwesomeIcon type='solid' icon='arrow-right' />
            </div>
          )}
        />
      </div>
    )
  }

  get classNames (): string {
    const {
      isInvalid
    } = this.props

    return classNames(
      style.dateRangePickerOverrides,
      {
        'is-invalid-input': isInvalid
      }
    )
  }

  private onFocusChange = (focusedInput: FocusedInputShape | null) => {
    this.setState({ focusedInput })
  }

  private onDatesChange = (dates: { startDate: Moment | null, endDate: Moment | null }) => {
    const {
      onChange
    } = this.props

    if (onChange) {
      onChange(dates)
    }
  }

  private handleDisabledDateRange = () => false

  private renderMonthText = (day: Moment) => moment(day).format('MMM YYYY')

  private navigationButtonClassNames = (side: 'left' | 'right') => {
    return classNames(
      'DayPickerNavigation_button__default',
      'DayPickerNavigation_button__horizontalDefault',
      `DayPickerNavigation_${side}Button__horizontalDefault`
    )
  }
}

export {
  DateRangeInput
}
