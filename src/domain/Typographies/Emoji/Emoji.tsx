import React from 'react'
import { Props, Variables } from '../../../common'
import { Emoji as EmojiComponent } from 'emoji-mart'
import { EmojiWrapper } from './style'

interface IEmojiProps {
  /** emoji to display */
  emoji: string
  /** Specify the type of text to use */
  type: Props.TypographyType
  /** If true, displays with the flag format */
  isFlag: boolean
}

class Emoji extends React.PureComponent<IEmojiProps> {
  public static defaultProps = {
    type: Props.TypographyType.Body,
    isFlag: false
  }

  get fontSize (): number {
    const {
      type,
      isFlag
    } = this.props

    if (isFlag) {
      return Variables.FontSize.fzDisplay
    }

    return Variables.fontSizeMap[type]
  }

  public render (): JSX.Element {
    const {
      emoji,
      type,
      isFlag
    } = this.props

    return (
      <EmojiWrapper
        textType={type}
        isFlag={isFlag}
      >
        <EmojiComponent
          emoji={emoji}
          set='twitter'
          size={this.fontSize!}
        />
      </EmojiWrapper>
    )
  }
}

export {
  Emoji,
  IEmojiProps
}


