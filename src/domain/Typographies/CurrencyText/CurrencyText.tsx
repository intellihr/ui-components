import React from 'react'
import Numeral from 'numeral'
import { padEnd } from 'lodash'
import { StyledCurrencyText, StyledPrefixText } from './style'
import { Props, Variables } from '../../../common'
import { Text } from '../Text'

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
  decimalPlace?:  number
  /** Vertically aligns the currency prefix and monetary value */
  flexAlign?: boolean
  valueHint?: string
  /** Monetary value text color */
  valueColor?: Variables.Color
  /** Currency prefix text color  */
  prefixColor?: Variables.Color
}

class CurrencyText extends React.PureComponent<ICurrencyTextProps> {
  public static defaultProps: Partial<ICurrencyTextProps> = {
    valueType: Props.TypographyType.Body,
    prefixType: Props.TypographyType.Body,
    decimalPlace:  0,
    flexAlign: false
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
        weight='heavy'
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
      valueHint
    } = this.props

    let moneyFormat = '0,0.'
    if (decimalPlace) {
      moneyFormat = padEnd(moneyFormat, moneyFormat.length + decimalPlace, '0')
    }

    return (
      <Text
        type={valueType}
        color={valueColor}
        hint={valueHint}
      >
        {Numeral(value!.toString()).format(moneyFormat)}
      </Text>
    )
  }

  public render (): JSX.Element | string {
    const {
      value,
      flexAlign
    } = this.props

    if (value || value === 0) {
      return (
        <StyledCurrencyText
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
