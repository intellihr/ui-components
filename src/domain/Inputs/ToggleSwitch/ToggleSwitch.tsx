import React, { ChangeEventHandler } from 'react'

import { Props, Variables } from '../../../common'
import { GridLayout } from '../../Layouts/GridLayout'
import { Text } from '../../Typographies/Text'
import { MarginToggleSwitch, StyledChildren } from './style'
import { ToggleSwitchInput } from './subcomponents/ToggleSwitchInput'

export interface IToggleSwitchInputProps {
  /** Called when the checkbox is toggled */
  onChange?: ChangeEventHandler<HTMLInputElement>
  /** The form value of the input */
  name: string
  /** The title of the ToggleSwitch */
  title: string
  /** The description of the ToggleSwitch */
  description: string
  /** If the input is checked */
  checked: boolean
  /** If the input is disabled */
  disabled?: boolean
  /** If the ToggleSwitch is a child of another ToggleSwitch */
  isChild?: boolean

  /** The margins around the component */
  margins?: Props.IMargins
  /** The data-component-context */
  componentContext?: string
}

export class ToggleSwitch extends React.PureComponent<IToggleSwitchInputProps> {
  private get children () {
    const {
      children
    } = this.props

    if (children) {
     return (
        <StyledChildren>
          {children}
        </StyledChildren>
      )
    }

    return
  }

  public render (): JSX.Element {
    const {
      name,
      checked,
      onChange,
      disabled,
      title,
      description,
      margins,
      isChild,
      componentContext
    } = this.props

    return (
      <MarginToggleSwitch
        margins={margins}
        isChild={isChild}
        data-component-type={Props.ComponentType.ToggleSwitch}
        data-component-context={componentContext}
      >
        <GridLayout
          gutterMarginX={Variables.Spacing.sLarge}
          cells={[
            {
              size: 'auto',
              content: (
                <>
                  <Text
                    isInline={false}
                    type={isChild ? Props.TypographyType.Small : Props.TypographyType.Heading}
                    weight='heavy'
                  >
                    {title}
                  </Text>
                  <Text type={Props.TypographyType.Small}>{description}</Text>
                </>
              )
            },
            {
              size: 'shrink',
              content: (
                <ToggleSwitchInput
                  name={name}
                  checked={checked}
                  onChange={onChange}
                  componentContext={componentContext}
                  disabled={disabled}
                />
              )
            }
          ]}
        />
        {this.children}
      </MarginToggleSwitch>
    )
  }
}
