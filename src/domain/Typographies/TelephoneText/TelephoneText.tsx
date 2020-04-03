import { CountryCode, parsePhoneNumber } from 'libphonenumber-js'
import { toLower, toUpper } from 'lodash'
import React from 'react'

import { Props, Variables } from '../../../common'
import { Emoji } from '../Emoji'
import { Text } from '../Text'
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
  /** If true, turns the phone number into a telephone link */
  isLink?: boolean
  /** The data-component-context */
  componentContext?: string
}

class TelephoneText extends React.PureComponent<ITelephoneTextProps> {
  public static defaultProps = {
    type: Props.TypographyType.Body,
    showFlag: true,
    isLink: false
  }

  get flag (): JSX.Element | undefined {
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

  get prefix (): JSX.Element | undefined {
    const {
      countryCode,
      showFlag,
      type
    } = this.props

    if (countryCode) {
      return (
        <>
          {this.flag}
            <CountryCodeWrapper
              color={Variables.Color.n600}
              type={type}
              showFlag={showFlag!}
              isUpper
              dataAttributes={{
                role: 'countryCode'
              }}
            >
              {countryCode}
            </CountryCodeWrapper>
        </>
      )
    }

    return undefined
  }

  get phoneNumber (): JSX.Element {
    const {
      countryCode,
      phoneNumber,
      type,
      color,
      isLink
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
        <Text
          type={type}
          color={color}
          dataAttributes={{
            role: 'phoneNumber'
          }}
        >
          {isLink
            ? <Text.Link href={`tel:${formattedPhoneNumber}`}>{formattedPhoneNumber}</Text.Link>
            : formattedPhoneNumber
          }
        </Text>
    )
  }

  public render (): JSX.Element {
    return (
      <span
        data-component-type={Props.ComponentType.TelephoneText}
        data-component-context={this.props.componentContext}
      >
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
