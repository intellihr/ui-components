import React from 'react'
import { Emoji } from '../Emoji'
import { Text } from '../Text'
import { Props, Variables } from '../../../common'
import { CountryCodeWrapper, DialCodeWrapper } from '../TelephoneText/style'

interface ITelephoneTextProps {
  /** phone number to display */
  phoneNumber: string
  /** country code to display */
  countryCode?: string
  /** dial code to display */
  dialCode?: string
  /** Specify the type of text and flag to use */
  type: Props.TypographyType
}

class TelephoneText extends React.PureComponent<ITelephoneTextProps> {
  public static defaultProps = {
    flagType: Props.TypographyType.Body
  }

  get prefix(): JSX.Element | undefined {
    const {
      countryCode,
      dialCode,
      type
    } = this.props

    if (countryCode && dialCode) {
      return (
        <>
          <Emoji
            emoji={`flag-${countryCode}`}
            type={type}
          />
          <CountryCodeWrapper
            color={Variables.Color.n600}
            type={type}
            isUpper
          >
            {countryCode}
          </CountryCodeWrapper>
          <DialCodeWrapper
            type={type}
          >
            (+{dialCode})
          </DialCodeWrapper>
        </>
      )
    }
  }

  get phoneNumber(): JSX.Element {
    const {
      countryCode,
      dialCode,
      phoneNumber,
      type
    } = this.props

    let formattedPhoneNumber = phoneNumber

    if (countryCode && dialCode && phoneNumber.length > 5) {
      let format = /(?!^)(\d{3})(?=(?:\d{3})*$)/g

      if (phoneNumber.length === 8 || phoneNumber.length === 7) {
        format = /(?!^)(\d{4})(?=(?:\d{4})*$)/g
      }

      formattedPhoneNumber=  phoneNumber.replace(format, ' $1')
    }

    return (
      <Text
        type={type}
      >
        {formattedPhoneNumber}
      </Text>
    )
  }

  public render(): JSX.Element {
    return (
      <span>
        {this.prefix}
        {this.phoneNumber}
      </span>
    )
  }
}

export {
  TelephoneText,
  ITelephoneTextProps
}
