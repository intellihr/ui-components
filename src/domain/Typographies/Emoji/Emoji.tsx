import React from 'react'
import { Emoji as EmojiComponent } from 'emoji-mart'
import { Props, Variables } from '../../../common'
import { EmojiWrapper } from './style'

interface IEmojiProps {
  /** emoji to display */
  emoji: string
  /** Specify the type of text to use */
  type: Props.TypographyType
}

class Emoji extends React.PureComponent<IEmojiProps> {
  public static defaultProps = {
    type: Props.TypographyType.Body
  }

  public render (): JSX.Element {
    const {
      emoji,
      type
    } = this.props

    return (
      <EmojiWrapper
        textType={type}
      >
        <EmojiComponent
          emoji={emoji}
          set='twitter'
          size={Variables.fontSizeMap[type]}
        />
      </EmojiWrapper>
    )
  }
}

export {
  Emoji,
  IEmojiProps
}


