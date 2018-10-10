import React from 'react'
import { Emoji } from '../Emoji'
import { Props } from '../../../common'
import { CountryCodeWrapper } from '../TelephoneText/style'

interface ITelephoneTextProps {
  /** phone number to display */
  number: string
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
          <span>{` (+ ${dialCode}) `}</span>
        </span>
      )
    }
  }

  get number (): string {
    const {
      number
    } = this.props

    return number
  }

  public render (): JSX.Element | string {
    return <span>
      {this.prefix}
      {this.number}
    </span>
  }
}

export {
  TelephoneText,
  ITelephoneTextProps
}
