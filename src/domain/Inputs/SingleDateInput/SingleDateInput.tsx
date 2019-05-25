import classNames from 'classnames'
import { isNil } from 'lodash'
import moment, { Moment } from 'moment'
import React, { FormEvent } from 'react'
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
  dateFormat: string
  /** Change handler called when the date is changed */
  handleChange?: (date: Moment | string | null) => void
  /** If true, adds invalid styles to the input */
  isInvalid?: boolean
  /** If true, adds disabled attribute to the input */
  isDisabled?: boolean
  /** Updates border style depending on input group position */
  groupPosition?: InputGroupPosition
  /** Applies recommended settings for mobile and tablet viewports */
  isMobile?: boolean
  value: Moment | null
}

interface ISingleDateInputState {
  focused: boolean
}

class SingleDateInput extends React.PureComponent<ISingleDateInputProps, ISingleDateInputState> {
  public static defaultProps = {
    dateFormat: 'DD/MM/YYYY',
    isInvalid: false,
    isDisabled: false
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
      value
    } = this.props

    return (
      <div
        className={this.classNames}
        onChange={this.onChange}
      >
        <SingleDatePicker
          id={name}
          date={value}
          placeholder={dateFormat}
          displayFormat={dateFormat}
          onDateChange={this.dateChange}
          focused={this.state.focused}
          onFocusChange={this.focusChange}
          disabled={isDisabled}
          numberOfMonths={isMobile ? 1 : 2}
          noBorder
          block
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

  private disabledDateRange: () => boolean =
    () => false

  private renderMonthText: (day: Moment) => string =
    (day) => moment(day).format('MMM YYYY')

  private dateChange: (date: Moment | null) => void =
    (date) => {
      const {
        handleChange
      } = this.props

      if (handleChange && date !== null) {
        handleChange(date)
      }
   }

  private onChange: (e: FormEvent<HTMLDivElement>) => void =
    (e) => {
      const {
        handleChange
      } = this.props

      const rawInputElement =  e.target as HTMLInputElement
      if (handleChange) {
        handleChange(moment(rawInputElement.value, moment.ISO_8601))
      }
    }

  private focusChange: (focusChangeArgs: { focused: boolean | null }) => void =
    (focusChangeArgs) => {
      this.setState({
        focused: focusChangeArgs.focused || false
      })
    }

  private navigationButtonClassNames: (side: 'left' | 'right') => string =
    (side) => {
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
