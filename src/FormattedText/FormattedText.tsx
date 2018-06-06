import React from 'react'
import Linkify from 'react-linkify'
import { StyledFormattedText } from './style'

export interface FormattedTextProps {
  /** Preformatted text to display */
  text: string
}

export class FormattedText extends React.PureComponent<FormattedTextProps> {
  public render (): JSX.Element {
    const {
      text
    } = this.props

    return (
      <StyledFormattedText>
        <Linkify properties={{target: '_blank'}}>
          {text}
        </Linkify>
      </StyledFormattedText>
    )
  }
}
