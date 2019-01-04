import React, { ChangeEventHandler } from 'react'
import { map } from 'lodash'
import { RadioSetWrapper, StyledRadioInput } from './style'
import { Props } from '../../../common'
import { IRadioInputProps } from '../RadioInput'

export interface IRadioSetProps {
  /** Array of options to display in the list */
  options: IRadioInputProps[]
  /** action when option is clicked */
  handleChange?: ChangeEventHandler<HTMLInputElement>
  /** ID of the radio input */
  id?: string
  /** Specify the orientation of the radio set */
  orientation?: Props.Orientation
}

export class RadioSet extends React.PureComponent<IRadioSetProps> {
  public static defaultProps: Partial<IRadioSetProps> = {
    orientation: Props.Orientation.Vertical
  }

  get options (): JSX.Element[] {
    const {
      options,
      handleChange,
      id
    } = this.props

    return map(options, (option, idx) =>
      <StyledRadioInput
        key={id ? `${idx}-${id}` : idx}
        handleChange={handleChange}
        {... option}
      />
    )
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
