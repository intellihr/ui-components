import React from 'react'
import Numeral from 'numeral'
import { padEnd } from 'lodash'
import { FormattedCurrencyPrefixWrapper } from './style'
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
  prefixType?: Props.TypographyType.XSmall | Props.TypographyType.Body | Props.TypographyType.Display
  /** decimal place to display */
  decimalPlace?:  number
}

class CurrencyText extends React.PureComponent<ICurrencyTextProps> {
  public static defaultProps: Partial<ICurrencyTextProps> = {
    prefixType: Props.TypographyType.Display,
    decimalPlace:  0
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
      <FormattedCurrencyPrefixWrapper prefixType={prefixType}>
        {prefix}
      </FormattedCurrencyPrefixWrapper>
    )
  }

  get formattedMoney(): JSX.Element {
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
      value
    } = this.props

    if (value || value === 0) {
      return (
        <span>
          {this.prefix}
          {this.formattedMoney}
        </span>
      )
    }

    return '-'
  }
}

export {
  CurrencyText,
  ICurrencyTextProps
}
