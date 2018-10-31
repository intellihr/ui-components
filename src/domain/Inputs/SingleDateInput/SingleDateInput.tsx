import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css';
import React from 'react'
import { SingleDatePicker, SingleDatePickerShape } from 'react-dates'
import moment, { Moment } from 'moment'
import classNames from 'classnames'
import { FontAwesomeIcon } from '../../Icons/FontAwesomeIcon'

const style = require('./style.scss')

interface ISingleDateInputProps {
  id: string
  dateFormat: string
  handleChange?: (date: Moment | null) => void
  isInvalid?: boolean
}

interface ISingleDateInputState {
  date: Moment | null
  focused: boolean
}

class SingleDateInput extends React.PureComponent<ISingleDateInputProps & SingleDatePickerShape, ISingleDateInputState> {
  public static defaultProps = {
    dateFormat: 'DD/MM/YYYY'
  }

  public state: ISingleDateInputState = {
    date: null,
    focused: false
  }

  public render (): JSX.Element {
    const {
      id,
      dateFormat
    } = this.props

    return (
      <div className={this.classNames}>
        <SingleDatePicker
          id={id}
          date={this.state.date}
          placeholder={moment().format(dateFormat)}
          displayFormat={dateFormat}
          onDateChange={this.dateChange}
          focused={this.state.focused}
          onFocusChange={this.focusChange}
          noBorder
          block
          isOutsideRange={() => false}
          hideKeyboardShortcutsPanel
          renderMonthText={this.renderMonthText}
          navPrev={
            <div className={this.navigationButtonClassNames('left')}>
              <FontAwesomeIcon type='arrow-left'/>
            </div>
          }
          navNext={
            <div className={this.navigationButtonClassNames('right')}>
              <FontAwesomeIcon type='arrow-right'/>
            </div>
          }
        />
      </div>
    )
  }

  get classNames () {
    const {
      isInvalid
    } = this.props

    return classNames(
      style.singleDatePickerOverrides,
      {
        'is-invalid-input': isInvalid
      }
    )
  }

  private renderMonthText = (day: Moment) => moment(day).format('MMM YYYY')

  private dateChange = (date: Moment | null) => {
    const {
      handleChange
    } = this.props

    if (handleChange) {
      handleChange(date)
    }

    this.setState({ date })
  }

  private focusChange = ({ focused }: any) => this.setState({ focused })

  private navigationButtonClassNames: (side: 'left' | 'right') => string = (side: 'left' | 'right') => {
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
