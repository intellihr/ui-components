import React from 'react'
import Numeral from 'numeral'
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
}

class CurrencyText extends React.PureComponent<ICurrencyTextProps> {
  public static defaultProps: Partial<ICurrencyTextProps> = {
    isPrefixFormatted: false,
    prefixType: 'display'
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

  public render (): JSX.Element | string {
    const {
      value
    } = this.props

    if (value) {
      return (
        <span>
          {this.prefix} {Numeral(value.toString()).format('0,0')}
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
