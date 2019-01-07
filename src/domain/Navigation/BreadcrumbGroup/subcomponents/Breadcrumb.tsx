import React from 'react'
import { UnstyledLink } from '../../../Links/UnstyledLink'
import { Props } from '../../../../common'

const style = require('../style.scss')

interface IBreadcrumbProps {
  /** where to navigate to */
  to: string
  /** if to use react router or not */
  useReactRouter?: boolean
  /** the type of breadcrumb this element is */
  type?: 'base' | 'active'
  /** The data-component-context */
  componentContext?: string
}

class Breadcrumb extends React.PureComponent<IBreadcrumbProps> {
  public static defaultProps = {
    useReactRouter: true,
    type: 'base'
  }

  public render (): JSX.Element {
    const {
      to,
      useReactRouter,
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
        <UnstyledLink
          href={to}
          anchorComponentProps={{
            useReactRouter
          }}
        >
          {children}
        </UnstyledLink>
      </span>
    )
  }
}

export {
  Breadcrumb
}
