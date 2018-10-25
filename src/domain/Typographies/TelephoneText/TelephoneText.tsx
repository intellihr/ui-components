import React from 'react'
import { toUpper, toLower } from 'lodash'
import { parsePhoneNumber, CountryCode } from 'libphonenumber-js'
import { Emoji } from '../Emoji'
import { Text } from '../Text'
import { Props, Variables } from '../../../common'
import { CountryCodeWrapper } from './style'

interface ITelephoneTextProps {
  /** phone number to display */
  phoneNumber: string
  /** country code to display */
  countryCode?: string
  /** Specify the type of text and flag to use */
  type: Props.TypographyType
  /** Specify the color of phone number to use */
  color?: Variables.Color
  /** If true, displays the flag */
  showFlag?: boolean
}

class TelephoneText extends React.PureComponent<ITelephoneTextProps> {
  public static defaultProps = {
    type: Props.TypographyType.Body,
    showFlag: true
  }

  get flag(): JSX.Element | undefined {
    const {
      countryCode,
      showFlag,
      type
    } = this.props

    if (countryCode && showFlag) {
      return(
        <Emoji
          emoji={`flag-${toLower(countryCode)}`}
          type={type}
        />
      )
    }
  }

  get prefix(): JSX.Element | undefined {
    const {
      countryCode,
      showFlag,
      type
    } = this.props

    if (countryCode) {
      return (
        <>
          {this.flag}
          <span data-role='countryCode'>
            <CountryCodeWrapper
              color={Variables.Color.n600}
              type={type}
              showFlag={showFlag!}
              isUpper
            >
              {countryCode}
            </CountryCodeWrapper>
          </span>
        </>
      )
    }

    return undefined
  }

  get phoneNumber(): JSX.Element {
    const {
      countryCode,
      phoneNumber,
      type,
      color
    } = this.props

    let formattedPhoneNumber = phoneNumber

    try {
      const parsedPhoneNumber = parsePhoneNumber(phoneNumber, toUpper(countryCode) as CountryCode)

      if (parsedPhoneNumber.isValid()) {
        formattedPhoneNumber = parsedPhoneNumber.formatInternational()
      }
    } catch {
      // @ts-ignore
    }

    return (
      <span data-role='phoneNumber'>
        <Text
          type={type}
          color={color}
        >
          {formattedPhoneNumber}
        </Text>
      </span>
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
