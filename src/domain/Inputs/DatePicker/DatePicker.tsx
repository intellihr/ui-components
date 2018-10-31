import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css';
import React from 'react'
import { SingleDatePicker, SingleDatePickerShape } from 'react-dates'
import moment, { Moment } from 'moment'
import classNames from 'classnames'
import { FontAwesomeIcon } from '../../Icons/FontAwesomeIcon'

const style = require('./style.scss')

interface IDatePickerProps {
  id: string
  dateFormat: string
}

interface IDatePickerState {
  date: Moment | null
  focused: boolean
}

class DatePicker extends React.PureComponent<IDatePickerProps & SingleDatePickerShape, IDatePickerState> {
  public static defaultProps = {
    dateFormat: 'DD/MM/YYYY'
  }

  public state: IDatePickerState = {
    date: null,
    focused: false
  }

  public render (): JSX.Element {
    const {
      dateFormat
    } = this.props

    return (
      <div className={style.boi}>
        <SingleDatePicker
          {...this.props}
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
          renderMonthText={(day: Moment) => day.format('MMM YYYY')}
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

  private dateChange = (date: Moment | null) => this.setState({ date })
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
  DatePicker
}
