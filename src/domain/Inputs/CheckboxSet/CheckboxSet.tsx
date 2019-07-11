import { map } from 'lodash'
import React from 'react'

import { Props } from '../../../common'
import { ICheckboxInputProps } from '../CheckboxInput'
import { CheckboxSetWrapper, StyledCheckboxInput } from './style'

export interface ICheckboxSetProps {
  /** Array of options to display in the list */
  options: ICheckboxInputProps[]
  /** action when option is clicked */
  handleOptionChange?: (name: string, value: string | number) => void
  /** ID of the checkbox group */
  id?: string
  /** Specify the orientation of the checkbox group */
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

  private get options (): JSX.Element[] {
    const {
      options,
      id,
      useButtonStyle,
      spacing
    } = this.props

    return map(options, (option, idx) => (
        <StyledCheckboxInput
          key={id ? `${idx}-${id}` : idx}
          spacing={spacing!}
          handleChange={this.handleChange}
          isButton={useButtonStyle}
          {... option}
        />
      )
    )
  }

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      handleOptionChange
    } = this.props

    if (handleOptionChange) {
      handleOptionChange(event.target.name, event.target.value)
    }
  }
}
