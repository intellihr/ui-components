import React, { ChangeEventHandler } from 'react'
import uuid from 'uuid'
import { map } from 'lodash'
import classNames from 'classnames'
import { Props } from '../../../common'
const style = require('./style.scss')

export interface IRadioInputProps {
  /** Label to display next to the radio */
  label?: JSX.Element | string
  /** Array of options to display in the list */
  options: IRadioOptionProps[]
  /** action when option is clicked */
  handleChange?: ChangeEventHandler<HTMLInputElement>
  /** ID of the radio input */
  id?: string
  /** Specify the orientation of the radio group */
  orientation?: Props.Orientation
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
  handleChange?: ChangeEventHandler<HTMLInputElement>
}

export class RadioInput extends React.PureComponent<IRadioInputProps> {
  public static defaultProps: Partial<IRadioInputProps> = {
    orientation: Props.Orientation.Vertical
  }

  get options (): JSX.Element[] {
    const {
      options,
      handleChange,
      id,
      orientation
    } = this.props

    return map(options, (option, idx) => {
      const {
        isChecked,
        isDisabled,
        handleChange: overrideHandleChange,
        value,
        label
      } = option

      return (
        <label
          className={orientation === Props.Orientation.Horizontal ? 'horizontal-radio-group' : undefined}
        >
          <input
            key={id ? `${idx}-${id}` : uuid.v4()}
            type='radio'
            value={value}
            checked={isChecked}
            disabled={isDisabled}
            onChange={overrideHandleChange ? overrideHandleChange : handleChange}
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
