import React from 'react'
import { IDefaults, DefaultsConsumer } from '../Defaults'
import { BaseAnchor } from './BaseAnchor'

export interface AnchorProps {
  /** Class names to apply to the anchor; useful when you need to use this element surrounding multiple other elements */
  className?: string
  /** Callback to call on click; receives event */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  /** Destination url */
  href?: string
  /** Link target */
  target?: string
  /** Flag to select if React Router should be used or not */
  useReactRouter?: boolean
  /** Flag to state if navigation should be blocked on left click */
  blockNavigationOnLeftClick?: boolean
  /** Callback to call on left click */
  onLeftClick?: (rowObject: object) => void
}

export class Anchor extends React.PureComponent<AnchorProps> {
  public static defaultProps: AnchorProps = {
    href: '#'
  }

  private anchorComponent (defaultValues: IDefaults) {
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
