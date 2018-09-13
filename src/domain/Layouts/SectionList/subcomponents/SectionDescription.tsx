import React from 'react'
import { TextLink } from '../../../Links/TextLink'
import { Text } from '../../../Typographies/Text'
import { Props, Variables } from '../../../../common'

export interface ISectionDescriptionProps {
  /** The title for what is displayed */
  header?: string,
  /** The description for what is displayed */
  description?: string,
  /** The text for the call to action */
  linkText?: string,
  /** The className of the component (used by styled components) */
  className?: string,
  /** Any extra link props */
  linkProps?: {
    [i: string]: any
  }
}

class SectionDescription extends React.PureComponent<ISectionDescriptionProps> {
  get description () {
    const {
      description
    } = this.props

    if (description) {
      return (
        <Text
          isInline={false}
          type={Props.TypographyType.Small}
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
          type={Props.TypographyType.Heading}
          color={Variables.Color.n700}
        >
          {header}
        </Text>
      )
    }
  }

  get link () {
    const {
      linkText,
      linkProps
    } = this.props

    if (linkText && linkProps) {
      return (
        <TextLink
          textType={Props.TypographyType.Small}
          {...linkProps}
        >
          {linkText}
        </TextLink>
      )
    }
  }

  public render (): JSX.Element {
    const {
      className
    } = this.props

    return (
      <div className={className}>
        {this.header}
        {this.description}
        {this.link}
      </div>
    )
  }
}

export {
  SectionDescription
}
