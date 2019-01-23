import React from 'react'
import { TextLink } from '../../../Links/TextLink'
import { Text } from '../../../Typographies/Text'
import { Props, Variables } from '../../../../common'

export interface ILinkProps {
  [i: string]: any
}

export interface ILink {
  text: string,
  props: ILinkProps
}

export interface ISectionDescriptionProps {
  /** The title for what is displayed */
  header?: string,
  /** The description for what is displayed */
  description?: string,
  /** (Deprecated - please use `links`) The text for the call to action */
  linkText?: string,
  /** The className of the component (used by styled components) */
  className?: string,
  /** (Deprecated - please use `links`) Any extra link props */
  linkProps?: ILinkProps,
  /** The settings for the list of links */
  links?: ILink[]
}

class SectionDescription extends React.PureComponent<ISectionDescriptionProps> {
  public static defaultProps: Pick<ISectionDescriptionProps, 'links'> = {
    links: []
  }

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

  public renderLink = (linkText?: string, linkProps?: ILinkProps): JSX.Element | null => {
    if (!(linkText && linkProps)) {
      return null
    }

    return (
      <TextLink
        textType={Props.TypographyType.Small}
        {...linkProps}
      >
        {linkText}
      </TextLink>
    )
  }

  public renderLinks = () => {
    const { links, linkText, linkProps } = this.props

    if (!links!.length) {
      return this.renderLink(linkText, linkProps)
    }

    return links!.map(({ text, props }: ILink) => this.renderLink(text, { ...props, isInline: false }))
  }

  public render (): JSX.Element {
    const {
      className
    } = this.props

    return (
      <div className={className}>
        {this.header}
        {this.description}
        {this.renderLinks()}
      </div>
    )
  }
}

export {
  SectionDescription
}
