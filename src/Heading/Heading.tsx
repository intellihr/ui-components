import React from 'react'
import classNames from 'classnames'
import { HeadingWrapper } from './style'
import { withSkeleton, SkeletonComponentProps } from '../Skeleton'

export interface HeadingProps {
  /** Specify the type of heading to use */
  type?: 'page' | 'section' | 'subsection'
  /** Custom class name to use */
  className?: string
  /** If true, will display the heading inline */
  isInline?: boolean
  /** If true, will display the heading with the subtitle styling */
  isSubtitle?: boolean
}

export class HeadingComponent extends React.PureComponent<HeadingProps> {
  public static defaultProps: Partial<HeadingProps> = {
    isInline: false,
    isSubtitle: false
  }

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
      default:
        return HeadingWrapper.withComponent('p')
    }
  }

  public render (): JSX.Element {
    const {
      isInline,
      isSubtitle,
      children
    } = this.props

    const HeadingTag = this.headingTag

    return (
      <HeadingTag
        tag={this.headingTag}
        className={classNames('heading')}
        isInline={isInline}
        isSubtitle={isSubtitle}
      >
        {children}
      </HeadingTag>
    )
  }
}

export const Heading: React.ComponentClass<HeadingProps & SkeletonComponentProps> = withSkeleton(HeadingComponent)
