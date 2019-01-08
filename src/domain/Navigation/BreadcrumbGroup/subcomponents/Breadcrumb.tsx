import React from 'react'
import { Props } from '../../../../common'
import { Anchor } from '../../../Internals/Anchor'

const style = require('../style.scss')

interface IBreadcrumbProps {
  /** where to navigate to */
  href: string
  /** the type of breadcrumb this element is */
  type?: 'base' | 'active'
  /** The data-component-context */
  componentContext?: string
  /** Object with extra props to pass to the anchor */
  anchorComponentProps?: {
    [i: string]: any
  }
}

class Breadcrumb extends React.PureComponent<IBreadcrumbProps> {
  public static defaultProps = {
    type: 'base',
    anchorComponentProps: {
      useReactRouter: true
    }
  }

  public render (): JSX.Element {
    const {
      href,
      anchorComponentProps,
      children,
      type,
      componentContext
    } = this.props

    return (
      <Anchor
        href={href}
        className={style[`${type}Crumb`]}
        data-component-type={Props.ComponentType.Breadcrumb}
        data-component-context={componentContext}
        anchorComponentProps={anchorComponentProps}
      >
        {children}
      </Anchor>
    )
  }
}

export {
  Breadcrumb
}
