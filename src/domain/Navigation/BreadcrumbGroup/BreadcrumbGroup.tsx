import React from 'react'

import { Props } from '../../../common'
import { Breadcrumb } from './subcomponents/Breadcrumb'

import style from './style.scss'

interface IBreadcrumbGroupProps {
  /** The data-component-context */
  componentContext?: string
}

class BreadcrumbGroup extends React.Component<IBreadcrumbGroupProps> {
  public static Breadcrumb = Breadcrumb

  public render (): JSX.Element | null {
    const {
      children,
      componentContext
    } = this.props

    return (
      <div
        className={style.breadcrumbs}
        data-component-type={Props.ComponentType.BreadcrumbGroup}
        data-component-context={componentContext}
      >
        {children}
      </div>
    )
  }
}

export {
  BreadcrumbGroup
}
