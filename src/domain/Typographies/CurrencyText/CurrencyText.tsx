import { padEnd } from 'lodash'
import Numeral from 'numeral'
import React from 'react'

import { Props, Variables } from '../../../common'
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

type Formatter = (value: string | number, decimalPlace?: number) => string

class CurrencyText extends React.PureComponent<ICurrencyTextProps> {
  public static defaultProps: Partial<ICurrencyTextProps> = {
    valueType: Props.TypographyType.Body,
    prefixType: Props.TypographyType.Body,
    decimalPlace: 0,
    flexAlign: false,
    isInline: true
  }

  public static formatter: Formatter = (value, decimalPlace) => {
    let moneyFormat = '0,0.'
    if (decimalPlace) {
      moneyFormat = padEnd(moneyFormat, moneyFormat.length + decimalPlace, '0')
    }

    return Numeral(value.toString()).format(moneyFormat)
  }

  get prefix (): JSX.Element | null {
    const {
      prefix,
      prefixType,
      prefixColor
    } = this.props

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
  }

  get formattedValue (): JSX.Element {
    const {
      decimalPlace,
      value,
      valueType,
      valueColor,
      valueHintComponentProps
    } = this.props

    return (
      <Text
        type={valueType}
        color={valueColor}
        hintComponentProps={valueHintComponentProps}
      >
        {CurrencyText.formatter(value!, decimalPlace)}
      </Text>
    )
  }

  public render (): JSX.Element | string {
    const {
      value,
      flexAlign,
      margins,
      isInline
    } = this.props

    if (value || value === 0) {
      return (
        <StyledCurrencyText
          isInline={isInline}
          margins={margins}
          flexAlign={flexAlign}
        >
          {this.prefix}
          {this.formattedValue}
        </StyledCurrencyText>
      )
    }

    return '-'
  }
}

export {
  CurrencyText,
  ICurrencyTextProps
}
