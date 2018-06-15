import React from 'react'
import ReactMarkdown from 'react-markdown'
import { StyledFormattedText } from './style'
import { TextLink } from '../Link'

export interface FormattedTextProps {
  /** Preformatted markdown text to display */
  text: string
}

export class FormattedText extends React.PureComponent<FormattedTextProps> {
  linkRenderer = (
    props: { children: any, href: string }
  ): JSX.Element => {
    return (
      <TextLink
        href={props.href}
        target='_blank'
        useReactRouter={false}
      >
        {props.children}
      </TextLink>
    )
  }

  public render (): JSX.Element {
    const {
      text
    } = this.props

    return (
      <StyledFormattedText>
        <ReactMarkdown
          source={text}
          renderers={{
            link: this.linkRenderer
          }}
        />
      </StyledFormattedText>
    )
  }
}
