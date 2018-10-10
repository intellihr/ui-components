import React from 'react'
import { Emoji } from '../Emoji'
import { Props } from '../../../common'
import { CountryCodeWrapper } from '../TelephoneText/style'

interface ITelephoneTextProps {
  /** phone number to display */
  phoneNumber: string
  /** country code to display */
  countryCode?: string
  /** dial code to display */
  dialCode?: string
  /** Specify the type of text to use */
  flagType: Props.TypographyType
}

class TelephoneText extends React.PureComponent<ITelephoneTextProps> {
  public static defaultProps = {
    flagType: Props.TypographyType.Body
  }

  get prefix (): JSX.Element | undefined {
    const {
      countryCode,
      dialCode,
      flagType
    } = this.props

    if (countryCode && dialCode) {
      return (
        <span>
          <Emoji
            emoji={`flag-${countryCode}`}
            type={flagType}
          />
          <CountryCodeWrapper>
            {` ${countryCode.toUpperCase()}`}
          </CountryCodeWrapper>
          <span>{` (+${dialCode}) `}</span>
        </span>
      )
    }
  }

  get phoneNumber (): string {
    const {
      countryCode,
      dialCode,
      phoneNumber
    } = this.props

    if (countryCode && dialCode && phoneNumber.length>5) {
      let format = /(?!^)(\d{3})(?=(?:\d{3})*$)/g

      if (phoneNumber.length === 8 || phoneNumber.length ===7){
        format = /(?!^)(\d{4})(?=(?:\d{4})*$)/g
      }

      const formattedNumber = phoneNumber.replace(format, ' $1')
      return formattedNumber
    }

    return phoneNumber
  }

  public render (): JSX.Element | string {
    return <span>
      {this.prefix}
      {this.phoneNumber}
    </span>
  }
}

export {
  TelephoneText,
  ITelephoneTextProps
}
