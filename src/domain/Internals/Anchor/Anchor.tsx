import isString from 'lodash/isString'
import React from 'react'

import { DefaultsConsumer, IDefaults } from '../../Defaults'

interface IAnchorProps extends React.HTMLProps<HTMLAnchorElement> {
  /** Alternative prop to render using if you don't want the default */
  anchorComponent?: React.ComponentType<any> | string
  /** Object with extra props to pass to the external anchor */
  anchorComponentProps?: {
    [i: string]: any
  }
  /** Fix typescript issue with refs */
  ref?: any
}

class Anchor extends React.PureComponent<IAnchorProps, never> {
  public static defaultProps = {
    href: '#'
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
      ...props
    } = this.props

    const AnchorComponent = anchorComponent || defaultValues.AnchorComponent || 'a'

    // Prevent warnings from passing anchorComponentProps to core html tags
    if (isString(AnchorComponent)) {
      delete props.anchorComponentProps
    }

    return (
      <AnchorComponent
        {...props}
        href={href}
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
