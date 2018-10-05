import React from 'react'
import Numeral from 'numeral'
import { padEnd } from 'lodash'
import { FormattedCurrencyPrefixWrapper } from './style'

interface ICurrencyTextProps {
  /** money value to display */
  value?: string | number
  /** money prefix to display */
  prefix?: string
  /** If true, displays the prefix with the format */
  isPrefixFormatted?: boolean
  /** Specify the prefix's style  */
  prefixType?: 'xsmall' | 'body' | 'display'
  /** decimal place to display */
  decimalPlace?:  number
}

class CurrencyText extends React.PureComponent<ICurrencyTextProps> {
  public static defaultProps: Partial<ICurrencyTextProps> = {
    isPrefixFormatted: false,
    prefixType: 'display',
    decimalPlace:  0
  }

  get prefix (): JSX.Element | string | undefined {
    const {
      prefix,
      prefixType,
      isPrefixFormatted
    } = this.props

    if (isPrefixFormatted) {
      return (
        <FormattedCurrencyPrefixWrapper
          prefixType={prefixType}
        >
          {prefix}
        </FormattedCurrencyPrefixWrapper>
      )
    }

    return prefix
  }

  get formattedMoney(): string {
    const {
      decimalPlace,
      value
    } = this.props

    let moneyFormat = '0,0.'
    if (decimalPlace) {
      moneyFormat = padEnd(moneyFormat, moneyFormat.length + decimalPlace, '0')
    }

    return Numeral(value!.toString()).format(moneyFormat)
  }

  public render (): JSX.Element | string {
    const {
      value
    } = this.props

    if (value || value === 0) {
      return (
        <span>
          {this.prefix} {this.formattedMoney}
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
