import React from 'react'
import { Defaults, DefaultsConsumer } from '../DefaultsContext'
import { BaseAnchor } from './BaseAnchor'

export interface AnchorProps {
  /** Child components */
  children?: any
  /** Class names to apply to the anchor; useful when you need to use this element surrounding multiple other elements */
  className?: string
  /** Callback to call on click; receives event */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  /** Destination url */
  href?: string
  /** Link target */
  target?: string
}

export class Anchor extends React.PureComponent<AnchorProps> {
  public static defaultProps: AnchorProps = {
    href: '#'
  }

  private anchorComponent (defaultValues: Defaults): any {
    const {
      className,
      children,
      href,
      target,
      ...props
    } = this.props

    const AnchorComponent = defaultValues.AnchorComponent || BaseAnchor

    return (
      <AnchorComponent
        {...props}
        className={className}
        href={href}
        target={target}
      >
        {children}
      </AnchorComponent>
    )
  }

  public render (): JSX.Element {
    return (
      <DefaultsConsumer>
        {defaultValues => this.anchorComponent(defaultValues)}
      </DefaultsConsumer>
    )
  }
}
