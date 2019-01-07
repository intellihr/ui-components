import React, { ChangeEventHandler } from 'react'
import { RadioSetWrapper, StyledRadioInput } from './style'
import uuid from 'uuid'
import { map } from 'lodash'
import { Props } from '../../../common'
import { ICheckboxInputProps } from '../CheckboxInput'

export interface ICheckboxSetProps {
  /** Label to display next to the radio */
  label?: JSX.Element | string
  /** Array of options to display in the list */
  options: ICheckboxInputProps[]
  /** action when option is clicked */
  handleChange?: ChangeEventHandler<HTMLInputElement>
  /** ID of the radio input */
  id?: string
  /** Specify the orientation of the radio group */
  orientation?: Props.Orientation
}

export class CheckboxSet extends React.PureComponent<ICheckboxSetProps> {
  public static defaultProps: Partial<ICheckboxSetProps> = {
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
        key={id ? `${idx}-${id}` : uuid.v4()}
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
