import React, { ChangeEventHandler } from 'react'

import { Props, Variables } from '../../../common'
import { GridLayout } from '../../Layouts/GridLayout'
import { IGridLayoutCell } from '../../Layouts/GridLayout/GridLayout'
import { StyledIcon, StyledIconArea, StyledIconInput } from './style'
import { IntelliIconPrefixedValue } from './types'

export interface IIconPickerProps {
  /** Array of icons to display in the list */
  icons: IntelliIconPrefixedValue[]
  /** action triggered when icons are clicked */
  onChange?: (value: string | number) => void
  /** action triggered when icons are clicked */
  handleChange?: ChangeEventHandler<HTMLInputElement>
  /** The currently selected icon */
  value: IntelliIconPrefixedValue | null
  /** The name property of the icon picker */
  name: string
  /** The data-component-context */
  componentContext?: string
}

export class IconPickerInput extends React.PureComponent<IIconPickerProps> {
  public render (): JSX.Element {
    const {
      componentContext
    } = this.props

    return (
      <div
        data-component-type={Props.ComponentType.IconPicker}
        data-component-context={componentContext}
      >
        <GridLayout
          componentContext={componentContext}
          gutterMarginY={Variables.Spacing.sXSmall}
          gutterMarginX={Variables.Spacing.sXSmall}
          cells={this.options}
        />
      </div>
    )
  }

  private get options (): IGridLayoutCell[] {
    const {
      icons
    } = this.props

    return icons.map((icon, idx): IGridLayoutCell => {
      return {
        size: 'shrink',
        content: this.iconInput(icon, idx)
      }
    })
  }

  private iconInput = (icon: IntelliIconPrefixedValue, idx: number) => {
    const {
      value,
      name
    } = this.props

    const isChecked = value === icon
    const iconId = `${name}-${icon}-${idx}`

    return (
      <>
        <StyledIconInput
          name={name}
          id={iconId}
          value={icon}
          onChange={this.handleChange}
          checked={isChecked}
          type='radio'
        />
        <StyledIconArea isChecked={isChecked} htmlFor={iconId}>
          <StyledIcon
            icon={icon}
            color={isChecked ? Variables.Color.i300 : Variables.Color.n700}
            size='large'
          />
        </StyledIconArea>
      </>
    )
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
