import React from 'react'
import { HeadingWrapper } from './style'
import { withSkeleton, SkeletonComponentProps } from '../Skeleton'

export interface HeadingProps {
  /** Specify the type of heading to use */
  type: 'page' | 'section' | 'subsection'
  /** Custom class name to use */
  className?: string
  /** If true, will display the heading inline */
  inline?: boolean
}

export class HeadingComponent extends React.PureComponent<HeadingProps> {
  public static defaultProps: Partial<HeadingProps> = {
    inline: false
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
    }
  }

  public render (): JSX.Element {
    const {
      inline,
      children
    } = this.props

    const HeadingTag = this.headingTag

    return (
      <HeadingTag
        tag={this.headingTag}
        className='heading'
        inline={inline}
      >
        {children}
      </HeadingTag>
    )
  }
}

export const Heading: React.ComponentClass<HeadingProps & SkeletonComponentProps> = withSkeleton(HeadingComponent)
