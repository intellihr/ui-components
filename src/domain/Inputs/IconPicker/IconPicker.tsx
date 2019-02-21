import React, { ChangeEventHandler } from 'react'

import { Variables } from '../../../common'
import { StyledIcon, StyledIconArea, StyledIconInput } from './style'
import { IconType } from '../../Icons/Icon'
import { GridLayout } from '../../Layouts/GridLayout'
import { IGridLayoutCell } from '../../Layouts/GridLayout/GridLayout'

export interface IIconPickerProps {
  /** Array of icons to display in the list */
  icons: IconType[]
  /** action triggered when icons are clicked */
  handleChange?: ChangeEventHandler<HTMLInputElement>
  /** The currently selected icon */
  value?: string | number
  /** The name property of the icon picker */
  name: string
}

export class IconPicker extends React.PureComponent<IIconPickerProps> {
  public static defaultProps: Partial<IIconPickerProps> = {
    value: undefined
  }

  public render (): JSX.Element {
    return (
      <GridLayout
        gutterMarginY={Variables.Spacing.sXSmall}
        gutterMarginX={Variables.Spacing.sXSmall}
        cells={this.options}
      />
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

  private iconInput = (icon: IconType, idx: number) => {
    const {
      handleChange,
      value,
      name
    } = this.props

    const checked = value === icon

    return (
      <>
        <StyledIconInput
          name={name}
          id={`${name}-${icon}-${idx}`}
          value={icon}
          handleChange={handleChange}
          isChecked={checked}
          type='radio'
        />
        <StyledIconArea checked={checked} htmlFor={`${name}-${icon}-${idx}`}>
          <StyledIcon
            type={icon}
            color={checked ? Variables.Color.i300 : Variables.Color.n700 }
            size={'large'}
          />
        </StyledIconArea>
      </>
    )
  }
}
