import { map, get } from 'lodash'
import React, {ChangeEventHandler} from 'react'

import { Props } from '../../../common'
import { ICheckboxInputProps } from '../CheckboxInput'
import { CheckboxSetWrapper, StyledCheckboxInput } from './style'

export interface ICheckboxSetProps {
  /** Array of options to display in the list */
  options: Array<ICheckboxInputProps & {identifier: string}>
  /** Function passed to `onChange` prop */
  handleChange?: ChangeEventHandler<HTMLInputElement>
  /** Called when the input is changed */
  onChange?: (checkedOptionIdentifier: string) => void
  /** Specify the orientation of the checkbox group */
  orientation?: Props.Orientation
  /** If true, all checkbox inputs are wrapped with a button */
  useButtonStyle?: boolean
  /** the spacing of checkbox set */
  spacing?: 'normal' | 'tight'
  /** The name property of the checkbox inputs */
  name: string
  /** The currently checked value */
  value: {
    [i: string]: boolean
  }
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

  private get options (): Array<JSX.Element|null> {
    const {
      options,
      useButtonStyle,
      spacing,
      name
    } = this.props

    return map(options, (option, idx) => (
      <StyledCheckboxInput
        name={name}
        id={option.identifier}
        key={`${name}-${idx}`}
        spacing={spacing!}
        handleChange={this.handleChange}
        isButton={useButtonStyle}
        value={this.value(option.identifier)}
        {...option}
      />
    ))
  }

  private value = (identifier: string) => {
    const {
      value
    } = this.props

    if (get(value,identifier)) {
      return 1
    }

    return 0
  }

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      onChange,
      handleChange
    } = this.props

    if (onChange) {
      onChange(event.target.id)
    } else if (handleChange) {
      handleChange(event)
    }
  }
}
