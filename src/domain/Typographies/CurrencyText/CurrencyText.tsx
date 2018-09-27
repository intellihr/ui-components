import React from 'react'
import { CurrencyWrapper } from './style'
import Numeral from 'numeral'

export interface ICurrencyProps {
  /** money value to display */
  value: string | number
  /** money prefix to display */
  prefix?: string
  /** If true, displays the prefix with the format */
  isPrefixFormatted?: boolean
  /** Specify the prefix's style  */
  prefixType?: 'small' | 'medium' | 'large'
}

export class CurrencyText extends React.PureComponent<ICurrencyProps> {
  public static defaultProps: Partial<ICurrencyProps> = {
    isPrefixFormatted: false
  }

  get prefix (): JSX.Element|string|undefined  {
    const {
      prefix,
      isPrefixFormatted
    } = this.props

    if (isPrefixFormatted) {
      return (
        <span className='currency-prefix'>
          {prefix}
        </span>
      )
    }

    return prefix
  }

  get value (): string {
    const {
      value
    } = this.props

    return Numeral(value.toString()).format('0,0')
  }

  public render (): JSX.Element {
    const {
      prefixType
    } = this.props

    return (
      <CurrencyWrapper
        prefixType={prefixType}
      >
        {this.prefix} {this.value}
      </CurrencyWrapper>
    )
  }
}
