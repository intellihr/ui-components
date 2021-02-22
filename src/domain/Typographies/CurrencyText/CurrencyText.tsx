import React, { useContext, useMemo } from 'react'

import { Props, Variables } from '../../../common'
import { DefaultsContext } from '../../Defaults'
import { IHintWrapperProps } from '../../Formats/HintWrapper'
import { Text } from '../Text'
import { StyledCurrencyText, StyledPrefixText } from './style'

interface ICurrencyTextProps {
  /** Monetary value to display */
  value?: string | number
  /** Monetary value text type  */
  valueType?: Props.TypographyType
  /** Currency prefix to display */
  prefix?: string
  /** Currency prefix text type  */
  prefixType?: Props.TypographyType
  /** decimal place to display */
  decimalPlace?: number
  /** Vertically aligns the currency prefix and monetary value */
  flexAlign?: boolean
  /** The options for the hint to apply to the value */
  valueHintComponentProps?: IHintWrapperProps
  /** Monetary value text color */
  valueColor?: Variables.Color
  /** Currency prefix text color  */
  prefixColor?: Variables.Color
  /** If true, will display the text inline */
  isInline?: boolean
  /** The margins around the component */
  margins?: Props.IMargins
}

type Formatter = (value: string | number, decimalPlace?: number, locale?: string) => string

const CurrencyText: React.FC<ICurrencyTextProps> & {
  formatter: Formatter
} = ({
  valueType = Props.TypographyType.Body,
  prefixType = Props.TypographyType.Body,
  decimalPlace = 0,
  flexAlign = false,
  isInline = true,
  value,
  margins,
  prefixColor,
  prefix,
  valueColor,
  valueHintComponentProps
}) => {
  const { i18nLocale } = useContext(DefaultsContext)
  const prefixText = useMemo(() => {
    if (!prefix) {
      return null
    }

    return (
      <StyledPrefixText
        weight={Variables.FontWeight.fwSemiBold}
        type={prefixType}
        color={prefixColor}
      >
        {prefix}
      </StyledPrefixText>
    )
  }, [prefixType, prefixColor, prefix])

  if (value || value === 0) {
      return (
        <StyledCurrencyText
          isInline={isInline}
          margins={margins}
          flexAlign={flexAlign}
        >
          {prefixText}
          <Text
            type={valueType}
            color={valueColor}
            hintComponentProps={valueHintComponentProps}
          >
            {CurrencyText.formatter(value!, decimalPlace, i18nLocale)}
          </Text>
        </StyledCurrencyText>
      )
    }

    return (
      <>-</>
    )
}

CurrencyText.formatter = (value, decimalPlace, locale = 'en') => {
  const formatter = new Intl.NumberFormat(locale, {
    maximumFractionDigits: decimalPlace,
    minimumFractionDigits: decimalPlace
  })
  return formatter.format(parseFloat(value.toString()))
}

export {
  CurrencyText,
  ICurrencyTextProps
}
