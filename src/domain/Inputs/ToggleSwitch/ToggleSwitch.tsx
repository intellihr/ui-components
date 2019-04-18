import React, { ChangeEventHandler } from 'react'

import { Props, Variables } from '../../../common'
import { GridLayout } from '../../Layouts/GridLayout'
import { Text } from '../../Typographies/Text'
import { MarginToggleSwitch } from './style'
import { ToggleSwitchInput } from './subcomponents/ToggleSwitchInput'

interface IToggleSwitchProps {
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

  /** The margins around the component */
  margins?: Props.IMargins
  /** The data-component-context */
  componentContext?: string
}

class ToggleSwitch extends React.PureComponent<IToggleSwitchProps> {
  public render (): JSX.Element {
    const {
      name,
      checked,
      onChange,
      disabled,
      title,
      description,
      margins,
      componentContext
    } = this.props

    return (
      <MarginToggleSwitch
        margins={margins}
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
                    type={Props.TypographyType.Heading}
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
      </MarginToggleSwitch>
    )
  }
}

export {
  ToggleSwitch,
  IToggleSwitchProps
}
