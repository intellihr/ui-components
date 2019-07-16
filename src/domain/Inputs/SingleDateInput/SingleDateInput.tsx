import classNames from 'classnames'
import { isNil } from 'lodash'
import moment, { Moment } from 'moment'
import React from 'react'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

import { FontAwesomeIcon } from '../../Icons/FontAwesomeIcon'
import { InputGroupPosition } from '../InputGroup'

const style = require('./style.scss')

interface ISingleDateInputProps {
  /** Name and ID of the HTML input */
  name: string
  /** Moment format to display the date in */
  dateFormat?: string
  /** Change handler called when the date is changed */
  handleChange?: (date: Moment | null) => void
  /** If true, adds invalid styles to the input */
  isInvalid?: boolean
  /** If true, adds disabled attribute to the input */
  isDisabled?: boolean
  /** Updates border style depending on input group position */
  groupPosition?: InputGroupPosition
  /** Applies recommended settings for mobile and tablet viewports */
  isMobile?: boolean
  /** Placeholder text for the input; defaults to the date format */
  placeholder?: string
  /** Value for the input (Note: in redux, this must be a moment object - strings are invalid) */
  value: Moment | null
}

interface ISingleDateInputState {
  focused: boolean
}

class SingleDateInput extends React.PureComponent<ISingleDateInputProps, ISingleDateInputState> {
  public static defaultProps = {
    dateFormat: 'DD/MM/YYYY',
    isInvalid: false,
    isDisabled: false,
    isMobile: false
  }

  public state: ISingleDateInputState = {
    focused: false
  }

  public render (): JSX.Element {
    const {
      name,
      dateFormat,
      isDisabled,
      isMobile,
      value,
      placeholder
    } = this.props

    return (
      <div
        className={this.classNames}
      >
        <SingleDatePicker
          id={name}
          date={value}
          disabled={isDisabled}
          displayFormat={dateFormat}
          placeholder={placeholder || dateFormat}
          numberOfMonths={isMobile ? 1 : 2}
          focused={this.state.focused}
          onDateChange={this.handleDateChange}
          onFocusChange={this.handleFocusChange}
          isOutsideRange={this.disabledDateRange}
          renderMonthText={this.renderMonthText}
          noBorder
          block
          showClearDate
          customCloseIcon={<span>×</span>}
          hideKeyboardShortcutsPanel
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
      isInvalid,
      groupPosition
    } = this.props

    return classNames(
      style.singleDatePickerOverrides,
      {
        'is-invalid-input': isInvalid,
        [`input-group-${groupPosition}`]: !isNil(groupPosition)
      }
    )
  }

  private disabledDateRange = () => false

  private renderMonthText = (day: Moment) => moment(day).format('MMM YYYY')

  private handleDateChange = (date: Moment | null) => {
    const {
      handleChange
    } = this.props

    if (handleChange) {
      handleChange(date)
    }
  }

  private handleFocusChange = (focusChangeArgs: { focused: boolean | null }) => {
    this.setState({
      focused: focusChangeArgs.focused || false
    })
  }

  private navigationButtonClassNames = (side: 'left' | 'right') => {
    return classNames(
      'DayPickerNavigation_button__default',
      'DayPickerNavigation_button__horizontalDefault',
      `DayPickerNavigation_${side}Button__horizontalDefault`
    )
  }
}

export {
  SingleDateInput
}
