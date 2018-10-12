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
  /** Specify the color of phone number to use */
  color?: Variables.Color
  /** If true, displays the flag */
  isFlagDisplayed: boolean
}

class TelephoneText extends React.PureComponent<ITelephoneTextProps> {
  public static defaultProps = {
    type: Props.TypographyType.Body,
    isDisplayFlag: true
  }

  get flag(): JSX.Element | undefined {
    const {
      countryCode,
      isFlagDisplayed,
      type
    } = this.props

    if (countryCode && isFlagDisplayed) {
      return(
        <Emoji
          emoji={`flag-${countryCode}`}
          type={type}
        />
      )
    }
  }

  get prefix(): JSX.Element | undefined {
    const {
      countryCode,
      dialCode,
      isFlagDisplayed,
      type,
      color
    } = this.props

    if (countryCode && dialCode) {
      return (
        <>
          {this.flag}
          <CountryCodeWrapper
            color={Variables.Color.n600}
            type={type}
            isFlagDisplayed={isFlagDisplayed}
            isUpper
          >
            {countryCode}
          </CountryCodeWrapper>
          <DialCodeWrapper
            type={type}
            color={color}
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
      type,
      color
    } = this.props

    let formattedPhoneNumber = phoneNumber

    if (countryCode && dialCode) {
      formattedPhoneNumber = phoneNumber.replace(/\s/g,'')

      if (formattedPhoneNumber.length > 5) {
        let format = /(?!^)(\d{3})(?=(?:\d{3})*$)/g

        if (formattedPhoneNumber.length === 8 || formattedPhoneNumber.length === 7) {
          format = /(?!^)(\d{4})(?=(?:\d{4})*$)/g
        }

        formattedPhoneNumber=  formattedPhoneNumber.replace(format, ' $1')
      }
    }

    return (
      <Text
        type={type}
        color={color}
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
