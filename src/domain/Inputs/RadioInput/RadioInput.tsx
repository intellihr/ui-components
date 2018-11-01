import React, {ChangeEventHandler} from 'react'
import{ map } from 'lodash'
const style = require('./style.scss')
import classNames from 'classnames'

export interface IRadioInputProps {
  /** Label to display next to the radio */
  label?: JSX.Element | string
  /** Array of options to display in the list */
  options: IRadioOptionProps[]
  /** action when option is clicked */
  handleChange?: ChangeEventHandler<HTMLInputElement>
}

export interface IRadioOptionProps {
  /** Specify if input is checked */
  isChecked?: boolean
  /** If true, sets input to disabled state */
  isDisabled?: boolean
  /** Label to display */
  label: string
  /** Value of the option */
  value: any
  /** Callback when option is clicked. */
  handleOneChange?: ChangeEventHandler<HTMLInputElement>
}

export class RadioInput extends React.PureComponent<IRadioInputProps> {

  get options (): JSX.Element[] {
    const {
      options,
      handleChange
    } = this.props

    return map(options, (option, idx) => {
      const {
        isChecked,
        isDisabled,
        handleOneChange,
        value,
        label
      } = option

      return (
        <label>
          <input
            key={idx}
            type='radio'
            value = {value}
            checked ={isChecked}
            disabled={isDisabled}
            onChange={handleOneChange? handleOneChange: handleChange}
          />
          <span>{label}</span>
        </label>
      )
    })
  }

  public render (): JSX.Element {
    return (
      <div className={classNames(style.radioInput)}>
      {this.options}
      </div>
    )
  }
}
