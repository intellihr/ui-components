import React from 'react'
import { TextLink } from '../../../Links/TextLink'
import { Text } from '../../../Typographies/Text'
import { Props, Variables } from '../../../../common'

export interface IAnnotatedSectionDescriptionProps {
  /** The title for what is displayed */
  header?: string,
  /** The description for what is displayed */
  description?: string,
  /** The text for the call to action */
  linkText?: string,
  /** Where the call to action goes to */
  linkUrl?: string,
  /** The className of the component (used by styled components) */
  className?: string,
  /** Any extra link props */
  linkProps?: {
    [i: string]: any
  }
}

class AnnotatedSectionDescription extends React.Component<IAnnotatedSectionDescriptionProps> {
  get description () {
    const {
      description
    } = this.props

    if (description) {
      return (
        <Text
          isInline={false}
          type={Props.TypographyType.small}
          color={Variables.Color.n600}
        >
          {description}
        </Text>
      )
    }
  }

  get header () {
    const {
      header
    } = this.props

    if (header) {
      return (
        <Text
          tag='h2'
          type={Props.TypographyType.heading}
          color={Variables.Color.n700}
        >
          {header}
        </Text>
      )
    }
  }

  public render (): JSX.Element | null {
    const {
      linkText,
      linkProps,
      className
    } = this.props

    return (
      <div className={className}>
        {this.header}
        {this.description}
        <TextLink
          textType={Props.TypographyType.small}
          {...linkProps}
        >
          {linkText}
        </TextLink>
      </div>
    )
  }
}

export {
  AnnotatedSectionDescription
}
