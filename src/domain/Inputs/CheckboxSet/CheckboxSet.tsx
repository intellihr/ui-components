import { map } from 'lodash'
import React, { ChangeEventHandler } from 'react'

import { Props } from '../../../common'
import { ICheckboxInputProps } from '../CheckboxInput'
import { CheckboxSetWrapper, StyledCheckboxInput } from './style'

export interface ICheckboxSetProps {
  /** Array of options to display in the list */
  options: ICheckboxInputProps[]
  /** action when option is clicked */
  handleChange?: ChangeEventHandler<HTMLInputElement>
  /** ID of the radio input */
  id?: string
  /** Specify the orientation of the radio group */
  orientation?: Props.Orientation
  /** If true, all checkbox inputs are wrapped with a button */
  useButtonStyle?: boolean
  /** the spacing of checkbox set */
  spacing?: 'normal' | 'tight'
}

export class CheckboxSet extends React.PureComponent<ICheckboxSetProps> {
  public static defaultProps: Partial<ICheckboxSetProps> = {
    orientation: Props.Orientation.Vertical,
    spacing: 'normal'
  }

  get options (): JSX.Element[] {
    const {
      options,
      handleChange,
      id,
      useButtonStyle,
      spacing
    } = this.props

    return map(options, (option, idx) => (
        <StyledCheckboxInput
          key={id ? `${idx}-${id}` : idx}
          spacing={spacing!}
          handleChange={handleChange}
          isButton={useButtonStyle}
          {... option}
        />
      )
    )
  }

  public render (): JSX.Element {
    const {
      orientation
    } = this.props

    return (
      <CheckboxSetWrapper orientation={orientation!}>
        {this.options}
      </CheckboxSetWrapper>
    )
  }
}
