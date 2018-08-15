import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Emoji } from 'emoji-mart'
import reactStringReplace from 'react-string-replace'
import { StyledFormattedText } from './style'
import { TextLink } from '@Domain/Links'

export interface IFormattedTextProps {
  /** Preformatted markdown text to display */
  text: string
  /** If true, renders emojis */
  renderEmojis?: boolean
}

export class FormattedText extends React.PureComponent<IFormattedTextProps> {
  public static defaultProps: Partial<IFormattedTextProps> = {
    renderEmojis: false
  }

  public linkRenderer = (props: { children: any, href: string }): JSX.Element => {
    return (
      <TextLink
        anchorComponent='a'
        href={props.href}
        target='_blank'
      >
        {props.children}
      </TextLink>
    )
  }

  public textRenderer = (text: string): JSX.Element => {
    return reactStringReplace(text, /(?:^|\s):([^:\s]+):(?=\s|$)/g, (match: string, i: number) => {
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
      text,
      renderEmojis
    } = this.props

    const renderers:any = {
      link: this.linkRenderer
    }

    if (renderEmojis) {
      renderers.text = this.textRenderer
    }

    return (
      <StyledFormattedText>
        <ReactMarkdown
          source={text}
          renderers={renderers}
          className='react-markdown-block'
        />
      </StyledFormattedText>
    )
  }
}
