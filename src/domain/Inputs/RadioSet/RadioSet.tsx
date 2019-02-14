import React, { ChangeEventHandler } from 'react'

import { Props } from '../../../common'
import { RadioSetWrapper, StyledRadioInput } from './style'

interface IRadioSetOption {
  label: JSX.Element | string
  value: string | number
  isButton?: boolean
}

export interface IRadioSetProps {
  /** Array of options to display in the list */
  options: IRadioSetOption[]
  /** action when option is clicked */
  handleChange?: ChangeEventHandler<HTMLInputElement>
  /** Specify the orientation of the radio set */
  orientation?: Props.Orientation
  /** If true, all radio inputs are wrapped with a button */
  useButtonStyle?: boolean
  /** The currently selected value */
  value?: string | number
  /** The name property of the radio inputs */
  name: string
}

export class RadioSet extends React.PureComponent<IRadioSetProps> {
  public static defaultProps: Partial<IRadioSetProps> = {
    orientation: Props.Orientation.Vertical,
    useButtonStyle: false,
    value: undefined
  }

  get options (): JSX.Element[] {
    const {
      options,
      handleChange,
      useButtonStyle,
      value,
      name
    } = this.props

    return options.map((option, idx) => {
      return (
        <StyledRadioInput
          key={`${name}-${idx}`}
          handleChange={handleChange}
          isButton={useButtonStyle}
          isChecked={value === option.value}
          id={`${name}-${idx}`}
          name={name}
          {...option}
        />
      )
    })
  }

  public render (): JSX.Element {
    const {
      orientation
    } = this.props

    return (
      <RadioSetWrapper orientation={orientation!}>
        {this.options}
      </RadioSetWrapper>
    )
  }
}
