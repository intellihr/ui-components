import React from 'react'
import classNames from 'classnames'
import { HeadingWrapper } from './style'
import { withSkeleton, SkeletonComponentProps } from '../Skeleton'

export interface HeadingProps {
  /** Specify the type of heading to use */
  type: 'page' | 'section' | 'subsection'
  /** Custom class name to use */
  className?: string
}

export class HeadingComponent extends React.PureComponent<HeadingProps> {
  get headingTag (): any {
    const {
      type
    } = this.props

    switch (type) {
      case 'page':
        return HeadingWrapper
      case 'section':
        return HeadingWrapper.withComponent('h2')
      case 'subsection':
        return HeadingWrapper.withComponent('h3')
    }
  }

  public render (): JSX.Element {
    const {
      children
    } = this.props

    const HeadingTag = this.headingTag

    return (
      <HeadingTag
        tag={this.headingTag}
        className={classNames('heading')}
      >
        {children}
      </HeadingTag>
    )
  }
}

export const Heading: React.ComponentClass<HeadingProps & SkeletonComponentProps> = withSkeleton(HeadingComponent)
