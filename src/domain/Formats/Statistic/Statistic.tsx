import React from 'react'

import { Props, Variables } from '../../../common'
import { Text } from '../../Typographies/Text'
import { PrefixText, TitleText } from './style'

interface IStatistcProps {
  /** the statistic title */
  title: string
  /** The data-component-context */
  componentContext?: string
  /** Text that goes before the statistic */
  prefix?: string
  /** The statistic value */
  value?: string
}

export const Statistic: React.FC<IStatistcProps> = (
  {
    componentContext,
    prefix,
    value,
    title
  }
) => {
  return (
    <div
      data-component-context={componentContext}
      data-component-type={Props.ComponentType.Statistic}
    >
      <TitleText>
        <Text type={Props.TypographyType.Small} isInline={false}>{title}</Text>
      </TitleText>
      {prefix && (
        <PrefixText>
          <Text type={Props.TypographyType.Heading} color={Variables.Color.n800}>{prefix}</Text>
        </PrefixText>
      )}
      <Text type={Props.TypographyType.Display} color={Variables.Color.n800}>{value}</Text>
    </div>
  )
}
