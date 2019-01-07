import React from 'react'
import { Props } from '../../../../common'
import { Anchor } from '../../../Internals/Anchor'

const style = require('../style.scss')

interface IBreadcrumbProps {
  /** where to navigate to */
  href: string
  /** if to use react router or not */
  useReactRouter?: boolean
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
    useReactRouter: true,
    type: 'base'
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
      <span
        className={style[`${type}Crumb`]}
        data-component-type={Props.ComponentType.Breadcrumb}
        data-component-context={componentContext}
      >
        <Anchor
          href={href}
          anchorComponentProps={anchorComponentProps}
        >
          {children}
        </Anchor>
      </span>
    )
  }
}

export {
  Breadcrumb
}
