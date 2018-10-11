import React from 'react'
import { Emoji as EmojiMartEmoji } from 'emoji-mart'
import classNames from 'classnames'
import { Props, Variables } from '../../../common'

const style = require('./style.scss')

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
      <span className={classNames(style.ihrEmoji, type)}>
        <EmojiMartEmoji
          emoji={emoji}
          set='twitter'
          size={Variables.fontSizeMap[type]}
        />
      </span>
    )
  }
}

export {
  Emoji,
  IEmojiProps
}

