import React from 'react'
import Numeral from 'numeral'
import { padEnd } from 'lodash'
import { StyledCurrencyText, StyledPrefixText } from './style'
import { Props } from '../../../common'
import { Text } from '../Text'

interface ICurrencyTextProps {
  /** Monetary value to display */
  value?: string | number
  /** Monetary value text type  */
  type?: Props.TypographyType
  /** Currency prefix to display */
  prefix?: string
  /** Currency prefix text type  */
  prefixType?: Props.TypographyType
  /** decimal place to display */
  decimalPlace?:  number
  /** Vertically aligns the currency prefix and monetary value */
  flexAlign?: boolean
}

class CurrencyText extends React.PureComponent<ICurrencyTextProps> {
  public static defaultProps: Partial<ICurrencyTextProps> = {
    type: Props.TypographyType.Body,
    prefixType: Props.TypographyType.Body,
    decimalPlace:  0,
    flexAlign: false
  }

  get prefix (): JSX.Element | null {
    const {
      prefix,
      prefixType
    } = this.props

    if (!prefix) {
      return null
    }

    return (
      <StyledPrefixText
        weight='heavy'
        type={prefixType}
      >
        {prefix}
      </StyledPrefixText>
    )
  }

  get formattedValue (): JSX.Element {
    const {
      decimalPlace,
      value,
      type
    } = this.props

    let moneyFormat = '0,0.'
    if (decimalPlace) {
      moneyFormat = padEnd(moneyFormat, moneyFormat.length + decimalPlace, '0')
    }

    return (
      <Text type={type}>
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
