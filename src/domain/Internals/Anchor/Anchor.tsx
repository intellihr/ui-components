import isString from 'lodash/isString'
import React from 'react'

import { DefaultsConsumer, IDefaults } from '../../Defaults'
import { isExternalURL } from './helper'

interface IAnchorProps extends React.HTMLProps<HTMLAnchorElement> {
  /** Alternative prop to render using if you don't want the default */
  anchorComponent?: React.ComponentType<any> | string
  /** Object with extra props to pass to the external anchor */
  anchorComponentProps?: {
    [i: string]: any
  }
  /** Fix typescript issue with refs */
  ref?: any
  /** Open anchor href in new tab */
  openInNewTab?: boolean
}

class Anchor extends React.PureComponent<IAnchorProps, never> {
  public static defaultProps = {
    href: '#',
    openInNewTab: false
  }

  public render (): JSX.Element {
    return (
      <DefaultsConsumer>
        {(defaultValues: IDefaults) => this.anchorComponent(defaultValues)}
      </DefaultsConsumer>
    )
  }

  private anchorComponent (defaultValues: IDefaults) {
    const {
      anchorComponent,
      children,
      href,
      openInNewTab,
      target,
      rel,
      ...props
    } = this.props

    const AnchorComponent = anchorComponent || defaultValues.AnchorComponent || 'a'

    const targetProp = openInNewTab ? '_blank' : target
    let relProp = rel

    if (href && isExternalURL(href)) {
      const rels = new Set((relProp ?? '').split(/\s+/).filter(Boolean as any))
      rels.add('noreferrer')

      relProp = Array.from(rels.values()).join(' ')
    }

    // Prevent warnings from passing anchorComponentProps to core html tags
    if (isString(AnchorComponent)) {
      delete props.anchorComponentProps
    }

    return (
      <AnchorComponent
        {...props}
        href={href}
        target={targetProp}
        rel={relProp}
      >
        {children}
      </AnchorComponent>
    )
  }
}

export {
  IAnchorProps,
  Anchor
}
