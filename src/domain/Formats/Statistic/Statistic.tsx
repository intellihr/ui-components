import React from 'react'

import { Props } from '../../../common'
import { PrefixText, TitleText, ValueText } from './style'

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
        {title}
      </TitleText>
      {prefix && (
        <PrefixText>
          {prefix}
        </PrefixText>
      )}
      <ValueText>{value}</ValueText>
    </div>
  )
}
