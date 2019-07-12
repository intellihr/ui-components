import React, { ChangeEventHandler } from 'react'

import { Props } from '../../../common'
import { RadioSetWrapper, StyledRadioInput } from './style'

export interface IRadioSetOptionProps {
  /** Custom classname to use */
  className?: string
  /** Function passed to `onChange` prop */
  handleChange?: ChangeEventHandler<HTMLInputElement>
  /** Called when the input is changed */
  onChange?: (value: string | number) => void
  /** Value of the input */
  value?: string | number
  /** If true, sets input to disabled state */
  isDisabled?: boolean
  /** Handle blur event */
  handleBlur?: (e: React.FocusEvent<HTMLInputElement>, value?: string | number) => void
  /** Handle key down events */
  handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  /** If true, use HTML5 required attribute */
  isHTML5Required?: boolean
  /** Add autofocus attribute to input */
  autoFocus?: boolean
  /** The component context */
  componentContext?: string
  /** Label to display next to the radio */
  label: JSX.Element | string
  /** If true, the radio input is wrapped with a button */
  isButton?: boolean
  /** The margins around the component */
  margins?: Props.IMargins
}

export interface IRadioSetProps {
  /** Array of options to display in the list */
  options: IRadioSetOptionProps[]
  /** action when option is clicked */
  handleChange?: ChangeEventHandler<HTMLInputElement>
  /** Called when the input is changed */
  onChange?: (value: string | number) => void
  /** Specify the orientation of the radio set */
  orientation?: Props.Orientation
  /** If true, all radio inputs are wrapped with a button */
  useButtonStyle?: boolean
  /** The currently selected value */
  value?: string | number
  /** The name property of the radio inputs */
  name: string
  /** the spacing of radio set */
  spacing?: 'normal' | 'tight'
}

export class RadioSet extends React.PureComponent<IRadioSetProps> {
  public static defaultProps: Partial<IRadioSetProps> = {
    orientation: Props.Orientation.Vertical,
    useButtonStyle: false,
    value: undefined,
    spacing: 'normal'
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

  private get options (): JSX.Element[] {
    const {
      options,
      useButtonStyle,
      value,
      name,
      spacing
    } = this.props

    return options.map((option, idx) => {
      return (
        <StyledRadioInput
          key={`${name}-${idx}`}
          spacing={spacing!}
          handleChange={this.handleChange}
          isButton={useButtonStyle}
          isChecked={value === option.value}
          id={`${name}-${idx}`}
          name={name}
          {...option}
        />
      )
    })
  }

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      onChange,
      handleChange
    } = this.props

    if (onChange) {
      onChange(event.target.value)
    } else if (handleChange) {
      handleChange(event)
    }
  }
}
