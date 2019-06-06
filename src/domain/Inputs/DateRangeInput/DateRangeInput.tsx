import classNames from 'classnames'
import moment, { Moment } from 'moment'
import React from 'react'
import { DateRangePicker, FocusedInputShape } from 'react-dates'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

import { Variables } from '../../../common'
import { FontAwesomeIcon } from '../../Icons/FontAwesomeIcon'
import { Text } from '../../Typographies/Text'

const style = require('./style.scss')

interface IDateRangeInputProps {
  /** Name of the HTML input */
  name: string
  /** Start Date of the input */
  startDate: Moment | null
  /** End Date of the input */
  endDate: Moment | null
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
  /** Change handler called when the date is changed */
  handleDatesChange: (dates: { startDate: Moment | null, endDate: Moment | null}) => void
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
      isDisabled,
      isMobile,
      startDate,
      endDate,
      startDatePlaceholder,
      endDatePlaceholder,
      dateFormat
    } = this.props

    return (
      <div
        className={this.classNames}
      >
        <DateRangePicker
          block
          startDateId={`${name}-start`}
          startDate={startDate}
          endDateId={`${name}-end`}
          endDate={endDate}
          startDatePlaceholderText={startDatePlaceholder || dateFormat}
          endDatePlaceholderText={endDatePlaceholder || dateFormat}
          displayFormat={dateFormat}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.focusedInput}
          onFocusChange={this.onFocusChange}
          disabled={isDisabled}
          numberOfMonths={isMobile ? 1 : 2}
          showClearDates
          customArrowIcon={<Text color={Variables.Color.n600} weight='heavy'>→</Text>}
          customCloseIcon={<span>×</span>}
          isOutsideRange={this.disabledDateRange}
          hideKeyboardShortcutsPanel
          renderMonthText={this.renderMonthText}
          navPrev={(
            <div className={this.navigationButtonClassNames('left')}>
              <FontAwesomeIcon type='arrow-left'/>
            </div>
          )}
          navNext={(
            <div className={this.navigationButtonClassNames('right')}>
              <FontAwesomeIcon type='arrow-right'/>
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

  private onDatesChange = (dates: { startDate: Moment | null, endDate: Moment | null}) => {
    const {
      handleDatesChange
      } = this.props

    handleDatesChange(dates)
  }

  private disabledDateRange = () => false

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
