import React, { ChangeEventHandler } from 'react'

import { Props, Variables } from '../../../common'
import { GridLayout } from '../../Layouts/GridLayout'
import { Text } from '../../Typographies/Text'
import { MarginToggleSwitch } from './style'
import { ToggleSwitchInput } from './subcomponents/ToggleSwitchInput'

interface IToggleSwitchProps {
  /** Called when the checkbox is toggled */
  handleChange?: ChangeEventHandler<HTMLInputElement>
  /** Called when the input is changed */
  onChange?: (value: boolean) => void
  /** The form value of the input */
  name: string
  /** The title of the ToggleSwitch */
  title: string
  /** The description of the ToggleSwitch */
  description: string
  /** Value of the input */
  value?: string | number | boolean
  /** If the input is disabled */
  isDisabled?: boolean

  /** The margins around the component */
  margins?: Props.IMargins
  /** The data-component-context */
  componentContext?: string
}

class ToggleSwitch extends React.PureComponent<IToggleSwitchProps> {
  public render (): JSX.Element {
    const {
      name,
      value,
      onChange,
      handleChange,
      isDisabled,
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
                    weight={Variables.FontWeight.fwSemiBold}
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
                  value={value}
                  onChange={onChange}
                  handleChange={handleChange}
                  componentContext={componentContext}
                  isDisabled={isDisabled}
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
