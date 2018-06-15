import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Emoji } from 'emoji-mart'
import reactStringReplace from 'react-string-replace'
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

  textRenderer = (
    text: string
  ): JSX.Element => {
    return reactStringReplace(text, /:([^:]+):/g, (match: string, i: number) => {
      return <Emoji
        key={i}
        emoji={match}
        set='twitter'
        size={16}
      />
    })
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
            link: this.linkRenderer,
            text: this.textRenderer
          }}
        />
      </StyledFormattedText>
    )
  }
}
