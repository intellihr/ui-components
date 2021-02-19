import React from 'react'

import { Props, Variables } from '../../../common'
import { useTranslateFunction } from '../../Defaults/Defaults/Defaults'
import { StatusIndicator } from '../../Indicators'
import { NotProvidedText, PrefixText, TitleText, ValueContainer, ValueText } from './style'

interface IStatistcProps {
  /** the statistic title */
  title: string
  /** The data-component-context */
  componentContext?: string
  /** Text that goes before the statistic */
  prefix?: string
  /** The statistic value */
  value?: string | null
  /** The color of the indicator if one is needed */
  indicatorColor?: Variables.Color
}

export const Statistic: React.FC<IStatistcProps> = (
  {
    componentContext,
    prefix,
    value,
    title,
    indicatorColor
  }
) => {
  const t = useTranslateFunction()

  if (!value) {
    return (
      <div
        data-component-context={componentContext}
        data-component-type={Props.ComponentType.Statistic}
      >
        <TitleText>{title}</TitleText>
        <NotProvidedText>{t('notProvided')}</NotProvidedText>
      </div>
    )
  }

  return (
    <div
      data-component-context={componentContext}
      data-component-type={Props.ComponentType.Statistic}
    >
      <TitleText>{title}</TitleText>
      <ValueContainer>
        {indicatorColor && (
          <StatusIndicator color={indicatorColor} />
        )}
        <div>
          {prefix && (
            <PrefixText>{prefix}</PrefixText>
          )}
          <ValueText>{value}</ValueText>
        </div>
      </ValueContainer>
    </div>
  )
}
